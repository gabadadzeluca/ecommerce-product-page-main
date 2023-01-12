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
        this.items = JSON.parse(localStorage.getItem('cartItems')) || [];
        this.count = this.items.length;
    }
    addItem(item) {
        this.items.push(item);
        this.count = this.items.length;
        localStorage.setItem('cartItems', JSON.stringify(this.items));
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
        this.count = this.items.length;
        localStorage.setItem('cartItems', JSON.stringify(this.items));
    }
}

// initialize new cart
const cart = new Cart();

if(!localStorage.getItem('count')){
    localStorage.setItem('count', cart.items.length);
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
    localStorage.setItem('cartItems', JSON.stringify(cart.items));
    localStorage.setItem('count', updatedCount); 
    //reset values
    numItemsSpan.innerHTML = count = 0;
    displayItemsInCart();
    displayPrice();
}

function displayItemsInCart() {
    if(parseInt(localStorage.getItem('count')) == 0){
        cartPopUp.style.display = 'none'; // hide the div if no items
        return
    } ; // don't display if no items in the cart
    cartPopUp.innerHTML = localStorage.getItem('count');
    cartPopUp.style.display = 'block';
}


const cartIconDiv = document.querySelector('.cart-icon-div');
const cartIcon = cartIconDiv.querySelector('img');
const cartDiv = document.querySelector('.cart');
const deleteBtn = document.querySelector('.cart .delete-btn');

// display and hide cart
cartDiv.style.display = 'none';
cartIcon.addEventListener('click', ()=>{
    if(cartDiv.style.display == 'none'){
        cartDiv.style.display = 'flex';
    }else{
        cartDiv.style.display = 'none';
    }
});
// hide if clicked anywhere
document.body.addEventListener('click', (e)=> {
    if (!cartDiv.contains(e.target) && !cartIconDiv.contains(e.target)) {
        cartDiv.style.display = 'none';
    }
});

// remove item from the cart
deleteBtn.addEventListener('click', ()=>{
    cart.removeItem('Fall Limited Edition Sneakers');
    localStorage.setItem('count', cart.items.length);
    displayItemsInCart();
    displayPrice();
});

function displayPrice(){
   
    const itemCount = document.querySelector('.items-count');
    const finalPrice = document.querySelector('.final-price');

    const cartContent = document.querySelector('.cart-content');
    const emptyCart = document.querySelector('.empty-cart');
    
    let count = parseInt(localStorage.getItem('count'));
    itemCount.innerHTML = count;
    // calculate price
    let price = (125 * count).toFixed(2);
    finalPrice.innerHTML = ' $' + price;

    // empty cart message
    if(count == 0){
        cartContent.style.display = 'none';
        emptyCart.style.display = 'block';
    }else{
        cartContent.style.display = 'flex';
        emptyCart.style.display = 'none';
    }
}

// add hover to user profile pic
const userPic = document.querySelector('.user>img');

userPic.addEventListener('mouseover', ()=>{
    cartDiv.style.display = 'flex';
});
userPic.addEventListener('mouseout', ()=>{
    cartDiv.style.display = 'none';
});


// display cart according to screen width
const query = window.matchMedia("(min-width: 1000px)");

if(query.matches){
    document.body.removeChild(cartDiv);
    // append to the header
    cartDiv.classList.add('desktop');
    cartIconDiv.appendChild(cartDiv);
}else{
    cartDiv.classList.remove('desktop');
    document.body.appendChild(cartDiv);
}
