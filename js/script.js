const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something")
    }
    else {
        // create list of items
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)

        // create X icon
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""

    saveData()
}

// identify entered key press and add task to task list bar
inputBox.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        addTask()
    }
})

// click function
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

// saving the data to local Storage
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}


// showing the saved data
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()