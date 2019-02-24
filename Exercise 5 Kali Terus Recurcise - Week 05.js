function kaliTerusRekursif(angka) {
  if(angka < 10){
    return angka
  }
  else{
    // temp = angka%10
    // hitung = hitung * temp
    // angka = Math.floor(angka/10)
    return kaliTerusRekursif(angka%10 * kaliTerusRekursif(Math.floor(angka/10)))
  }
}

// TEST CASES
console.log(kaliTerusRekursif(67)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
