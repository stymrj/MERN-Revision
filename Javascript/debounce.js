// const search = document.getElementById('search')

// // search.addEventListener('keyup',(e)=>{
// //     console.log(e.target.value)
// // })

// function searchApi(query){
//     console.log('Searching for ', query)
// }


// function debounce(fn, delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer)
//         timer = setTimeout(()=>{
//             fn.apply(this,args)
//         },delay)
//     }
// }

// const debouncedSearch = debounce(searchApi,1000)


// search.addEventListener('input',(e)=>{
//     debouncedSearch(e.target.value)
// })




const search = document.getElementById('search')

// search.addEventListener('input',(e)=>{
//     console.log('Searching for  - ',e.target.value)
// })

//Debounce - It is a technique to limit how often a function executes/runs.
//           It delyas the executions until the user stop triggering the events for a specific time.


function searchApi(query){
    console.log('Searching for : ', query)
}

function debounce(fn,delay){
    let timer
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}

const debouncedApi = debounce(searchApi,2000)

search.addEventListener('input',(e)=>{
    debouncedApi(e.target.value)
})



