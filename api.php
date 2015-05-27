<?php
use Clue;
require 'vendor/autoload.php';

$clueResource = new \App\Resource\ClueResource();
$app = new \Slim\Slim();
$app->get('/clues(/(:id)(/))', function($id = null) use ($clueResource) {
    echo $clueResource->get($id);
});
$app->run();
?>