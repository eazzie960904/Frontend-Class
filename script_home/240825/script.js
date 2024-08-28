// const step1 = (callback) => {
//     setTimeout(()=> {
//         console.log("피자도우 준비");
//         callback();
//     },2000);
// };

// const step2 = (callback) => {
//     setTimeout(()=>{
//         console.log("토핑완료");
//         callback();
//     },2000);
// };

// const step3 = (callback) =>{
//     setTimeout(()=>{
//         console.log("굽기완료");
//         callback();
//     },2000)
// };

// console.log("피자를 주문합니다.");

// step1(()=> {
//     step2(()=>{
//         step3(()=>{
//             console.log("피자가 준비되었습니다.")
//         });
//     });
// });

const pizza = ()=>{
    return new Promise((resolve,reject)=>{
        resolve("피자를 주문합니다");
    });
};

const step1 = (message)=>{
    console.log(message);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("피자도우 준비")
        },3000);
    });
};

const step2 = (message)=>{
    console.log(message);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                resolve("토핑완료");
            },3000);
        });
};

const step3 = (message) =>{
    console.log(message);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("굽기완료");
        },3000)
    });
};


pizza()
.then(step1)
.then(step2)
.then(step3)
.then(console.log)
.then(()=> console.log("피자가 준비되었습니다."));

// ** 체이닝
//.then()을 사용해서 각 단계를 연결할 수 있어. 첫번째 단계가 끝나면 두번째 단계로 넘어가고,
//두번째가 끝나면 세번재로 넘어가는 식이야. 이렇게 단계를 연결하면  순서대로 작업을 진행할 수 있어.