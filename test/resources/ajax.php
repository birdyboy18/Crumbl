<?php
    $argument = $_POST['postvalue'];

    if (isset($argument)) {
        echo 'PHP sees your ' . $argument . ' and raises you a chicken.';
    } else {
        echo 'PHP says hi.';
    }
?>
