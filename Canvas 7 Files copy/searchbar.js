// Sample data for autocomplete
const data = ['Tech', 'Business', 'Marketing', 'Finance', 'business','finance'];

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


// Inside the script tag, and after the filterData declaration
let financeSearchTerm = '';

document.getElementById('search-icon').addEventListener('click', () => {
    if (financeSearchTerm === 'finance') {
        const financeSection = document.querySelector('#finance-section .entry');
        if (financeSection) {
            financeSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    financeSearchTerm = ''; // Reset the financeSearchTerm value
});

function filterData(searchTerm) {
    marketingSearchTerm = '';
    businessSearchTerm = '';
    let filteredData = [];

    if (searchTerm.toLowerCase() === 'finance') {
        financeSearchTerm = 'finance';
    } else {
        filteredData = data.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
        if (searchTerm.toLowerCase() === 'marketing') {
            marketingSearchTerm = 'marketing';
        } else if (searchTerm.toLowerCase() === 'business') {
            businessSearchTerm = 'business';
        }
    }

    return filteredData;
}
document.getElementById('search-icon').addEventListener('click', () => {
    if (marketingSearchTerm.toLowerCase() === 'marketing') {
        const marketingSection = document.getElementById('marketing-section');
        const entryElement = marketingSection.querySelector('.entry');
        if (entryElement) {
            entryElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
    marketingSearchTerm = '';
});

document.getElementById('search-icon').addEventListener('click', () => {
    if (businessSearchTerm === 'business') {
        const businessSection = document.querySelector('#business-section .entry');
        if (businessSection) {
            businessSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});


