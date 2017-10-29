<?php
    require_once("connect.php");
    header("Access-Control-Allow-Origin: *");
    class top10{};
    $arr=[];
    $sql="select * from `nn_product` order by `id` desc limit 0,10";
    $query=mysqli_query($connect,$sql);
    while($row=mysqli_fetch_assoc($query))
    {
        $top_10=new top10();
        $top_10->id=$row['id'];
        $top_10->name=$row['name'];
        $top_10->img=$row['img_url'];
        $top_10->price=$row['price'];
        $arr[]=$top_10;
    }
    echo json_encode($arr);
?>