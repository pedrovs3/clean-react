import { HttpStatusCode } from "../../protocols/http";
import { HttpPostClientSpy } from "../../test/";

import { RemoteAuthentication } from "./remote-authentication";

import {
  InvalidCredentialsError,
  NetworkError,
  UnexpectedError,
} from "@/domain/errors";
import { type AccountModel } from "@/domain/models";
import { AuthenticationMock, mockAccountModel } from "@/domain/test";
import { type AuthenticationParams } from "@/domain/usecases";
import { faker } from "@faker-js/faker";

const fakerUrl = faker.internet.url();

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClient: HttpPostClientSpy<AuthenticationParams, AccountModel>;
};

const makeSut = (url: string = "any_url"): SutTypes => {
  const httpPostClient = new HttpPostClientSpy<
    AuthenticationParams,
    AccountModel
  >();
  const sut = new RemoteAuthentication(url, httpPostClient);

  return {
    sut,
    httpPostClient,
  };
};

describe("RemoteAuthentication", () => {
  test("Should call HttpPostClient with correct URL", async () => {
    const url = fakerUrl;
    const { httpPostClient, sut } = makeSut(url);
    await sut.auth(AuthenticationMock());

    expect(httpPostClient.url).toBe(url);
  });

  test("Should call HttpPostClient with correct body", async () => {
    const { httpPostClient, sut } = makeSut();
    const authenticationParams = AuthenticationMock();
    await sut.auth(authenticationParams);

    expect(httpPostClient.body).toEqual(authenticationParams);
  });

  test("Should throw a InvalidCredentialsError if HttpPostClient returns 401", async () => {
    const { httpPostClient, sut } = makeSut();
    httpPostClient.response = {
      statusCode: HttpStatusCode.unauthorized,
    };

    const promise = sut.auth(AuthenticationMock());
    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });

  test("Should throw a UnexpectedError if HttpPostClient returns 400", async () => {
    const { httpPostClient, sut } = makeSut();
    httpPostClient.response = {
      statusCode: HttpStatusCode.badRequest,
    };

    const promise = sut.auth(AuthenticationMock());
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test("Should throw a NetworkError if HttpPostClient returns 500", async () => {
    const { httpPostClient, sut } = makeSut();
    httpPostClient.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const promise = sut.auth(AuthenticationMock());
    await expect(promise).rejects.toThrow(new NetworkError());
  });

  test("Should return an AccountModel if HttpPostClient returns 200", async () => {
    const { httpPostClient, sut } = makeSut();
    const httpResult = mockAccountModel;
    httpPostClient.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const account = await sut.auth(AuthenticationMock());

    expect(account).toEqual(httpResult);
  });
});
