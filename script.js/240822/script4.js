const form = document.querySelector("form");
const input = document.querySelector("#userNumber");

<<<<<<< HEAD
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
=======
>>>>>>> b3f65faee7d6168354496c59f6c8dfa094991d9d
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
<<<<<<< HEAD
});
>>>>>>> 43aa7a9512d88c620ea1c429588293603b22cbf1
=======
});
>>>>>>> b3f65faee7d6168354496c59f6c8dfa094991d9d
