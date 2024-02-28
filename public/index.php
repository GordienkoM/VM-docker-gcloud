<?php

require_once '/var/www/html/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable('/var/www/html');
$dotenv->load();

// get the requested path
$path = $_SERVER['REQUEST_URI'];

// ROUTING
switch ($path) {
    case '/':
        $home_html_contents = file_get_contents('/var/www/html/views/home.html');
        $home_html_contents = str_replace('$HOST', $_ENV['HOST'], $home_html_contents);
        // get contents of the `views/home.html`
        echo $home_html_contents;
        break;
        
    // this our first API endpoint
    case '/api/tickets':
        // connecting to the database
        $host = $_ENV['DB_HOST'];
        $dbname = $_ENV['DB_NAME'];
        $password = $_ENV['DB_PASSWORD'];
        $port = $_ENV['DB_PORT'];
        $username =  $_ENV['DB_USERNAME'];
        try {
            $conn = new PDO("pgsql:host=$host;dbname=$dbname;port=$port", $username, $password);
            // set PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo "Connected successfully";
        } catch(PDOException $e) {
            // TODO log errors into a file
            echo "Connection failed: " . $e->getMessage();
        }

        // making a dummy query
        $sql = "SELECT title, description, status, assigned_to, created_at
            FROM tickets";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $tickets = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $conn = null;
        // display the tickets
        echo json_encode($tickets);
        break;
    
    default:
        // TODO not found page
        die('not found');
}