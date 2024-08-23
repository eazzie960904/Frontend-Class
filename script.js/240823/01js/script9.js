https://dummyjson.com/quotes

const quoteURL = "https://dummyjson.com/quotes";

fetch(quoteURL)
.then((response) => response.json())
.then((data) => {
  const result = document.querySelector("#result");
  //quote값을 랜덤으로 가져오기 위해
  const random = Math.floor(Math.random() * 30);
  result.querySelector(".quote").innerHTML = data.quotes[random].quote;
  result.querySelector(".author").innerHTML = `-${data.quotes[random].author}-`;
})
.catch((err)=>console.log(err));
//response = 데이터 값을 의미
