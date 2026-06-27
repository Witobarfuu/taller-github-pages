import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";

renderHeader();
renderFooter();

async function cargarServicios() {
  const contenedor = document.getElementById("servicios-container");

  try {
    const respuesta = await fetch("data/servicios.json");
    const servicios = await respuesta.json();

    servicios.forEach(servicio => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${servicio.titulo}</h3>
        <p>${servicio.descripcion}</p>
      `;

      contenedor.appendChild(card);
    });
  } catch (error) {
    contenedor.innerHTML = "<p>No se pudieron cargar los servicios.</p>";
  }
}

cargarServicios();