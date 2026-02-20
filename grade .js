let marks=parseInt(prompt("Enter marks:"));

if(marks>=80 && marks<=100){
	console.log("Grade A");
} else if(marks>=60 && marks<80){
	console.log("Grade B");
} else if(marks>=40 && marks<40){
	console.log("Grade C");
}
else{
	console.log("invalid marks");
}
