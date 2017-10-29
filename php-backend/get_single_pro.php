<?php
    require_once('connect.php');
    header("Access-Control-Allow-Origin: *");
    class product{};
    $arr=[];
    $id=$_GET['id'];
    $sql="select * from `nn_product` where `id`=$id";
    $query=mysqli_query($connect,$sql);
    $row=mysqli_fetch_assoc($query);
    $product=new product();
    $product->id=$row['id'];
    $product->name=$row['name'];
    $product->img=$row['img_url'];
    $product->desc=$row['desc'];
    $arr[]=$product;
    echo json_encode($arr);
?>