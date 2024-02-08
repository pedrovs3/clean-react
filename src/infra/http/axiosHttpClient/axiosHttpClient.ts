import { type HttpPostParams } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient {
  private readonly axios: typeof axios
  constructor () {
    this.axios = axios
  }

  async post (params: HttpPostParams<any>): Promise<void> {
    await this.axios(params.url)
  }
}
