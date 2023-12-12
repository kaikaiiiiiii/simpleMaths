var primes = [2,3];
var totaltarget = 10000;
var start = 2;//
var end = 2;//

function test(n) {

}

while (primes.length < totaltarget) {
    var nextvalue = primes[primes.length - 1] + 2
    var end = Math.floor(Math.sqrt(nextvalue));
    var flag = 1; //1为质数
    var i = 1;
}