import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as RootLoader } from "./routes/root";
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
import { addToCartAction } from "./routes/utils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: RootLoader,
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
            /**
             * Adding items to cart would update the `Root` component.
             *
             * Since it's done by `action` react router would revalidate the loaded
             * data and call the `loader`, which initiates network request (again!).
             *
             * To Prevent that we are telling to react-router that the data on the products
             * list page are up to date and no need to revalidate.
             */
            shouldRevalidate: () => false,
            children: [
              {
                index: true,
                element: <AllProducts />,
                action: addToCartAction,
              },
              {
                path: ":categoryKey",
                element: <SelectedProducts />,
                loader: SelectedProductsLoader,
                action: addToCartAction,
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
