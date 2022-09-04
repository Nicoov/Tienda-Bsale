const API_URL = 'http://localhost:3000/snacks'

const getSnacks = async () => {
    await fetch(API_URL)
        .then(res => res.json())
        .then((data) => {
            const snacks = data.map((product) => product)
            displaySnacks(snacks)
        })
}
const ener = document.getElementById('ener');
const pisco = document.getElementById('pisco');
const ron = document.getElementById('ron');
const bebidas = document.getElementById('bebidas');
const cervezas = document.getElementById('cervezas');
const vodka = document.getElementById('vodka');
const index = document.getElementById('home')

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


cervezas.addEventListener('click', function() {
    window.location.href = "/cervezas/cervezas.html"
})

vodka.addEventListener('click', function() {
    window.location.href = "/vodka/vodka.html"
})

index.addEventListener('click', function() {
    window.location.href = "../index.html"
})


function displaySnacks(snacks) {
    let productListHTML = ''
    snacks.forEach(e => {
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



getSnacks();
