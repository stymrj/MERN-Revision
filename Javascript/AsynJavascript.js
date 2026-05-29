


//call back banake dikhao

function greet(name, callback){
    console.log('Hello '+name)
    callback()
}

function goodBye(){
    console.log('Hnji tata Bye bye!!')
}

greet('Satyam', goodBye)


//Prommisr

const myPromise = new Promise((res,rej)=>{
    const success = true;
    setTimeout(()=>{
        if(success){
            console.log('Resolved')
        }else{
            console.log('Failed')
        }
    },2000)
})

console.log(myPromise)

myPromise
    .then((result)=>{
        console.log(result)
    })
    .catch((err)=>{
        console.log(err)
    })