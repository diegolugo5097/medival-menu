import React, { useState } from 'react';
import { HomePage } from './components/HomePage';
import { DetailPage } from './components/DetailPage';
import './App.css';

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  function handleSelect(item) {
    setSelectedItem(item);
    window.scrollTo(0, 0);
  }

  function handleBack() {
    setSelectedItem(null);
    window.scrollTo(0, 0);
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0e0705' }}>
      <header className="app-hdr">
        <div className="app-hdr-row">
          {selectedItem
            ? <button className="app-back-btn" onClick={handleBack}>← Volver</button>
            : <div className="app-spacer" />}
          <div className="app-logo">
            ✦ Medieval Café ✦
            <span className="app-logo-sub">GRIMORIO DEL FESTÍN</span>
          </div>
          <div className="app-spacer" />
        </div>
      </header>

      {selectedItem
        ? <DetailPage item={selectedItem} />
        : <HomePage onSelectItem={handleSelect} />}
    </div>
  );
}
