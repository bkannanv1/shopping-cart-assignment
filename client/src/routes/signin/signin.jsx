import React from "react";
import styles from "./signin.module.css";
import { Form, redirect, useActionData } from "react-router-dom";
import { loginUser } from "../../api/endpoints";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

const LOGIN_FIELDS = [
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
];

export async function action({ request }) {
  let formData = await request.formData();
  const userDetails = Object.fromEntries(formData);
  const { ok, message, firstName } = loginUser(userDetails);
  if (!ok) {
    return {
      error: message,
    };
  }

  alert(`Welcome back ${firstName}!`);
  return redirect("/");
}

export function SignIn() {
  const { error } = useActionData() || {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className={styles.formWrapper}>
        <Form method="post" className={styles.login_form}>
          {LOGIN_FIELDS.map((field) => (
            <Input
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
            />
          ))}
          {error && <span className={styles.error}>{error}</span>}
          <Button className={styles.submit} type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
