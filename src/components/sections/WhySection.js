import Button from '../ui/Button'
import styles from '../../styles/WhySection.module.css'

export default function WhySection() {
  return (
    <section className={styles.whySection}>
      <div className="container">
        <div className={styles.whySectionGrid}>
          <div className={styles.whyContent}>
            <h2>Mengapa Memilih jenengi?</h2>
            <p>Ulasan dan testimoni dari pengguna.</p>
            <Button primary>Bergabunglah Sekarang</Button>
          </div>
          
          <div className={styles.whyFeatures}>
            <div className={styles.featureBox}>
              <h3>Mudah Digunakan</h3>
              <p>Antarmuka kami yang ramah pengguna memungkinkan Anda mendapatkan nama dalam hitungan detik.</p>
            </div>
            
            <div className={styles.featureBox}>
              <h3>Beragam Pilihan</h3>
              <p>Dari nama perusahaan hingga nama merek, kami memiliki semua yang Anda butuhkan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}