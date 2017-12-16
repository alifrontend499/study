function printNum(){
    var num = 0;
    var inc = function(){
        return num++;
    }
    return inc;
}

var data = printNum();

console.log(data());
console.log(data());
console.log(data());
console.log(data());
console.log(data());
console.log(data());