import React from "react";
import styles from "./signin.module.css";
import { Form, redirect } from "react-router-dom";
import { loginUser } from "../../api/endpoints";
import { Input } from "../../components/input";

const LOGIN_FIELDS = [
  {
    name: "email",
    label: "Email",
  },
  {
    name: "password",
    label: "Password",
  },
];

export async function action({ request }) {
  let formData = await request.formData();
  const userDetails = Object.fromEntries(formData);
  const { ok, message } = loginUser(userDetails);
  if (!ok) {
    alert(message);
    return null;
  }

  return redirect("/");
}

export function SignIn() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className={styles.formWrapper}>
        <Form method="post" className={styles.login_form}>
          {LOGIN_FIELDS.map((field) => (
            <Input key={field.name} label={field.label} name={field.name} />
          ))}
          <button type="submit">Login</button>
        </Form>
      </div>
    </div>
  );
}
