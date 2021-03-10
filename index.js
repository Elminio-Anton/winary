document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll("button").forEach((buttonNode) => {
        buttonNode.addEventListener("click", (event) => {
            event.preventDefault()
            alert("Buttons are not working")
        })
    })
})      
