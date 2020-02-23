/*
	n-adic number

	n as natural number(Integer, Larger than 0)
	value as String (0 or Larget than 0)
	
	e.g
		let a = new nAdic("F2", 16);
		a.toAnotherAdic(10);	//return 242
		a.changeAdic(2);	//a.n: 2, a.value: "11110010"
	
*/

var nAdic = function(value, n = 10){
	this.n = n;
	this.value = value;
	
	this.toAnotherAdic = function(m){
		
	}
	
	this.changeAdic = function(m){
		this.n = m;
		this.value = this.toAnotherAdic(m);
	}
}
nAdic.numberElementary = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
nAdic.toDecimal = function(value, n){
	let result = 0;	
	
	value = {
		a: value.split(".")[0],
		b: value.split(".")[1] || [],
	}

	for(let k = 0; k < value.a.length; k++){
		result += nAdic.numberElementary.indexOf(value.a.substring(k,k+1)) * n**(value.a.length - k - 1);
	}

	for(let o = 0; o < value.b.length; o++){
		result += nAdic.numberElementary.indexOf(value.b.substring(o,o+1)) / n**(o+1);
	}

	return result;
};

nAdic.byDecimal = function(value, n){
	value = Number(value);
	
	if(value === 0) return 0;
	
	let result = "";
	let digit = value < 1 ? 0 : Math.floor(Math.log(value) / Math.log(n));
	
	while(value > 0 && digit > -30){
		if(digit == -1) result += ".";
		
		let a = Math.floor(value/ n**digit);
		value -= a * n**digit;
		result += nAdic.numberElementary[a];
		
		digit--;

	}
	
	return result;
}
