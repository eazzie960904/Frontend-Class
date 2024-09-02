const phoneNumber = document.querySelector('input[type="text"]');
const warningMessage = document.querySelector("#warningMessage");

phoneNumber.addEventListener("keyup", function () {
  const numberValue = this.value;
  const trimNumber = numberValue.replace(/-/g, "");
  //-라는 문자가 나오면 없는걸로 대채해줘

  // const regexp = /^[0]\d{8,9}[0-9]$/.test(trimNumber);
  const regexp = /^[0][0-9]{9,10}$/.test(trimNumber);
  // const regexp = /^0[0-9]{9,10}$/.test(trimNumber);
  //0으로 반드시 시작해서 0-9끝내줘

  if (regexp === false)
    warningMessage.innerText = "전화번호의 형식에 맞춰서 입력해주세요";
  else warningMessage.innerText = "";
});
