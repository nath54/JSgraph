canvas=document.getElementById("canvas");
context=canvas.getContext("2d");

tex=200;
tey=200;
cam=[-50,-50];

f=document.getElementById("fonction").value;
p=document.getElementById("precision").value;
min=document.getElementById("min").value;
max=document.getElementById("max").value;
color=document.getElementById("color").value;

min=parseInt(min);
max=parseInt(max);
p=parseFloat(p);

function ff(x){
	return x*2;
}

function calc(){
	valeurs=[];
	aa=(max-min)/p;
	for( x=0 ; x<aa ; x++){
		z=min+x;
		valeurs.push( ff(z) );
    }
    return valeurs;
}

valeurs=calc();

function aff(){
	context.fillStyle="rgb(250,250,250)";
	context.fillRect(0,0,tex,tey);
	context.beginPath();
	
}

aff();
