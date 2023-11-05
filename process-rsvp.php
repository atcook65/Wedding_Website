<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $attendance = $_POST['attendance'];
    $guests = $_POST['guests'];
    $message = $_POST['message'];
    
    $to = 'atcook65@gmail.com, ricardoachata@gmail.com'; // your email
    $subject = 'Wedding RSVP';
    $content = "Name: $name\n";
    $content .= "Email: $email\n";
    $content .= "Attendance: $attendance\n";
    $content .= "Number of Guests: $guests\n";
    $content .= "Message: $message";
    $headers = 'From: webmaster@example.com' . "\r\n" .
               'Reply-To: ' . $email . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $content, $headers);

// Simple validation example
if (empty($name) || empty($email) || empty($attendance) || empty($guests)) {
    // Handle the error - you should redirect or inform the user
    die('Please fill in all required fields.');
}

// Send the email and check if it was successful
if (!mail($to, $subject, $content, $headers)) {
    // Handle the error - mail function failed to send the email
    die('Unable to send RSVP. Please try again later.');
}

// If mail was successful, redirect or inform the user
echo 'Thank you for your RSVP!';

}
?>
