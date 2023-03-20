//What Higher-Order Functions might like look under the hood

//Normally, you would invoke the higher order function directly off of an array using dot notation
// EX: arr.foreach(blah blah);
//So this array will be a placeholder for us to simplify this look under the hood
const theArray = [5, 19, 6, 18, 4, 3, 22];

//==================================================================================================
//.foreach

function exampleForeach(actionFunc) {
    const arrayCopy = Array.from(theArray);
    for (let i = 0; i < theArray.length; i++){
        actionFunc(theArray[i], i, arrayCopy);
    }
}

//In the above exampleForeach code, the only part that it doesn't know is the "actionFunc".
//That "actionFunc" is the thing that we need to write when we decide to use that method.
//"actionFunc" is the callback function that we normally write as an arrow function


//==================================================================================================
//.map

function exampleMap(actionFunc) {
    const arrayCopy = Array.from(theArray);
    const mappedArr = [];
    for (let i = 0; i < theArray.length; i++){
        mappedArr.push(actionFunc(theArray[i], i, arrayCopy))
    }
    return mappedArr;
}


//==================================================================================================
//.reduce

function exampleReduce(actionFunc, initVal) {
    const arrayCopy = Array.from(theArray);
    let accumulator;
    let startingIndex;
    if (initVal) {
        startingIndex = 0;
        accumulator = initVal;
    } else {
        startingIndex = 1;
        accumulator = theArray[0];
    }

    for (let i = startingIndex; i < theArray.length; i++) {
        accumulator = actionFunc(accumulator, theArray[i], i, arrayCopy);
    }
    return accumulator;
}