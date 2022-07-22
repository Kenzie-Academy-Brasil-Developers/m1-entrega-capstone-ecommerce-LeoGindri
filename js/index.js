let barraPesquisa = document.querySelector('.input')
let getProductCard  =   document.querySelector('.cards_colection')


function criarCards(data){
    let lista = '';
    getProductCard.innerHTML = ""
    data.forEach((data, index) => {
        lista += `
                <li class="card">
                    <a class="card_link">
                        <img class="card_img" src="${data.img}"/>    
                    </a>
                    <div class="div_description">
                        <a class="category">${data.tag}</a>
                        <a>
                            <h1 class="product_title">${data.nameItem}</h1>
                        </a>
                        <p class="product_description">${data.description}</p>
                        <strong class="product_value">R$${data.value.toFixed(2)}</strong>
                        <button class="add_cart" id="${data.id}">Adicionar carrinho</button>
                    </div>
                </li>
        `
    })
    getProductCard.innerHTML = lista;
}


barraPesquisa.addEventListener('keyup', valorPesquisa)
let procurarProdutos = ''
function valorPesquisa (event){
    let pesquisa = event.target.value
    procurarProdutos = filtrarprodutos(pesquisa)   
    teste.push(procurarProdutos)
    teste.splice(0, 1)
}





let teste = []
console.log(teste)

function filtrarprodutos(procura){
    return data.filter(produto =>{
        return produto.nameItem.toLowerCase().includes(procura.toLowerCase());
    })
}

criarCards(data)
