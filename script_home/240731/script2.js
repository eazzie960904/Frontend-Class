const id = "ezen";
const pw = "1234";

const checkPassword = () =>{
    const userPw =Number(prompt("당신의 비밀번호는?"));
    if(pw === userPw){
        alert(`${userId}님, 다시 와쥬셔서 감사합니다!`);
    }else{
        alert("비밀번호가 일치하지 않습니다.");
        checkPassword();
    }
};

const userId = prompt("당신의 아이디는?");

if (idi === userId){
    checkPassword();
}else{
    alert("아이디가 일치하지 않습니다.");
    location.reload();
}