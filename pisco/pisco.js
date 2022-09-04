const API_URL = 'http://localhost:3000/pisco'

const getPisco = async () => {
    await fetch(API_URL)
        .then(res => res.json())
        .then((data) => {
            const pisco = data.map((product) => product)
            displayPisco(pisco)
        })
}
const ener = document.getElementById('ener');
const ron = document.getElementById('ron');
const bebidas = document.getElementById('bebidas');
const snacks = document.getElementById('snacks');
const cervezas = document.getElementById('cervezas');
const vodka = document.getElementById('vodka');
const index = document.getElementById('home')

ener.addEventListener('click', function() {
    window.location.href = "/energetica/energeticas.html"
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
    window.location.href = "/cervezas/cervezas.html"
})

vodka.addEventListener('click', function() {
    window.location.href = "/vodka/vodka.html"
})

index.addEventListener('click', function() {
    window.location.href = "../index.html"
})

function displayPisco(pisco) {
    let productListHTML = ''
    pisco.forEach(e => {
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



getPisco();
