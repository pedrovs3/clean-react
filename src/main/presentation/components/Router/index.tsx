import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootLayout } from "@/main/presentation/layouts";
import Login from "@/main/presentation/pages/login/Login";

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Login />,
        path: "/login",
      },
    ],
    element: <RootLayout />,
    path: "/",
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
