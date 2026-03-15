const display = document.getElementById("display")

const buttons = document.querySelectorAll("[data-value]")
const equalBtn = document.getElementById("equal")
const deleteBtn = document.getElementById("delete")

// додавання значення
buttons.forEach(function(button){

    button.addEventListener("click", function(){

        const value = this.dataset.value

        if(value === "C"){
            display.value = ""
        }else{
            display.value += value
        }

    })

})

// обчислення
equalBtn.addEventListener("click", function(){

    try{
        display.value = eval(display.value)
    }catch{
        display.value = "Error"
    }

})

// видалення останнього символу
deleteBtn.addEventListener("click", function(){

    display.value = display.value.slice(0,-1)

})
