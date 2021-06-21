// Cambiar la imagen
// tip: por atributo | el id de la imagen es "imagenPortada"
const foto = document.getElementById('imagenPortada');
foto.setAttribute('src','https://pardohogar.vteximg.com.br/arquivos/ids/163268-480-321/leno1.jpg?v=637286965583830000')

// Cambiar enlace de "contactar"
// tip: por atributo
const contact = (objeto, link, destino) => {
  document.getElementById(objeto).href = link;
  document.getElementById(objeto).target = destino;
}
contact('contacto', 'https://www.youtube.com.ar', '_blank');

// Cambiar Titulo "notebook argentina" por titulo de modelo
const name = document.getElementById('titulo').innerHTML = 'NOTEBOOK IDEAPAD SLIM 14 -14"-A4 9120E -4/64GB/ W 10H/ LENOVO';


// Cambiar Estilo del encabezado "max hardware"
// tip: usar estilo
let name2 = document.querySelector('h1').style.color ='blue';


// Crear el precio
// tip: https://www.w3schools.com/jsref/prop_element_classlist.asp
let derecha = document.querySelector(".der");
let precio = document.createElement("h2");
let valor = document.createElement("h3");
precio.innerText = "Precio:";
valor.innerText = '$150.000';
derecha.appendChild(precio);
derecha.appendChild(valor);


// Boton de especificaciones, aplicarle un evento "onclick"
// tip: agregar evento
//const esp = document.querySelector('button');
//esp.addEventListener('click', ()=>{
//  esp.classList.toggle('mostrarse');
//})

const esp = document.querySelector('button');
esp.addEventListener('click', ()=>{
  const class1 = document.getElementById('espec').classList.value;
  if (class1 === 'especificaciones') {
    document.getElementById('espec').classList.remove('especificaciones')
    document.getElementById('espec').classList.add('mostrarse')
  }else {
    document.getElementById('espec').classList.remove('mostrarse')
    document.getElementById('espec').classList.add('especificaciones')
  }
})
