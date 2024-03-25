// Sample data for autocomplete
const data = ['Tech', 'Business', 'Marketing', 'Finance'];

const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');
const autocompleteList = document.getElementById('autocomplete-list');

// Function to filter data based on search input
function filterData(searchTerm) {
    return data.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
}

// Function to display autocomplete suggestions
function displayAutocompleteSuggestions(suggestions) {
    autocompleteList.innerHTML = '';
    suggestions.forEach(suggestion => {
        const item = document.createElement('div');
        item.classList.add('autocomplete-item');
        item.textContent = suggestion;
        item.addEventListener('click', () => {
            searchInput.value = suggestion;
            autocompleteList.innerHTML = '';
        });
        autocompleteList.appendChild(item);
    });
    autocompleteList.style.display = 'block'; // Show autocomplete list
}

// Event listener for input change
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm.length === 0) {
        autocompleteList.innerHTML = '';
        autocompleteList.style.display = 'none'; // Hide autocomplete list if no input
        return;
    }
    const filteredData = filterData(searchTerm);
    displayAutocompleteSuggestions(filteredData);
});

// Event listener for search icon click
searchIcon.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    const filteredData = filterData(searchTerm);
    displayAutocompleteSuggestions(filteredData);
});

// Close autocomplete list when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('form')) {
        autocompleteList.innerHTML = '';
        autocompleteList.style.display = 'none';
    }
});

function filterData(searchTerm) {
    const filteredData = data.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    if (filteredData.includes('Marketing')) {
        const marketingSection = document.getElementById('marketing-section');
        const entryElement = marketingSection.querySelector('.entry');
        if (entryElement) {
            entryElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return filteredData;
}