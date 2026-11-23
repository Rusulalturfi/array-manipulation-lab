const shoppingList = [];

const itemInput = document.getElementById("item-input");
const addButton = document.getElementById("add-button");
const shoppingListElement = document.getElementById("shopping-list");
const removeButton = document.getElementById("remove-button");
const searchInput = document.getElementById("search-input");

function addItem(item) {
  const cleanItem = item.trim();

  const alreadyExists = shoppingList.some(function (listItem) {
    return listItem.toLowerCase() === cleanItem.toLowerCase();
  });

  if (cleanItem === "" || alreadyExists) {
    return;
  }

  shoppingList.push(cleanItem);
}

function removeLastItem() {
  shoppingList.pop();
}

function displayList() {
  shoppingList.forEach(function (item) {
    console.log(item);
  });
}

function filterItems(searchTerm) {
  return shoppingList.filter(function (item) {
    return item.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

function updateList() {
  const searchTerm = searchInput.value;
  const filteredItems = filterItems(searchTerm);

  shoppingListElement.innerHTML = "";

  filteredItems.forEach(function (item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    shoppingListElement.appendChild(listItem);
  });
}

addButton.addEventListener("click", function () {
  addItem(itemInput.value);
  itemInput.value = "";
  updateList();
});

removeButton.addEventListener("click", function () {
  removeLastItem();
  updateList();
});

searchInput.addEventListener("input", updateList);