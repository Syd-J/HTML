let num1 = 7;
let num2 = 10;
console.log(num1 + num2);
let arr = [1, 2, 3, 4, 5];
var typecast = String(arr[3]);
var total = 76 + 78 + 83;
var average = total/3;
document.getElementById("total").innerHTML = "total marks: "+total;
document.getElementById("average").innerHTML = "average marks: "+average;
function multiply(a, b = 1) {
	// body...
	return a*b;
}
console.log(multiply(7, 3));
console.log(multiply(7));
function Validate() 
{
    var name = document.getElementById("name").value;
    
    if (!name.match(/^[a-zA-Z]+$/)) 
    {
        alert('Only alphabets are allowed in Name');
        return false;
    }

    if (frm.subject1.checked == false && frm.subject2.checked == false && frm.subject3.checked == false) {
    	alert("select at least one checkbox");
    	return false;
    }
    var phone = document.getElementById("phone").value;
    var course;
    if (frm.bachelors.checked) {
    	course = "Bachelors";
    } else {
    	course = "Masters";
    }
    var desc = document.getElementById("description").value;
    if (frm.subject1.checked) {
    	var sub1 = "Data Structures and Algorithms";
    } else {
    	var sub1 =""
    }
    if (frm.subject2.checked) {
    	var sub2 = "DBMS";
    } else {
    	var sub2 = ""
    }
    if (frm.subject3.checked) {
    	var sub3 = "Operating Systems";
    } else {
    	var sub3 = ""
    }
    alert("Name: "+name+", Phone Number: "+phone+", Choice of Course: "+course+", Description: "+desc+", Subject interests: "+sub1+", "+sub2+", "+sub3);
}
let num = 49;
let x = Math.random();
document.getElementById("math").innerHTML = "num: "+num+", power of 2: "+Math.pow(num,2)+", square root: "+Math.sqrt(num)+", absolute value: "+Math.abs(num)+", random number: "+x+", ceil: "+Math.ceil(x)+", round: "+Math.round(x)+", floor: "+Math.floor(x)+", sine of number: "+Math.sin(x)+", cosine of number: "+Math.cos(x);
