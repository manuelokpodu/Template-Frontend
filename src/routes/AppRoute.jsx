import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
    ],
  },
]);


const AppRoute = () => {
  return <RouterProvider router={router} />;
};

export default AppRoute;
