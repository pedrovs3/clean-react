import {
  type HttpPostClient,
  type HttpPostParams,
  type HttpResponse,
  HttpStatusCode,
} from "../../protocols/http";

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string;
  body?: T;
  headers?: object;

  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.noContent,
  };

  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url;
    this.body = params.body ?? undefined;
    this.headers = params.headers ?? undefined;

    return this.response;
  }
}
