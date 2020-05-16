//Program to calulate Volume
//volume= pi*r*r*h where r is radius and h is height

    function Cylinder(radius,height){
	this.radius=radius;
	this.height=height;
	this.volume=function(){
		console.log(Math.PI*radius*radius*height) ; 
	}

}
const cylinder1=new Cylinder(6,10);
const cylinder2=new Cylinder(4,9);
console.log(cylinder1.volume());
console.log(cylinder2.volume());