console.log("Hello!")
const home=document.getElementById("home")
	  portfolio=document.getElementById("portfolio")
	  about=document.getElementById("about")
	  bar=document.getElementById("active_bar");



const home_w = home.offsetWidth;
const portfolio_w = portfolio.offsetWidth;
const about_w = about.offsetWidth;
let margin=40;
let atr
if (home.classList.contains("active")) {
	// margin=margin+
	console.log(margin)
	atr= "margin-left: "+margin+"px; width: "+home_w+"px";
	document.getElementById("bar").setAttribute("style",atr);
}
if (portfolio.classList.contains("active")) {
	margin=margin+home_w;
	console.log(margin)
	atr= "margin-left: "+margin+"px; width: "+portfolio_w+"px";
	document.getElementById("bar").setAttribute("style",atr);
}

if (about.classList.contains("active")) {
	margin=margin+home_w+portfolio_w;
	console.log(margin)
	atr= "margin-left: "+margin+"px; width: "+about_w+"px";
	document.getElementById("bar").setAttribute("style",atr);
}




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activ");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}