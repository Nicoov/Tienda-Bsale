
const API_URL = 'http://localhost:3000'
const inputBuscar = document.getElementById('srch')
const div = document.getElementsByClassName("card")


// funcion que hace un fetch a la api y trae los datos en un json, despues se hace map para traer los productos 
const getDatos = async () => {
    await fetch(API_URL)
        .then(res => res.json())
        .then((data) => {
            const productos = data.map((product) => product)
            displayProduct(productos)
        })
}

//Creacion de funcionan que contienen los elementos del dom en este caso para llamar los productos por categoria 
const ener = document.getElementById('ener');
const pisco = document.getElementById('pisco');
const ron = document.getElementById('ron');
const bebidas = document.getElementById('bebidas');
const snacks = document.getElementById('snacks');
const cervezas = document.getElementById('cervezas');
const vodka = document.getElementById('vodka');
const index = document.getElementById('home')

//funcion addEventListener para redirigir a cada una de las rutas 
ener.addEventListener('click', function() {
    window.location.href = "/energetica/energeticas.html"
})

pisco.addEventListener('click', function() {
    window.location.href = "/pisco/pisco.html"
})

ron.addEventListener('click', function() {
    window.location.href = "/ron/ron.html"
})

bebidas.addEventListener('click', function() {
    window.location.href = "/bebidas/bebida.html"
})

snacks.addEventListener('click', function() {
    window.location.href = "/snacks/snacks.html"
})

cervezas.addEventListener('click', function() {
    window.location.href = "/cerveza/cervezas.html"
})

vodka.addEventListener('click', function() {
    window.location.href = "/vodka/vodka.html"
})



// Algoritmo que permite la busqueda desde el search 
inputBuscar.addEventListener('keyup', (e) => {
    let texto = e.target.value
    let er = new RegExp(texto, 'i')
    for (let i = 0; i < div.length; i++) {
        let valor = div[i]
        if (er.test(valor.innerText)) {
            valor.classList.remove('ocultar')
        } else {
            valor.classList.add('ocultar')
        }
    }
})

// funcion que muestra los productos 

function displayProduct(productos) {
    let productListHTML = ''
    productos.forEach(e => {
        productListHTML += `
        <div class="card">
        <div class="img"><img src='${e.url_image}' alt=""></div>
        <div class="container">
            <div class="title">${e.name}</div>
            <div class="box">
                <div class="price">Precio:$ ${e.price}</div>
                <button class="btn">Agregar</button>
            </div>
        </div>
    </div>
        `
    });
    document.getElementById('product').innerHTML = productListHTML;
}


getDatos();