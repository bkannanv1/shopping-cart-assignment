import React from "react";
import styles from "./button.module.css";
import { useNavigate } from "react-router-dom";

/**
 * Dialog trigger passes ref to the `asChild` component. Hence,
 * wrapping this is forwardRef
 */
const Button = React.forwardRef(function Button(
  { children, type = "submit", className = "", ...rest },
  ref
) {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
});

export { Button };

export function LinkButton({ to, ...rest }) {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(to)} {...rest} />;
}

export function IconButton(props) {
  return <Button className={styles.iconButton} {...props} />;
}
