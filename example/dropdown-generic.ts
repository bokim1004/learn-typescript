interface DropDownItem<T> {
    value: T;
    selected: boolean;
}

// interface Email {
//     value: string;
//     selected: boolean;
// }

//object에 대한 타입 정의도 구체적이어야 한다.
const emails: DropDownItem<string>[] = [
    { value: "naver.com", selected: true },
    { value: "gmail.com", selected: false },
    { value: "hanmail.net", selected: false },
];

// interface ProductNumber {
//     value: number;
//     selected: boolean;
// }

const numberOfProducts: DropDownItem<number>[] = [
    { value: 1, selected: true },
    { value: 2, selected: false },
    { value: 3, selected: false },
];

// 아래 함수는 Email과 productNumber 타입을 모두 수용할 수 있음 (유니온타입)

function createDropdownItem<T>(item: DropDownItem<T> | DropDownItem<number>) {
    const option = document.createElement("option");
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
    const item = createDropdownItem<string>(email);
    const selectTag = document.querySelector("#email-dropdown");
    selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
    const item = createDropdownItem(product);
});

//제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    });
    return text;
}

logTextLength<string>(["1", "hi"]);

//제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength2("a");
logTextLength2({ length: 10 });

//제네릭 타입 제한 3 - keyof

interface ShoppingTems {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingTems>(itemOption: T): T {
    return itemOption;
}

getShoppingItemOption("name");
