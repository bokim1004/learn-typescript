// function logMessage(value: any) {
//     console.log(value);
// }

//유니온 타입( 하나의 타입 이상을 쓸 수 있게 해주는 타입)

var sehco: string | number | boolean;

//인터섹션 타입
var captt: string & number & boolean;


function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number')
}

logMessage("hello");
logMessage(100);

interface Developers{
    name: string;
    skill: string;
}

interface Personss{
    name: string;
    age: number;
}

//유니온타입쓰면 공통속성 name에만 접근할 수 있다.

//타입을 모두다 포함하는 새로운 타입을 만들게 된다는 것이 유니온과 인터섹션의 차이

function askSomeone(someone: Developers & Personss) {
    someone.name
}

askSomeone({ name: '디벨로퍼', skill: '웹 개발' ,age:35});
askSomeone({ name: '캡틴', age: 100 });

// function askSomeone(someone: Developers & Personss) {
//     someone.name;
//     someone.skill;
//     someone.age;
// }