import React, { useState, useEffect } from 'react';
import styles from './Lightbox.module.css';

export function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => { setCurrent(startIndex); }, [startIndex]);

  const prev = (e) => { e.stopPropagation(); setCurrent(i => (i - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setCurrent(i => (i + 1) % images.length); };

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowLeft') setCurrent(i=>(i-1+images.length)%images.length); if (e.key === 'ArrowRight') setCurrent(i=>(i+1)%images.length); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [images.length, onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button className={styles.close} onClick={onClose}>✕</button>

      <div className={styles.imgWrap} onClick={e => e.stopPropagation()}>
        <img src={images[current]} alt="" className={styles.img} />
        {images.length > 1 && (
          <>
            <button className={`${styles.nav} ${styles.navPrev}`} onClick={prev}>‹</button>
            <button className={`${styles.nav} ${styles.navNext}`} onClick={next}>›</button>
          </>
        )}
        <div className={styles.counter}>{current + 1} / {images.length}</div>
      </div>

      <div className={styles.thumbs} onClick={e => e.stopPropagation()}>
        {images.map((img, i) => (
          <div
            key={i}
            className={`${styles.thumb} ${i === current ? styles.thumbActive : ''}`}
            onClick={() => setCurrent(i)}
          >
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
