console.log("Problem #1");
var x = [2, 3, 5, 7, 6];
var temp=x[0];
length=x.length-1;
x[0]=x[length];
x[length]=temp;
console.log(x);


console.log("Problem #2")
var x = [1, 3, 5, 7, 2]];
var temp=0;
length=x.length-1;
for (i=0; i<length/2; i++){
    temp=x[i];
    x[i]=x[length-i];
    x[length-i]=temp;
}
console.log(x);

console.log("Problem #3");
var array = [1, 3, 5, 7];
var x = 10;
var y = 2;
var temp = 0;
for (i=array.length; i>=y; i--) {
    if (i===y) {
        array[y]=x;
    } else {
        array[i]=array[i-1];
    }
}
console.log(array);

console.log("Problem #4");
var array = [1, 3, 5, 7];
console.log(array.length);
if (array.length>=2) {
    for (i=0; i<2; i++) {
        array.pop();
    }
}
console.log(array);

console.log("Problem #5"); 
var array = [-1, -3, 3, -5, 2];
for (i = 0; i < array.length; i++){
    if (array[array.length-1]<0){
        array.pop();
        i--;
    } else {
        if (array[i]<0) {
            var temp = array[array.length-1];
            array[array.length-1] = array[i];
            array[i] = temp;
            array.pop();
        }
    }
}
console.log(array);

console.log("Problem #6"); 
var array = [4, 3, 6, 1, 5, 2];
for (i = 0; i < array.length; i++){
    for (j = 0; j < array.length; j++){
        if (array[j] > array[j+1]){
            var temp = array[j+1];
            array[j+1] = array[j];
            array[j] = temp;
        }
    }
}
console.log(array);

console.log("Problem #7"); 
var array = [4, 8, 5, 6, 1];
var min=array[0];
for(var i = 0; i < array.length; i++){
    for(var j = i; j < array.length; j++) { 
        if(array[j] <= min) {
            var min = array[j];
            var minindex = j;
        }
    }
    temp = array[minindex];
    array[minindex] = array[i];
    array[i] = temp;
    min = array[i+1];
}
console.log(array);