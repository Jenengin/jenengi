// components/sections/NameGenerator.js
import { useState } from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'
import styles from '../../styles/NameGenerator.module.css'

export default function NameGenerator() {
  const [keyword, setKeyword] = useState('')
  const [nameType, setNameType] = useState('brand') // Default to 'brand'
  const [generatedNames, setGeneratedNames] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerateName = async () => {
    if (!keyword.trim()) {
      alert('Mohon masukkan kata kunci!')
      return
    }

    setIsLoading(true)
    
    try {
      // In a real implementation, call to an API would go here
      // For demo purposes, we'll use a simulated response with a local function
      const names = await simulateNameGeneration(keyword, nameType)
      setGeneratedNames(names)
    } catch (error) {
      console.error('Error generating names:', error)
      alert('Terjadi kesalahan saat menghasilkan nama. Silakan coba lagi.')
    } finally {
      setIsLoading(false)
    }
  }

  // Mock function to simulate API call to a name generator
  // In a real app, this would be replaced with an actual API call
  const simulateNameGeneration = (keyword, type) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Generate some names based on keyword and type
        const baseNames = {
          'project': ['Proyek ' + keyword, keyword + ' Plus', 'Next' + keyword, 'Ultra' + keyword, keyword + ' Pro'],
          'company': [keyword + ' Inc', keyword + ' Solutions', keyword + ' Enterprise', 'Global ' + keyword, keyword + ' Group'],
          'brand': [keyword + 'ify', 'i' + keyword, keyword + 'ly', keyword + '.io', 'My' + keyword],
          'human': [keyword + 'awan', keyword + 'anto', 'Budi ' + keyword, 'Siti ' + keyword, keyword + 'wati']
        }
        
        // Return names for the selected type
        resolve(baseNames[type] || baseNames.brand)
      }, 1000) // Simulate network delay
    })
  }

  return (
    <section className={styles.nameGenerator} id="name-generator">
      <div className="container">
        <h2>Dapatkan Nama Sekarang</h2>
        
        <div className={styles.nameForm}>
          <div className={styles.inputGroup}>
            <label>Kata Kunci</label>
            <Input 
              placeholder="Masukkan kata kunci yang relevan" 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label>Jenis Nama</label>
            <div className={styles.nameTypes}>
              <div 
                className={`${styles.nameType} ${nameType === 'project' ? styles.active : ''}`}
                onClick={() => setNameType('project')}
              >
                Proyek
              </div>
              <div 
                className={`${styles.nameType} ${nameType === 'company' ? styles.active : ''}`}
                onClick={() => setNameType('company')}
              >
                Perusahaan
              </div>
              <div 
                className={`${styles.nameType} ${nameType === 'brand' ? styles.active : ''}`}
                onClick={() => setNameType('brand')}
              >
                Merek
              </div>
              <div 
                className={`${styles.nameType} ${nameType === 'human' ? styles.active : ''}`}
                onClick={() => setNameType('human')}
              >
                Nama Manusia
              </div>
            </div>
            <p>Pilih jenis nama yang Anda inginkan.</p>
          </div>
          
          <Button primary onClick={handleGenerateName} disabled={isLoading}>
            {isLoading ? 'Sedang Menghasilkan...' : 'Hasilkan Nama'}
          </Button>
          
          {generatedNames.length > 0 && (
            <div className={styles.resultsContainer}>
              <h3>Hasil Nama yang Dihasilkan:</h3>
              <ul className={styles.nameList}>
                {generatedNames.map((name, index) => (
                  <li key={index} className={styles.nameItem}>
                    {name}
                    <button className={styles.copyButton} onClick={() => {
                      navigator.clipboard.writeText(name);
                      alert(`"${name}" telah disalin ke clipboard!`);
                    }}>
                      Salin
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}