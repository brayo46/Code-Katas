/*







*/





function howMany(x,l,u) {

	var count = 0;
	//var i,j;
	

	for(var i = l+1;i<=u-1; i++) {

		if(i.toString().match(/3/) != null ){
			count = count+1;
		}
	}

	return count;

}

var x = 3
var l = 100, u =250;

console.log(howMany(x,l,u));