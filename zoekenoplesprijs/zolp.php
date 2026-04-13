<?php
// zoeken_les.php

$resultaten = '';
$melding = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $lesdatum = $_POST['lesdatum'] ?? '';

    if (empty($lesdatum)) {
        $melding = "Selecteer eerst een datum.";
    } else {
        // TODO: database query om lessen op deze datum op te halen
        $resultaten = "Hier komen de lessen van " . htmlspecialchars($lesdatum);
    }
}
?>