canvas=document.getElementById("canvas");
context=canvas.getContext("2d");

tex=200;
tey=200;
cam=[-50,-50];

f=document.getElementById("fonction").value;
p=document.getElementById("precision").value;
vmin=document.getElementById("min").value;
vmax=document.getElementById("max").value;
color=document.getElementById("color").value;

vmin=parseInt(vmin);
vmax=parseInt(vmax);
p=parseFloat(p);

function ff(x){
	return eval(f);
}

vit=100

valeurs=[];

function aff(){
	context.fillStyle="rgb(250,250,250)";
	context.strokeStyle="rgb(0,0,0)";
	context.fillRect(0,0,tex,tey);
	context.beginPath("2d");
	context.moveTo(cam[0]+0,cam[1]+vmin);
	context.lineTo(cam[0]+0,cam[1]+vmax);
	context.stroke();
	context.closePath();
	context.beginPath("2d");
	context.moveTo(cam[0]+vmin,cam[1]+0);
	context.lineTo(cam[0]+vmax,cam[1]+0);
	context.stroke();
	context.closePath();
	context.strokeStyle=color;
	context.beginPath("2d");
	context.moveTo( cam[0]+vmin , cam[1]+valeurs[0] );
	xx=vmin+p;
	for( v of valeurs ){
	    context.lineTo( cam[0]+xx , cam[1]+v );
	    xx+=p;
	}
	context.stroke();
	context.closePath();
}

function calc(){
	valeurs=[];
	aa=(vmax-vmin)/p;
	for( x=0 ; x<aa ; x++){
		z=vmin+x;
		valeurs.push( ff(z) );
    }
    aff();
    return valeurs;
}

valeurs=calc();

function move(direction){
    if( direction == "Up") cam[1]-=vit;
    else if( direction == "Down") cam[1]+=vit;
    else if( direction == "Left") cam[0]-=vit;
    else if( direction == "Right") cam[0]+=vit;
    aff();
}

aff();

function appli(){
    f=document.getElementById("fonction").value;
    p=document.getElementById("precision").value;
    vmin=document.getElementById("min").value;
    vmax=document.getElementById("max").value;
    color=document.getElementById("color").value;
    vmin=parseInt(vmin);
    vmax=parseInt(vmax);
    p=parseFloat(p);
    valeurs=calc();
    aff();
}


