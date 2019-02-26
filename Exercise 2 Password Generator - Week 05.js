
function changeVocals (str) {
  var temp = ''
  for (var i = 0; i < str.length; i ++){
    if (str[i] ==='a'){
      temp += 'b'
    } else if (str[i]==='i'){
      temp += 'j'
    } else if (str[i]==='u'){
      temp += 'v'
    } else if (str[i]==='e'){
      temp += 'f'
    } else if (str[i]==='o'){
      temp += 'p'
    } else if (str[i] ==='A'){
      temp += 'B'
    } else if (str[i]==='I'){
      temp += 'J'
    } else if (str[i]==='U'){
      temp += 'V'
    } else if (str[i]==='E'){
      temp += 'F'
    } else if (str[i]==='O'){
      temp += 'P'
    } else {
      temp += str[i]
    }
  }
  str = temp
  return str
}

function reverseWord (str) {
  var temp = ''
  for (var i = str.length -1; i >= 0; i--){
    temp += str[i]
  }
  str = temp
  return str
}

function setLowerUpperCase (str) {
  var temp =''
  var letter =''
  for (var i = 0; i < str.length; i++){
    letter = ''
    letter = str[i].toUpperCase()
    if (letter===str[i]){
      letter = str[i].toLowerCase()
    }
    temp+= letter
  }
  str = temp
  return str
}

function removeSpaces (str) {
  var temp = ''
  for (var i = 0; i < str.length; i++){
    if ( str[i]!==' '){
      temp += str[i]
    }
  }
  str = temp
  return str
}

function passwordGenerator (name) {
  if (name.length<5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var password = changeVocals(name)
  password = reverseWord(password)
  password = setLowerUpperCase(password)
  password = removeSpaces(password)
  
  return password
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
