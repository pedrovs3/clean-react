import axios from "axios";

import { faker } from "@faker-js/faker";

export const mockedAxios = () : jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.post.mockResolvedValue({
    status: faker.internet.httpStatusCode(),
    data: {
      name: faker.internet.userName(),
      password: faker.internet.password(),
      passwordConfirmation: faker.internet.password(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    },
  });

  return mockedAxios;
};
