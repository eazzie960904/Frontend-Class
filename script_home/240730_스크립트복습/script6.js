let userNumber = prompt("숫자를 입력하세요");

if(userNumber !== null && userNumber !==""){
    userNumber = parseInt(userNumber);
    if(!isNaN(userNumber)){
        userNumber % 2 === 0
        ?alert(`${userNumber}:짝수`)
        :alert(`${userNumber}:홀수`);
     }else{
        alert("올바른 숫자를 입력하세요");
     }
    }
     else{
        alert("올바른 숫자를 입력하세요");
    }