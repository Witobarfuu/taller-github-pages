export function renderFooter() {
  const footerHTML = `
    <footer class="footer" id="contacto">
      <p>© 2026 - Sitio desarrollado para Aplicaciones y Tecnologías Web</p>
    </footer>
  `;

  document.getElementById("footer-container").innerHTML = footerHTML;
}