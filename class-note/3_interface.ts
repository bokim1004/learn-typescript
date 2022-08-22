interface User1 {
    age: number;
    name: string;
}

//변수에 인터페이스 활용
var seho: User1 = {
    age: 33,
    name:'세호'
}

//함수에 인터페이스 활용
function getUser(user:User1) {
    console.log(user);
}
const capt = {
    name: 'chloe',
    age:11
}

getUser(capt);

//함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {

}

var sum22: SumFunction;
sum22 = function (a:number, b:number) :number{
    return a + b;
}

//인덱싱

interface StringArray {
    [index: number]: string;
}

var array:StringArray = ['a', 'b', 'c'];
array[0];// a

//딕셔너리 패턴
interface StringRegexDictionary{
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile:/\.js$/
}
Object.keys(obj).forEach(function (value) {
    
})

//인터페이스 확장
interface Person {
    name: string;
    age: number;
}
//확장받은 Developer
interface Developer extends Person {
    // name: string;
    // age: number;
    language: string;
}

var capts: Developer = {
    language: 'ts',
    age: 100,
    name:'캡틴'
}