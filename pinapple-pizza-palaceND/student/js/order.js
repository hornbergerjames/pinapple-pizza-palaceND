
/* ==========================================
   PINEAPPLE PIZZA PALACE - ORDER SYSTEM
   ========================================== */


// ------------------------------------------
// VARIABLES
// ------------------------------------------

// Keeps track of the total price of the order.
let orderTotal = 0;

// Keeps track of how many items have been ordered.
let itemCount = 0;

// Stores the quantity of each menu item.
// Each position matches an item in the menu array.
const order = [];

// Selects the HTML elements we need to update.
const totalDisplay = document.getElementById("order-total");
const orderItems = document.getElementById("order-items");
const cartCount = document.getElementById("cart-count");

const checkoutButton = document.getElementById("checkout-button");
const clearOrderButton = document.getElementById("clear-order-button");

// Selects all six Add to Order buttons.
const addButtons = document.querySelectorAll(".button-small");


// ------------------------------------------
// SET UP THE ORDER ARRAY
// ------------------------------------------

// Start every menu item with a quantity of zero.
for (let i = 0; i < menu.length; i++) {
    order[i] = 0;
}


// ------------------------------------------
// ADD ITEM TO ORDER
// ------------------------------------------

function addItem(index) {

    // Increase the quantity of this food by one.
    order[index] += 1;

    // Add the selected food's price to the total.
    orderTotal += menu[index].price;

    // Increase the total number of items ordered.
    itemCount += 1;

    // Refresh the order information on the page.
    updateOrder();
}


// ------------------------------------------
// UPDATE ORDER DISPLAY
// ------------------------------------------

function updateOrder() {

    // Display the total with a dollar sign
    // and exactly two decimal places.
    totalDisplay.textContent = "$" + orderTotal.toFixed(2);

    // Update the number displayed beside "Your Order".
    cartCount.textContent = itemCount;

    // Remove the previous HTML inside the order list.
    // We rebuild it using the latest order quantities.
    orderItems.innerHTML = "";

    // If no items have been ordered, display
    // the empty-order message.
    if (itemCount === 0) {

        orderItems.innerHTML = `
            <div id="empty-order" class="empty-order">
                <span aria-hidden="true">🛍️</span>
                <h3>Your order is empty</h3>
                <p>Add something delicious to get started!</p>
            </div>
        `;

        // Disable checkout while the cart is empty.
        checkoutButton.disabled = true;

    } else {

        // Enable checkout when the cart contains items.
        checkoutButton.disabled = false;

        // Loop through every menu item.
        for (let i = 0; i < menu.length; i++) {

            // Only display items that have been ordered.
            if (order[i] > 0) {

                // Calculate the price for this item's quantity.
                const itemTotal = menu[i].price * order[i];

                // Add a row showing the name, quantity,
                // and total price for this item.
                orderItems.innerHTML += `
                    <div class="order-item">
                        <div>
                            <strong>${menu[i].name}</strong>
                            <p>Quantity: ${order[i]}</p>
                        </div>

                        <strong>$${itemTotal.toFixed(2)}</strong>
                    </div>
                `;
            }
        }
    }
}


// ------------------------------------------
// CONNECT ADD TO ORDER BUTTONS
// ------------------------------------------

// Go through every Add to Order button.
for (let i = 0; i < addButtons.length; i++) {

    // Listen for a click on the current button.
    addButtons[i].addEventListener("click", function() {

        // Add the matching menu item to the order.
        addItem(i);

    });
}


// ------------------------------------------
// CLEAR ORDER BUTTON
// ------------------------------------------

clearOrderButton.addEventListener("click", function() {

    // Reset the total price.
    orderTotal = 0;

    // Reset the total number of items.
    itemCount = 0;

    // Reset every menu item's quantity to zero.
    for (let i = 0; i < order.length; i++) {
        order[i] = 0;
    }

   document.querySelectorAll(".quantity").forEach(counter => {
        counter.textContent = "0";
    });

    // Refresh the page to show the empty cart.
    updateOrder();

});


// ------------------------------------------
// CHECKOUT BUTTON
// ------------------------------------------

checkoutButton.addEventListener("click", function() {

    // Prevent checkout when the cart is empty.
    if (itemCount === 0) {
        return;
    }

    // Display a confirmation message.
    alert(
        "Thank you for ordering from Pineapple Pizza Palace!\n" +
        "Items: " + itemCount + "\n" +
        "Total: $" + orderTotal.toFixed(2) + "\n\n" +
        "This is a demo. No real payment was made."
    );

});


// ------------------------------------------
// INITIALIZE THE ORDER DISPLAY
// ------------------------------------------

// Display the correct empty-cart state when
// the website first loads.
updateOrder();


/* ==========================================
   TODAY'S SPECIAL ORDER BUTTON
   ========================================== */

const specialButton = document.getElementById("special-add");

specialButton.addEventListener("click", function() {

    let specialIndex = -1;

    for (let i = 0; i < menu.length; i++) {

        if (menu[i].name === special.name) {
            specialIndex = i;
            break;
        }

    }

    if (specialIndex !== -1) {
        addItem(specialIndex);
    }

});


/* ==========================================
   HEADER CART COUNT
   ========================================== */

const headerCount = document.getElementById("header-count");

function updateHeaderCount() {
    headerCount.textContent = itemCount;
}


// Update header count whenever an item is added.
for (let i = 0; i < addButtons.length; i++) {

    addButtons[i].addEventListener("click", function() {
        updateHeaderCount();
    });

}


// Update header count when the special is added.
specialButton.addEventListener("click", function() {
    updateHeaderCount();
});


// Reset header count when the order is cleared.
clearOrderButton.addEventListener("click", function() {
    updateHeaderCount();
});
