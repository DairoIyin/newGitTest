//creating a stopwatch 
//start the watch to begin counting
//stop the watch
//then check duration..
function Stopwatch(){
	let startTime,stopTime,running,duration=0;
	this.start=function(){
		if(running)
			throw new Error('Stopwatch has already started');
		running =true;
		startTime= new Date();
	};
	this.stop=function(){
		if(!running)
			throw new Error('Stopwatch is not started');
		running =false;
		stopTime= new Date();
		const seconds = (stopTime.getTime()-startTime.getTime())/1000;
		duration+=seconds;

	};
	this.reset=function(){
		startTime=null;
		endTIme=null;
		running=false;
		duration=0;
	};
	Object.defineProperty(this,'duration',{
		get:function(){ return duration;}
	});

}
