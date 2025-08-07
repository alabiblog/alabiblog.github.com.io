 
//     function openModal() {
//   document.getElementById("contactModal").classList.remove("hidden");
// }

// function closeModal() {
//   document.getElementById("contactModal").classList.add("hidden");
// }

let header1 = document.querySelector("#vvs")
let header2 = document.querySelector("#headdd")
let button = document.querySelector("#clickk")
let welcom = document.querySelector("#welcomee")


header1.addEventListener("click", function(){
header2.classList.remove("hidden")
welcom.classList.add("hidden")

})

button.addEventListener("click", function () {
    header2.classList.add("hidden")
    welcom.classList.remove("hidden")
})

let slide1 = document.querySelector("#slidd")
let imagine1 = document.querySelector("#immgg")
let divv = document.querySelector("#boxDiv")

slide1.addEventListener("click", function () {
    imagine1.setAttribute("src","../BLOG/blog222222222.jpg")
    imagine1.classList.add("")
    divv.classList.add("h-50")
})
    
