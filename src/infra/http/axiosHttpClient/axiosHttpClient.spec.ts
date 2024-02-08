import { faker } from '@faker-js/faker'
import { AxiosHttpClient } from './axiosHttpClient'
import axios from 'axios'

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL and verb', async () => {
    const url = faker.internet.url()
    const sut = new AxiosHttpClient()
    await sut.post({ url })

    expect(mockAxios).toHaveBeenCalledWith(url)
  })
})
