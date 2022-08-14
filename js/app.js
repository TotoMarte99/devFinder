let buscador = document.querySelector('#buscarUsuario')

let btn_buscar = document.querySelector('#subir_info')
btn_buscar.addEventListener('click', subir_info)

let inicio = document.querySelector('#reiniciar')
inicio.addEventListener('click', () => {
    location.reload()
})

//Realizar busqueda//
function subir_info(e) {
    e.preventDefault()

     if(buscador.value === ''){
        mostrarError('You need to write a username...')
        return;
     }

    llamadoAPI(buscador.value)
}

function llamadoAPI(buscador){
    const url = `https://api.github.com/users/${buscador}`
    fetch(url)
    .then((data) => {
        return data.json()
    })
    .then((dataJSON) => {
        dataJSON.cod === '404' ? mostrarError("User not found...") : mostrarUsuario(dataJSON);
    
    });
}
let foto = document.querySelector('#foto');
let usuario = document.querySelector('#nombreUsuario')
let biografia = document.querySelector('#biografia');
let repos = document.querySelector('#repos');
let followerss = document.querySelector('#followers');
let followingg = document.querySelector('#following');
let creado = document.querySelector('#creado');
let ubicacion = document.querySelector('#localization');
let enlace = document.querySelector('#web');
let twitterr = document.querySelector('#twitter');
let estadisticas = document.querySelector('#estadisticasV2');

function mostrarUsuario(data){
    const {login} = data;
    const {avatar_url} = data;
    const {bio} = data;
    const {created_at} = data;
    const {public_repos} = data;
    const {followers} = data;
    const {following} = data;
    const {location} = data;
    const {blog} = data;
    const {twitter_username} = data;

    foto.innerHTML = `<img class="yo" id="foto" src="${avatar_url}" alt="">`
    usuario.innerHTML = `<h3 class="titulo">${login}</h3>`
    creado.innerHTML = `<h3 class="titulo">${created_at}</h3>`
    biografia.innerHTML = `<h3>${bio}</h3`
    // repos.innerHTML = `<h3>${public_repos}</h3>`
    // followerss.innerHTML = `<h3>${followers}</h3>`
    // followingg.innerHTML = `<h3>${following}</h3>`
    estadisticas.innerHTML = `<div id="estadisticas" class="stats">
    <div class="repos">
        <p>Repos</p>
        <h4 id="repos">${public_repos}</h4>
    </div>
    <div class="followers">
        <p>Followers</p>
        <h4 id="followers">${followers}</h4>
    </div>
    <div class="following">
        <p>Following</p>
        <h4 id="following">${following}</h4>
    </div>
</div>`
    ubicacion.innerHTML = `<img src="./img/mapa.png" alt="" width="20px">
    <p>${location}</p>`
    enlace.innerHTML = `<img src="./img/enlace.png" alt="" width="20px">
    <p>${blog}</p>`;
    twitterr.innerHTMl = `<img src="./img/gorjeo (1).png" alt="" width="20px">
    <p>${twitter_username}</p>`;

}

function mostrarError(mensaje){
    Toastify({
        text: mensaje,
        duration: 2000,
        offset: {
          x: 0, 
          y: 10 
        },
        style:{
          background: "rgb(0, 121, 254)",
          color: "black"
        },
      }).showToast();
}


