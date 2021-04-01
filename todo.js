var inputText = document.getElementById("txt"),
    items = document.querySelectorAll("#list li"),
    todos = [],
    index;

for (var i = 0; i < items.length; i++) {
    todos.push(items[i].innerHTML);
}

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function () {
        index = todos.indexOf(this.innerHTML);
        inputText.value = this.innerHTML;
    };

}

function refreshArray() {
    todos.length = 0;
    items = document.querySelectorAll("#list li");
    for (var i = 0; i < items.length; i++) {
        todos.push(items[i].innerHTML);

    }

}

function add() {
    if (inputText.value === '') {
        alert('empty')
    } else {
        var listNode = document.getElementById("list"),
            textNode = document.createTextNode(inputText.value),
            liNode = document.createElement("LI");

        liNode.appendChild(textNode);
        listNode.appendChild(liNode);
        inputText.value = ''

        refreshArray();
        liNode.onclick = function () {
            index = todos.indexOf(liNode.innerHTML);
            inputText.value = liNode.innerHTML;

        };
    }
}

function edit() {
    items[index].innerHTML = inputText.value;
    inputText.value = ''
    refreshArray();
}

function deleteItem() {
    refreshArray();
    if (items.length > 0) {
        items[index].parentNode.removeChild(items[index]);
        inputText.value = "";
    }
}