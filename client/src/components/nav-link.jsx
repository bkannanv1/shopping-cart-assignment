import { NavLink as RouterNavLink } from "react-router-dom";
import styles from "./nav-link.module.css";
import { Brand_Primary } from "../contants";

export function NavLink({
  to,
  children,
  activeLinkClassName = "",
  className = "",
}) {
  return (
    <RouterNavLink
      to={to}
      style={(props) => {
        const { isActive } = props;
        return {
          "--link-active": isActive ? Brand_Primary : "inherit",
        };
      }}
      className={(props) => {
        const { isActive } = props;
        const activeClass =
          isActive && activeLinkClassName ? activeLinkClassName : "";
        return `${styles.link} ${activeClass} ${className}`;
      }}
    >
      {children}
    </RouterNavLink>
  );
}
