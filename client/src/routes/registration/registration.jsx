import React from "react";
import styles from "./registration.module.css";
import { Form, redirect, useActionData } from "react-router-dom";
import { registerUser } from "../../api/endpoints";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

const REGISTRATION_FIELDS = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    minlength: "2",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    minlength: "1",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    minlength: "3",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    minlength: "6",
    pattern: "(?!^[0-9]*$)(?!^[a-zA-Z]*$)^(\\S{6,50})",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    minlength: "6",
  },
];

export async function action({ request }) {
  let formData = await request.formData();
  const newUser = Object.fromEntries(formData);

  const { password, confirmPassword } = newUser;
  if (password !== confirmPassword) {
    return {
      errors: {
        password: "Passwords does not match!",
        confirmPassword: "Passwords does not match!",
      },
    };
  }

  const { ok, message } = registerUser(newUser);
  if (!ok) {
    alert(message);
    return null;
  }

  return redirect("/");
}

export function Registration() {
  const { errors } = useActionData() || {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <h1>Signup</h1>
        <p>We won't share personale details with anyone.</p>
      </div>
      <div className={styles.formWrapper}>
        <p className={styles.passwordHelper}>
          Note - Password must be atleast 6 characters with one alphabet and one
          digit. It should not contain any spaces.
        </p>
        <Form method="post" className={styles.registration_form}>
          {REGISTRATION_FIELDS.map((field) => (
            <React.Fragment key={field.name}>
              <Input
                label={field.label}
                name={field.name}
                type={field.type}
                minlength={field.minlength}
                pattern={field.pattern}
              />
              {errors?.[field.name] && (
                <span className={styles.error}>{errors?.[field.name]}</span>
              )}
            </React.Fragment>
          ))}
          <Button type="submit" className={styles.submit}>
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
}
