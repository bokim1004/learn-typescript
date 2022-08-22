enum Shoes {
    Nike,
    Adidas,
    sth,
}

var myShoes = Shoes.Nike;
console.log(myShoes);//0

enum Shoes1 {
    Nike = '나이키',
   Adidas = '아디다스'
}

var myShoes1 = Shoes1.Nike;
console.log(myShoes1); //'나이키'


enum Answer {
    Yes = 'Y',
    No = 'N'
}

//예제
function askQuestionS(answer: Answer) {
    
    if (answer === Answer.Yes) {
        console.log('정답입니다')
    }
    if (answer === Answer.No) {
        console.log("오답입니다");
    }
    
}