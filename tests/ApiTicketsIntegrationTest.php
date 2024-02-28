<?php
declare(strict_types=1);

use PHPUnit\Framework\TestCase;

/**
 * to run this test, go inside the Docker running service,
 * theh `./vendor/bin/phpunit tests --colors`
 */
final class ApiTicketsIntegrationTest extends TestCase {

    // this is called BEFORE each test
    protected function setUp(): void
    {
        $_SERVER['REQUEST_URI'] = '/api/tickets';
        // connecting to the database
        $conn = new PDO("pgsql:host=postgres;dbname=postgres;port=5432", 'postgres', 'postgres');
        // set PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $create_tickets_table = "CREATE TABLE IF NOT EXISTS tickets (
            id SERIAL PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            description TEXT,
            -- this line says that a status can only be 'open' or 'closed'
            status VARCHAR(20) CHECK (status IN ('open', 'closed')) NOT NULL DEFAULT 'open',
            assigned_to VARCHAR(100),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";

        $stmt = $conn->prepare($create_tickets_table);
        $stmt->execute();

        $conn = null;
    }

    // this is called AFTER each test
    protected function tearDown(): void
    {
        $delete_tickets_table_query = "DROP TABLE IF EXISTS tickets";
        $conn = new PDO("pgsql:host=postgres;dbname=postgres;port=5432", 'postgres', 'postgres');
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $stmt = $conn->prepare($delete_tickets_table_query);
        $stmt->execute();
        $conn = null;
        unset($_SERVER['REQUEST_URI']);
    }

    public function testWithTicketsInDatabaseShowsTheListOfTickets() {
        $this->assertTrue(true);
        // arrange
        // connecting to the database
        $conn = new PDO("pgsql:host=postgres;dbname=postgres;port=5432", 'postgres', 'postgres');
        // set PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // create the tickets
        $insert_tickets_query = "INSERT INTO tickets(title, description)
            VALUES('First ticket', 'This is the first ticket'),
            ('Second ticket', 'This is the second ticket');";
        $stmt = $conn->prepare($insert_tickets_query);
        $stmt->execute();
        $conn = null;

        // act
        // load the homepage
        require_once '/var/www/html/public/index.php';

        // assert
        // verify that tickets are displayed
        $this->assertStringContainsString(
            'This is the first ticket',
            // testing against what has been buffered before being displayed
            ob_get_contents()
        );
        $this->assertStringContainsString(
            'This is the second ticket',
            // testing against what has been buffered before being displayed
            ob_get_contents()
        );
    }

}