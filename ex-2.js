//Exercise #2: At Least Five Function

const checkPass = function(arr){
  let scoreOver70 = 0;
  for (let i of arr){
      if (i > 70){
        scoreOver70 +=1;}
  }
  if (scoreOver70 >= 5)
    return true;
  else
    return false;
}


function atLeastFive(array, operation, classNumber) {
  let scoreOver70 = operation(array);

  if (scoreOver70){
    console.log(`นักเรียนห้องที่ ${classNumber} ผ่านเกณฑ์ ✅`);
  }else{
    console.log(`นักเรียนห้องที่ ${classNumber} ไม่ผ่านเกณฑ์ ❌`);
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1,checkPass,1);
let scoreRoom2Result = atLeastFive(studentScoresRoom2,checkPass,2);
let scoreRoom3Result = atLeastFive(studentScoresRoom3,checkPass,3);
