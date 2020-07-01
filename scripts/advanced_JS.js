var d = new Date();
console.log(d);
function time() {
	document.getElementById("time").innerHTML = Date();
}
function check(num) {	
	try {
	    if (num>=10 && num<=100) {	
	    	var x = 0, y = 1;
			var z = 0;
			var fibo = [1];
			for(i=0; z<num; i++) {
				z = x + y;
				x = y;
				y = z;
				if (z<num) {
					fibo.push(z);
				}
			}
			var fib_series = fibo.join(', ');
			document.getElementById("fibonacci").innerHTML = "Fibonacci series upto entered number is: "+fib_series; 
		} else {
			throw(err);
		}
  	}	
  	catch(err) {
    	document.getElementById("fibonacci").innerHTML = "Input is invalid";
  	}
}
var description = document.getElementById("desc").innerText;
var words = description.split(" ");
document.getElementById("output").innerHTML = "The 5th, 7th, and 10th words from the description given about HTML are: "+words[4]+" "+words[6]+" "+words[9];