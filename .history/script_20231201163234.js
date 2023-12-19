document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const closeButton = document.querySelector(".close-button");
    const modalImage = document.getElementById("modal-image");
    const cartCount = document.getElementById("cart-count");

    let itemCount = 0;
    let cartItems = [];

    function displayCart(cart) {
        let j = 0;

        if (cart.length === 0) {
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
        } else {
            document.getElementById("cartItem").innerHTML = cart.map((items) => {
                var { image, title, price } = items;
                return `
                    <div class='cart-item'>
                        <img class='rowimg' src='${image}' alt='Product Image'>
                        <p style='font-size:12px;'>${title}</p>
                        <h2 style='font-size: 15px;'>$${price}.00</h2>
                        <i class='fa-solid fa-trash' onclick="delElement(${j++})"></i>
                    </div>
                `;
            }).join('');
        }
    }

    function addtocart(a) {
        cartItems.push(/* ... categories[a] */);
        displayCart(cartItems);
    }

    function openBuyModal() {
        var buyModal = document.getElementById('buyModal');
        buyModal.style.display = 'block';
    }

    function closeBuyModal() {
        var buyModal = document.getElementById('buyModal');
        buyModal.style.display = 'none';
    }

    function addItemToCart() {
        itemCount++;
        updateCartCount(); // Call the function to update cart count display
        showItemAddedMessage();
    }

    function updateCartCount() {
        cartCount.textContent = itemCount;
    }

    function showItemAddedMessage() {
        // You can customize this function to display a message or perform other actions
        alert('Item added to cart!');
        // You can also modify the DOM to update the UI or show a notification
        // For example, update a message in the HTML or show a notification
    }

    function buyViaWhatsApp() {
        alert('You selected WhatsApp as your buy option.');
        closeBuyModal(); // Close the modal or perform further actions
    }

    function buyViaWebsite() {
        alert('You selected Website as your buy option.');
        closeBuyModal(); // Close the modal or perform further actions
    }
    cards.forEach((card, index) => {
        const addToCartButton = card.querySelector(".add-button");
        if (addToCartButton) {
            addToCartButton.addEventListener("click", function () {
                const cardDetails = {
                    // Extract the relevant details from the card for the cart
                    // For example: image, title, price
                };
                addItemToCart(cardDetails);
            });
        }

    function buyViaOthers() {
        alert('You selected Others as your buy option.');
        closeBuyModal(); // Close the modal or perform further actions
    }

    cards.forEach((card, index) => {
        card.addEventListener("click", function () {
            modalContent.innerHTML = card.innerHTML;
            modal.style.display = "block";
        });

        card.addEventListener("mouseenter", function () {
            card.style.transform = "scale(1.1)";
            card.style.zIndex = "1";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "scale(1)";
            card.style.zIndex = "0";
        });

        const buyButton = card.querySelector(".buy-button");
        if (buyButton) {
            buyButton.addEventListener("click", function () {
                openBuyModal();
                modalImage.classList.add("rotate-180");
                addItemToCart();
            });
        }
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
        modalImage.classList.remove("rotate-180");
    });

    modalImage.addEventListener("click", function () {
        modalImage.classList.toggle("rotate-180");
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            modalImage.classList.remove("rotate-180");
        }
    });
});
