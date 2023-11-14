const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
// task complected feature
let totalTask = document.getElementById('totalTask');
let complectedTask = document.getElementById('complectedTask');

let totalTaskCount = 0;
let complectedTaskCount = 0;

// delete everyting the from local storage - emergency reset button
function resetImageBtn() {
    localStorage.clear();
    setTimeout(() => {
        location.reload();
    }, 1000);
}

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


        // increment the total number of task when user add one by one
        totalTaskCount++;
        totalTask.innerHTML = totalTaskCount;
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

        if (e.target.classList == 'checked') {
            // increment the total number of complected task when user complets task one by one
            complectedTaskCount++;
            complectedTask.innerHTML = complectedTaskCount;
        } else {
            // decrement the complected count of task when user wants to redo it
            complectedTaskCount--;
            complectedTask.innerHTML = complectedTaskCount;
        }

        saveData()
    }
    else if (e.target.tagName === 'SPAN') {
        totalTaskCount--;
        totalTask.innerHTML = totalTaskCount;

        if (e.target.parentElement.className) {
            complectedTaskCount--;
            complectedTask.innerHTML = complectedTaskCount;
        }
        e.target.parentElement.remove()
        saveData()
    }
}, false)

// saving the data to local Storage
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
    localStorage.setItem('cTask', complectedTask.innerHTML);
    localStorage.setItem('tTask', totalTask.innerHTML);
}


// showing the saved data
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data')
    complectedTask.innerHTML = localStorage.getItem('cTask')
    totalTask.innerHTML = localStorage.getItem('tTask')
}
showTask()

// to work the the previous count we have to set the count the value with whateve saved in localstorage
totalTaskCount = localStorage.getItem('tTask');
complectedTaskCount = localStorage.getItem('cTask');