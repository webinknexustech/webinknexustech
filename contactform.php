<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $contact = $_POST["contact"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Your email address
    $to = "info@webinknexustech.com";

    // Email subject
    $subject = "New Contact Form Submission - $subject";

    // Email headers
    $headers = "From: $email";

    // Email body
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Contact: $contact\n";
    $email_body .= "Subject: $subject\n\n";
    $email_body .= "Message:\n$message";

    // Send the email
    mail($to, $subject, $email_body, $headers);

    // You can also send a confirmation email to the user if needed

    // Redirect to a thank you page or display a success message
    echo "Email sent successfully!";
} else {
    // Handle invalid form submissions or direct access to the script
    echo "Invalid form submission!";
}
?>
