import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Index, { loader as IndexLoader } from "./routes/index";
import Signin, { action as SignInAction } from "./routes/signin";
import Registration, {
  action as RegistrationAction,
} from "./routes/registration";
import ProductsRoot, {
  loader as ProductsRootLoader,
} from "./routes/products-root";
import SelectedProducts, {
  loader as SelectedProductsLoader,
} from "./routes/selected-products";
import AllProducts from "./routes/all-products";

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
            loader: IndexLoader,
          },
          {
            path: "products",
            element: <ProductsRoot />,
            loader: ProductsRootLoader,
            id: "products",
            children: [
              {
                index: true,
                element: <AllProducts />,
              },
              {
                path: ":categoryKey",
                element: <SelectedProducts />,
                loader: SelectedProductsLoader,
              },
            ],
          },
          {
            path: "signin",
            element: <Signin />,
            action: SignInAction,
          },
          {
            path: "register",
            element: <Registration />,
            action: RegistrationAction,
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
