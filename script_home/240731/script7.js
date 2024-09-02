for (let i =1; i <=10; i++){
    if(i === 6)break;
    document.write(i,"<br/>"); //12345
}

document.write("=== The End ===");

for(let i =1; i <=10; i++){
    if(i%2 === 0) continue;
    document.write(i,"<br/>"); // 3579
}