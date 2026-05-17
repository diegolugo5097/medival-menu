export const CATEGORY_THEMES = {
  "Menú":     "earth",
  "Medieval": "fire",
  "Bebidas":  "ocean",
  "Café":     "earth",
  "Helados":  "ice",
  "Cócteles": "night",
};

export const ITEM_THEMES = {
  "Mago Oscuro":               "night",
  "Copa Vikinga":              "ice",
  "Hamburguesa Medieval":      "fire",
  "Ragnarok":                  "night",
  "Picada":                    "blood",
  "Sangría del Rey (Vaso)":    "blood",
  "Elixir del Rey":            "gold",
  "Cóctel de Fresa":           "blood",
  "Margarita Blue":            "ocean",
  "Mojito":                    "forest",
  "Flor de Aquitania":         "forest",
  "Lulada":                    "forest",
  "Limonada de Coco":          "ocean",
  "Fortaleza Amarilla":        "gold",
  "Chocorramo con Helado":     "blood",
  "Banana Split":              "gold",
  "Brownie Caliente con Helado":"fire",
  "Café Rastro de Fuego":      "fire",
  "Café Irlandés":             "earth",
  "Capuchino Crema Whisky":    "earth",
  "Canelazo Maracuyá":         "fire",
  "Chaqueta Medieval":         "earth",
  "Colada Medieval":           "forest",
  "Cerdo a la Plancha":        "fire",
  "Lasagna de Maduro":         "earth",
  "Pannecook Hawaiano":        "gold",
  "Patacón Mixto":             "gold",
  "Cazuela de Maduro Mixta":   "fire",
  "Chorperro":                 "fire",
  "Salchipapa con Carne":      "earth",
  "Wrap de Pollo":             "forest",
  "Granizado Crema Whisky":    "ice",
  "Malteada de Café":          "earth",
};

// CSS custom properties per theme
export const THEME_VARS = {
  fire:   { tc: "#c9a227", tc2: "#ff6b35", bg1: "#1a0808", bg2: "#2d0f0a" },
  ocean:  { tc: "#4db8c8", tc2: "#7ee8f5", bg1: "#051520", bg2: "#0a2535" },
  forest: { tc: "#6db86d", tc2: "#a8d8a8", bg1: "#071510", bg2: "#102010" },
  night:  { tc: "#9b7fd4", tc2: "#c4a8f0", bg1: "#080510", bg2: "#120d1e" },
  gold:   { tc: "#e8c84a", tc2: "#ffd700", bg1: "#120d02", bg2: "#1e1505" },
  blood:  { tc: "#cc3333", tc2: "#ff6666", bg1: "#120404", bg2: "#1e0808" },
  ice:    { tc: "#88ccee", tc2: "#cce8ff", bg1: "#050a12", bg2: "#0a1520" },
  earth:  { tc: "#b8864e", tc2: "#d4a574", bg1: "#100b05", bg2: "#1a1208" },
};

export function getItemTheme(itemName, catName) {
  return ITEM_THEMES[itemName] || CATEGORY_THEMES[catName] || "fire";
}

export function themeStyle(themeName) {
  const t = THEME_VARS[themeName] || THEME_VARS.fire;
  return {
    "--tc":  t.tc,
    "--tc2": t.tc2,
    "--bg1": t.bg1,
    "--bg2": t.bg2,
  };
}
