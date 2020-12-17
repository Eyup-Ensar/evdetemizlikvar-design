var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    } 
    if(this.children[1].classList.contains("rotate")==false){
    this.children[1].classList.add("rotate");
    }else{
        this.children[1].classList.remove("rotate");
    }
});
}
