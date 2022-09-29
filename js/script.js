let img = document.querySelector("#img")
let imgBox = document.querySelector(".img-box")
let upload = document.querySelector("#upload")
let Brightness = document.querySelector("#Brightness")
let Contrast = document.querySelector("#Contrast")
let Saturate = document.querySelector("#Saturate")
let hue_rotate = document.querySelector("#hue-rotate")
let Sepia = document.querySelector("#Sepia")
let grayscale = document.querySelector("#grayscale")
let Blur = document.querySelector("#Blur")
let download = document.querySelector("#download")
let reset = document.querySelector("span")
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


window.onload = function(){
    imgBox.style.display = "none"
    download.style.display = "none"
    reset.style.display = "none"
}








// reset---


function resetDate(){
img.style.filter = "none"
Contrast.value = "100"
Saturate.value = "100"
hue_rotate.value = "0"
Sepia.value = "0"
grayscale.value = "0"
Blur.value = "0"

}



upload.onchange = function(){
    resetDate()
    imgBox.style.display = "block"
    download.style.display = "block"
    reset.style.display = "block"
    let file = new FileReader()
    file.readAsDataURL(upload.files[0])
    file.onload = function(){
        img.src = file.result
    }
    img.onload = function(){
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img,0,0,canvas.width,canvas.height)
        img.style.display = "none"
    }

}




// addfiltet--
let filters = document.querySelectorAll("ul li input")
filters.forEach((fliter)=>{
    fliter.addEventListener("input",function(){
        
    ctx.filter = `
    Brightness(${Brightness.value}%)
    Contrast(${Contrast.value}%)
    Saturate(${Saturate.value}%)
    hue-rotate(${hue_rotate.value}deg)
    Sepia(${Sepia.value}%)
    grayscale(${grayscale.value}%)
    Blur(${Blur.value}px)
    `
    ctx.drawImage(img,0,0,canvas.width,canvas.height)
    })
})


download.onclick = function(){
download.href = canvas.toDataURL()
   
}