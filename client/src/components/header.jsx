import React from "react";
import styles from "./header.module.css";
import { Cart } from "./cart";
import { NavLink } from "./nav-link";

function Header() {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src="/static/images/logo.png" alt="logo of Sabka Bazaar" />
        <nav className={styles.navWrapper}>
          <ul>
            <li>
              <NavLink to={`/`}>Home</NavLink>
            </li>
            <li>
              <NavLink to={`/products`}>Products</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.authButtonWrapper}>
          <NavLink to="/signin">Sign In</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
        <Cart />
      </div>
    </header>
  );
}

export { Header };
