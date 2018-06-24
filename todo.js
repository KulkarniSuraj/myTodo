var addBtn = document.getElementById('add')
var removeBtn = document.getElementById('remove')
var deleteAllBtn = document.getElementById('reset')
var ulist = document.getElementById('list')
// creating todo class
class Todo {
    constructor(item) {
        this.title = item;
        this.isDone = false;
    }
}

//adding item to local storage
function addtoLocalStorage(item) {

    todotxt = JSON.stringify(new Todo(item));
    localStorage.setItem(Math.random(), todotxt)
}

// adds event listeners to the buttons
addBtn.addEventListener('click', addItem)
removeBtn.addEventListener('click', removeItem)
deleteAllBtn.addEventListener('click', deleteAll)



function addItem() {
    var inp = document.getElementById('input')
    var item = inp.value
    inp.value = ''   // resetting the textbox
    addtoLocalStorage(item)
    var textNode = document.createTextNode(item)
    // create li
    li = document.createElement('li')

    // create checkbox
    var checkbx = document.createElement('input')
    checkbx.type = 'checkbox'
    checkbx.setAttribute('id', 'check')

    //create label
    var lbl = document.createElement('label')

    //add these elements to webpage
    lbl.appendChild(textNode)
    li.appendChild(checkbx)
    li.appendChild(lbl)

    ulist.insertBefore(li, ulist.childNodes[0])
    setTimeout(() => {
        li.className = 'visual'
    }, 5);
}


function removeItem() {
    listItems = ulist.children
    for (let index = 0; index < listItems.length; index++) {
        const element = listItems[index];
        while (listItems[index] && listItems[index].children[0].checked) {
            ulist.removeChild(listItems[index])

        }

    }
}

function deleteAll() {
    // alert('Are you sure you want to delete all of the todos')
    localStorage.clear()
    listItems = ulist.children
    for (let index = 0; index < listItems.length; index++) {
        const element = listItems[index];
        while (listItems[index]) {
            ulist.removeChild(listItems[index])

        }

    }

}


function showList() {
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const element = localStorage[key];
            console.log(localStorage.getItem(key))
        }

    }
}