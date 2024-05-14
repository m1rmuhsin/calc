// const numbers = [...document.querySelectorAll('.num')]
// const signs = document.querySelectorAll('.sign')
// const display = document.querySelector('input')
// const dot = document.querySelector('.dot')
// const clear = document.querySelector('.c')
// const remove= document.querySelector('.r')

// console.log(numbers)

// //console.log(numbers)

// class Calculator {
//     display 
//     signView
//     signOperator 
//     operators = ['+','=','/','x']

//     setDisplay (value) {
//        // console.log(value)
//        display.value = display.value + value
//     }
//    get lastValue () {
//     return display.value[display.value.length -1]
//    }

//     get firstValue () {
//     return display.value[0]
//    }

//     numbers (event) {
//         const num = event.target.textContent
//         // console.log(num)
      

//         if(
//             this.lastValue == 0 && display.value.length == 1
//         ) return display.value = num

//         if(
//             this.lastValue == 0 && this.signView
//         ) return display.value = display.value.slice(0,-1) + num






//         this.setDisplay(num)
//     }

//     signs (event){
//         console.log(event)

//         const signView = event.target.textContent.trim()
//         const signOperator = event.target.dataset.sign

//             if(
//                 !display.value ||
//                 this.lastValue == '.' || this.signOperator
//             )return

//             this.signView == signView
//             this.signOperator = signOperator
//         this.setDisplay(signView)

//     }
//     dot () {
//         this.setDisplay('.')
//     }
//     clear () {
//         display.value = null
//     }
//     remove () {

//         let deleted = display.value.split('.')
//         let newValue = deleted.slice(0,-1).join('')

//         display.value = newValue

//     }
// }

// let calc = new Calculator();


// for (const number of numbers) {
//     number.addEventListener('click',function (event){
//         return calc.numbers(event)
//     })
// }


// for (const sign of signs) {
//     sign.addEventListener('click',function (event){
//         return calc.signs(event)
//     })
// }

// dot.addEventListener('click',function () {
//     return calc.dot()
// })

// clear.addEventListener('click',function () {
//     return calc.clear()
// })

// remove.addEventListener('click',function (){
//        return calc.remove()
// })








const numbers = [...document.querySelectorAll('.num')]
const signs = document.querySelectorAll('.sign')
const display = document.querySelector('input')
const dot = document.querySelector('.dot')
const clear = document.querySelector('.c')
const remove = document.querySelector('.r')

console.log(numbers)

//console.log(numbers)

class Calculator {
    display 
    signView
    signOperator
    operators = ['+', '-', '✕', '÷']

    setDisplay (value) {
       // console.log(value)
       display.value = display.value + value
    }
    get lastValue(){
        return display.value[display.value.length - 1]
    }    

    

    get firsValue (){
        return display.value[0]
    }

    numbers (event) {
        const num = event.target.textContent
        // console.log(num)

        this.setDisplay(num)

        if(
            this.lastValue == 0 && display.value.length == 1
        )return display.value = num

        if(
            this.lastValue == 0 && this.signView
        )
        return display.value = display.value.slice(0, -1) + num
        return this.setDisplay(signView)
    }

    signs (event){
        console.log(event)

        const signView = event.target.textContent.trim()
        const signOperator = event.target.dataset.sign

        if(
            !display.value 
            this.lastValue == '.'this.signOperator
        )return

        this.signView = signView
        this.signOperator = signOperator

        this.setDisplay(signView)

    }
    dot () {
        this.setDisplay('.')

        if(
            !display.value ||
            this.operators.includes(this.lastValue)
        ){
            display.value = display.value + "0."
        }
        if(
            !display.value ||
            this.lastValue == "."
        )return

      return this.setDisplay(".")
    }
    clear () {
        display.value = null
        this.signOperator = null
        this.signView = null
    }
    remove () {
        let deleted = display.value.split('')
        let newValue = deleted.slice(0, -1).join('')
        display.value = newValue
    }

    calculate() {
        const [num1,num2] = display.value.split(this.signView)
        display.value =  eval (num1 + this.signOperator + num2)
        this.signOperator = null
        this.signView = null
    }
}

let calc = new Calculator();


for (const number of numbers) {
    number.addEventListener('click',function (event){
        return calc.numbers(event)
    })
}


for (const sign of signs) {
    sign.addEventListener('click',function (event){
        return calc.signs(event)
    })


    
}

dot.addEventListener('click',function () {
    return calc.dot()
})

clear.addEventListener('click',function () {
    return calc.clear()
})
remove.addEventListener('click', function(){
    return calc.remove()
})

equal.addEventListener ('click',function () {
    return calc.calculate()
})