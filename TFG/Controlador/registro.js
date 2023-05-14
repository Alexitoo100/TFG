$('#registrarse').on('click', registrarUsuario);

function registrarUsuario() {
const valores = document.querySelectorAll('input');
let username = valores.item(0).value;
let nombre = valores.item(1).value;
let apellidos = valores.item(2).value;
let correo = valores.item(3).value;
let password = valores.item(4).value;

$.ajax({
  url: "../../Modelo/realizarRegistro.php",
  type: "POST",
  data: {username, nombre, apellidos, correo, password},
  success: function (resultado) {
    if (resultado === 'empty') {
      Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');
    } else if (resultado === 'true') {
      Qual.successdb('Verificado', '¡Usuario creado con exito!');
      closepopup();
    } else if (resultado === 'ambos') {
      Qual.errordb("¡ Oh no !", '¡Ya existe una cuenta con ese correo y nombre de usuario asociado!');
    } else if (resultado === 'username') {
      Qual.errordb("¡ Oh no !", '¡Ya existe una cuenta con este nombre de usuario asociado!');
    } else if (resultado === 'correo') {
      Qual.errordb("¡ Oh no !", '¡Ya existe una cuenta con este correo asociado!');
    }
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
    location.href = './index.html';
  })
}