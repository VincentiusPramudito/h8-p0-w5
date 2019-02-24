function sorting(arrNumber) {
  for (var i = 0; i < arrNumber.length; i++){
    for (var j = 0; j < arrNumber.length-i-1; j++){
      if (arrNumber[j] > arrNumber[j+1]){
        var temp = arrNumber[j];
        arrNumber[j] = arrNumber[j+1]
        arrNumber[j+1] = temp
      }
      // console.log('saat ini i nya ',i, 'dengan j nya ',j, 'dan arrNumber ,', arrNumber[j])
    }
    // console.log(arrNumber)
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  var max = arrNumber[0]
  var newArr = []
  for (var j = 0; j < arrNumber.length; j++){
    if (arrNumber[j]> max){
      max = arrNumber[j]
    }
  }
  newArr.push(max)
  // console.log(newArr)
  var mostRepeat = 0;
  var result = '';
  for (var k = 0; k < newArr.length; k++){
    var counter = 0;
    for (var l = 0; l < arrNumber.length;l++){
      if (newArr[k]===arrNumber[l]){
        counter++;
        if (counter > mostRepeat){
          mostRepeat = counter
          // console.log(mostRepeat)
        }
      }
    }
  }
  if (arrNumber.length > 0){
    return 'angka paling besar adalah '+ newArr + ' dan jumlah kemunculannya sebanyak '+
  mostRepeat +' kali'
  } else{
    return ''
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
// // 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// 'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
