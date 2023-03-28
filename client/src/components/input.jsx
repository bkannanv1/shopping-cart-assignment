import styles from "./input.module.css";

/**
 * CSS from https://codepen.io/lucasyem/pen/ZEEYKdj
 */
function Input({ name, label }) {
  return (
    <div className={styles.formGroup}>
      <input
        type="text"
        id={name}
        name={name}
        className={styles.formField}
        placeholder={label}
      />
      <label htmlFor={name} className={styles.formLabel}>
        {label}
      </label>
    </div>
  );
}

export { Input };
