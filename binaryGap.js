// global variable to keep the max gap size and use recursivity
var maxGap = 0;

function getGap(binarySplit){
    //find fist 1
    var start = binarySplit.indexOf('1');
    //find next 1 based on where the first was found
    var end = binarySplit.indexOf('1', start + 1); 

    //when end = -1 means that there's not other 1 to compare, a gap can be find and the search ends
    if(end < 0){
        return maxGap;
    }
    
    //calculate current gap size, based on the end index less start index plus one (arrays are cero based)
    var gapSize = end - (start + 1);
    
    //if the global maxGap is minor than the current gap size, the value has to be updated
    if(maxGap < gapSize){
        maxGap = gapSize;
    }
    
    //while the array size is max than the end index, is necessary to check next values
    if(binarySplit.length > end){
        // create a new array with pending values to analize
        var newBinarySplit = binarySplit.slice(end, binarySplit.length);
        getGap(newBinarySplit);
    }
    // return final value
    return maxGap;
}

//dinamic max value to test but always has to be bigger than 1 because is a integer
function isValidRange(number, maxRange){
    return number < 1 || number > maxRange;
}

function solution(number, maxRange) {
    if(!Number.isInteger(number)){ // validate if is a number
        return 0;
    }
    
    if(isValidRange(number, maxRange)){
        return 0;
    }
    
    var binary = number.toString(2); // parse to binary
    var binarySplit = binary.split(''); //split the binary to work with
    
    //call recursive function
    return getGap(binarySplit);
}

