let cart = [];

function addToCart(name, price) {
    cart.push({name, price});
    alert(name + " added to cart.");
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElem = document.getElementById('total');
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name + " - $" + item.price;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalElem.textContent = total;
}

function checkout() {
    window.location.href = 'checkout.html';
}

if (document.getElementById('cart-items')) {
    loadCart();
}
