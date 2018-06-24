var addBtn = document.getElementById('add')
var removeBtn = document.getElementById('remove')
var deleteAllBtn = document.getElementById('reset')
var ulist = document.getElementById('list')

// adds event listeners to the buttons
addBtn.addEventListener('click', addItem)
removeBtn.addEventListener('click', removeItem)
deleteAllBtn.addEventListener('click', deleteAll)

function addItem() {
    var inp = document.getElementById('input')
    var item = inp.value
    inp.value = ''   // resetting the textbox


    var textNode = document.createTextNode(item)
    if (item === '') {

        return false
    }
    else {
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
    alert('Are you sure you want to delete all of the todos')
    listItems = ulist.children
    for (let index = 0; index < listItems.length; index++) {
        const element = listItems[index];
        while (listItems[index]) {
            ulist.removeChild(listItems[index])

        }

    }

}