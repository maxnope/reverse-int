    module.exports = function reverse (n) {
    let n_positive = Math.abs(n)
    let n_string = n_positive.toString()
    
    return n_string.split('').reverse().join(''); 
    }
