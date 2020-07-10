<?
$query = $_GET['query'];

header('Cache-Control: no-cache, must-revalidate');
header('Expires: ' . gmdate('D, d M Y H:i:s', time()) . ' GMT');
header('Content-type: application/json; charset=utf-8');

$params = array('query'=>$query);

$url = "https://openapi.naver.com/v1/search/shop.json";
$url = $url.'?'.http_build_query($params, '', '&');

$headers = [
  'X-Naver-Client-Id: TAPOenwIi_ZJZ0dvuZbh',
  'X-Naver-Client-Secret: P2bubFbPaH'
];

$ch = curl_init();                                 //curl 초기화
curl_setopt($ch, CURLOPT_URL, $url);               //URL 지정하기
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);   // 해더 초기화
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);    //요청 결과를 문자열로 반환
// curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);      //connection timeout 10초
// curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);   //원격 서버의 인증서가 유효한지 검사 안함

$response = curl_exec($ch);
curl_close ($ch);
echo $response;
?>
