import React from "react";
import styles from "./header.module.css";
import { Cart } from "./cart";
import { NavLink } from "./nav-link";

function Header() {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.imageWrapper}>
          <NavLink to="/">
            <img
              src="/static/images/logo.png"
              alt="logo of Sabka Bazaar"
              width="185"
              height="85"
            />
          </NavLink>
        </div>
        <div className={styles.navigationWrapper}>
          <div className={styles.authButtonsWrapper}>
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
          <div className={styles.buttonWrapper}>
            <nav className={styles.navWrapper}>
              <NavLink to={`/`}>Home</NavLink>
              <NavLink to={`/products`}>Products</NavLink>
            </nav>
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };
