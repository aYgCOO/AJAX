<?php
$server = '127.0.0.1';
$username = 'root';
$password = '';
$database = 'ajax';

$conn = mysqli_connect($server, $username, $password, $database);
if (!$conn) {
     echo "Server not connected" . mysqli_error($conn);
}
?>