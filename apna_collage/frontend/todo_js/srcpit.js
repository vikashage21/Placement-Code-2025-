let input = document.querySelector('#todoInput')
let btn = document.querySelector('button')
let ul = document.querySelector('ul')

btn.addEventListener('click', function () {
    if(input.value.trim().length==0) return;
    let li = document.createElement('li')
    li.innerText = input.value.trim()
    let clearBtn = document.createElement('button')
    
    clearBtn.innerText ="x"

    // adding event listener to clear button
    clearBtn.addEventListener('click', function(){
        li.remove()
    })
    ul.append(li)
    li.appendChild(clearBtn)
    input.value = " "


})

// remove all  item
btn.nextElementSibling.addEventListener('click', function(){
    ul.remove()
})