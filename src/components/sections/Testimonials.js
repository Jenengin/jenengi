// components/sections/Testimonials.js
import styles from '../../styles/Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2>Apa Kata Pengguna</h2>
        
        <div className={styles.testimonialCards}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <div className={styles.testimonialAvatar}>A</div>
              <div>
                <div>Gelenk</div>
                <div className={styles.rating}>★★★★★</div>
              </div>
            </div>
            <p>Jenengi membantu saya menemukan nama yang sempurna!</p>
          </div>
          
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <div className={styles.testimonialAvatar}>S</div>
              <div>
                <div>Gulink</div>
                <div className={styles.rating}>★★★★★</div>
              </div>
            </div>
            <p>Pilih dari berbagai pilihan yang disediakan!</p>
          </div>
        </div>
      </div>
    </section>
  )
}