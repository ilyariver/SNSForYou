<?php

    $method = $_SERVER['REQUEST_METHOD'];

    if($method !== 'POST') {
        exit();
    }

    $project_name = 'SNSForYou';
    $admin_email = 'mail@dubinevich.ru';
    $form_subject = "Заявка с сайта SNSForYou";
    $message = 'Hello world';

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=utf-8\r\n";
    $headers .= "From: $admin_email\r\n";

    mail($admin_email, $form_subject, $message, $headers);
