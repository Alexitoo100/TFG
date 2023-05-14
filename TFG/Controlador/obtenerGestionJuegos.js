
let cont = 1;

$(document).ready(function() {
  $('.titulo-insert').html('INSERTAR NUEVO JUEGO');
  $('.titulo-update').html('ACTUALIZAR JUEGO');
    $.ajax({
        url: "../../Modelo/obtenerJuegos.php",
        type: "GET",
        dataType: "json",
        success: function (ListadoJuegos) {
          obtenerListadoJuegos(ListadoJuegos);
          verArray();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
});

function obtenerListadoJuegos(juegos) {
    const listadoDeJuegos = Object.values(
        juegos.reduce((temp, obj) => {
          if (!temp[obj.id]) {
            temp[obj.id] = obj;
          } else {
            temp[obj.id].desarrolladora += `, ${obj.desarrolladora}`;
          }
          return temp;
        }, {})
      );

    $('.table').bootstrapTable({
        data: listadoDeJuegos,
        columns: [{
            field: '#',
            title: 'Nº',
            formatter : function(value,row,index) {
                return cont++;
            }
          },{
          field: 'id',
          title: 'ID'
        }, {
          field: 'nombre',
          title: 'Nombre'
        },
        {
            field: 'precio',
            title: 'Precio'
        },
        {
            field: 'descripcion',
            title: 'Descripcion'
        },
        {
            field: 'genero',
            title: 'Genero'
        },
        {
            field: 'n_jugadores',
            title: 'Nº Jugadores'
        },
        {
            field: 'img',
            title: 'Imagen'
        },
        {
            field: 'certificaciones',
            title: 'Certificaciones'
        },
        {
            field: 'plataforma',
            title: 'Plataformas'
        },
        {
            field: 'desarrolladora',
            title: 'Desarrolladores'
        },
        {
          field: 'f_lanzamiento',
          title: 'Fecha de Lanzamiento'
        },
        {
            field: 'acciones',
            title: 'Acciones',
            formatter : function(value,row,index) {
              let object = JSON.stringify(row);
              let botonBorrar = '<button class="btn btn-secondary borrarJuego" id="'+row.id+'">Borrar</button>';
              let botonActualizar = "<button class='btn btn-secondary' onclick='actualizarJuego(" + object + ")'>Update</button>";
                return botonBorrar + "&nbsp;" + botonActualizar
            }
        },  
    ],
    });
    
borrarJuego();
añadirJuego();

}

function borrarJuego() {
    $('.borrarJuego').on('click', function() {
        let id_juego = this.id;
        $.ajax({
            url: "../../Modelo/borradoJuegos.php",
            type: "POST",
            data: { id_juego },
            success: function () {
                new Noty({
                    type: 'success',
                    layout: 'bottomRight',
                    text: '¡Juego eliminado satisfactoriamente!'
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

function actualizarJuego(juego) {
  const {id, nombre, precio, descripcion, genero, img, n_jugadores, plataforma, desarrolladora, certificaciones, f_lanzamiento} = juego;

  $('.borrarJuego').on('click', function() {

      $.ajax({
          url: "../../Modelo/actualizadoJuegos.php",
          type: "POST",
          data: { id, nombre, precio, descripcion, genero, img, n_jugadores, plataforma, desarrolladora, certificaciones, f_lanzamiento },
          success: function () {
              new Noty({
                  type: 'success',
                  layout: 'bottomRight',
                  text: '¡Juego Actualizado satisfactoriamente!'
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



function añadirJuego() {
  $('#insertarDatos').on('click', function() {
    let id_juego = "";
    let ids_plataforma = null;
    let ids_desarrolladora = new Array();

    let nombre = $('#insert-nombre').val();
    let precio = $('#insert-precio').val();
    let descripcion = $('#insert-descripcion').val();
    let genero = $('#insert-genero').val();
    let n_jugadores = $('#insert-jugadores').val();
    let ruta_imagen = $('#insert-imagen').val();
    let imagen = ruta_imagen.split('\\');
    let nombre_imagen = imagen[2];
    let certificaciones = $('#insert-certificaciones').val();
    let plataformas = $('#insert-plataformas').val();
    let desarrolladoras = $('#insert-desarrolladoras').val();
    let fecha_lanzamiento = $('#insert-lanzamiento').val();
    let fecha_fundacion = $('#insert-fundacion').val();

    console.log(fecha_fundacion);
    console.log(nombre, precio, descripcion, genero, ruta_imagen, n_jugadores, plataformas, desarrolladoras, certificaciones, fecha_lanzamiento)
    
    /*
    if (nombre === "" || precio === "" || descripcion === "" || genero === ""
    || n_jugadores === "" || ruta_imagen === "" || certificaciones === "" 
    || plataformas === "" || desarrolladoras === "" || fecha_lanzamiento === "" || fecha_fundacion === "") {
      Qual.warningdb('Aviso', '¡Se han detectado campos vacios, porfavor rellenalos!');
    } else {
      $.ajax({
          url: "../../Modelo/insercionJuegos.php",
          type: "POST",
          data: { nombre, precio, descripcion, genero, nombre_imagen, n_jugadores, certificaciones, fecha_lanzamiento },
          success: function (response) {
            let respuesta = response.split('/')
            if (respuesta[0] === 'true') {
              id_juego = respuesta[1];
              console.log(id_juego);
              new Noty({
                  type: 'success',
                  layout: 'bottomRight',
                  text: '¡Juego añadido satisfactoriamente!'
              }).show();
            } else if (respuesta[0] === 'exist') {
              Qual.warningdb('Vaya...!','¡Parece que el juego que intentas introducir ya existe. Introduce otro.!');
            }   
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(
              errorThrown
            );
          },
        });
*/
        /*
        $.ajax({
          url: "../../Modelo/insercionPlataformas.php",
          type: "POST",
          data: { plataformas },
          success: function (response) {
            let respuesta = response.split('/')
            let numero = parseInt(respuesta[0]);
            ids_plataformas = JSON.parse(respuesta[1]);
            
            if (numero === 0) {
              new Noty({
                type: 'success',
                layout: 'bottomRight',
                text: 'Plataforma añadida satisfactoriamente!'
            }).show();
            } else if (numero > 0) {
              Qual.warningdb('Vaya...!','¡Parece que las plataformas que intentas introducir ya existen. Introduce otras!');
            }
              //setTimeout(() => {  location.reload(); }, 1200);
              
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(
              errorThrown
            );
          },
        });
*/

        $.ajax({
          url: "../../Modelo/insercionDesarrolladoras.php",
          type: "POST",
          data: { desarrolladoras, fecha_fundacion },
          success: function (response) {
            let respuesta = response.split('/')
            let numero = parseInt(respuesta[0]);
            let id = JSON.parse(respuesta[1]);

            if (numero === 0) {
              new Noty({
                type: 'success',
                layout: 'bottomRight',
                text: 'Desarrolladora añadida satisfactoriamente!'
              }).show();
              ids_desarrolladora.push(id);

            } else if (numero > 0) {
              Qual.warningdb('Vaya...!','¡Parece que las desarolladoras que intentas introducir ya existen. Introduce otras!');
            }
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(
              errorThrown
            );
          },
        });

  });
}