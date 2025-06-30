import { useState } from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'
import styles from '../../styles/Hero.module.css'

export default function Hero() {
  const [keyword, setKeyword] = useState('')
  
  const handleTryNow = () => {
    document.querySelector('#name-generator').scrollIntoView({ 
      behavior: 'smooth' 
    })
  }
  
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>Temukan Nama yang Sempurna</h1>
        <p>Aplikasi ini dapat menghasilkan nama untuk proyek, perusahaan, merek, dan banyak lagi.</p>
        
        <div className={styles.searchBox}>
          <Input 
            placeholder="Masukkan kata kunci" 
            value={keyword} 
            onChange={(e) => setKeyword(e.target.value)} 
          />
          <div className={styles.btnContainer}>
            <Button>Pelajari Lebih Lanjut</Button>
            <Button primary onClick={handleTryNow}>Coba Sekarang</Button>
          </div>
        </div>
      </div>
    </section>
  )
}