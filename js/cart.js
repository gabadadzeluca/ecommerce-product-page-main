const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const numItemsSpan = document.querySelector('.num-items'); // span to display number of items
const cartPopUp = document.querySelector('.items-in-cart');

const addToCartBtn = document.querySelector('.add-to-cart');
addToCartBtn.addEventListener('click', updateCart);

let numItems = 0;


plus.addEventListener('click', ()=>{
    count++;
    numItemsSpan.innerHTML = count;
});

minus.addEventListener('click',()=>{
    if(count <= 0) return;
    count--;
    numItemsSpan.innerHTML = count;
});


class Cart{
    constructor(){
        this.items = [];
        this.count = this.items.length;
        if(!localStorage.getItem('cart')){
            this.items = [];
        }else{
            this.items = JSON.parse(localStorage.getItem('cart'));
        }
    }
    addItem(item) {
        this.items.push(item);
        this.count = this.items.length;
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
        this.count = this.items.length;
    }
}

// initialize new cart
const cart = new Cart();

if(!localStorage.getItem('count')){
    localStorage.setItem('count', cart.items.length);
    
}
if(!localStorage.getItem('cart')){
    localStorage.setItem('cart', JSON.stringify(cart.items));
}


// show item count in cart
displayItemsInCart();
displayPrice();


let count = 0; 

function updateCart(){
    for(let i = 0; i<count; i++){
        // add item to the cart
        cart.addItem('Fall Limited Edition Sneakers');
    }
    // update local storage
    let updatedCount = parseInt(localStorage.getItem('count')) + count;
    localStorage.setItem('cart', JSON.stringify(cart.items));
    localStorage.setItem('count', updatedCount); 
    //reset values
    numItemsSpan.innerHTML = count = 0;
    displayItemsInCart();
    displayPrice();
}

function displayItemsInCart() {
    if(parseInt(localStorage.getItem('count')) == 0) return; // don't display if no items in the cart
    cartPopUp.innerHTML = localStorage.getItem('count');
    cartPopUp.style.display = 'block';
}


const cartIconDiv = document.querySelector('.cart-icon-div');
const cartDiv = document.querySelector('.cart');


// display and hide cart



cartDiv.style.display = 'none';
cartIconDiv.addEventListener('click', ()=>{
    if(cartDiv.style.display == 'none'){
        cartDiv.style.display = 'flex';
    }else{
        cartDiv.style.display = 'none';
    }
});

function displayPrice(){
    const itemCount = document.querySelector('.items-count');
    const finalPrice = document.querySelector('.final-price');

    let count = parseInt(localStorage.getItem('count'));
    itemCount.innerHTML = count;
    // calculate price
    let price = (125 * count).toFixed(2);
    finalPrice.innerHTML = ' $' + price;
}