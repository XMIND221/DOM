// Sélection des éléments du DOM
const cartItems = document.querySelectorAll('.cart-item');
const totalPriceElement = document.querySelector('.total-price');

// Fonction pour mettre à jour le prix total
function updateTotalPrice() {
    let total = 0;
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        total += price * quantity;
    });
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
}

// Gestion des événements pour chaque article du panier
cartItems.forEach(item => {
    // Bouton +
    item.querySelector('.plus-btn').addEventListener('click', () => {
        const quantityElement = item.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
        updateTotalPrice();
    });

    // Bouton -
    item.querySelector('.minus-btn').addEventListener('click', () => {
        const quantityElement = item.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantityElement.textContent = quantity - 1;
            updateTotalPrice();
        }
    });

    // Bouton Supprimer
    item.querySelector('.delete-btn').addEventListener('click', () => {
        item.remove();
        updateTotalPrice();
    });

    // Bouton Like (cœur)
    item.querySelector('.like-btn').addEventListener('click', () => {
        item.querySelector('.like-btn').classList.toggle('liked');
    });
});

// Initialiser le prix total au chargement
updateTotalPrice();