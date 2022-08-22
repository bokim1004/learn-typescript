// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('하이');
// logText(true);

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

logText<string>('하이');

//제네릭의 장점은 무엇인가?
//유지보수에 안좋고 중복코드가 많을 경우 제네릭 쓰면 좋다,

function logText1(text: string) {
    console.log(text);
    return text;
}

function logNumber(num: number) {
    console.log(num);
    return num;
}
// 제네릭의 장점과 타입 추론에서의 이점