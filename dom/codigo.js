alert("Prueba");
var fondoImagen = document.getElementById("fondoMono");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar); 

function dibujar()
{
    papel.drawImage(fondo, 0, 0);
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}

var ruta = window.location;
console.log(ruta);
document.write("Estás en: " + ruta);