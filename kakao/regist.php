<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입</title>
    <style>
        /* regist.css 파일 인클루드 */
        <?php include 'regist.css'?>
    </style>
    <!-- jQuery CDN 링크-->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.0.min.js" ></script>
    <script type="text/javascript">
        // regist.js 파일 인클루드
        <?php include 'regist.js'?>
    </script>
</head>
<body>
<form name="kakao_form" action="regist_success.php" method="post">
    <div id="kakao_title"><h1>kakao</h1></div>
    <div id="edgebox">
        <div class="title">카카오계정 정보를 입력해주세요</div>
        <div class="email_title">카카오계정 이메일</div>
        <div class="user_input"><input name="email" type="email" value="" placeholder="이메일 주소 입력"></div>
        <div class="button-row"><input name="sendButton" type="button" value="인증메일 발송"></div>
        <div class="pass_title">비밀번호</div>
        <div class="user_input"><input name="pass" type="password" value="" placeholder="비밀번호(8~32자리)"></div>
        <div class="user_input"><input name="passCheck" type="password" value="" placeholder="비밀번호 재입력"></div>
        <div class="nick_title">닉네임
            <div id="user_nickname_input">
                <input type="text" class = "nick_input" name="nickName" value="" placeholder="닉네임을 입력해주세요."><span id="counter">0 / 20</span>
            </div>
        </div>
        <div class="gender_title">생일/성별</div>
        <div class="select-box-row">
            <select name="year" id="year" title="연도" class="select-box"></select>
            <select name="month" id="month" title="월" class="select-box" onchange="setDayBox()"></select>
            <select name="day" id="day" title="일" class="select-box"></select>
            <span class="lunar-button">
                <input name="lunara" type="checkbox" value="음력" id="lunar">
                <label for="lunar"><span></span>&nbsp;음력</label>
            </span>
        </div>
        <div class="radio-row">
            <input type="radio" id="no-select" name="gender" value="" checked><label for="no-select">선택안함</label>
            <input type="radio" id="female" name="gender" value="여" ><label for="female">여성</label>
            <input type="radio" id="male" name="gender" value="남" ><label for="male">남성</label>
        </div>
        <div class="next-button"><input name="" type="button" value="다음" onclick="sendinfo()"></div>
    </div>
</form>
</body>
</html>