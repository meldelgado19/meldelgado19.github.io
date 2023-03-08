
document.getElementById('boton_1').onclick=function(){
    console.log('capturamos el evento de click');
    document.getElementById('puestos_anteriores').innerHTML= " Puestos anteriores: Ayudante estudiantil - Facultad de Ciencias Economicas UNT - 2010 a 2014";
}

document.getElementById('boton_2').onclick=function(){
    console.log('capturamos el evento de click');
    document.getElementById('otras_habilidades').innerHTML="Otras habilidades: Manejo de grupos, gestión de recursos, movilidad propia";
}

{const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Buen día, cuento un poco de mí:";
} else if (time < 20) {
  greeting = "Buenas Tardes, cuento un poco de mí:";
} else {
  greeting = "Buenas Noches, cuento un poco de mí:";
}
document.getElementById("saludo").innerHTML = greeting;
}
