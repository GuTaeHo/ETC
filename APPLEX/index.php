<!DOCTYPE html>
<?
if (isset($_GET['target'])) {
	$target = $_GET['target'];
} else {
	$target = "index";
}
?>
<html>
<head>
	<? include("head.php"); ?>
	<link rel="stylesheet" href="css/main.css"/>
	<!-- css 파일 include -->
	<link rel="stylesheet" href="css/<? print($target); ?>.css"/>
</head>

<body>
<?
	// 패널, 상단바 등 네비게이션 include
	include("navigation.php");
?>

<div data-role="content">
	<?
		// 본문 내용 include
		include("./views/".$target.".php");
	?>
</div>

<div data-role = "footer" id = "footer">
  <h1>A P P L E X</h1>
</div>

<!-- js 파일 include -->
<script src="js/main.js"></script>
<script src="js/<? print($target); ?>.js"></script>

</body>
</html>
