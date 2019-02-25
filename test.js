function f() {
  let a = 5;
  return new Function('b', 'return a + b');
}

console.log(f()(1) )