/*console.log("mundo");
//DOM hacer busqueda de un elemento en HTML
let tabla = document.querySelector(".tabla");
console.log(tabla);
//DOM hacer busqueda de varios elementos en html
let links = document.querySelectorAll("a");
console.log(links);

//Dom
let links = document.querySelectorAll("a");
links.forEach(function(link) {
  console.log(link);
});
*/

//Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");
//Recorrerlos
links.forEach(function(link){
  //Agregar un evento click a cada uno de ellos
  link.addEventListener("click",function(ev){
    ev.preventDefault();
    let contenedor = document.querySelector(".contenedor");
    //Quitar animacion
    contenedor.classList.remove("fadeInDown");
    contenedor.classList.remove("animated");

    //Agregar clases para animar su salida fadePutUp
    contenedor.classList.add("fadeOutUp");
    contenedor.classList.add("animated");

    setTimeout(function() {
      location.href = "/";
    },1000);

    return false;

  });

});
/*
//Quitar clases
let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
  //Agregar
  icono.classList.add("fas fa-star");
})*/
