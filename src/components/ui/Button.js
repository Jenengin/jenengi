// components/ui/Button.js
import styles from '../../styles/Button.module.css'

export default function Button({ children, primary, onClick }) {
  return (
    <button 
      className={`${styles.btn} ${primary ? styles.btnPrimary : styles.btnSecondary}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}