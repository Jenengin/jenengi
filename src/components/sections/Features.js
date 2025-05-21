import Button from '../ui/Button'
import Card from '../ui/Card'
import Image from 'next/image'
import styles from '../../styles/Features.module.css'

export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2>Fitur Utama</h2>
        <p>Jelajahi beberapa fitur unggulan kami.</p>
        <Button primary>Lihat Semua Fitur</Button>
        
        <div className={styles.featureCards}>
          <Card 
            label="Inovatif" 
            title="Nama Proyek" 
            description="Dapatkan nama proyek yang kreatif"
          >
            <div className={styles.iconContainer}>
              <div className={styles.iconPlaceholder}>Generator Nama Proyek</div>
            </div>
            <div className={styles.cardIcons}>
              <span>⭐</span>
              <span>✓</span>
            </div>
          </Card>
          
          <Card 
            label="Profesional" 
            title="Nama Perusahaan" 
            description="Buat nama perusahaan yang mudah"
          >
            <div className={styles.iconContainer}>
              <div className={styles.iconPlaceholder}>Generator Nama Perusahaan</div>
            </div>
            <div className={styles.cardIcons}>
              <span>⭐</span>
              <span>✓</span>
            </div>
          </Card>
          
          <Card 
            label="Menarik" 
            title="Nama Merek" 
            description="Ciptakan identitas merek yang kuat"
          >
            <div className={styles.iconContainer}>
              <div className={styles.iconPlaceholder}>Generator Nama Merek</div>
            </div>
            <div className={styles.cardIcons}>
              <span>⭐</span>
              <span>✓</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}