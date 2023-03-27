import React from "react";
import styles from "./button.module.css";
import { useNavigate } from "react-router-dom";

export function Button({ children, type = "submit", className = "", ...rest }) {
  return (
    <button className={`${styles.button} ${className}`} type={type} {...rest}>
      {children}
    </button>
  );
}

export function LinkButton({ to, ...rest }) {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(to)} {...rest} />;
}
