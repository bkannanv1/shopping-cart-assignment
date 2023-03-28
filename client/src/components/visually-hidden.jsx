import styles from "./visually-hidden.module.css";
import { useState, useEffect } from "react";

/**
 * Reference: https://www.joshwcomeau.com/snippets/react-components/visually-hidden/
 * Env: https://vitejs.dev/guide/env-and-mode.html
 */
const VisuallyHidden = ({ children, ...delegated }) => {
  const [forceShow, setForceShow] = useState(false);
  useEffect(() => {
    if (import.meta.env.DEV) {
      const handleKeyDown = (ev) => {
        if (ev.key === "Alt") {
          setForceShow(true);
        }
      };
      const handleKeyUp = (ev) => {
        if (ev.key === "Alt") {
          setForceShow(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);
  if (forceShow) {
    return children;
  }
  return (
    <span {...delegated} className={styles.visuallyHidden}>
      {children}
    </span>
  );
};
export { VisuallyHidden };
