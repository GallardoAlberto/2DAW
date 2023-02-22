const url = "https://randomuser.me/api/";

let lista = document.querySelector('ul');

for (let i = 0; i <= 10; i++) {
    let li = document.createElement('li');
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
    let datos = data.results[0];
    let foto = datos.picture.large;
    let mail = datos.email;
    let nombre = datos.name.first;
    let apellido = datos.name.last;
    let numero = datos.location.street.number;
    let calle = datos.location.street.name;
    let ciudad = datos.location.city;
    let estado = datos.location.state;
    li.innerHTML =
      `<figure>` +
      `<img src='${foto}' alt='foto'>` +
      `<figure>` +
      `<p>${nombre} ${apellido} </p>` +
      `<p>Email: ${mail} </p>` +
      `<p>${numero} ${calle} </p>` +
      `${ciudad} (${estado.toUpperCase()}) </p>` +
      `<button class="cambiar">Cambiar</button>`;

      lista.appendChild(li);

      let cambiar = document.querySelector('cambiar');

      cambiar.addEventListener('click', ()=> {

      })
  })
  .catch(error=>{main.innerHTML=`<p class='error'>${error}</p>`;
});

}
