function sum(a,b) {
    return a+b;
}

let result = sum(1,2);
console.log(result);


/*  콘솔로 실행 
 *  : Ctrl + Alt + N 
 *  : console.log( ) 로 실행 
 */

function checkAge(age) {
    if (age >= 19) {
        return true;
    } else {
        return confirm('보호자의 동의를 받으셨나요?');
    }
}

let age = prompt('나이를 알려주세요', 99);

if ( checkAge(age) ) {
    alert('성인이시군요. 입장을 허가합니다.');
} else {
    alert('미성년자이군요. 집에 가십시오.');
}

function ask(question, yes, no) {
    if (confirm(question)) yes() 
    else no();

}

ask(
    "동의하십니까?",
    function() { alert("동의하셨습니다.")},
    function() { 
        self.opener = self;
        window.close(); }
);

// onclick 



