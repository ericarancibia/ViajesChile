// Componente carousel Bootstrap en imágenes Header
$(document).ready(function () {
  $('.carousel').carousel({
    interval: 8000,
    pause: "false"
  });
});

// Componente para personalizar el color (black) de fondo del navbar al hacer scroll y remover al regresar a inicio
$(document).scroll(function () {
  const y = $("html").scrollTop();
  if (y > 850) $('.navbar').addClass("bg-black")
  else $('.navbar').removeClass("bg-black")
});

// Componente cambiar velocidad del scroll al ir a un enlace dentro de página
var $root = $('html, body');
$("a").click(function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    var href = this.hash;
    $root.animate({
      scrollTop: $(href).offset().top
    }, 1000);
  }
});

// Evento "click" JQuery en botón Enviar en Formulario
$("#btn-enviar").on('click', function () {
  alert("El Mensaje fue enviado correctamente");
});