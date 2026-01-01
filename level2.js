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
