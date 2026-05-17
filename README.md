# 🏰 Medieval Café — Menú Digital v3

App estática en React para el menú del Medieval Café con estética medieval profunda, buscador global y temas visuales únicos por producto.

## 🚀 Instalación y uso

```bash
# 1. Entra a la carpeta
cd medieval-cafe

# 2. Instala dependencias
npm install

# 3. Corre en desarrollo
npm start
# Abre automáticamente en http://localhost:3000

# 4. Compilar para producción
npm run build
```

---

## 📁 Estructura

```
src/
├── App.jsx / App.css          # Componente raíz + header sticky
├── index.js / index.css       # Entrada React + variables CSS globales
├── data/
│   ├── menu.js                # Todos los productos del menú
│   ├── images.js              # URLs de imágenes y galerías
│   └── themes.js              # 8 temas visuales + asignación por producto
└── components/
    ├── HomePage.jsx/css        # Grid de productos + buscador + categorías
    ├── DetailPage.jsx/css      # Página de detalle con galería y lore
    └── Lightbox.jsx/css        # Visor de imágenes ampliadas
```

---

## 🎨 Los 8 temas visuales

| Tema     | Color       | Productos típicos                        |
|----------|-------------|------------------------------------------|
| fire     | Dorado/naranja | Hamburguesa Medieval, asados, cafés  |
| ocean    | Cian         | Margarita Blue, bebidas frescas          |
| forest   | Verde        | Mojito, Wrap, Flor de Aquitania          |
| night    | Púrpura      | Mago Oscuro, Ragnarok                    |
| gold     | Amarillo     | Elixir del Rey, Pannecook, Banana Split  |
| blood    | Rojo         | Picada, Sangría, Cóctel de Fresa         |
| ice      | Azul frío    | Copa Vikinga, Granizados                 |
| earth    | Marrón       | Cafés clásicos, platos colombianos       |

---

## ✏️ Cómo editar el menú

Abre `src/data/menu.js` y edita el objeto `MENU`:

```js
{ id: 1, name: "Nombre", price: 15000, tag: "Popular",
  desc: "Descripción medieval...",
  ingredients: ["Ingrediente 1", "Ingrediente 2"],
  lore: "Leyenda del producto..." }
```

Para cambiar el tema de un producto, edita `src/data/themes.js`:

```js
export const ITEM_THEMES = {
  "Nombre del producto": "fire", // o: ocean, forest, night, gold, blood, ice, earth
};
```

Para agregar imágenes, edita `src/data/images.js`:

```js
export const IMAGES = {
  "Nombre del producto": "https://url-imagen.jpg",
};
export const GALLERY = {
  "Nombre del producto": ["url1", "url2", "url3", "url4"],
};
```
