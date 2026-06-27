export function renderHeader() {
  const headerHTML = `
    <header class="header">
      <nav>
        <h2>Mi Sitio Web</h2>
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  `;

  document.getElementById("header-container").innerHTML = headerHTML;
}