// components/ui/Card.js
import styles from '../../styles/Card.module.css'

export default function Card({ label, title, description, icon, children }) {
  return (
    <div className={styles.card}>
      {label && <div className={styles.cardLabel}>{label}</div>}
      {icon && <div className={styles.cardIcon}>{icon}</div>}
      {children}
      {title && <h3 className={styles.cardTitle}>{title}</h3>}
      {description && <p className={styles.cardDescription}>{description}</p>}
    </div>
  )
}