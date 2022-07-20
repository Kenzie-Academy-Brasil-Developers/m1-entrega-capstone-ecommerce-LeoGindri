function createCard(data){

    let getProductCard  =   document.querySelector('.cards_colection')

    for(let i = 0; i < data.length ; i++){
        let productCard = document.createElement('li')
            productCard.setAttribute('class', 'card')
        
        let linkImg              = document.createElement('a')    
            linkImg.setAttribute('class', 'card_link')

        let cardImg              = document.createElement('img')    
            cardImg.setAttribute('class', 'card_img')
            cardImg.src = data[i].img

        let cardDescription      = document.createElement('div')
            cardDescription.setAttribute('class', 'div_description')

        let linkCategory             = document.createElement('a')
            linkCategory.setAttribute('class', 'category')
            linkCategory.innerText  =   data[i].tag

        let linkproductTitle     = document.createElement('a')
        
        let productTitle         = document.createElement('h1')
            productTitle.setAttribute('class', 'product_title')
            productTitle.innerText  =   data[i].nameItem

        let productDescription   = document.createElement('p')
            productDescription.setAttribute('class', 'product_description')
            productDescription.innerText    =   data[i].description

        let productValue         = document.createElement('strong')
            productValue.setAttribute('class', 'product_value')
            productValue.innerText  =   `R$${data[i].value}`

        let addCart              = document.createElement('button')
            addCart.setAttribute('class', 'add_cart')
            addCart.innerText = 'Adicionar ao carrinho'

        getProductCard.appendChild(productCard)
        productCard.append(linkImg, cardDescription)
        linkImg.append(cardImg)
        cardDescription.append(linkCategory, linkproductTitle, productDescription, productValue, addCart)
        linkproductTitle.append(productTitle)

    }

    return getProductCard

}

createCard(data)



