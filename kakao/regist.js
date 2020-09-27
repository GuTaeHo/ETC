/*  Date : 2020-09-26
    Author : Taeho Gu
*/

$(document).ready(function(){
    setDateBox();   // 연도, 월, 일의 option 생성 함수
    focusBox();     // 입력상자 포커싱 시 css 변환 함수
    doCheck();      // 이메일란에 입력된 글자 수 체크 함수
});

// select box 연도 , 월 표시
function setDateBox() {
    var dt = new Date();    // Date 객체

    // 년, 월 저장할 변수
    var year;
    var month;

    var com_year = dt.getFullYear();    // getFullYear메소드는 현재 년도를 4자릿수로 반환해줌
    // 년도 출력
    $("#year").append("<option value=''>연도</option>");

    // 올해 기준으로 2006부터 1906년 (2020 - 114)년까지 보여준다.
    for (var y = (com_year - 14); y >= (com_year - 114); y--) {
        $("#year").append("<option name='year' value='" + y + "'>" + y + " 년" + "</option>");      // append 메소드는 선택된 엘리먼트 뒤에 자식 엘리먼트를 추가함
    }

    // 월 출력
    $("#month").append("<option value=''>월</option>");
    for (var m = 1; m <= 12; m++) {
        $("#month").append("<option name='month' class='month_select' value='" + m + "'>" + m + " 월" + "</option>");
    }

    // 일 출력 (초기 출력)
    $("#day").append("<option value=''>일</option>");
    for (var d = 1; d <= 31; d++) {
        $("#day").append("<option name='day' value='" + d + "'>" + d + " 일" + "</option>");
    }

}

function setDayBox() {      // 선택된 달에 따라 일 수를 option에 추가하는 함수 (onchange()속성으로 함수 호출)

    var day_list = document.getElementById("day");   // id가 day인 요소를 day_list변수에 저장

    day_list.options.length=0;      // options 태그의 길이를 0으로 초기화
                                    // (생성된 option태그들을 없앰 - 함수가 호출될 때 마다 option이 늘어나기(중첩되기) 때문)

    var monthSelect = document.getElementById("month"); // id가 month인 속성을 찾아 monthSelect변수에 할당
    var Value = monthSelect.options[monthSelect.selectedIndex].value; // select element에서 선택된 option의 인덱스번호의 value를 반환하여 selectValue변수에 저장


    if (Value == 4 || Value == 6 || Value == 9 || Value == 11) {     // 반환된 값이 한달이 30일인 달이라면
        for (var d = 1; d <= 30; d++) {
            $("#day").append("<option name='day' value='" + d + "'>" + d + " 일" + "</option>");
        }
    }

    else if (Value == 2) {   // 2월 이라면
        for (var d = 1; d <= 28; d++) {
            $("#day").append("<option name='day' value='" + d + "'>" + d + " 일" + "</option>");
        }
    }

    else if (Value == 1 || Value == 3 || Value == 5 || Value == 7 || Value == 8 || Value == 10 || Value == 12) {   // 반환된 값이 한달이 31일인 달이라면
        for (var d = 1; d <= 31; d++) {
            $("#day").append("<option name='day' value='" + d + "'>" + d + " 일" + "</option>");
        }
    }
}

function focusBox() {       // 입력상자 포커싱 함수
    $('input[type="email"], input[type="password"], #user_nickname_input').focusin(function() {     // 입력상자가 포커싱되면 border 색상 변화
        $(this).css("border-bottom", "2px solid #A4A4A4");
    });
    $('input[type="email"], input[type="password"], #user_nickname_input').focusout(function() {      // 입력상자가 포커싱을 잃으면 border 색상 변화
        $(this).css("border-bottom", "2px solid #E6E6E6");
    });
}

function doCheck(){
    $('.nick_input').keyup(function (e) {
        var content = $(this).val();
        $('#counter').html(content.length + " / 20");  // 글자수 카운팅  html메소드는 엘리먼트의 내용을 문자열로 반환

        if (content.length > 20) {      // 문자열이 20자를 초과하면
            alert("최대 20자까지만 입력 가능합니다.");
        }
    })
}

function sendinfo() {

    if (document.kakao_form.email.value == "") {       // 자바스크립트는 DOM구조를 순차적으로 접근 name속성 값이 email인 입력란이 공백이면
        alert("이메일을 입력해주세요.");
        document.kakao_form.email.focus();     // focus()함수는 선택된 위치로 커서를 이동시킴
        exit;     // 스크립트(함수) 종료 (c의 return과 유사)
    }

    // 비밀번호란의 값이 비었다면
    if (document.kakao_form.pass.value == "") {
        alert("비밀번호를 입력해주세요.");
        document.kakao_form.pass.focus();
        exit;     // 스크립트 종료
    }

    // 입력된 문자열의 길이가 8 ~ 32 사이가 아니면
    if (document.kakao_form.pass.value.length < 8 || document.kakao_form.pass.value.length > 32) {
        alert("비밀번호는 8 ~ 32 자리 입력해주세요.");
        document.kakao_form.pass.value = "";        // 비밀번호란의 입력된 문자 지움(공백처리 함)
        document.kakao_form.passCheck.value = "";    // 비밀번호 확인란의 입력된 문자 지움(공백처리 함)
        document.kakao_form.pass.focus();
        exit;     // 스크립트 종료
    }

    if (document.kakao_form.passCheck.value == "") {
        alert("비밀번호 재확인을 입력해주세요.");
        document.kakao_form.passCheck.focus();
        exit;     // 스크립트 종료
    }

    // 비밀번호란과 비밀번호 확인란의 값을 비교
    if (document.kakao_form.pass.value != document.kakao_form.passCheck.value) {
        alert("비밀번호가 서로 일치하지 않습니다");
        document.kakao_form.passCheck.value = "";
        document.kakao_form.passCheck.focus();
        exit;     // 스크립트 종료
    }

    var nick_length =  document.kakao_form.nickName.value.length;   // 닉네임 입력상자에 입력된 문자열의 길이 저장

    if ((nick_length == "") || (nick_length > 20) || (nick_length < 5)) {   // 닉네임이 비었거나 5자 미만 20자 초과일 경우
        alert("닉네임은 5자에서 20자 사이로 입력해주세요.");
        document.kakao_form.nickName.focus();
        exit;     // 스크립트 종료
    }

    if (document.kakao_form.year.value == "") {   // 연도 옵션을 선택안했으면
        alert("연도를 선택해주세요.");
        exit;     // 스크립트 종료
    }

    if (document.kakao_form.month.value == "") {   // 월 옵션을 선택안했으면
        alert("달을 선택해주세요.");
        exit;     // 스크립트 종료
    }

    if (document.kakao_form.day.value == "") {   // 일 옵션을 선택안했으면
        alert("일을 선택해주세요.");
        exit;     // 스크립트 종료
    }


    if (document.kakao_form.gender.value == "") {   // 성별 체크 검사 (선택 안함이 눌렸다면)
        alert("성별을 선택해주세요.");
        exit;     // 스크립트 종료
    }


    document.kakao_form.submit();    // submit() 함수는 제출(넘겨줌)기능을 수행
}
