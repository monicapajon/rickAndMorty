const root = document.getElementById("root");
const mujer = document.getElementById("mujer");
const hombre = document.getElementById("hombre");

const getData = () => {
  const url = "https://rickandmortyapi.com/api/character";
  //console.log(url);
  fetch(url)
    //.then(resp =>console.log(resp))
    .then((resp) => resp.json())
    //.then(json =>console.log(json))
    //.then(json =>json)
    .then((json) => {
      printData(json.results)
      data = json;
    })
    .catch((err) => console.error(err));
};
let data = [];
//const printData = json => {
// console.log(json.results)// el json no va a salir porque está en el scope de la función. Además lo q está en el then queda en el then. Con el results solo se ve el arreglo
//};

//printData();
//quedaria asi
const printData = (json) => {
  
  const arr = json; //recorremos el array con un foreach
  let card = ""; //genero una constante vacia q va a ser mi acumulador
  arr.forEach((personaje) => {
    //console.log(personaje)
    const { name, gender, species, status, origin, location, image } =
      personaje;
    card += `
      <div class="col s12 m6 l3">
        <div class="card">
          <div class="card-image">
            <img src=${image} alt=${name}>        
          </div>
          <div class="card-content">
            <p>Nombre:${name}</p>
            <p>Genero:${gender}</p>
            <p>Species:${species}</p>
            <p>Status:${status}</p>
            <p>Origin:${origin.name}</p>
            <p>Location:${location.name}</p>
          </div>
          <div class="card-action">
          <a href="#">Ver mas...</a>
          </div>
        </div>
      </div>
    `;
  });
  root.innerHTML = card;
};
mujer.addEventListener('click', e => {  
  const female = data.results.filter(personaje => personaje.gender === "Female");
  printData(female);//[]
  //console.log(data);
});

hombre.addEventListener('click', e => {  
  const male = data.results.filter(personaje => personaje.gender === "Male");
  printData(male);//[]
  //console.log(data);
});

todos.addEventListener('click', e => {  
  const todos = data.results;
  printData(todos);//[]
  //console.log(data);
});

$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
  getData();
});
