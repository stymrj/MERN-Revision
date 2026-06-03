// const parentDiv = document.getElementById('parent')

// console.log(parentDiv)
// console.log(parentDiv.children)


// const child1 = document.getElementById('child1')
// console.log(child1.nextElementSibling.nextElementSibling)






//DOM Manipulation

const body = document.getElementById('my-body')
console.log(body)

let arr = [
    {
        'heading' : 'this is first Heading!',
        'text' : 'this is text'
    },
    {
        'heading' : 'this is second Heading!',
        'text' : 'this is text'
    },
    {
        'heading' : 'this is third Heading!',
        'text' : 'this is text'
    },
    {
        'heading' : 'this is fourth Heading!',
        'text' : 'this is text'
    }
]

arr.forEach((item,i)=>{
    // body.innerHTML += `
    //     <div class="my-card">
    //         <h1>${item.heading}</h1>
    //         <p>${item.text}</p>
    //     </div>
    // `


    const card = document.createElement('div')
    card.setAttribute('class', 'my-card')
    card.setAttribute('id',`my-card-${i}`)


    const heading = document.createElement('h1')
    heading.textContent = item.heading

    const text = document.createElement('p')
    text.textContent = item.text

    card.appendChild(heading)
    card.appendChild(text)

    body.appendChild(card)





    card.addEventListener('click',()=>myFunc(i))

})

function myFunc(i){
    const clickedCard = document.getElementById(`my-card-${i}`)
    clickedCard.style.backgroundColor = "cyan"

}
