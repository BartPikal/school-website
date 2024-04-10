// JavaScript for Coffee Roastery E-Shop Cart

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    // Retrieve cart items from local storage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Push new item to cart items array
    cartItems.push({ name: itemName, price: itemPrice });

    // Update local storage with new cart items
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to display cart items
function displayCartItems() {
    // Retrieve cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Select the cart section element
    const cartSection = document.querySelector('#cart-items');

    // Clear existing content in cart section
    cartSection.innerHTML = '';

    // Display each cart item
    cartItems.forEach(item => {
        // Create a new list item element
        const listItem = document.createElement('li');
        
        // Set the inner HTML of the list item
        listItem.innerHTML = `${item.name}: $${item.price}`;
        
        // Append the list item to the cart section
        cartSection.appendChild(listItem);
    });
}

// Function to clear cart
function clearCart() {
    // Clear cart items from local storage
    localStorage.removeItem('cartItems');
}
