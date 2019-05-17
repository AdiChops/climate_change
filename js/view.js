document.getElementById("navhome").addEventListener("mouseover", ()=>{
	document.getElementById("down").style.backgroundImage = "url('./images/pollution.jpg')";
	document.getElementById("down").style.filter = "grayscale(70%)";
});
document.getElementById("navfacts").addEventListener("mouseover", ()=>{
	document.getElementById("down").style.backgroundImage = "url('./images/carbon.jpg')";
	document.getElementById("down").style.filter = "grayscale(70%)";
});
document.getElementById("navstats").addEventListener("mouseover", ()=>{
	document.getElementById("down").style.backgroundImage = "url('./images/beach.jpg')";
	document.getElementById("down").style.filter = "grayscale(70%)";
});
document.getElementById("navul").addEventListener("mouseout", ()=>{
	document.getElementById("down").style.backgroundImage = "url('./images/melt.jpg')";
	document.getElementById("down").style.filter = "";
});
addEventListener('scroll', () => {
	if (document.body.scrollTop > innerHeight || document.documentElement.scrollTop > innerHeight){
		document.getElementById("gohome").style.display = "block";
	}
	else{
		document.getElementById("gohome").style.display = "none";
	}
});