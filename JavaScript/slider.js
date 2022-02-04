const slider = document.getElementById("slider");
const selector = document.getElementById("selector");
const bar = document.getElementById("bar");

slider.oninput = function(){
    const value = this.value + "%"
    
    selector.style.marginLeft = value
    bar.style.width = value
}
