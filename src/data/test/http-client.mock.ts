import { type HttpPostClient, type HttpPostParams, type HttpResponse, HttpStatusCode } from '../protocols/http'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  headers?: object

  response: HttpResponse<any> = {
    statusCode: HttpStatusCode.noContent,
    body: {}
  }

  async post (params: HttpPostParams): Promise<HttpResponse<any>> {
    this.url = params.url
    this.body = params.body ?? undefined
    this.headers = params.headers ?? undefined

    return await Promise.resolve(this.response)
  }
}
