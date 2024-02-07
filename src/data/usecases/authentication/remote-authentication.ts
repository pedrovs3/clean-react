import { type HttpPostClient } from '../../protocols/http/'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient) {
  }

  async auth (): Promise<void> {
    await this.httpPostClient.post(this.url)
    await Promise.resolve()
  }
}