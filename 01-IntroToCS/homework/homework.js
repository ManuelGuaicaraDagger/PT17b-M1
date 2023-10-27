"use strict";

function BinarioADecimal(num) {
  let decimal = 0;
  let posicion = num.length - 1;
  for (let i = 0; i < num.length - 1; i++) {
    decimal += num[i] * (2 ** posicion - i);
  }
  return decimal;
}

function DecimalABinario(num) {
  let binario = "";
  while (num >= 1) {
    binario = (num % 2) + binario;
    num = parseInt(num / 2);
  }
  return binario;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
