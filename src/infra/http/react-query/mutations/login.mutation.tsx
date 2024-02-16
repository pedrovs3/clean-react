import { useMutation } from "@tanstack/react-query";

import { axiosHttpClient } from "@/infra/http/axiosHttpClient/axios-http-client.ts";

interface LoginMutationProps {
  email: string;
  password: string;
}

const loginRequest = async ({ email, password }: LoginMutationProps) => {
  try {
    return await axiosHttpClient.post({
      body: { password, username: email },
      url: "http://localhost:3001/auth",
    });
  } catch (error) {
    console.error(error);
  }
};

export function useUpdateRecurrence() {
  return useMutation({ mutationFn: loginRequest });
}
