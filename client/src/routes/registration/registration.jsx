import React from "react";
import styles from "./registration.module.css";
import { Form, redirect } from "react-router-dom";
import { registerUser } from "../../api/endpoints";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

const REGISTRATION_FIELDS = [
  {
    name: "firstName",
    label: "First Name",
  },
  {
    name: "lastName",
    label: "Last Name",
  },
  {
    name: "email",
    label: "Email",
  },
  {
    name: "password",
    label: "Password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
  },
];

export async function action({ request }) {
  let formData = await request.formData();
  const newUser = Object.fromEntries(formData);
  const { ok, message } = registerUser(newUser);
  if (!ok) {
    alert(message);
    return null;
  }

  return redirect("/signin");
}

// TODO: 1. "Type" Password
// TODO: 2. Confirm password should be same
// TODO: 3. Email Validation
export function Registration() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Signup</h1>
        <p>We won't share personale details with anyone.</p>
      </div>
      <div className={styles.formWrapper}>
        <Form method="post" className={styles.registration_form}>
          {REGISTRATION_FIELDS.map((field) => (
            <Input key={field.name} label={field.label} name={field.name} />
          ))}
          <Button type="submit">Sign Up</Button>
        </Form>
      </div>
    </div>
  );
}
