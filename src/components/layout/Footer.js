
// components/layout/Footer.js
import styles from '../../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div>© {new Date().getFullYear()} Jenengi. Semua Hak Dilindungi.</div>
          <div>Yunus Eka P    22.11.4976 </div>
          <div>Claudio Gilang W    22.11.4994 </div>
          <div>Staenly Marcell B   22.11.4973 </div>
        </div>
      </div>
    </footer>
  )
}
