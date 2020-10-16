const _ = {
    // My Solution
    // clamp(num,lowerBound,upperBound) {
    //     if (num<lowerBound) {
    //         return lowerBound;
    //     } else if (num>upperBound) {
    //         return upperBound;
    //     } else {
    //         return num;
    //     }
    // },
    // Codecademy Solution
    clamp(num,lowerBound,upperBound) {
        let finalNum = Math.max(num,lowerBound);
        finalNum = Math.min(finalNum,upperBound);
        return finalNum;
    },
    // My Solution
    // inRange(number,start,end) {
    //     if (!end) {
    //         end=start;
    //         start=0;
    //     } else if (start>end) {
    //         const endHolder = end;
    //         end=start;
    //         start=endHolder;
    //     }

    //     if (number<start) {
    //         return false;
    //     } else if (number>=end) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // },
    // Codecademy Solution
    inRange(number,start,end) {
        if (!end) {
            end=start;
            start=0;
        }; 
        if (start>end) {
            const temp = end;
            end=start;
            start=temp;
        };
        const isInRange = start<=number&&end>number;
        return isInRange;
    },
    // My Solution
    // words(str) {
    //     return str.split(" ");
    // },
    // Codecademy Solution
    words(string) {
        const words = string.split(' ');
        return words;
    },
    // My Solution
    // pad(str,strLength) {
    //     if (str.length>=strLength) {
    //         return str;
    //     } else {
    //         const extraPadding = strLength-str.length;
    //         let newString = str;
    //         if (extraPadding%2===0) {
    //             const halfPadding = extraPadding/2;
    //             for (let i=0;i<halfPadding;i++) {
    //                 newString = ' ' + newString + ' ';
    //             }
    //         } else {
    //             const almostHalfPadding = (extraPadding-1)/2;
    //             for (let i=0;i<almostHalfPadding;i++) {
    //                 newString = ' ' + newString + ' ';
    //             };
    //             newString = newString + ' ';
    //         };
    //         return newString;
    //     }
    // },
    // Codecademy Solution
    pad(string,length) {
        if (length<=string.length) {
            return string;
        }
        const startPaddingLength = Math.floor((length-string.length)/2);
        const endPaddingLength = length-string.length-startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    }

};




// Do not write or modify code below this line.
module.exports = _;