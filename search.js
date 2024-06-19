const items = [
    'JavaScript programming',
    'HTML and CSS basics',
    'Frontend development',
    'Web design principles',
    'Dynamic content handling'
];

const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList');

function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

function filterItems() {
    const query = searchInput.value.toLowerCase();
    itemList.innerHTML = '';

    items.forEach(item => {
        if (item.toLowerCase().includes(query)) {
            const highlightedText = highlightText(item, query);
            const listItem = document.createElement('li');
            listItem.innerHTML = highlightedText;
            itemList.appendChild(listItem);
        }
    });
}

searchInput.addEventListener('input', filterItems);

// Initialize list with all items
filterItems();