import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Root,
  loader as RootLoader,
  action as RootAction,
} from "./routes/root/root";
import ErrorPage from "./error-page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: RootLoader,
    action: RootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            async lazy() {
              let { Home, loader } = await import("./routes/home/home");
              return { Component: Home, loader };
            },
          },
          {
            path: "products",
            async lazy() {
              let { ProductsRoot, loader } = await import(
                "./routes/products-root/products-root"
              );
              return { Component: ProductsRoot, loader };
            },
            /**
             * This id is neccessary to fetch data from Parent component
             * in child routes.
             *
             * Ref: https://reactrouter.com/en/main/hooks/use-route-loader-data
             */
            id: "products",
            /**
             * Adding items to cart would update the `Root` component.
             *
             * Since it's done by `action` react router would revalidate the loaded
             * data and call the `loader`, which initiates network request (again!).
             *
             * To Prevent that we are telling to react-router that the data on the products
             * list page are up to date and no need to revalidate.
             *
             * Ref: https://reactrouter.com/en/main/route/should-revalidate
             */
            shouldRevalidate: () => false,
            children: [
              {
                index: true,
                async lazy() {
                  let { AllProducts, action } = await import(
                    "./routes/all-products/all-products"
                  );
                  return { Component: AllProducts, action };
                },
              },
              {
                path: ":categoryKey",
                async lazy() {
                  let { SelectedProducts, action, loader } = await import(
                    "./routes/selected-products/selected-products"
                  );
                  return { Component: SelectedProducts, action, loader };
                },
              },
            ],
          },
          {
            path: "signin",
            async lazy() {
              let { SignIn, action } = await import("./routes/signin/signin");
              return { Component: SignIn, action };
            },
          },
          {
            path: "register",
            async lazy() {
              let { Registration, action } = await import(
                "./routes/registration/registration"
              );
              return { Component: Registration, action };
            },
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
