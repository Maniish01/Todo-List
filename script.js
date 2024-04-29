var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


var cancelbutton=document.getElementById("button2")

cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none" 
})
// var addbook=document.getElementById("button1")

// var addbutton=document.getElementById("button1")
// addbutton.addEventListener("click",function(event){
//     event.preventDefault()
//     popupoverlay.style.display="none"
//     popupbox.style.display="none" 
// })

// var container= document.querySelectorAll(".container")
// var addbutton=document.getElementById("button1")
// var booktitleinput=document.getElementById("input1")
// var bookauthorinput=document.getElementById("input2")
// var bookdescription=document.getElementById("input3")

// addbutton.addEventListener("click",function(event){
//     event.preventDefault()
//     var div=document.createElement("div")
//     div.setAttribute("class","book-container")
//     div.innerHTML=`<h2>${booktitleinput.value}</h2>
//     <h5>${bookauthorinput.value}</h5>
//     <p>${bookdescription.value}</p>
//     <button></button>`
//     container.append(div)
//     popupoverlay.style.display="none" 
//     popupbox.style.display="none" 
// })

//container, button1,  input1, input2, input3

var container= document.querySelector(".container")
var addbutton=document.getElementById("button1")
var booktitleinput=document.getElementById("input1")
var bookauthorinput=document.getElementById("input2")
var bookdescription=document.getElementById("input3")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`
    <h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none" 
})

function deletebook(event){
    event.target.parentElement.remove()
}

window.addEventListener('load', function() {
    var container = document.querySelector(".container");
    container.innerHTML = '';
});