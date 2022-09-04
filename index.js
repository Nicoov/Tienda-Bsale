
const API_URL = 'http://localhost:8000'
const inputBuscar = document.getElementById('srch')
const div = document.getElementsByClassName("card")

const getDatos = async () => {
    await fetch(API_URL)
        .then(res => res.json())
        .then((data) => {
            const productos = data.map((product) => product)
            displayProduct(productos)
        })
}


inputBuscar.addEventListener('keyup', (e) => {
    let texto = e.target.value
    console.log(texto)
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