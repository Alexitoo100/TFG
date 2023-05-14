
let cont = 1;

$(document).ready(function() {
  $('.titulo-insert').html('INSERTAR NUEVO USUARIO');
  $('.titulo-update').html('ACTUALIZAR USUARIO');
    $.ajax({
        url: "../../Modelo/obtenerUsuarios.php",
        type: "GET",
        dataType: "json",
        success: function (ListadoUsuarios) {
          obtenerListadoUsuarios(ListadoUsuarios);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
});

function obtenerListadoUsuarios(usuarios) {
    $('.table').bootstrapTable({
        data: usuarios,
        columns: [{
            field: '#',
            title: 'Nº',
            formatter : function(value,row,index) {
                return cont++;
            }
          }, {
          field: 'username',
          title: 'Usuario'
        },
        {
            field: 'nombre',
            title: 'Nombre'
        },
        {
            field: 'apellidos',
            title: 'Apellidos'
        },
        {
            field: 'correo',
            title: 'Correo'
        },
        {
            field: 'password',
            title: 'Password',
            formatter : function(value,row,index) {
                return '••••••••••••';
              }
        },
        {
            field: 'tipo',
            title: 'Tipo',
            formatter : function(value,row,index) {
              if (row.tipo === '0') {
                return 'Usuario';
              } else if (row.tipo === "1") {
                return 'Administrador';
              }
          }
        },
        {
            field: 'acciones',
            title: 'Acciones',
            formatter : function(value,row,index) {
              
                const {id, username, nombre, apellidos, correo, password, tipo} = row;
                let borrarBut = '<button class="btn btn-secondary borrarUsu" id="'+id+'">Borrar</button>';
                let actualizarBut = '<button class="btn btn-secondary modificarUsu" data-bs-toggle="modal" data-bs-target="#modalActualizacionUsuarios" rowid="'+id+'" id="actualizar'+id+'" usuario="'+username+'" nombre="'+nombre+'" apellidos="'+apellidos+'" correo="'+correo+'" password="'+password+'" tipo="'+tipo+'">Modificar</button>';
                return borrarBut + " " + actualizarBut;
            }
        },  
    ],
    });

    añadirUsuario();
    borrarUsuario();
    actualizarUsuario();
}

function borrarUsuario() {
    $('.borrarUsu').on('click', function() {
        let id_usuario = this.id;
        $.ajax({
            url: "../../Modelo/borradoUsuarios.php",
            type: "POST",
            data: { id_usuario },
            success: function (ListadoJuegos) {
                new Noty({
                    type: 'success',
                    layout: 'bottomRight',
                    text: '¡Usuario eliminado satisfactoriamente!'
                }).show();

                setTimeout(() => {  location.reload(); }, 1200);
                
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
              console.log(
                errorThrown
              );
            },
          });
    });
}

function actualizarUsuario() {
  
  $('.modificarUsu').on('click', function() {
        let id_boton = this.id;
        let id_usuario = $('#'+id_boton).attr('rowid');

        let nombre_usuario = $('#'+id_boton).attr('usuario');
          $('#update-username').val(nombre_usuario);
        let nombre_usu = $('#'+id_boton).attr('nombre');
          $('#update-nombre').val(nombre_usu);
        let apellidos_usu = $('#'+id_boton).attr('apellidos');
          $('#update-apellidos').val(apellidos_usu);
        let correo_usu = $('#'+id_boton).attr('correo');
          $('#update-correo').val(correo_usu);
        let password_usu = $('#'+id_boton).attr('password');
          $('#update-password').val(password_usu);
        let tipo_usu = $('#'+id_boton).attr('tipo');
          $('#update-tipo option[value=' + tipo_usu + ']').attr('selected', true);

      $('#actualizarDatos').on('click', function() {
          let username = $('#update-username').val();
          let nombre = $('#update-nombre').val();
          let apellidos = $('#update-apellidos').val();
          let correo = $('#update-correo').val();
          let password = $('#update-password').val();
          let tipo = $('#update-tipo').val();

      if (username === '' || nombre === '' || apellidos === '' 
      || correo === '' || password === '' || tipo === '') {
        Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');

      } else {

      $.ajax({
          url: "../../Modelo/actualizarUsuarios.php",
          type: "POST",
          data: { id_usuario, username, nombre, apellidos, correo, password, tipo },
          success: function (resultado) {
            console.log(resultado);
            if (resultado === 'true') {
              new Noty({
                type: 'success',
                layout: 'bottomRight',
                text: '¡Usuario modificado satisfactoriamente!'
            }).show();
            $('#modalActualizacionUsuarios').modal('hide');
            setTimeout(() => {  location.reload(); }, 1200);
              
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
    });
  });
}

function añadirUsuario() {
  $('#insertarDatos').on('click', function() {
   
          let username = $('#insert-username').val();
          let nombre = $('#insert-nombre').val();
          let apellidos = $('#insert-apellidos').val();
          let correo = $('#insert-correo').val();
          let password = $('#insert-password').val();
          let tipo = $('#insert-tipo').val();

      if (username === '' || nombre === '' || apellidos === '' 
        || correo === '' || password === '' || tipo === '') {

          Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');

      } else {

        $.ajax({
          url: "../../Modelo/insercionUsuarios.php",
          type: "POST",
          data: { username, nombre, apellidos, correo, password, tipo },
          success: function (resultado) {
            console.log(resultado);
            if (resultado === 'true') {
              new Noty({
                type: 'success',
                layout: 'bottomRight',
                text: '¡Usuario creado satisfactoriamente!'
            }).show();
            $('#modalInsercionUsuarios').modal('hide');
            setTimeout(() => {  location.reload(); }, 1200);
              
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
  });
}