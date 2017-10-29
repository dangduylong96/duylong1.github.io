<?php
    require_once("connect.php");
    header("Access-Control-Allow-Origin: *");
    class topview{};
    $arr=[];
    $sql="select * from `nn_product` order by `view` desc limit 0,3";
    $query=mysqli_query($connect,$sql);
    while($row=mysqli_fetch_assoc($query))
    {
        $top_view=new topview();
        $top_view->id=$row['id'];
        $top_view->name=$row['name'];
        $top_view->img=$row['img_url'];
        $top_view->price=$row['price'];
        $arr[]=$top_view;
    }
    echo json_encode($arr);
?>