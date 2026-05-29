const btn = document.getElementById('btn')


// btn.addEventListener('click',()=>{
//     console.log('Dheere dabaeye na...')
// })

function btnClicked(){
    console.log('Button Clicked')
}

function throttle(fn,delay){
    let shouldCall = true
    return function(...args){
        if(!shouldCall){
            return
        }

        fn(args)
        shouldCall = false

        setTimeout(()=>{
            shouldCall = true
        },delay)
    }
}


function throttle2(fn, delay){
    let lastCall = 0
    return function(...args){
        let now = new Date().getTime
        if((now-lastCall)>=0){
            lastCall = now
            fn.apply(this,args)
        }
    }
}

const throttleSearch = throttle(btnClicked,1000)

btn.addEventListener('click',throttleSearch)




function debounce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}

function throttle(fn,delay){
    let shouldCall = true
    return function(...args){
        if(!shouldCall){
            return
        }
        fn(args)
        shouldCall = false

        setTimeout(()=>{
            shouldCall = true
        },)

    }
}

// Promise

const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('I am resolved')
    },1000)

})


myPromise
    .then(()=>{
        console.log('Resolved')
    })
    .catch(()=>{
        console.log("Failed")
    })
    .finally(()=>{
        console.log('Bhaiya mai to chaluga hi')
    })