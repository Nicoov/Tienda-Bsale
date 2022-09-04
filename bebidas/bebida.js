const API_URL = 'http://localhost:5000/bebidas'

const getBebida = async () => {
    await fetch(API_URL)
        .then(res => res.json())
        .then((data) => {
            const bebida = data.map((product) => product)
            displayPisco(bebida)
        })
}


function displayPisco(bebida) {
    let productListHTML = ''
    bebida.forEach(e => {
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



getBebida();
