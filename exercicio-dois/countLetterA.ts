function countLetterA(string: string): {
  exists: boolean;
  count: number;
} {
  let countLetterA = 0;
  string = string.toLocaleLowerCase();
  if (!string.includes("a")) {
    return {
      exists: false,
      count: countLetterA,
    };
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      countLetterA++;
    }
  }
  return {
    exists: true,
    count: countLetterA,
  };
}

(() => {
  console.log(countLetterA("Banana"));
  console.log(countLetterA("abracadabra"));
  console.log(countLetterA("AAABAA"));
  console.log(countLetterA("Hello World"));
  console.log(countLetterA(""));
  console.log(countLetterA("!@#$%^&*()"));
  console.log(countLetterA("apple banana cherry"));
})();
