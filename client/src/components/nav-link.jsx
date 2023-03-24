import { NavLink as RouterNavLink } from "react-router-dom";
import styles from "./nav-link.module.css";

export function NavLink({ to, children, className = null }) {
  return (
    <RouterNavLink to={to} className={className || styles.link}>
      {children}
    </RouterNavLink>
  );
}
