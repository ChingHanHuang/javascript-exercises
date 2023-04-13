const sumAll = function(min, max) {
    if (typeof(min) !== "number" || typeof(max) !== "number" || min < 0 || max < 0)
        return "ERROR";
    return min < max ? sumInRange(min, max) : sumInRange(max, min);
};

const sumNatural = function(n) {
    return (n + 1) * n / 2;
}

const sumInRange = function(l, r) {
    return sumNatural(r) - sumNatural(l - 1);
}


// Do not edit below this line
module.exports = sumAll;
