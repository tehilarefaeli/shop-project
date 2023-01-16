let btns= document.querySelectorAll("button")

btns.forEach(b=>{
    b.addEventListener("click",btnClick)
})

let ac= document.querySelector("#ac")
ac.removeEventListener("click",btnClick)
ac.addEventListener("click",clear)

let eq= document.querySelector("#eq")
eq.removeEventListener("click",btnClick)
eq.addEventListener("click",calculate)

function btnClick(){
    document.querySelector(".value").textContent+=this.textContent
}

function clear(){
    document.querySelector(".value").textContent = ""
}

function calculate(){
    let valueEl=document.querySelector(".value")
    valueEl.textContent=eval(valueEl.textContent)
}