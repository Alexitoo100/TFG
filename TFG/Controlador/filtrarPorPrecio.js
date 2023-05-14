$('#enviarPrecio').on('click', filtradoPrecio);

function filtradoPrecio() {
    let precioMax = $('#precioMax').val();
    let precioMin = $('#precioMin').val();

    if (precioMax === "" || precioMin === "") {
        Qual.infodb('Aviso', '¡Debes rellenar los dos campos para filtrar por precio!');
    } else {
    $.ajax({
        url: "../../Modelo/filtrarPorPrecio.php",
        type: "GET",
        dataType: 'json',
        data: { precioMax, precioMin },
        success: function (juegosPorPrecio) {
            $('.video-juegos').empty();
            const listadoDeJuegos = Object.values(
                juegosPorPrecio.reduce((temp, obj) => {
                  if (!temp[obj.id]) {
                    temp[obj.id] = obj;
                  } else {
                    temp[obj.id].plataforma += `, ${obj.plataforma}`;
                    temp[obj.id].desarrolladora += `, ${obj.desarrolladora}`;
                  }
                  return temp;
                }, {})
              );
        
            for (const juego of listadoDeJuegos) {
                obtenerJuegos(juego); 
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(
            errorThrown
          );
        },
      });
    }
}

function obtenerJuegos(juego) {
    const {id, nombre, precio, descripcion, genero, n_jugadores, img, certificaciones, plataforma, desarrolladora, f_lanzamiento} = juego;

    let divisor = $("<div></div>");
    divisor.addClass("col" + " cards-fav " + "col-sm-3 col-dm-3 col-3");

    let card = $("<div></div>");
        card.addClass("card");
        card.prop("style", "width: 18rem;");

    let divfavoritos = $("<div></div>");
        $(divfavoritos).addClass('div-favoritos');
        $(divfavoritos).html('<i class="fa-regular fa-heart fa-2x heartclass" marcado="false" id="heart' + id +'"></i>');
        $(divfavoritos).prop('id', 'fav'+id);

        let span = $("<span></span>");
        let span2 = $("<span></span>");
        let span3 = $("<span></span>");
        let span4 = $("<span></span>");

    let title = $('<p></p');
        $(title).prop('class', "card-title");
        $(title).html(nombre);

    let cardbody = $("<div></div>");
        $(cardbody).addClass("card-body");

    let divdescripcion = $('<p></p>');
        $(divdescripcion).prop('class', "card-text");
        $(divdescripcion).html(descripcion);

    let divjugadores = $("<div></div>");
        $(divjugadores).addClass("texto-jugadores");
        $(divjugadores).html(n_jugadores);

    let divprecio = $("<div></div>");
        $(divprecio).addClass("texto-precio");
        $(divprecio).html(precio + '€');

    let divgenero = $("<div></div>");
        $(divgenero).addClass("texto-genero");
        $(divgenero).html(genero);

    let divcert = $("<div></div>");
        $(divcert).addClass("texto-certificaciones");
        $(divcert).html(certificaciones);

    let plataformas = $("<div></div>");
        $(plataformas).addClass("texto-plataformas");
        $(plataformas).html(plataforma);

    let imagen = $("<img>");
        $(imagen).addClass("card-img-top card-img");
        $(imagen).prop("src", '../img/' + img);
        $(imagen).prop("id", "img-juegos");
        $(imagen).prop("alt", "Card image cap");

    let divlanzamiento = $('<p></p>');
        $(divlanzamiento).addClass("texto-lanzamiento");
        $(divlanzamiento).html('<strong>Lanzamiento: </strong>' + f_lanzamiento);

    let detalles = $("<button>");
        $(detalles).prop("type", "button");
        $(detalles).prop('id',"detalles"+id);
        $(detalles).prop('class',"mt-5 mx-5 ver-detalles");
        $(detalles).attr('data-bs-toggle', "modal");
        $(detalles).attr('data-bs-target', "#modalJuegos");
        $(detalles).prop("textContent", 'Ver detalles');

    let reseña = $("<textarea></textarea>");
        $(reseña).addClass("texto-reseña");
        $(reseña).prop('placeholder', 'Cuentanos que tal te ha parecido el videojuego...');
    
    let divdesarrolladora = $("<div></div>");
        $(divdesarrolladora).addClass("texto-plataformas");
        $(divdesarrolladora).html(desarrolladora);

    let valoraciones = $("<form></form>");
        $(valoraciones).addClass("texto-valoraciones");

    let valoraciones2 = $("<form></form>");
        $(valoraciones2).addClass("texto-valoraciones");

    let valoraciones3 = $("<form></form>");
        $(valoraciones3).addClass("texto-valoraciones");

    let clasificacion = $('<p></p>');
        clasificacion.addClass('clasificacion clasificacion1');
    let clasificacion2 = $('<p></p>');
        clasificacion2.addClass('clasificacion clasificacion2');
    let clasificacion3 = $('<p></p>');
        clasificacion3.addClass('clasificacion clasificacion3');

    let radio = $('<input>');
        radio.prop('id', 'radio5' + id);
        radio.prop('type', 'radio');
        radio.prop('name', 'estrellas');
        radio.prop('value', 5);

    let label1 = $('<label></label>');
        label1.prop('for', 'radio5' + id);
        label1.prop('textContent', '★');

    let radio2 = $('<input>');
        radio2.prop('id', 'radio4' + id);
        radio2.prop('type', 'radio');
        radio2.prop('name', 'estrellas');
        radio2.prop('value', 4);

    let label2 = $('<label></label>');
        label2.prop('for', 'radio4' + id);
        label2.prop('textContent', '★');

    let radio3 = $('<input>');
        radio3.prop('id', 'radio3' + id);
        radio3.prop('type', 'radio');
        radio3.prop('name', 'estrellas');
        radio3.prop('value', 3);

    let label3 = $('<label></label>');
        label3.prop('for', 'radio3' + id)
        label3.prop('textContent', '★');

    let radio4 = $('<input>');
        radio4.prop('id', 'radio2' + id);
        radio4.prop('type', 'radio');
        radio4.prop('name', 'estrellas');
        radio4.prop('value', 2);

    let label4 = $('<label></label>');
        label4.prop('for', 'radio2' + id);
        label4.prop('textContent', '★');

    let radio5 = $('<input>');
        radio5.prop('id', 'radio1' + id);
        radio5.prop('type', 'radio');
        radio5.prop('name', 'estrellas');
        radio5.prop('value', 1);

    let label5 = $('<label></label>');
        label5.prop('for', 'radio1' + id);
        label5.prop('textContent', '★');

    let radio6 = $('<input>');
        radio6.prop('id', 'radioOpt5' + id);
        radio6.prop('type', 'radio');
        radio6.prop('name', 'estrellas2');
        radio6.prop('value', 5);

    let label6 = $('<label></label>');
        label6.prop('for', 'radioOpt5' + id);
        label6.prop('textContent', '★');

    let radio7 = $('<input>');
        radio7.prop('id', 'radioOpt4' + id);
        radio7.prop('type', 'radio');
        radio7.prop('name', 'estrellas2');
        radio7.prop('value', 4);

    let label7 = $('<label></label>');
        label7.prop('for', 'radioOpt4' + id);
        label7.prop('textContent', '★');

    let radio8 = $('<input>');
        radio8.prop('id', 'radioOpt3' + id);
        radio8.prop('type', 'radio');
        radio8.prop('name', 'estrellas2');
        radio8.prop('value', 3);

    let label8 = $('<label></label>');
        label8.prop('for', 'radioOpt3' + id)
        label8.prop('textContent', '★');

    let radio9 = $('<input>');
        radio9.prop('id', 'radioOpt2' + id);
        radio9.prop('type', 'radio');
        radio9.prop('name', 'estrellas2');
        radio9.prop('value', 2);

    let label9 = $('<label></label>');
        label9.prop('for', 'radioOpt2' + id);
        label9.prop('textContent', '★');

    let radio10 = $('<input>');
        radio10.prop('id', 'radioOpt1' + id);
        radio10.prop('type', 'radio');
        radio10.prop('name', 'estrellas2');
        radio10.prop('value', 1);

    let label10 = $('<label></label>');
        label10.prop('for', 'radioOpt1' + id);
        label10.prop('textContent', '★');
//
    let radio11 = $('<input>');
        radio11.prop('id', 'radioJug5' + id);
        radio11.prop('type', 'radio');
        radio11.prop('name', 'estrellas3');
        radio11.prop('value', 5);

    let label11 = $('<label></label>');
        label11.prop('for', 'radioJug5' + id);
        label11.prop('textContent', '★');

    let radio12 = $('<input>');
        radio12.prop('id', 'radioJug4' + id);
        radio12.prop('type', 'radio');
        radio12.prop('name', 'estrellas3');
        radio12.prop('value', 4);

    let label12 = $('<label></label>');
        label12.prop('for', 'radioJug4' + id);
        label12.prop('textContent', '★');

    let radio13 = $('<input>');
        radio13.prop('id', 'radioJug3' + id);
        radio13.prop('type', 'radio');
        radio13.prop('name', 'estrellas3');
        radio13.prop('value', 3);

    let label13 = $('<label></label>');
        label13.prop('for', 'radioJug3' + id);
        label13.prop('textContent', '★');

    let radio14 = $('<input>');
        radio14.prop('id', 'radioJug2' + id);
        radio14.prop('type', 'radio');
        radio14.prop('name', 'estrellas3');
        radio14.prop('value', 2);

    let label14 = $('<label></label>');
        label14.prop('for', 'radioJug2' + id)
        label14.prop('textContent', '★');

    let radio15 = $('<input>');
        radio15.prop('id', 'radioJug1' + id);
        radio15.prop('type', 'radio');
        radio15.prop('name', 'estrellas3');
        radio15.prop('value', 1);

    let label15 = $('<label></label>');
        label15.prop('for', 'radioJug1' + id);
        label15.prop('textContent', '★');

    let divimagen = $("<img>");
        $(divimagen).prop("src", '../img/sonicbailarin.gif');
        $(divimagen).prop("id", "img-detalles");
        $(divimagen).css("height", "11em");

    $(divisor).append(card);
    $(card).append(imagen);
    $(card).append(cardbody);
    $(cardbody).append(span);
    $(cardbody).append(span2);
    $(cardbody).append(span3);
    $(cardbody).append(span4);
    $(cardbody).append(divfavoritos);
    $(cardbody).append(title);
    $(cardbody).append(divdescripcion);
    $(cardbody).append(divlanzamiento);
    $(cardbody).append(detalles);

    $(clasificacion).append(radio);
    $(clasificacion).append(label1);
    $(clasificacion).append(radio2);
    $(clasificacion).append(label2);
    $(clasificacion).append(radio3);
    $(clasificacion).append(label3);
    $(clasificacion).append(radio4);
    $(clasificacion).append(label4);
    $(clasificacion).append(radio5);
    $(clasificacion).append(label5);
    //
    $(clasificacion2).append(radio6);
    $(clasificacion2).append(label6);
    $(clasificacion2).append(radio7);
    $(clasificacion2).append(label7);
    $(clasificacion2).append(radio8);
    $(clasificacion2).append(label8);
    $(clasificacion2).append(radio9);
    $(clasificacion2).append(label9);
    $(clasificacion2).append(radio10);
    $(clasificacion2).append(label10);
    //
    $(clasificacion3).append(radio11);
    $(clasificacion3).append(label11);
    $(clasificacion3).append(radio12);
    $(clasificacion3).append(label12);
    $(clasificacion3).append(radio13);
    $(clasificacion3).append(label13);
    $(clasificacion3).append(radio14);
    $(clasificacion3).append(label14);
    $(clasificacion3).append(radio15);
    $(clasificacion3).append(label15);

    $(valoraciones).append(clasificacion);
    $(valoraciones2).append(clasificacion2);
    $(valoraciones3).append(clasificacion3);
    
    $(".video-juegos").append(divisor);
    abrirDetalles(id, nombre, divjugadores, divprecio, divgenero, plataformas, divcert, divdesarrolladora, valoraciones, valoraciones2, valoraciones3, reseña, divimagen);
    añadirFavoritos(id);
}