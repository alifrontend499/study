<?php

$servername = "localhost";
$username = "root";
$pass = "";
$dbname = "ajax_test";

$conn = new mysqli($servername, $username, $pass, $dbname);

$name = $_POST['name'];

//CONNECTION SUCCESSFULL OR NOT
//if ($conn->connect_error) {
//    die("Connection failed: " . $conn->connect_error);
//} else {
//    echo 'Succesful';
//}

$sql = "SELECT * FROM user WHERE name = '$name'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($finaldata = $result->fetch_assoc()) {
        echo "About " . $finaldata['name'] . " : " . $finaldata['details'];
    }
} else {
    echo "<span style='color:red'>No result found</span>";
}

//CLOSING CONNECTION
mysqli_close($conn);
