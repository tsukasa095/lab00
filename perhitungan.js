document.getElementById("toBinary").addEventListener("click", function () {
  const inputValue = document.getElementById("inputNilai").value;
  const resultContent = document.getElementById("result");

  const decimalRegex = /^[0-9]+$/;

  if (!decimalRegex.test(inputValue)) {
    resultContent.textContent = "Masukkan bilangan desimal yang valid.";
    return;
  }

  const decimalValue = parseInt(inputValue, 10);
  const binaryValue = decimalValue.toString(2);

  resultContent.textContent = `Hasil: ${binaryValue} (Biner)`;
});

document.getElementById("toDecimal").addEventListener("click", function () {
  const inputValue = document.getElementById("inputNilai").value;
  const resultContent = document.getElementById("result");

  const binaryRegex = /^[01]+$/;

  if (!binaryRegex.test(inputValue)) {
    resultContent.textContent = "Masukkan bilangan biner yang valid.";
    return;
  }

  const decimalValue = parseInt(inputValue, 2);

  resultContent.textContent = `Hasil: ${decimalValue} (Desimal)`;
});
