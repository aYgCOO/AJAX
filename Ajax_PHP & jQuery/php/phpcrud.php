<?php
// Database connection
include "db_connection.php";

// Fetching Data
$sql_Query = "SELECT * FROM `users`";
$result = mysqli_query($conn, $sql_Query);
$htmlStr = "";
if ($result && mysqli_num_rows($result) > 0) {
    $htmlStr .= "
    <table class='table table-custom'>
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>";
    while ($rows = mysqli_fetch_assoc($result)) {
        $htmlStr .= "
        <tr>
            <td>{$rows['firstName']}</td>
            <td>{$rows['lastName']}</td>
            <td>{$rows['email']}</td>
            <td>{$rows['age']}</td>
            <td><button class='btn btn-success' data-id='{$rows['id']}'>Update</button></td>
            <td><button class='btn btn-danger' data-id='{$rows['id']}'>Delete</button></td>
        </tr>";
    }
    $htmlStr .= "</tbody></table>";
    mysqli_close($conn);
    echo $htmlStr;
} else {
    echo "<span style='color:red'>Oops! No data found :(</span>";
}

// Insert data
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['first_name'], $_POST['last_name'], $_POST['email_id'], $_POST['user_age'])) {
    $firstName = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['first_name']));
    $lastName = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['last_name']));
    $email_ID = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['email_id']));
    $user_Age = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['user_age']));

    $sql_Query = "INSERT INTO `users` (`firstName`, `lastName`, `email`, `age`) VALUES ('$firstName', '$lastName', '$email_ID', '$user_Age')";
    $result = mysqli_query($conn, $sql_Query);
    if (!$result) {
        echo "Oops! Something went wrong: " . mysqli_error($conn);
    } else {
        echo "<script>alert('Data inserted successfully');</script>";
    }
}

// Delete Data
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['student_id'])) {
    $student_id = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['student_id']));
    $delete_query = "DELETE FROM `users` WHERE id = '$student_id'";
    $result = mysqli_query($conn, $delete_query);
    if (!$result) {
        echo "Oops! Something went wrong: " . mysqli_error($conn);
    }
}
?>
