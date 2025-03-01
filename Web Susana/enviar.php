<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $comentario = $_POST['comentario'];

    $to = "susana.ml8@hotmail.com"; // Reemplaza con tu dirección de correo
    $subject = "Nuevo comentario recibido";
    $message = "Has recibido un nuevo comentario de: $email\n\nComentario:\n$comentario";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Correo enviado exitosamente.";
    } else {
        echo "Error al enviar el correo.";
    }
}
?>
