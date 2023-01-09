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


// show items, if they are in cart
displayItemsInCart();

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

}

function displayItemsInCart() {
    if(parseInt(localStorage.getItem('count')) == 0) return;

    cartPopUp.innerHTML = localStorage.getItem('count');
    cartPopUp.style.display = 'block';
}