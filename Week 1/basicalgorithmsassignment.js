console.log(Problem 1)
for(i=1; i<=255; i++) {
    console.log(i);
}

console.log(Problem 2)
for(i=1; i<=255; i++) {
    if (i%2!==0){
    console.log(i);
    }
}

console.log(Problem 3)
var sum = 0;
for(i=1; i<=255; i++) {
    sum += i;
    console.log("Number: " + i + "  Sum=" + sum);
}

console.log(Problem 4)
var x = [1, -5, 20, 6, 8, 22, 12];
var max=x[0];
for (i=0; i<=x.length; i++){
    if (x[i]>max){
        max=x[i];
    }
}
console.log(max);

console.log(Problem 5)
var x = [2, 22, 4, 6, 9, 14];
var sum=x[0];
for (i=0; i<x.length; i++){
    sum+=x[i];
}
var average=sum/x.length;
console.log(average);

console.log(Problem 6)
var y = [];
for (i=1; i<=255; i++) {
    if (i%2!==0){
        y.push(i);
    }
}
console.log(y);

console.log(Problem 7)
var y=[9, 3, 5, 1, 7];
var count = 0;
for (i=0; i<y.length; i++) {
    if(y[i]>4){
        count+=1;
    }
}
console.log(count);

console.log(Problem 8)
var x=[1,5, 10, -2];
for (i=0; i<x.length; i++){
    x[i]=x[i]*x[i];
}
console.log(x);

console.log(Problem 9)
var x=[1,5, 10, -2];
for (i=0; i<x.length; i++){
    if (x[i]<0){
        x[i]=0;
    }
}
console.log(x);

console.log(Problem 10)
var x=[1,5, 10, -2];
var max=x[0];
var min=x[0];
var sum=0;
for (i=0; i<x.length; i++){
    if (x[i]<min){
        min=x[i];
    }
    if (x[i]>max){
        max=x[i];
    }
    sum+=x[i];
}
console.log("Minimum = " + min);
console.log("Maximum = " + max);
console.log("Average = " + sum/x.length);

console.log(Problem 11)
var x=[1,5,10,7,-2]
for (i=1; i<x.length; i++){
    x[i-1]=x[i];
}
x[x.length-1]=0;
console.log(x);

console.log(Problem 12)
var x=[1,5,10,7,-2];
for (i=1; i<x.length; i++){
    if(x[i]<0) {
        x[i]="Dojo";
    }
}
console.log(x);