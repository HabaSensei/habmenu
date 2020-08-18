<?php
session_start();
include_once("db_connect.php");
 
setlocale(LC_MONETARY,"es_ES");
# add products in cart 
if(isset($_POST["codProd"])) {
	 
	foreach($_POST as $key => $value){
		$product[$key] = filter_var($value, FILTER_SANITIZE_STRING);
	}	
	$statement = $conn->prepare("SELECT nomProd, preProd, imgProd FROM productos WHERE codProd=? LIMIT 1");
	
	$statement->bind_param('s', $product['codProd']);
	$statement->execute();
	$statement->bind_result($nomProd, $preProd, $imgProd );
	while($statement->fetch()){ 
		$product["id_unico"] = uniqid();
		$product["imgProd"] = $imgProd;
		$product["nomProd"] = $nomProd;
		$product["preProd"] = $preProd;
		 	
		if(isset($_SESSION["products"])){ 
			if(isset($_SESSION["products"][$product['codProd']])) {				
				$_SESSION["products"][$product['codProd']]["product_qty"] = $_SESSION["products"][$product['codProd']]["product_qty"] + $_POST["product_qty"];				
			} else {
				$_SESSION["products"][$product['codProd']] = $product;
			}			
		} else {
			$_SESSION["products"][$product['codProd']] = $product;
		}	
	}	
	 $total_product = count($_SESSION["products"]);
	 
	die(json_encode(array('products'=>$total_product)));
}
# Remove products from cart
if(isset($_GET["remove_code"]) && isset($_SESSION["products"])) {
	$product_code  = filter_var($_GET["remove_code"], FILTER_SANITIZE_STRING);
	if(isset($_SESSION["products"][$product_code]))	{
		unset($_SESSION["products"][$product_code]);
	}	
 	$total_product = count($_SESSION["products"]);
	die(json_encode(array('products'=>$total_product)));
}
# Update cart product quantity
if(isset($_GET["update_quantity"]) && isset($_SESSION["products"])) {	
	if(isset($_GET["quantity"]) && $_GET["quantity"]>0) {		
		$_SESSION["products"][$_GET["update_quantity"]]["product_qty"] = $_GET["quantity"];	
	}
	$total_product = count($_SESSION["products"]);
	
	die(json_encode(array('products'=>$total_product)));
}	
