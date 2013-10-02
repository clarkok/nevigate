var	current		= "(none)";

function	init(str){
	var	show	= document.getElementById(str);
	var	links	= show.getElementsByClassName("linkblock");
	for (var i=0; i<links.length; i++){
		links[i].style.left	= ''+Math.random()*90+'%';
		links[i].style.top	= ''+(i*((window.innerHeight - 20) / links.length)+20)+'px';
	}
};

function	show(str){
	if (str == current)	return;
	if (current != "(none)")	document.getElementById(current).className	= "hide";
	current	= str;
	init(current);
	document.getElementById(current).className	= "show";
	this.className	= "mitem-seleted";
};


function	setCanvas(){
	var	cvs	= document.getElementById("bg-canvas"),
		cnt	= cvs.getContext("2d");
	cvs.width	= window.innerWidth;
	cvs.height	= window.innerHeight;

}
