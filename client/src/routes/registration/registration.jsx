import React from "react";
import styles from "./registration.module.css";
import { Form, redirect } from "react-router-dom";
import { registerUser } from "../../api/endpoints";

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
export default function Registration() {
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
          <button type="submit">SignUp</button>
        </Form>
      </div>
    </div>
  );
}

function Input({ name, label }) {
  return (
    <label htmlFor={name} className={styles.formLabel}>
      {label}
      <input type="text" id={name} name={name} />
    </label>
  );
}
