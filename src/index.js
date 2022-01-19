module.exports = function reverse (n) {
  let ns = Math.abs(n.toString())
  return ns.split('').reverse().join(''); 
}
