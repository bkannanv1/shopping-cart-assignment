import { render, screen, within } from "@testing-library/react";
import { expect } from "vitest";
import { Dialog } from "./dialog";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const CART_ITEMS = [
  {
    id: "5b6c6a7f01a7c38429530883",
    quantity: 1,
  },
];

const PRODUCTS = [
  {
    name: "Fresho Kiwi - Green, 3 pcs",
    imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
    description:
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
    price: 87,
    stock: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-kiwi-3",
    id: "5b6c6a7f01a7c38429530883",
  },
  {
    name: "Apple - Washington, Regular, 4 pcs",
    imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
    description:
      "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
    price: 187,
    stock: 50,
    category: "5b6899953d1a866534f516e2",
    sku: "fnw-apple-4",
    id: "5b6c6aeb01a7c38429530884",
  },
];

const isPresentInDocument = (element) => {
  expect(element).toBeInTheDocument();
};

/**
 * Testing Reference - https://reactrouter.com/en/main/routers/create-memory-router
 */
describe("Dialog", () => {
  it("renders component", () => {
    const routes = [
      {
        path: "/",
        element: (
          <Dialog
            open={true}
            onOpenChange={() => {}}
            products={PRODUCTS}
            cartItems={CART_ITEMS}
          />
        ),
        action: () => console.log("Action Called"),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);
    // screen.debug();
    isPresentInDocument(screen.getByRole("heading", { name: /my cart/i }));

    const dialog = screen.getByRole("dialog", {
      name: /my cart/i,
    });

    isPresentInDocument(dialog);

    isPresentInDocument(
      within(dialog).getByText(/fresho kiwi \- green, 3 pcs/i)
    );

    isPresentInDocument(
      screen.getByRole("button", { name: /proceed to checkout rs\. 87/i })
    );

    isPresentInDocument(screen.getByRole("button", { name: /add/i }));
    isPresentInDocument(screen.getByRole("button", { name: /remove/i }));
  });
});
