b=0;
var sum = function(array){
a=array.splice(0,1);
b=b+a[0];
console.log(a);
if(array.length!=0) 
	sum(array);
return b;
}