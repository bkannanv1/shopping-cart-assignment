import styles from "./input.module.css";

/**
 * CSS from https://codepen.io/lucasyem/pen/ZEEYKdj
 */
function Input({ name, label, type = "text", minlength, pattern }) {
  return (
    <div className={styles.formGroup}>
      <input
        type={type}
        id={name}
        name={name}
        className={styles.formField}
        placeholder={label}
        required={true}
        {...(minlength ? { minLength: minlength } : {})}
        {...(pattern ? { pattern } : {})}
      />
      <label htmlFor={name} className={styles.formLabel}>
        {label}
      </label>
    </div>
  );
}

export { Input };
