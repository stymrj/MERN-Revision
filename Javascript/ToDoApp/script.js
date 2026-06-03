// let todo = ["todo1", "todo2", "todo3", "todo4"];
// let progress = ["progress1", "progress2", "progress3"];
// let done = ["done1"];

// const todoCol = document.getElementById("todo");
// const progressCol = document.getElementById("progress");
// const doneCol = document.getElementById("done");

// function shiftToRight(colName, index){
//     if(colName === 'todo'){
//         let removedItem = todo[index]
//         todo = todo.filter((item,i)=>i!==index)
//         console.log(todo)
//         console.log(removedItem)
//         renderTodo()
//         progress.push(removedItem)
//         renderProgress()
//     }
//     else if(colName === 'progress'){
//         let removedItem = progress[index]
//         progress = progress.filter((item,i)=>i!==index)
//         console.log(progress)
//         console.log(removedItem)
//         renderProgress()
//         done.push(removedItem)
//         renderDone()
//     }
// }

// function shiftToLeft(colName,index){
//     if(colName === 'done'){
//         let removedItem = done[index]
//         done = done.filter((item,i)=>i!==index)
//         console.log(done)
//         renderDone()
//         progress.push(removedItem)
//         renderProgress()
//     }
//     else if(colName==='progress'){
//         let removedItem = progress[index]
//         progress = progress.filter((item,i)=>i!==index)
//         console.log(progress)
//         renderProgress()
//         console.log(removedItem)
//         todo.push(removedItem)
//         renderTodo()
//     }
// }

// function renderTodo() {
//     todoCol.innerHTML = '<h1>Todo</h1>'
//   todo.forEach((item, index) => {
//     todoCol.innerHTML += `
//         <div class="task">
//             <p>${item}</p>
//             <button onclick=shiftToRight('todo',${index})>&rarr;</button>
//         </div>
//     `;
//   });
// }

// function renderProgress() {
// progressCol.innerHTML = '<h1>Progress</h1>'
//   progress.forEach((item, index) => {
//     progressCol.innerHTML += `
//         <div class="task">
//             <p>${item}</p>
//             <button onclick=shiftToLeft('progress',${index})>&larr;</button>
//             <button onclick=shiftToRight('progress',${index})>&rarr;</button>
//         </div>
//     `;
//   });
// }

// function renderDone() {
// doneCol.innerHTML = '<h1>DOne</h1>'
//   done.forEach((item, index) => {
//     doneCol.innerHTML += `
//         <div class="task">
//             <p>${item}</p>
//             <button onclick=shiftToLeft('done',${index})>&larr;</button>
//         </div>
//     `;
//   });
// }

// renderTodo()
// renderProgress()
// renderDone()

let todo = ["todo1", "todo2", "todo3", "todo4"];
let progress = ["progress1", "progress2", "progress3"];
let done = ["done1"];

let todoColumn = document.getElementById("todo");
let progressColumn = document.getElementById("progress");
let doneColumn = document.getElementById("done");

function renderTodo() {
  todoColumn.innerHTML = '<h1>Todo</h1>'
  todo.forEach((item, index) => {
    todoColumn.innerHTML += `
        <div class="task">
         <p>${item}</p>
        <button onclick=shiftToRight('todo',${index})>&rarr;</button>
  </div> 
    `;
  });
}

function renderProgress() {
  progressColumn.innerHTML = '<h1>Progress</h1>'
  progress.forEach((item, index) => {
    progressColumn.innerHTML += `
        <div class="task">
         <p>${item}</p>
        <button onclick=shiftToLeft('progress',${index})>&larr;</button>
        <button onclick=shiftToRight('progress',${index})>&rarr;</button>
  </div> 
    `;
  });
}

function renderDone() {
  doneColumn.innerHTML = '<h1>Done</h1>'
  done.forEach((item, index) => {
    doneColumn.innerHTML += `
        <div class="task">
         <p>${item}</p>
        <button onclick=shiftToLeft('done',${index})>&larr;</button>
  </div> 
    `;
  });
}


function shiftToRight(colName, index){
    if(colName === 'todo'){
        let removedItem = todo[index]
        todo = todo.filter((item,i)=>i!==index)
        console.log(todo)
        renderTodo()
        console.log(removedItem)
        progress.push(removedItem)
        renderProgress()
    }else if(colName==='progress'){
        let removedItem = progress[index]
        progress = progress.filter((item,i)=>i!==index)
        renderProgress()
        done.push(removedItem)
        renderDone()
    }

}


function shiftToLeft(colName, index){
    if(colName === 'done'){
        let removedItem = done[index]
        done = done.filter((item,i)=>i!==index)
        console.log(done)
        renderDone()
        console.log(removedItem)
        progress.push(removedItem)
        renderProgress()
    }else if(colName==='progress'){
        let removedItem = progress[index]
        progress = progress.filter((item,i)=>i!==index)
        renderProgress()
        todo.push(removedItem)
        renderTodo()
    }

}

renderTodo()
renderProgress()
renderDone()
