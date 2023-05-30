<?php
require_once 'config.php';

header("Access-Control-Allow-Origin: https://marteiduel.com");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept");

$servername = DB_SERVER;
$username = DB_USER;
$password = DB_PASSWORD;
$dbname = DB_NAME;

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM blogs";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $blogs = array();

        while ($row = $result->fetch_assoc()) {
            $blogs[] = $row;
        }

        $blogs_json = json_encode($blogs);

        header('Content-Type: application/json');

        echo $blogs_json;
    } else {
        echo "No blogs found.";
    }

    $stmt->close();
} else {
    echo "Failed to prepare the SQL statement.";
}

$conn->close();
?>
