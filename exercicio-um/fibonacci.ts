function fibonacci(number: number): void {
  let prev = 0;
  let next = 1;
  while (true) {
    if (number === 0 || prev + next === number) {
      console.log("Pertence a sequencia");
      break;
    } else if (prev + next > number) {
      console.log("Não pertence a sequencia");
      break;
    }
    [prev, next] = [next, prev + next];
  }
}

(() => {
  fibonacci(0);
  fibonacci(1);
  fibonacci(3);
  fibonacci(5);
  fibonacci(8);
  fibonacci(13);
  fibonacci(21);
  fibonacci(34);
  fibonacci(55);
  fibonacci(89);
  fibonacci(100);
})();
