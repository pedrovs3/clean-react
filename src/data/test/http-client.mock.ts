import type { HttpPostClient, HttpPostParams } from '../protocols/http'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  headers?: object
  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    this.body = params.body ?? undefined
    this.headers = params.headers ?? undefined
  }
}
