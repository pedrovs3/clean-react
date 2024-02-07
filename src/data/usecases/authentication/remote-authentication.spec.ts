import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/http-client.mock'

import { faker } from '@faker-js/faker'
import { AuthenticationMock } from '@/domain/test/authentication.mock'

const fakerUrl = faker.internet.url()

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClient: HttpPostClientSpy
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClient = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClient)
  return {
    sut,
    httpPostClient
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = fakerUrl
    const { sut, httpPostClient } = makeSut(url)
    await sut.auth(AuthenticationMock())

    expect(httpPostClient.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClient } = makeSut()
    const authenticationParams = AuthenticationMock()
    await sut.auth(authenticationParams)

    expect(httpPostClient.body).toEqual(authenticationParams)
  })
})
