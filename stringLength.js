function stringLength(string){
    if(string.length < 1 || string.length > 10) {
       throw 'string is too long';
    }
    return string.length;
}

module.exports = stringLength;