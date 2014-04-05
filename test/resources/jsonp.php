<?php
	header("Content-Type: application/javascript");
	$callback = $_GET["callback"];
	$message = $_GET["message"];
	$json = "{\"message\":\"JSONP returns " . $message . "\"}";
	echo $callback . "(" . $json . ")";
?>
