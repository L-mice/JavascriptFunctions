function factorial(natural_number){
  let a = 1;
  for(let i = 1; i <= natural_number; i++) a *= i;
  
  return a;
}

function nCr(length, index){
  return factorial(length) / (factorial(index) * factorial(length - index));
}

function nPr(length, index){
  return factorial(length) / factorial(length - index);
}
