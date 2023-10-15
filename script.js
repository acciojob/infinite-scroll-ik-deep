//your code here!

// Get the list element
const list = document.getElementById('infi-list');

// Function to add a new list item
let count = 0;
function addListItem() {
    const newItem = document.createElement('li');
	count++;
    newItem.textContent = 'Item'+count;
    list.appendChild(newItem);
}

// Add 10 list items by default
for (let i = 0; i < 10; i++) {
    addListItem();
}

// Function to check if the user has reached the end of the list
function isEndOfList() {
    const lastItem = list.lastElementChild;
    const lastItemRect = lastItem.getBoundingClientRect();
    return lastItemRect.bottom <= window.innerHeight;
}

// Function to automatically add 2 more list items when the user reaches the end
function addMoreItems() {
    if (isEndOfList()) {
        for (let i = 0; i < 2; i++) {
            addListItem();
        }
    }
}

// Add scroll event listener to trigger the addition of more items
list.addEventListener('scroll', addMoreItems);
