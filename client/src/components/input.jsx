import styles from "./input.module.css";

function Input({ name, label }) {
  return (
    <label htmlFor={name} className={styles.formLabel}>
      {label}
      <input type="text" id={name} name={name} />
    </label>
  );
}

export { Input };
