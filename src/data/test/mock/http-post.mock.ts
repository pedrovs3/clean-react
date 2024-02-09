import { type HttpPostParams } from '@/data/protocols/http'
import { faker } from '@faker-js/faker'

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: {
    name: faker.internet.userName(),
    password: faker.internet.password(),
    passwordConfirmation: faker.internet.password(),
    email: faker.internet.email(),
    phone: faker.phone.number()
  }
})
