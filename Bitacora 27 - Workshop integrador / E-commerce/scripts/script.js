const arregloPromociones = [
  {
    nombre: "Pantalón",
    precio: 20000,
    link: 0,
  },
  {
    nombre: "Camisa",
    precio: 50000,
    link: 1,
  },
  {
    nombre: "Medias",
    precio: 10000,
    link: 2,
  },
  {
    nombre: "Zapatos",
    precio: 70000,
    link: 3,
  },
  {
    nombre: "Collar",
    precio: 90000,
    link: 4,
  },
  {
    nombre: "Reloj",
    precio: 200000,
    link: 5,
  },
  {
    nombre: "Falda",
    precio: 45000,
    link: 6,
  },
];
const template = ({
  nombre,
  precio,
  link,
}) => `<section class="Card">
            <h2>${nombre}</h2>
            <p>$ ${precio}</p>
            <div>
            <button class="submit" id="submit${link}" type="submit">Añadir al carro</button>
            </div>
          </section>`;
window.addEventListener("load", () => {
  const cardsContainer = document.getElementById("cardsInfo");
  for (let indice = 0; indice < arregloPromociones.length; indice++) {
    const objeto = arregloPromociones[indice];
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.toggle("Card-wrapper");
    cardWrapper.innerHTML = template(objeto);
    cardsContainer.appendChild(cardWrapper);
  }
});
//---------------------------------------------------------------
/* const event =document.getElementById("submit");
event.addEventListener("click", agregarElemento);
const enter =document.getElementById("input");
enter.addEventListener("keypress", agregarElemento);
function agregarElemento(evt){
 console.log(evt);
 console.log(evt.key, evt.code, evt.keyCode);
  if(evt.key=='Enter' || evt.type=='click'){
      const input = document.querySelector(".text").value;
      const ul = document.querySelector(".list");
      const itemNuevo = document.createElement('li');
      const result = document.createTextNode(input);
    itemNuevo.appendChild(result);
    ul.appendChild(itemNuevo);
  }
}*/