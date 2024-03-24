// Add event listeners to each "Get started" button and card
const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('.get-started');

// Function to remove 'selected' class from all cards
function deselectAll() {
    cards.forEach(card => {
        card.classList.remove('selected');
    });
}

// Function to toggle 'selected' class on card
function toggleSelection(card) {
    card.classList.toggle('selected');
}

// Add event listeners
cards.forEach(card => {
    card.addEventListener('click', () => {
        deselectAll();
        toggleSelection(card);
    });
});

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        deselectAll();
        toggleSelection(card);
    });
});