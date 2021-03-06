alert("Prueba");
var fondoImagen = document.getElementById("fondoMono");
var papel = fondoImagen.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOk: false
}

var logo = {
    url: "Mlogo.png",
    caraOk: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo); 

logo.imagen = new Image();
logo.imagen.src = logo.url;
logo.imagen.addEventListener("load", cargarLogo);

function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarLogo()
{
    logo.cargaOk = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(logo.cargaOk)
    {
        papel.drawImage(logo.imagen, 15, 55);
    }
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