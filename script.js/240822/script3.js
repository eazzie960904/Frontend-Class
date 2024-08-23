<<<<<<< HEAD
<<<<<<< HEAD
try {
  //실행시킬 코드
  console.log("시작");
  add();
  console.log("실행 중...");
  console.log("끝");
} catch (err) {
  // try 문을 실행시켰을 때, 어떤 에러사항이 발생될 경우 실행시킬 명령문
  console.log(`오류발생: ${err.name}`);
  console.log(`오류발생: ${err.message}`);
}

console.log("종료");

const json = `{"grade":3,"age":25}`

try {
  const user = JSON.parse(json);
  if (!user.skill) throw "사용자스킬이 없습니다";
} catch (err) {
  console.log(err);
}
=======
=======
>>>>>>> b3f65faee7d6168354496c59f6c8dfa094991d9d
try{
    //실행시킬 코드
    console.log("시작");
    add();
    console.log("실행중...");
    console.log("끝");
}catch(err){
    //try 문을 실행시켰을 때, 어떤 에러사항이 발생될 경우 실행시킬 명령문
    console.log(`오류발생: ${error.name}`);
    console.log(`오류발생: ${err.message}`);
}

const json='{"grade":3,"age":25}'

try{
    const user =JSON.parse(json);
    if(!user.skill) throw "사용자 스킬이 없습니다.";
} catch (err){
    console.log(err);
<<<<<<< HEAD
}
>>>>>>> 43aa7a9512d88c620ea1c429588293603b22cbf1
=======
}
>>>>>>> b3f65faee7d6168354496c59f6c8dfa094991d9d
