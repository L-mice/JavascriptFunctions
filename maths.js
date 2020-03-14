function factorial(n){
	let p = 1;
	for(;n >= 1; n--) p *= n;
	
	return p;
}

function nCr(length, index){
  return factorial(length) / (factorial(index) * factorial(length - index));
}

function nPr(length, index){
  return factorial(length) / factorial(length - index);
}
