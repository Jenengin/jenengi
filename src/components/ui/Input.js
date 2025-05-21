// components/ui/Input.js
import styles from '../../styles/Input.module.css'

export default function Input({ type = 'text', placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  )
}