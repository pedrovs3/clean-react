import { type HttpPostClient, type HttpResponse, HttpStatusCode } from '@/data/protocols/http'
import { type AuthenticationParams } from '@/domain/usecases/authentication'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials.error'
import { NetworkError, UnexpectedError } from '@/domain/errors'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient) {
  }

  async auth (params: AuthenticationParams): Promise<HttpResponse<any>> {
    const htttpResponse = await this.httpPostClient.post({ url: this.url, body: params })

    switch (htttpResponse.statusCode) {
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      case HttpStatusCode.badRequest: throw new UnexpectedError()
      case HttpStatusCode.serverError: throw new NetworkError()
      default: return htttpResponse
    }
  }
}
