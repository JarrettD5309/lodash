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
    },
    // My Solution
    // has(obj,key) {
    //     if (obj[key]) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // },
    // Codecademy Solution
    has(object,key) {
        const hasValue = object[key]!==undefined;
        return hasValue;
    },
    // My Solution
    // invert(obj) {
    //     const newObj = {};
    //     for (const [key, value] of Object.entries(obj)) {
    //         newObj[value] = key;
    //     }
    //     return newObj;
    // },
    // Codecademy Solution
    invert(object) {
        const invertedObject = {};
        for (const key in object) {
            const originalValue = object[key];
            invertedObject[originalValue] = key;
        }
        return invertedObject;
    },
    // My Solution
    // findKey(obj,func) {
    //     for (const [key, value] of Object.entries(obj)) {
    //         if (func(value)) {
    //             return key;
    //         } else {
    //             return undefined;
    //         }
    //     }
    // },
    // Codecademy Solution
    findKey(object,predicate) {
        for (const key in object) {
            const value = object[key];
            const predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return key;
            }
        }
        return undefined;
    },
    // My Solution
    // drop(arr,num) {
    //     if (num>arr.length) {
    //         num = arr.length;
    //     } else if (!num) {
    //         num=1;
    //     }

    //     for (i=0;i<num;i++) {
    //         arr.shift();
    //     }

    //     return arr;
    // },
    // Codecademy Solution
    drop(array,n) {
        if (!n) {
            n=1;
        }

        const droppedArray = array.slice(n);
        return droppedArray;
    },
    // My Solution
    // dropWhile(arr,func) {
    //     for (let i=0;i<arr.length;i++) {
    //         const funcVal = func(arr[i],i,arr);
    //         if (!funcVal) {
    //             return arr.slice(i);
    //         }
    //     }

    //     return [];
    // },
    // Codecademy Solution
    dropWhile(array,predicate) {
        const dropNumber = array.findIndex((element,index)=>!predicate(element,index,array));
        const droppedArray = this.drop(array,dropNumber);
        return droppedArray;
    },
    // My Solution
    // chunk(arr,size) {
    //     if (!size) {
    //         size = 1;
    //     }

    //     const newArr = [];
    //     const iterNum = arr.length/size;
    //     const roundedIterNum = Math.ceil(iterNum);
    //     let sliceStart = 0;

    //     for (let i=0;i<roundedIterNum;i++) {
    //         newArr.push(arr.slice(sliceStart,sliceStart+size));
    //         sliceStart+=size;
    //     }

    //     return newArr;

    // },
    // Codecademy Solution
    chunk(array,size) {
        if (!size) {
            size = 1;
        }

        const arrayChunks = [];
        for (let i=0;i<array.length;i+=size) {
            const arrayChunk = array.slice(i,i+size);
            arrayChunks.push(arrayChunk);
        }

        return arrayChunks;
    }

};




// Do not write or modify code below this line.
module.exports = _;