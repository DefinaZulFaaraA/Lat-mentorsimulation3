const form = document.getElementById('form')
const title = document.getElementById('input')
const button = document.getElementById('button')
const itemContainer = document.getElementById('item-container')
let todoData=[]

const uuid = function(){
    return Date.now().toString(36)+ Math.random().toString(36).substring(2);
}

const renderItem = (item) => {
    return `
   <div id="item-todo">
   <p>❌<p> 
   <p>${item.title}</p>
   </div>
   `
}

const printToDo = (todo) => {
    let html = ''
    todo.map(item => {
        html += renderItem(item)
    })
    itemContainer.innerHTML = html
}

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    let newToDo = []
    if (input.value.length) {
        newToDo = [...todoData,
            {
                id: uuid(),
                title: input.value,
                completed: false
            }
        ]
        localStorage.setItem('local', JSON.stringify(newToDo))
        todoData = JSON.parse(localStorage.getItem('local'))
        printToDo(todoData)
        input.value = ''
    }
})

const getData = () => {
    const storage = localStorage.getItem('local')
    if (storage) {
        todoData = JSON.parse(storage)
        printToDo(todoData)
    } else {
        localStorage.setItem('local',JSON.string)
    }
}

getData()