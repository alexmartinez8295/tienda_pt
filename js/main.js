// Array de productos: por ahora datos de prueba (mock),
// en el futuro esto puede venir de una API/backend.
const productos = [
  {
    id: 1,
    nombre: "Camisa blanca",
    precio: 25000,
    imagen: "img/productos/placeholder.jpg",
  },
  {
    id: 2,
    nombre: "Jean azul",
    precio: 45000,
    imagen: "img/productos/placeholder.jpg",
  },
  {
    id: 3,
    nombre: "Chaqueta negra",
    precio: 80000,
    imagen: "img/productos/placeholder.jpg",
  },
];

function renderizarProductos() {
  const grid = document.getElementById("grid-productos");
  if (!grid) return;

  grid.innerHTML = productos
    .map(
      (producto) => `
        <article class="tarjeta-producto">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio.toLocaleString("es-CO")}</p>
        </article>
    `,
    )
    .join("");
}

renderizarProductos();
