// CONSTANTS
window.pi = window.PI = Math.PI;
window.e = Math.E;

// Trig functions
window.sin = Math.sin;
window.cos = Math.cos;
window.tan = Math.tan;
window.asin = window.arcsin = Math.asin;
window.acos = window.arccos = Math.acos;
window.atan = window.arctan = Math.atan;

// Exponential/Trig
window.exp = Math.exp;
window.log = function(x, n = 10) {
  return Math.log10(x)/Math.log10(n);
}
window.ln = function(x) {
  return Math.log(x);
}

// GCD/LCM
window.gcd = function(a, b) {
  if ( ! b) {
     return a;
  }
  return gcd(b, a % b);
}
window.lcm = function(a, b) {
  return Math.abs(a*b)/gcd(a,b);
}

// Auxillary functions
window.pow = Math.pow;
window.abs = Math.abs;
window.ceil = Math.ceil;
window.floor = Math.floor;
window.mod = function(x, n = 1) {
  return x % 1;
}
window.sqrt = Math.sqrt;
window.nroot = function(x, n) {
  return Math.pow(x, 1/n);
}


// Factorial
window.factorial = function(x, n) {
  if (n==null) n=1;
  for (var i=x-n; i>0; i-=n) x*=i;
  return (x<0?NaN:(x==0?1:x));
}

// Rounding function
window.round = function(x, n = 0) {
  return Math.round((x*Math.pow(10, n)))/(Math.pow(10, n));
}

window.renderMath = function(){
  renderMathInElement(document.body, {
    delimiters: [
      {left: "\\(", right: "\\)", display: false}
    ]
  });
}