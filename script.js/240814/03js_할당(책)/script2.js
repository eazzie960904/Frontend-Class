const Book = function (title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;

  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는중") : (str = "완독");
    return str;
  };
};

const book1 = new Book("자바스크립트", 648, false);

// console.log(book1.title);
console.log(book1.__proto__);
// 인스턴스 객체의 프로토타입을 확인!! 속성

console.log(Book.prototype);
// 인스턴스 객체의 조상이 되는 프로토타입 객체를 생성해준 생성자 함수가 가지고 있는 속성 및 매서드 함수를 확인

// function Book(){

//}
