import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { SignIn } from "./signin";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

/**
 * Testing Reference - https://reactrouter.com/en/main/routers/create-memory-router
 */
describe("Sign In Page", () => {
  it("renders Page", () => {
    const routes = [
      {
        path: "/signin",
        element: <SignIn />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/signin"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);
    const emailBox = screen.getByRole("textbox", {
      name: /email/i,
    });
    const passwordBox = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    expect(emailBox).toBeInTheDocument();
    expect(passwordBox).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
});
