alert("Prueba");
var fondoImagen = document.getElementById("fondoMono");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var img = new Image()
imagen.src = mapa;
imagen.addEventListener("load", dibujar) 

function dibujar()
{
    papel.drawImage(imagen, 100, 1-0)
}

function aleatorio (min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min
    return resultado;
}

var ruta = window.location;
console.log(ruta);
document.write("Estás en: " + ruta);