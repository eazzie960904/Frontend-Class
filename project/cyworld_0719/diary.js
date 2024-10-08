// 유저가 값을 입력한다.
// +버튼을 클릭하면, 할일이 추가된다
// delete 버튼을 누르면 할일이 삭제된다
// check버튼을 누르면 할일이 끝나면서 밑줄이 간다.
// 1. check 버튼을 클릭하는 순간 true false
// 2. true이면 끝난걸로 간주하고 밑줄 보여주기
// 3. false이면 안끝난걸로 간주하고 그대로

// 진행중 끝남 탭을 누르면, 언더바가 이동한다.
// 끝남 탭은 끝난 아이템만, 진행중 탭은 진행중인 아이템만
// 전체탭을 누르면 다시 전체 아이템으로 돌아옴

const taskInput = document.querySelector("#taskInput");
const button = document.querySelector("#button");
const taskList = [];
button.addEventListener("click", addTask);

function addTask() {
  let task = {
    id: randomIdGenerate(),
    taskValue: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  render();
}

function render() {
  let result = "";
  // 배열안의 요소들을 꺼내서 하나하나 뭘 할꺼구나
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      result += `<div class= "task">
        <div class="taskDone">${taskList[i].taskValue}</div>
        <div>
        <button onClick="check('${taskList[i].id}')"><i class="fa-solid fa-check"></i></button>
        <button onClick="deleteTask('${taskList[i].id}')"><i class="fa-regular fa-trash-can"></i></button>
        </div>
        </div>`;
    } else {
      result += `<div class= "task">
            <div>${taskList[i].taskValue}</div>
            <div>
            <button onClick="check('${taskList[i].id}')"><i class="fa-solid fa-check"></i></button>
            <button onClick="deleteTask('${taskList[i].id}')"><i class="fa-regular fa-trash-can"></i></button>
            </div>
            </div>`;
    }
  }
  document.querySelector(".taskBoard").innerHTML = result;
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
}

function check(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
}

function randomIdGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
