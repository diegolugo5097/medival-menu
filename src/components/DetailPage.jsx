import React, { useState } from 'react';
import { MENU, CATEGORY_ICONS } from '../data/menu';
import { IMAGES, GALLERY } from '../data/images';
import { getItemTheme } from '../data/themes';
import { Lightbox } from './Lightbox';
import styles from './DetailPage.module.css';

function getCategoryName(itemId) {
  for (const [cat, items] of Object.entries(MENU)) {
    if (items.find(i => i.id === itemId)) return cat;
  }
  return '';
}

function CollageCell({ src, fallbackBg, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`${styles.galleryCell} ${hovered ? styles.galleryCellHover : ''}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: fallbackBg }}
    >
      {src && (
        <img
          src={src}
          alt=""
          loading="lazy"
          className={hovered ? styles.galleryCellImgZoom : styles.galleryCellImg}
          onError={e => { e.target.style.display = 'none'; }}
        />
      )}
      <div className={`${styles.galleryCellOverlay} ${hovered ? styles.galleryCellOverlayShow : ''}`} />
    </div>
  );
}

export function DetailPage({ item }) {
  const [lbxIndex, setLbxIndex] = useState(null);
  const catName = getCategoryName(item.id);
  const theme = `theme-${getItemTheme(item.name, catName)}`;
  const heroUrl = IMAGES[item.name];
  const gallery = GALLERY[item.name] || (heroUrl ? [heroUrl, heroUrl, heroUrl, heroUrl] : []);
  const bg1 = 'var(--bg1)';

  return (
    <div className={`${styles.page} ${theme}`}>

      {/* Hero */}
      <div className={styles.hero}>
        {heroUrl
          ? <img src={heroUrl} alt={item.name} className={styles.heroImg}
              onError={e => { e.target.style.display='none'; }} />
          : <div className={styles.heroBg} />}
        <div className={styles.heroFade} />
        <div className={styles.heroTitles}>
          <div className={styles.catBadge}>
            {CATEGORY_ICONS[catName]} {catName.toUpperCase()}
          </div>
          <h1 className={styles.name}>{item.name}</h1>
        </div>
      </div>

      {/* Parchment content */}
      <div className={styles.parch}>

        {/* Price row */}
        <div className={styles.priceRow}>
          <div className={styles.price}>
            <span className={styles.priceSym}>⚜</span>
            ${item.price.toLocaleString('es-CO')}
          </div>
          {item.tag && <div className={styles.themeBadge}>{item.tag}</div>}
        </div>

        {/* Description */}
        <div className={styles.secLabel}>Descripción</div>
        <p className={styles.desc}>{item.desc}</p>

        {/* Ingredients */}
        <div className={styles.secLabel}>Ingredientes</div>
        <div className={styles.ings}>
          {item.ingredients.map((ing, i) => (
            <span key={i} className={styles.ing}>{ing}</span>
          ))}
        </div>

        {/* Lore */}
        <div className={styles.lore}>
          <span className={styles.loreMark}>✦ Leyenda ✦</span>
          <p className={styles.loreTxt}>{item.lore}</p>
        </div>
      </div>

      {/* Gallery */}
      {gallery.length > 0 && (
        <div className={styles.gallery}>
          <div className={styles.galleryHdr}>
            <span className={styles.galleryHdrTitle}>✦ GALERÍA DEL PRODUCTO ✦</span>
            <span className={styles.galleryCount}>{gallery.length} RETRATOS</span>
          </div>
          <div className={styles.galleryGrid}>
            {gallery.slice(0, 4).map((url, i) => (
              <CollageCell
                key={i}
                src={url}
                fallbackBg={bg1}
                onClick={() => setLbxIndex(i)}
              />
            ))}
          </div>
          <div className={styles.galleryHint}>✦ TOCA UNA IMAGEN PARA AMPLIAR ✦</div>
        </div>
      )}

      <div style={{ height: '2.5rem' }} />

      {/* Lightbox */}
      {lbxIndex !== null && (
        <Lightbox
          images={gallery}
          startIndex={lbxIndex}
          onClose={() => setLbxIndex(null)}
        />
      )}
    </div>
  );
}
