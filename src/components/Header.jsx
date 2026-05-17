import React from 'react';
import styles from './Header.module.css';

export function Header({ onBack, searchValue, onSearchChange, onSearchClear }) {
  return (
    <header className={styles.hdr}>
      <div className={styles.hdrInner}>
        {onBack
          ? <button className={styles.backBtn} onClick={onBack}>← Volver</button>
          : <div className={styles.spacer} />}
        <div className={styles.logo}>
          ✦ Medieval Café ✦
          <span className={styles.logoSub}>GRIMORIO DEL FESTÍN</span>
        </div>
        <div className={styles.spacer} />
      </div>

      {!onBack && (
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon} aria-hidden="true">⚔</span>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Buscar en el reino..."
            value={searchValue}
            onChange={e => onSearchChange(e.target.value)}
          />
          {searchValue && (
            <button className={styles.clearBtn} onClick={onSearchClear} aria-label="Limpiar">✕</button>
          )}
        </div>
      )}
    </header>
  );
}
