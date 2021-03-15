module.exports = function reverse(n) {
    if (n > 0) {
        let j = n.toString().split('').reverse().join('');
        let w = Number(j);
        return w;
    } else if (Math.sign(n) == -1) {
        let z = -(n);
        let c = z.toString();
        let m = c.split('');
        let k = m.reverse().join('');
        return Number(k);

    }
};
