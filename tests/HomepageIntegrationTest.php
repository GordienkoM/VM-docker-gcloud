<?php
declare(strict_types=1);

use PHPUnit\Framework\TestCase;

/**
 * to run this test, go inside the Docker running service,
 * theh `./vendor/bin/phpunit tests --colors`
 */
final class HomepageIntegrationTest extends TestCase {

    // AAA pattern => arrange/act/assert
    public function testWithSlashRouteLoadsWebPageWithH1() {
        // arrange
        $_SERVER['REQUEST_URI'] = '/';
        
        // act
        // load public/index.php
        require_once '/var/www/html/public/index.php';

        // assert
        // check what's displayed
        $this->assertStringContainsString(
            '<h1>Perfect Ticket | your tickets</h1>',
            // testing against what has been buffered before being displayed
            ob_get_contents()
        );

        // tear down
        unset($_SERVER['REQUEST_URI']);
    }

}