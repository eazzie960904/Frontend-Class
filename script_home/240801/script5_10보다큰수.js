// 1,3,5,7,9,11,13,15,17,19 중에서 10보다 큰 숫자만 콘솔창에 나타나도록 해주세요

const arr = [1,3,5,7,9,11,13,15,17,19];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 10){
        console.log(`${arr[i]}`);
    }
}