import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "@/main/presentation/pages/login/Login";

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Login />,
        path: "login",
      },
    ],
    path: "/",
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
