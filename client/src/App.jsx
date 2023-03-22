import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Index from "./routes/index";
import Signin from "./routes/signin";
import Registration from "./routes/registration";
import Products from "./routes/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "signin",
            element: <Signin />,
          },
          {
            path: "register",
            element: <Registration />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
