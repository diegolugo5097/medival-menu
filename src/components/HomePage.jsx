import React, { useState } from 'react';
import { MENU, CATEGORY_ICONS, ALL_ITEMS } from '../data/menu';
import { IMAGES } from '../data/images';
import { getItemTheme } from '../data/themes';
import styles from './HomePage.module.css';

function ItemCard({ item, onClick }) {
  const [hovered, setHovered] = useState(false);
  const theme = `theme-${getItemTheme(item.name, item.cat || '')}`;
  const imgUrl = IMAGES[item.name];

  return (
    <div
      className={`${styles.card} ${theme} ${hovered ? styles.cardHover : ''}`}
      onClick={() => onClick(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.cardImg}>
        {imgUrl
          ? <img src={imgUrl} alt={item.name} loading="lazy"
              className={hovered ? styles.imgZoom : ''}
              onError={e => { e.target.style.display = 'none'; }} />
          : <div className={styles.imgFallback} />}
        <div className={styles.imgVignette} />
        {item.tag && <div className={styles.ribbon}>{item.tag}</div>}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardName}>{item.name}</div>
        <div className={styles.cardFooter}>
          <span className={styles.cardPrice}>${item.price.toLocaleString('es-CO')}</span>
          <span className={styles.cardArrow}>›</span>
        </div>
      </div>
    </div>
  );
}

export function HomePage({ onSelectItem }) {
  const [activeCat, setActiveCat] = useState('Menú');
  const [searchQ, setSearchQ] = useState('');

  const searchResults = searchQ.trim()
    ? ALL_ITEMS.filter(i => {
        const q = searchQ.toLowerCase();
        return (
          i.name.toLowerCase().includes(q) ||
          i.desc.toLowerCase().includes(q) ||
          i.ingredients.some(x => x.toLowerCase().includes(q)) ||
          i.cat.toLowerCase().includes(q)
        );
      })
    : null;

  const displayItems = searchResults || MENU[activeCat];

  return (
    <div className={styles.page}>
      {/* Search bar */}
      <div className={styles.searchWrap}>
        <span className={styles.searchIcon} aria-hidden="true">⚔</span>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar en el reino..."
          value={searchQ}
          onChange={e => setSearchQ(e.target.value)}
        />
        {searchQ && (
          <button className={styles.clearBtn}
            onClick={() => setSearchQ('')} aria-label="Limpiar">✕</button>
        )}
      </div>

      {/* Hero */}
      {!searchQ && (
        <div className={styles.hero}>
          <div className={styles.heroBadge}>✦ DESDE EL REINO ✦</div>
          <div className={styles.heroTitle}>Festín<br />Medieval</div>
          <div className={styles.heroDiv}>
            <span className={styles.heroDivLine} />
            <span className={styles.heroDivIcon}>⚔</span>
            <span className={styles.heroDivLine} />
          </div>
          <div className={styles.heroTagline}>Elige tu manjar, noble viajero</div>
        </div>
      )}

      {/* Category tabs */}
      {!searchQ && (
        <div className={styles.cats}>
          {Object.keys(MENU).map(cat => (
            <button
              key={cat}
              className={`${styles.catBtn} ${cat === activeCat ? styles.catBtnOn : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {CATEGORY_ICONS[cat]} {cat}
            </button>
          ))}
        </div>
      )}

      {/* Section heading */}
      <div className={styles.secHdr}>
        {searchQ ? (
          <div className={styles.secTitle}>
            {searchResults.length > 0
              ? `✦ ${searchResults.length} manjar${searchResults.length !== 1 ? 'es' : ''} encontrado${searchResults.length !== 1 ? 's' : ''}`
              : '✦ Sin resultados'}
          </div>
        ) : (
          <div className={styles.secTitle}>{CATEGORY_ICONS[activeCat]} {activeCat.toUpperCase()}</div>
        )}
        <div className={styles.runeLine} />
      </div>

      {/* Grid or empty */}
      {displayItems.length === 0 ? (
        <div className={styles.empty}>
          <span className={styles.emptyRune}>⚔</span>
          Ningún manjar encontrado en el reino para &ldquo;<em>{searchQ}</em>&rdquo;
        </div>
      ) : (
        <div className={styles.grid}>
          {displayItems.map(item => (
            <ItemCard key={item.id} item={item} onClick={onSelectItem} />
          ))}
        </div>
      )}

      <div className={styles.footer}>
        <p>⚔ &nbsp; QUE CADA BOCADO SEA UNA VICTORIA &nbsp; ⚔</p>
      </div>
    </div>
  );
}
