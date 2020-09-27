<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>회원가입 결과</title>
    <style>
        * {
            font-size: 24px;
            color : #585858;
        }

        h2 {
            text-align: center;
            padding-top : 20px;
            color : #ffffff;
        }

        #registInfo {
            padding: initial;
            background: #F78181;
            border: none;
        }

        table {
            border-spacing: 14px;
            margin: 10px;
        }

        table td{
            border: 1px solid #E6E6E6;
            border-radius: 10px;
            padding: 10px;
            box-shadow: 3px 3px 5px #C0C0C0;
        }
    </style>
</head>
<body>
<table>
    <tr>
        <td id="registInfo" colspan="2"><h2>회원가입 입력 정보</h2></td>
    </tr>
    <tr>
        <td>이메일</td>
        <td><?= $_POST["email"]."<br>";?></td>
    </tr>
    <tr>
        <td>비밀번호</td>
        <td><?= $_POST["pass"]."<br>";?></td>
    </tr>
    <tr>
        <td>닉네임</td>
        <td><?= $_POST["nickName"]."<br>";?></td>
    </tr>
    <tr>
        <td>생일</td>
        <td><?= $_POST["year"]."년 ".$_POST["month"]."월 ".$_POST["day"]."일"."<br>";?></td>   <!-- option태그의 선택된 값을 각각 출력-->
    </tr>
    <tr>
        <td>연력</td>
        <td>
            <?php
                if (isset($_POST['lunara'])) {      // isset() 함수는 인자가 null이 아니면 1을 반환
                                                    // 즉, regist.php 페이지의 form태그에서 넘어온 값이 있다면
                    echo $_POST["lunara"]."<br>";   // $_POST["lunara"] 출력
                }
                else {                              // 인자가 null 이라면 (음력 버튼을 선택 안했다면)
                    echo "양력<br>";                // 양력 출력
                }
            ?>
        </td>
    </tr>
    <tr>
        <td>성별</td>
        <td><?= $_POST["gender"]."<br>";?></td>
    </tr>

</table>
</body>
</html>



