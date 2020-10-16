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
    }

};




// Do not write or modify code below this line.
module.exports = _;