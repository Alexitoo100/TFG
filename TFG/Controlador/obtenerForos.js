$(document).ready(mostrarForos);

function mostrarForos() {
    $.ajax({
        url: "../../Modelo/obtenerForos.php",
        type: "GET",
        dataType: "json",
        success: function (Listadoforos) {
          obtenerListadoDeForos(Listadoforos);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
}

function obtenerListadoDeForos(listaForos) {
    for (const foro of listaForos) {
        let parsed = JSON.stringify(foro);
        console.log(parsed);
        const {id, nombre, n_integrantes, propietario, tematica} = foro;
        $('.lista-foros').append("<li class='li-foro' id='lista-foro" + id + "'><a class='dropdown-item' href='./foro.html'>" + nombre + "</a></li>");
        $('.lista-foros').append('<hr class="dropdown-divider">');
    }
}