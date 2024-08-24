const result = document.querySelector("#result");
const order = new Promise((resolve,reject)=>{
    const coffee = prompt("어떤커피를 주문하시겠습니까?","아메리카노");

    if( coffee !== null  && coffee !==""){
        result.innerText = `${coffee} 주문접수`;
        setTimeout(()=>{
            resolve(coffee);
        },3000);
    } else{
        reject("커피를 주문하지 않았습니다.")
    }
});

const display = (coffee) => {
    const end = document.querySelector("#end");
    end.innerText = `${coffee} 준비완료`
    end.classList.add("active");
    result.classList.add("done");
};

const showErr = (err) => {
    console.log(err)
}

order.then(display).catch(showErr);

console.log(order);

/* promise "pending"*/

// promise의 단계

//1. Pending : 프로미스를 생성하고 실제 실행을 시키기전, 대기상태
//2. fullfilled : 프로미스를 통해서 어떤 실행 값 혹은 실행문을 정상적으로 실행시킨 상태
//3. rejected : 프로미스를 통해서 실행하고자 했던 요소를 정상적으로 실행시키지 못한 상태

//classlist
//이 프로퍼티를 사용하면 HTML 요소에 클래스를 추가, 제거, 확인할 수 있습니다.
//1. **add(className)**: 지정한 클래스를 요소의 클래스 목록에 추가합니다. 
//2. **remove(className)**: 지정한 클래스를 요소의 클래스 목록에서 제거합니다. 
//3. **toggle(className)**: 지정한 클래스가 존재하면 제거하고, 존재하지 않으면 추가합니다. 
//4. **contains(className)**: 지정한 클래스가 요소의 클래스 목록에 있는지 여부를 반환합니다. 