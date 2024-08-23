<<<<<<< HEAD
<<<<<<< HEAD
const url = "https://reqres.in/api/products/10";
const result = document.querySelector("#result")

const xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const product = JSON.parse(xhr.responseText);
    console.log(product);
    console.log(product.data);

    result.innerHTML = `
    <p>상품명 : ${product.data.name}</p>
    <p>생산년도 : ${product.data.year}</p>
    <p>상품색상 : ${product.data.color}</p>
    `;
  };
=======
=======
>>>>>>> b3f65faee7d6168354496c59f6c8dfa094991d9d
const url ="http://reqres.in/api/products/10";
const result = document.querySelector("#result");

const xhr = new XMLHttpRequest();

xhr.open("GET",url);
xhr.send();

xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const product = JSON.parse(xhr.responseText);

        result.innerHTML=`
        <p>상품명 : ${product.data.name}</p>
        <p>생산년도 : ${product.data.year}</p>
        <p>상품색상 : ${product.data.color}</p>
        `;
    }
<<<<<<< HEAD
>>>>>>> 43aa7a9512d88c620ea1c429588293603b22cbf1
=======
>>>>>>> b3f65faee7d6168354496c59f6c8dfa094991d9d
};