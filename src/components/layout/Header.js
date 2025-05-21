// components/layout/Header.js
import Link from 'next/link'
import styles from '../../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo}>Jenengi</div>
          <nav>
            <ul className={styles.navMenu}>
              <li><Link href="/">Coba</Link></li>
              <li><Link href="/kategori">Fitur</Link></li>
              <li><Link href="/tentang">Bergabung</Link></li>
              <li><Link href="/kontak">Tentang Kami</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}