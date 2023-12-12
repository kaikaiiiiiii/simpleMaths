var canPlaceFlowers = function(flowerbed, n) {
    var blank = 0;
    for (let i = 0; i <= flowerbed.length; i++){
        if (flowerbed[i] == 0) {
            if (i == flowerbed.length - 1) { blank++ };
            if (i == 0 ) { blank++ };
            blank++
            console.log(blank)
        } else {
            if (blank>0) {
                n = n - Math.floor((blank - 1) / 2);
                blank = 0;
            }
        }
    }
    if (n) { return false } else { return true };
};

console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2));