const valorTicket = 200;
const nombre = document.querySelector("#nombreComprador");
const totalTickets = document.querySelector("#cantidadTickets");
const categoria = document.querySelector("#category");
const importe = document.querySelector("#importe");
const ticketsForm = document.querySelector("#tickets_form");

const resumenBtn = document.querySelector("#resumerBtn");
const borrarBtn = document.querySelector("#borrarBtn");

function calculateDiscount(categoria) {
  const importeSinDescuento = Number(totalTickets.value) * valorTicket;
  let discountPercentaje = 0;

  if (categoria.value == "0") {
    discountPercentaje = importeSinDescuento * 0.8;
  }

  if (categoria.value == "1") {
    discountPercentaje = importeSinDescuento * 0.5;
  }

  if (categoria.value == "2") {
    discountPercentaje = importeSinDescuento * 0.15;
  }

  return importeSinDescuento - discountPercentaje;
}

resumenBtn.addEventListener("click", (e) => {
  e.preventDefault();
  importe.innerHTML = calculateDiscount(categoria);
  ticketsForm.reset();
});

borrarBtn.addEventListener("click", (e) => {
  e.preventDefault();
  ticketsForm.reset();
});
