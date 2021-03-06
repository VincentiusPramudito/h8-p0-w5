


function totalDigitRekursif(angka) {
  var temp = 0;
  var hitung = 0;
  if (angka === 0){
    return 0
  }
  else {
    hitung = angka%10
    temp += hitung
    angka = Math.floor(angka/10)
    return temp + totalDigitRekursif(angka);
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
