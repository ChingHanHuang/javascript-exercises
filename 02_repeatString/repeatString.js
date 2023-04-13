const repeatString = function(word, times) {
    if (times < 0)
        return "ERROR";
    let ans = "";
    while(times > 0) {
        ans += word;
        times--;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
