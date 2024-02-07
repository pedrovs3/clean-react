import { RemoteAuthentication } from './remote-authentication'
import { type HttpPostClient } from '../../protocols/http'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      async post (url: string): Promise<void> {
        this.url = url
      }
    }

    const url = 'any_url'
    const httpPostClient = new HttpPostClientSpy()

    const sut = new RemoteAuthentication(url, httpPostClient)
    await sut.auth()

    expect(httpPostClient.url).toBe(url)
  })
})
