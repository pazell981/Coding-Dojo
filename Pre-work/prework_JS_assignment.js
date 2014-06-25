console.log("Problem #1")
for (i=1; i<=255; i++){
	console.log(i);
}

console.log("Problem #2")
for (i=1; i<=1000; i++){
	if(i%2!==0){
		console.log(i);
	}
}

console.log("Problem #3")
var sum=0;
for (i=1; i<=5000; i++){
	if(i%2!==0){
		sum+=i;
	}
}
console.log("The total is: " + sum)

console.log("Problem #4");
var array=[-3, 3, 5, 7];
var check=0;
for (i=0; i<=array.length; i++){
	if (array[i]>check){
		check=array[i];
	}
}
console.log("The max value in the array is: " + check)

console.log("Problem #5");
var array2=[1, 3, 5, 7, 20];
var sumavg = 0;
for (i=0; i <= array2.length; i++){
	sumavg += array2[i];
	}
var avg = sumavg / array2.length;
console.log("Array average is: " + avg)

console.log("Problem #6");
var array3 = [-3,5,1,3,2,10];
for(i=0; i <= array3.length/2; i++) {
    var elem = array3[i];
    array3[i] = array3[array3.length-i-1];
    array3[array3.length-i-1] = elem;
}
console.log(array3);

console.log("Problem #7");
var array4 = [-3,5,1,3,2,10];
for (i = 0; i < array4.length; i++) {
	if (array4[i] < 0) {
		var j = i;
		while (j < array4.length) {
			var elem2 = array4[j];
			array4[j] = array4[(j+1)];
			array4[(j+1)] = elem2;
		}
		array4.pop();
	}
}
console.log(array4);

console.log("Problem #8");
var array5=[];
for (i = 0; i < 10; i++) {
    array5.push(Math.ceil(Math.random()*100));
}
console.log(array5);


