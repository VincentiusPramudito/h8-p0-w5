function meleeRangedGrouping (str) {
  //your code here
  var reuslt = [];
  var ranged = [];
  var melee = [];

  if (str.length > 0){
    reuslt = str.split(',')
    for (var i = 0 ; i < reuslt.length ; i ++){
      var temp = reuslt[i].split('-') 
      reuslt[i] = temp
    }

    for (var i = 0 ; i < reuslt.length ; i ++){
      if (reuslt[i][1]==='Ranged'){
        ranged.push(reuslt[i][0])
      } else if (reuslt[i][1]==='Melee'){
        melee.push(reuslt[i][0])
      }
    }
    reuslt = [ranged, melee]
  }
  return reuslt
} 

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
