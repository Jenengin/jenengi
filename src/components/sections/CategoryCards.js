import React from 'react';
import Card from '../ui/Card';
import styles from '../../styles/CategoryCards.module.css';

const CategoryCards = () => {
  const categories = [
    {
      id: 'project',
      title: 'Nama Proyek',
      description: 'Dapatkan nama proyek yang kreatif dan bermakna.',
      icon: '/images/icons/project.svg',
    },
    {
      id: 'company',
      title: 'Nama Perusahaan',
      description: 'Buat nama perusahaan yang mudah diingat.',
      icon: '/images/icons/company.svg',
    },
    {
      id: 'brand',
      title: 'Nama Merek',
      description: 'Ciptakan identitas merek yang kuat.',
      icon: '/images/icons/brand.svg',
    },
  ];

  return (
    <section className={styles.categoryCards}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {categories.map((category) => (
            <div key={category.id} className={styles.cardWrapper}>
              <Card
                title={category.title}
                description={category.description}
                icon={category.icon}
              />
              <div className={styles.cardFooter}>
                <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                <span className={styles.likes}>👍</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;