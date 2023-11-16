let addBtn = document.querySelector("#addBtn")
let ul = document.querySelector("ul")
let input = document.querySelector("input")

addBtn.addEventListener("click", () => {
    let li = document.createElement("li")
    li.innerText = input.value
    ul.append(li)
    let delete_btn = document.createElement("button")
    li.append(delete_btn)
    delete_btn.innerText = "Delete"
    delete_btn.addEventListener("click" , ()=>{
        li.remove()
    })
    
})

input.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        let li = document.createElement("li")
        li.innerText = input.value
        ul.append(li)
        let delete_btn = document.createElement("button")
        li.append(delete_btn)
        delete_btn.innerText = "Delete"
        delete_btn.addEventListener("click" , ()=>{
            li.remove()
        })
    }
    // delete_btn = querySelectorAll("button")
})



