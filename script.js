//var hover = document.querySelector(".next-btn");
//var image = document.querySelector(".btn-next");
//var img = document.querySelector(".btnn-next");
//var hovers = document.querySelector(".nextt-btn");
//hover.addEventListener("mouseover", () => {
//image.parentNode.removeChild(image);
//hover.innerHTML = "<img src='img/white .svg'>";
//});
//hover.addEventListener("mouseout", () => hover.appendChild(image));
//hovers.addEventListener("mouseover", () => {
// img.parentNode.removeChild(img);
// hovers.innerHTML = "<img src='img/white .svg'>";
//});
//hovers.addEventListener("mouseout", () => hovers.appendChild(img));
var btn_scroll = document.querySelector(".scroll-top");
btn_scroll.addEventListener("click", scroll);
function scroll() {
  window.scrollBy(0, -9000);
}
