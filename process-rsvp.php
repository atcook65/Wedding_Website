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
    
    // Redirect to a new page or display a message
    echo 'Thank you for your RSVP!';
}
?>
