console.log("hi this is me working fine");
var inner_height = window.innerHeight;
var section_1 = document.getElementById("section_1");
var section_2 = document.getElementById("section_2");
var section_3 = document.getElementById("section_3");
section_1.style.height = inner_height + "px";
section_2.style.height = inner_height + "px";
section_3.style.height = inner_height + "px";

document.getElementById("capabilities").addEventListener("mouseover",go_top);
document.getElementById("capabilities").addEventListener("mouseout",go_down);
var hover_box_capabilities = document.getElementById("hover_box_capabilities");
function go_top(){
    hover_box_capabilities.style.top = "0%";
    hover_box_capabilities.style.height = "100%";
    hover_box_capabilities.style.color = "#a18238";
}
function go_down(){
    hover_box_capabilities.style.top = "90%";
    hover_box_capabilities.style.height = "100%";
    hover_box_capabilities.style.color = "black";
}