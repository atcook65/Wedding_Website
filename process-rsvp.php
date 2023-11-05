<?php

// Only process POST reqeusts.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and remove whitespace.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $attendance = trim($_POST["attendance"]);
    $guests = trim($_POST["guests"]);
    $message = trim($_POST["message"]);

    // Check that data was sent to the mailer.
    if ( empty($name) OR empty($attendance) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        exit;
    }

    // Set the recipient email addresses
    $recipient = "atcook65@gmail.com"; // TODO: Update this to your desired email address.
    $recipient2 = "ricardoachata@gmail.com"; // TODO: Update this to your partner's email address.

    // Set the email subject.
    $subject = "New RSVP from $name";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Attendance: $attendance\n";
    $email_content .= "Number of Guests: $guests\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email to the first recipient.
    $email_sent = mail($recipient, $subject, $email_content, $email_headers);

    // Send the email to the second recipient if the first was successful.
    if($email_sent) {
        mail($recipient2, $subject, $email_content, $email_headers);
    }

    // Check if the mail was sent and respond accordingly
    if ($email_sent) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Thank You! Your RSVP has been sent.";
    } else {
        // If mail was not sent, there might be a server issue.
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }

} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}

?>
