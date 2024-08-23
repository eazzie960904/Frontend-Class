const form = document.querySelector("form");
const input = document.querySelector("#userNumber");

<<<<<<< HEAD
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let value = input.value;
  console.log(value);

  try {
    if (value === "" || isNaN(value)) throw "숫자를 입력하세요";

    value = Number(value);

    if (value <= 10) document.querySelector("#result").innerText = value;

    if (value > 10) throw "10보다 작은 수를 입력하세요"
  } catch (err) {
    alert(err)
  } finally {
    input.value = "";
  }
})
=======
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let value = input.value;

    try{
        if (value ==="" || isNaN(value)) throw "숫자를 입력하세요";

        value = Number(value);

        if (value <= 10) document.querySelector("#result").innerText = value;

        if (value > 10) throw "10보다 작은 수를 입력하세요";
    } catch (err){
        alert(err);
    } finally{
        input.value="";
    }
});
>>>>>>> 43aa7a9512d88c620ea1c429588293603b22cbf1
