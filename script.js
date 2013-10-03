var	current		= "(none)";

function	init(str){
	var	show	= document.getElementById(str);
	var	links	= show.getElementsByClassName("linkblock");
	for (var i=0; i<links.length; i++){
		//links[i].style.left	= ''+Math.random()*90+'%';
		links[i].style.left	= ''+i*(90/links.length)+'%';
		links[i].style.top	= ''+i*(100/links.length)+'%';
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

var	arcs	= new Array;
var	last,	now;

function	control(){
	
}

function	sector_ring(cnt, x, y, r1, r2, a, d, fill){
	cnt.fillStyle	= fill ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)";
	cnt.beginPath();
	cnt.arc(x, y, r2, a, a+d, true);
	cnt.lineTo(x+r1*Math.cos(a+d), y+r1*Math.sin(a+d));
	cnt.arc(x, y, r1, a+d, a, false);
	cnt.lineTo(x+r2*Math.cos(a), y+r2*Math.sin(a));

	cnt.fill();
}

function	draw(cnt){
	cnt.clearRect(0, 0, window.innerWidth, window.innerHeight);
	for (var i=0; i<arcs.length; i++){
	}
}

function	setCanvas(){
	var	cvs	= document.getElementById("bg-canvas"),
		cnt	= cvs.getContext("2d");
	cvs.width	= window.innerWidth;
	cvs.height	= window.innerHeight;

	draw(cnt);
}
