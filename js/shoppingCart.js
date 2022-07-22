let arrayCarrinho = []

let tagPai = document.querySelector('.cards_colection')
let ulCart = document.querySelector('.products_cart')

tagPai.addEventListener('click', verificarArray)

function verificarArray(event) {
    let idCard = event.target
    let id = idCard.id
    if (idCard.tagName == "BUTTON" ) {
        ulCart.innerHTML = ""
    let varialvel = data.find(produto => id == produto.id)    
    let outravariavel = arrayCarrinho.find(outroproduto => outroproduto.id == id)
    if(outravariavel == undefined){
        arrayCarrinho.push(varialvel)
    }else(
        outravariavel.contador += 1
    )
        criandoObjCart(arrayCarrinho)
    }
}

function criandoObjCart(carrinho){
    for(let i in carrinho){
        let liCart = document.createElement('li')
            liCart.setAttribute('class', 'cart_li')
        let imgCart = carrinho[i].img
        let tituloCart  =  carrinho[i].nameItem
        let valorCart   =  carrinho[i].value
        let contador    =  carrinho[i].contador
        let id          =  carrinho[i].id

        liCart.id = i
        liCart.innerHTML = `
            <div class="div_cart_img">
            <img class="cart_img" src="${imgCart}" alt="${tituloCart}">
            </div>
            <div class="div_cart_description">
            <h1 class="cart_h1">${tituloCart}</h1>
            <h3 class="cart_quantidade">${contador}</h3>
            <strong class="cart_strong">R$${valorCart.toFixed(2)}</strong>
            <button id=${id} class="cart_span">Remover</button>
            </div>
        `
        ulCart.appendChild(liCart)
        somar(arrayCarrinho)
    }
}


ulCart.addEventListener('click', removerProduto)

function removerProduto(event){
    let idRemover = event.target
    let idbutton  = event.target.id

    if(idRemover.tagName == "BUTTON"){
        ulCart.innerHTML = ""
        let variavel = arrayCarrinho.find(outroproduto => outroproduto.id == idbutton)
        if(variavel.contador > 1){
            variavel.contador -= 1 
            console.log(arrayCarrinho)
        }else if(variavel.contador == 1){
             arrayCarrinho.splice(variavel, 1)
        }
        somar(arrayCarrinho) 
        criandoObjCart(arrayCarrinho)
    }
}

let valorparaocard = document.querySelector('.valortotal')
let quantidadeCard = document.querySelector('.quantidade')

function somar(arrayCarrinho){
    let valor = 0
    let quantidade = 0
    for(let i = 0; i < arrayCarrinho.length; i++){
        valor = valor + arrayCarrinho[i].value * arrayCarrinho[i].contador
        quantidade = quantidade + arrayCarrinho[i].contador
    }

    quantidadeCard.innerHTML = `${quantidade}`
    valorparaocard.innerHTML = `R$${valor.toFixed(2)}`
}

























