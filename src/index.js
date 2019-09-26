module.exports = function zeros(expression) {
  let finalNumber = 1n;
  let factorial;
  let expNumber;
  let res = 0;

  expression = expression.split('*');

  for (let i = 0; i < expression.length; i++) {
    expNumber = BigInt(parseInt(expression[i]));
    factorial = BigInt(expNumber);

    if (expression[i].indexOf("!") === (expression[i].length - 1)) {
      while (expNumber > 1n) {
        factorial *= (expNumber - 1n);
        expNumber--;
      }
    } else {
      while (expNumber > 2n) {
        factorial *= (expNumber - 2n);
        expNumber -= 2n;
      }
    }
    finalNumber *= factorial;
  }

  while (finalNumber % 10n === 0n) {
    finalNumber = finalNumber / 10n;
    res++;
  }

  return (res);
}
