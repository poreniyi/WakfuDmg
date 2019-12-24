let slider=document.querySelector("#slider");
let sliderOutput=document.querySelector('#sliderValue');
slider.oninput=function(){
    sliderOutput.textContent=this.value;
}