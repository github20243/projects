let openShoping = document.querySelector('.shopping')
let CloseShoping = document.querySelector('.CloseShoping')
let list = document.querySelector('.list')
let listCard = document.querySelector('.listCard')
let body = document.querySelector('body')
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')

openShoping.addEventListener('click', ()=>{
    body.classList.add('active')
})

CloseShoping.addEventListener('click', ()=>{
    body.classList.remove('active')
})

let products = [
    {
        id: "1",
        name: 'бешбармак',
        image: 'https://avatars.dzeninfra.ru/get-zen_doc/9707108/pub_644e1c8167fcc550a6566bc7_644e1da76bdf6b3113e1d5fd/scale_1200',
        price: 500
    },
    {
        id: "2",
        name: 'лагман',
        image: 'https://eda.yandex.ru/images/3770794/453c456419d5bbfa01c1c82c251e092e-800x800.jpeg',
        price: 210
    },
    {
        id: "3",
        name: 'манты',
        image: 'https://cdn.lifehacker.ru/wp-content/uploads/2022/03/305_1646911766-scaled-e1646911810269-1280x640.jpg',
        price: 70
    },
    {
        id: "4",
        name: 'плов',
        image: 'https://cdn.lifehacker.ru/wp-content/uploads/2023/06/shutterstock_2086616812-1_1685637787-1280x640.jpg',
        price: 150
    },
    {
        id: "5",
        name: 'шашлык',
        image: 'https://www.man-meat.ru/upload/iblock/b4c/shutterstock_1095342890_600.jpg',
        price: 160
    },
    {
        id: "6",
        name: 'KFC',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg',
        price: 1000
    },
]

let listCards = [];

function initApp(){
    products.forEach((value, key) => {
        let newDiv = document.createElement('div')
        newDiv.classList.add('item')
        newDiv.innerHTML = `
        <img src="${value .image}"/>
        <div class="title">${value.name}</div>
        <div class="prise">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>
        `
        list.appendChild(newDiv);

    })
}
initApp();

function addToCard(key) {
    if (listCards [key] == null) {
        listCards[key] = products[key];
        listCards[key].quantity = 1
    }
    reloadCard()
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null){
            let newDiv = document.createElement('li')
            newDiv.innerHTML = ` 
            <br>
                <div><img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg"/></div>
            <br>
                <div><img src="https://www.man-meat.ru/upload/iblock/b4c/shutterstock_1095342890_600.jpg"/></div>
                <br>
                <div><img src="https://cdn.lifehacker.ru/wp-content/uploads/2023/06/shutterstock_2086616812-1_1685637787-1280x640.jpg"/></div>
                <br>
                <div><img src="https://cdn.lifehacker.ru/wp-content/uploads/2022/03/305_1646911766-scaled-e1646911810269-1280x640.jpg"/></div>
                <br>
                <div><img src="https://eda.yandex.ru/images/3770794/453c456419d5bbfa01c1c82c251e092e-800x800.jpeg"/></div>
                <br>
                <div><img src="https://avatars.dzeninfra.ru/get-zen_doc/9707108/pub_644e1c8167fcc550a6566bc7_644e1da76bdf6b3113e1d5fd/scale_1200"/></div>
                <br>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>${value.quantity}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listCard.appendChild(newDiv)
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;

}

function changeQuantity(key, quantity) {
    if(quantity == 0) {
        delete listCards[key];
    }else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard()
}