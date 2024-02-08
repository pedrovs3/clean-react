import { faker } from '@faker-js/faker'
import { AxiosHttpClient } from './axiosHttpClient'
import axios from 'axios'

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL and verb', async () => {
    const url = faker.internet.url()
    const sut = makeSut()
    await sut.post({ url })

    expect(mockAxios).toHaveBeenCalledWith(url)
  })
})
