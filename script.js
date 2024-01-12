document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    // ...
    
  
  // JS List of Fruits
    const fruitName = [
        "apple",
        "pomegranate",
        "banana",
        "mango",
        "litchi",
        "strawberry",
        "dragon fruit",
        "pineapple",
        "guava",
        "pear",
        "tomato"
    ]

    // Creating a random Fruit name
    let randomFruitName = fruitName[Math.floor(Math.random()*fruitName.length)]
    let dashes = ""
    let a = []
    let word =[]
    for(let i = 0 ; i < randomFruitName.length ; i++){
        a.push(randomFruitName[i])
    }
    function listGenerate(){
        for (let i = 0 ; i < randomFruitName.length ; i++) {
            let ele = document.createElement("li")
            ele.innerHTML = " _ "
            ele.className = "liItem"
            let ulItems = document.querySelector("ul.guessList")
            ulItems.appendChild(ele)
        }
        word = document.querySelectorAll(".liItem")
        console.log(word)
        document.querySelector("#gameStart").removeEventListener("click",listGenerate)
    }
    document.querySelector("#gameStart").addEventListener("click",listGenerate)
    

    console.log(a)
    let b = [...a]
    //Rendor Random Dashes
    let guessList = document.querySelector("#guessList")
    guessList.innerHTML = dashes

    const keys = document.querySelectorAll(".Keys")

    let wrongGuess = 0
    let rightGuess = randomFruitName.length

    
    keys.forEach( (event) => {
        event.addEventListener("click",()=>{
            let clicked = event.innerHTML
            console.log(clicked)
            if(a.includes(clicked)){
                rightGuess--
                for(let i=0; i<randomFruitName.length; i++){
                    if(randomFruitName[i]===clicked){
                        word[i].innerHTML = clicked
                    }else{
                        
                    }
                }
            }else{
                wrongGuess++
            }
            console.log(rightGuess)
            console.log(wrongGuess)
            console.log(b)
            })
        })
});