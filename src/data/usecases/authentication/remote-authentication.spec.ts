import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/http-client.mock'

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
    const url = 'other_url'
    const { sut, httpPostClient } = makeSut(url)
    await sut.auth()

    expect(httpPostClient.url).toBe(url)
  })
})
