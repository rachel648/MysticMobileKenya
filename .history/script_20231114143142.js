document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const closeButton = document.querySelector(".close-button");
    const modalImage = document.getElementById("modal-image");
    const cartCount = document.getElementById("cart-count");

    let itemCount = 0;

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
                modalImage.classList.add("rotate-360");
                addItemToCart(); 
            });
        }
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
        modalImage.classList.remove("rotate-360");
    });

    modalImage.addEventListener("click", function () {
        modalImage.classList.toggle("rotate-360");
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            modalImage.classList.remove("rotate-360");
        }
    });

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
    }

    function updateCartCount() {
        cartCount.textContent = itemCount;
    }


    function buyViaWhatsApp() {
        alert('You selected WhatsApp as your buy option.');
        closeBuyModal(); // Close the modal or perform further actions
    }

    function buyViaWebsite() {
        alert('You selected Website as your buy option.');
        closeBuyModal(); // Close the modal or perform further actions
    }

    function buyViaOthers() {
        alert('You selected Others as your buy option.');
        closeBuyModal(); // Close the modal or perform further actions
    }

    function buyViaOthers() {
        alert('You selected Others as your buy option.');
        closeBuyModal(); // Close the modal or perform further actions
    }
});

