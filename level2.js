// Find the Second Largest Number
// Concepts: sorting, loops
// Sorting in ascending is a-b
// Sorting in descending is b-a
// arr.sort((a,b)=> b-a)
// By default it is ascending
function findSecondLargest(arr) {
  // arr to be turned into a new set to avoid duplication

  const setArr = [...new Set(arr)];
  const arrSorted = setArr.sort((a, b) => b - a);
  console.log(arrSorted[1]);
}

// Check if Two Strings are Anagrams
function anagramCheck(str1, str2) {
  const sortedstr1 = str1.toLowerCase().split("").sort().join(""); // join() function joins the contents with the seperator as argument
  const sortedstr2 = str2.toLowerCase().split("").sort().join("");
  if (sortedstr1 === sortedstr2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function flattenArray(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item)); //.concat() joins arrays together to form a new array.
    } else {
      result.push(item);
    }
  }
  return result;
}

// Group Elements by Frequency
function groupByFrequency(arr) {
  let freqGrouped = {};
  for (let item of arr) {
    if (freqGrouped[item]) {
      freqGrouped[item]++;
    } else {
      freqGrouped[item] = 1;
    }
  }
  return freqGrouped;
}

// Find the common elements between 2 arrays
// The logic we used is that first we turned the array to a set to avoid duplication
// then we used filter to filter out the data and stored it in data array
function findIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  // .has() is used to check if a particular element is present in a set
  // .filter() filters the element into a new array only if it passes a condition
  const result = [
    ...new Set(
      arr2.filter((num) => {
        return set1.has(num);
      }),
    ),
  ];
  console.log(result);
}

// Capitalize each word in a string
// .slice() : It takes out a part of an array or string and returns a new one (old one remains untouched)
// .slice(startIndex, endIndex): startIndex is included, endIndex is not
// const arr = [10, 20, 30, 40, 50];
// arr.slice(1, 4);
// The result would be [20,30,40]
// If you want to remove the first letter string.slice(1), so everything from the second letter is included
// To copy an array: const copy = arr.slice();

// .split(): breaks a string into an array of smaller pieces
// syntax: string.split(separator)
function capitalizeWord(str) {
  const splitString = str.split(" ");
  const newResultString = [];
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === "") {
      newResultString.push("");
    } else {
      const split = splitString[i][0].toUpperCase() + splitString[i].slice(1);
      newResultString.push(split);
    }
  }
  console.log(newResultString.join(" "));
}

findSecondLargest([1, 2, 3, 4, 5]);
findSecondLargest([5, 4, 3, 2, 1]);
findSecondLargest([10, 20, 30]);
findSecondLargest([7, 7, 5]);
findSecondLargest([3, 1, 2]);

anagramCheck("gum", "mug");
anagramCheck("listen", "silent");
anagramCheck("evil", "vile");
anagramCheck("race", "care");
anagramCheck("hello", "world");
anagramCheck("aab", "aba");
anagramCheck("Listen", "Silent");

console.log(flattenArray([1, [2, [3, 4]], 5]));
console.log(
  flattenArray([
    [1, 2],
    [3, 4],
  ]),
);
console.log(flattenArray([1, [2], 3]));
console.log(flattenArray([1, 2, 3]));

console.log(groupByFrequency([1, 1, 2, 2, 2, 3]));
console.log(groupByFrequency(["a", "b", "a"]));
console.log(groupByFrequency([]));
console.log(groupByFrequency([true, true, false]));

findIntersection([1, 2, 3], [2, 3, 4]);
findIntersection([1, 2, 2, 3], [2, 3, 3]);
findIntersection([5, 6], [7, 8]);
findIntersection([1, 2], [1, 2]);
findIntersection([3, 2, 1], [1, 2, 3]);
findIntersection([1, 1, 1], [1, 1]);
findIntersection([], [1, 2]);

capitalizeWord("hello there");
capitalizeWord("javaScript is fun");
capitalizeWord("hello-world test");
capitalizeWord(" hello world ");
