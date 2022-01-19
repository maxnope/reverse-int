module.exports = function reverse (n) {
  let ns = n.toString()
  return ns.split('').reverse().join(''); 
}
