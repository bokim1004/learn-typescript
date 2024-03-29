//함수의 파라미터에 타입을 정의하는 방식
function sum1(a: number, b: number) {
    return a + b;
}

sum1(10, 20);

//함수의 반환값에 타입을 정의하는 방식
function add1(): number {
    return 10;
}

//함수에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
    return a + b;
}
sum2(10, 20);

//함수의 옵셔널 파라미터 (물음표넣으면 있어도 없어도 상관없게 됨)
function log(a: string, b?: string) { }

log("hellog world");
log("hello ts", "abc");

