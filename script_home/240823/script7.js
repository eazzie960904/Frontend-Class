// const displayHello = () => {
//     console.log("Hellow");
// };

// displayHello();

// const displayHello = async () => {
//     console.log("Hello");
// };

// console.log(displayHello()); //promise

// const whatsYourFavorite = () =>{
//     const fav = "Javascript";
//     return new Promise((resolve,reject)=> resolve(fav));
// };

// const displaySubject=(subject)=>{
//     return new Promise(( resolve,reject)=> resolve(`Hello, ${subject}`));
// };
// whatsYourFavorite().then(displaySubject).then(console.log);

// async => 함수 형태
// await => 예약어(*특정 요소의 실행을 기다렸다가 진행되도록 하게 해주는 에약어)
// await 예약어는 절대로 혼자서 독립적 사용X
// async 함수 내부에서만 반드시 사용할 수 있다.

//async 를 사용하면, 어떤 일이 끝날 때까지 기다리지 않고 다른 일을 할 수 있게 해줘요.  

//async의 반환값은 promise
const whatsYourFavorite = async () =>{
    const fav = "Javascript";
    return fav;
};

const displaySubject = async (subject) =>{
    return `Hello, ${subject}`;
}

whatsYourFavorite()
.then(displaySubject)
.then(console.log);

// await를 쓰는 이유: async = 비동기 기다리기 위해 async안에 await를 써야함. java = 동기
const init = async () =>{
    const response = await whatsYourFavorite();
    const result = wait displaySubject(response);
    console.log(result);
};

init();