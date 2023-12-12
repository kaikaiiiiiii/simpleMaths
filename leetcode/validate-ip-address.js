var validIPAddress = function (IP) {
    if (IP.indexOf('.') > 0) {
        const arr4 = IP.split(".");
        if (arr4.length == 4) {
            if (arr4.every(part => (part.match(/^0$|^([1-9]\d{0,2})$/) && part < 256) )) {
                return "IPv4";
            }
        }
    }
    if (IP.indexOf(':') > 0) {
        const arr6 = IP.split(":");
        if (arr6.length == 8) {
            if (arr6.every(part => part.match(/^[0-9a-fA-F]{1,4}$/))) {
                return "IPv6";
            }
        }
    }
    return "Neither";
};





console.log(validIPAddress("172.16.254.1")); //IPv4
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334")); //IPv6
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334:")); //Neither