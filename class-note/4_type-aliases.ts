interface Peerson{
    name: string;
    age: number;
}

type Person1 = {
    name: string;
    age: number;
}
var seho: Person1 = {
    name: '세호',
    age:30
}

//타입 별칭과 인터페이스 차이점

// 타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것과 같다.
// 타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능/ 불가능 여부이다.
//인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가능하다. 따라서 가능한 type보다는 interface로 선언해서 사용하는 것을 추천한다.

