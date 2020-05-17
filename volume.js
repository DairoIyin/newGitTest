//Program to calulate Volume
//volume= pi*r*r*h where r is radius and h is height

//print the volume of a cylinde
function Cylinder(radius,height){
	this.radius=radius;
	this.height=height;
	this.volume=function(){
		return (Math.PI*radius*radius*height).toFixed(4); 
	}

}
const cylinder1=new Cylinder(6,10);
const cylinder2=new Cylinder(4,9);
console.log('volume=',cylinder1.volume());
console.log('volume=',cylinder2.volume());