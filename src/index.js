module.exports = function reverse (n) {
  if (n < 0) {
    let a = -n;
    a =a.toString().split("").reverse().join("");
    return a;
  }
  else { 
    n =n.toString().split("").reverse().join("");
    return n;
  }
}
