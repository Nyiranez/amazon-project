function addme(){
  let cart=document.getElementById("cart");
    cart.style.backgroundColor="red";

}

let elements=document.querySelectorAll(".product-color-option");


for(let i=0; i<elements.length; i++){
    elements[i].addEventListener("click", function(e){
      let prev=document.querySelector(".product-color-option.product-color-option-selected");
      if(prev){
        prev.classList.remove("product-color-option-selected");
      }
      e.target.classList.add("product-color-option-selected")
    });
}
let elementsize=document.querySelectorAll(".product-size-option");


for(let i=0; i<elementsize.length; i++){
    elementsize[i].addEventListener("click", function(e){
      let prevsize=document.querySelector(".product-size-option.product-size-option-selected");
      if(prevsize){
        prevsize.classList.remove("product-size-option-selected");
      }
      e.target.classList.add("product-size-option-selected");
    });
}
let elementcolor2=document.querySelectorAll(".product-color-option");


for(let i=0; i<elementcolor2.length; i++){
    elementcolor2[i].addEventListener("click", function(e){
      let prevcolor2=document.querySelector(".product-color-option.product-color2-option-selected");
      if(prevcolor2){
        prevcolor2.classList.remove("product-color2-option-selected");
      }
      e.target.classList.add("product-color2-option-selected");
    });
}
let elementsize2=document.querySelectorAll(".product-size-option");


for(let i=0; i<elementsize2.length; i++){
    elementsize2[i].addEventListener("click", function(e){
      let prevsize2=document.querySelector(".product-size-option.product-size2-option-selected");
      if(prevsize2){
        prevsize2.classList.remove("product-size2-option-selected");
      }
      e.target.classList.add("product-size2-option-selected");
    });
}

let sweat= document.querySelector(".sweat2");
let colorselected= document.querySelector(".product-color2-option-selected");
colorselected.addEventListener("click", function(){
    sweat.src="images/products/men-cozy-fleece-zip-up-hoodie-black.jpg";
});




