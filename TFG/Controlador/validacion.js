let tipousu = "";

$(document).ready(validarSesion);

function validarSesion() {
$.ajax({
  url: "../../Modelo/validacion.php",
  type: "GET",
    datatype: 'text',
  success: function (resultado) {
    console.log(resultado);
    if (resultado != '') {
        let datosUsu = resultado.split('-');
        datosUsuario(datosUsu[0], datosUsu[1]);
    } 
    
  },
  error: function (XMLHttpRequest, textStatus, errorThrown) {
    console.log(
      errorThrown
    );
  },
});
}

// Obtiene los datos de los usuarios.
function datosUsuario(usuario, tipo) {
  tipousu = tipo;
    // Comprobamos si el usuario es admin o no (1 = admin, 0 = usuario normal).
    if (tipo === '1') {
      $('.login').hide();
      $('.collapse-juegos').append('<a class="nav-link active" data-bs-toggle="modal" data-bs-target="#modalFavoritos" id="favoritos">Listado de Favoritos</a>');
      $('.collapse').append('<div class="administracion"><ul class="navbar-nav panel me-auto mb-2 mb-lg-0"></ul></div>');
      $('.panel').append('<li class="nav-item titulo-dropdown dropdown"><a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Panel de Administracion</a></li>');
      $('.titulo-dropdown').append('<ul class="dropdown-menu dropdown-panel"><li><a class="dropdown-item" id="seleccion2" href="./gestionusuarios.html">Gestión de usuarios</a></li><li><a class="dropdown-item" id="seleccion3" href="./gestionjuegos.html">Gestión de juegos</a></li>');
      $('.dropdown-panel').append('<hr class="dropdown-divider"><li><a class="dropdown-item" id="seleccion4" href="./gestionforos.html">Gestión de foros</a></li></ul>');
      $('.collapse').append('<div class="bienvenida-usu">Bienvenido ' + usuario + '</div>');
      $('.collapse').append('&nbsp;&nbsp;<a class="nav-link active" id="logout">Cerrar sesion</a>');
      $('#logout').on('click', cerrarSesionAdmin);

    } else if (tipo === '2') {
      let gestionUsu = "http://localhost/TFG/Vista/interfaces/gestionusuarios.html";
      let gestionJuegos = "http://localhost/TFG/Vista/interfaces/gestionjuegos.html";
      let gestionForos = "http://localhost/TFG/Vista/interfaces/gestionforos.html";
      $('.collapse').append('<div class="bienvenida-usu">Bienvenido anonimo</div>');

      $('#guardar-cambios-detalles').on('click', function() {
        Qual.icondb('¡Hey!','¡Tienes que iniciar sesion para poder guardar cambios!', '../img/bowser.gif');
        closePopUpDetalles();
      })

      if (window.location.href === gestionUsu || window.location.href === gestionJuegos 
        || window.location.href === gestionForos) {
        window.location.href = "../interfaces/index.html";
    }

    } else if (tipo === '0') {
      $('.login').hide();
      let gestionUsu = "http://localhost/TFG/Vista/interfaces/gestionusuarios.html";
      let gestionJuegos = "http://localhost/TFG/Vista/interfaces/gestionjuegos.html";
      let gestionForos = "http://localhost/TFG/Vista/interfaces/gestionforos.html";

      if (window.location.href === gestionUsu || window.location.href === gestionJuegos 
        || window.location.href === gestionForos) {
        window.location.href = "../interfaces/index.html";
      }

      $('.collapse-juegos').append('<a class="nav-link active" data-bs-toggle="modal" data-bs-target="#modalFavoritos" id="favoritos">Listado de Favoritos</a>');
      $('.collapse').append('<div class="bienvenida-usu">Bienvenido ' + usuario + '</div>');
      $('.collapse').append('&nbsp;&nbsp;<a class="nav-link active" id="logout">Cerrar sesion</a>');

      $('#logout').on('click', cerrarSesionUsuario);
    }

}

function cerrarSesionUsuario() {
  $.ajax({
    url: "../../Modelo/cerrarSesion.php",
    type: "GET",
    success: function (resultado) {
      Qual.icondb('¡Gracias por elegirnos!', resultado, '../img/beemo.gif');
      closepopup();
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(
        errorThrown
      );
    },
  });
  }

  function closepopup() {
    $('#close-x').on('click', function() {
      location.reload();
    })
  }

  function closePopUpDetalles() {
    $('#close-x').on('click', function() {
      location.href = './iniciarsesion.html';
    })
  }

  function cerrarSesionAdmin() {
    $.ajax({
      url: "../../Modelo/cerrarSesion.php",
      type: "GET",
      success: function (resultado) {
        Qual.icondb('¡Gracias por elegirnos!', resultado, '../img/beemo.gif');
        closepopupAdmin();
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(
          errorThrown
        );
      },
    });
    }
  
    function closepopupAdmin() {
      $('#close-x').on('click', function() {
        location.href = './index.html';
      })
    }

    function comprobarTipoUsuario() {
        return tipousu;
    }
 