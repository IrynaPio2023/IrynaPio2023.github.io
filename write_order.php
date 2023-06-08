<?php
// Получение данных из POST-запроса
$data = $_POST['data'];

// Запись данных в файл
$file = fopen('order.txt', 'w');
if ($file) {
    fwrite($file, $data);
    fclose($file);
    echo 'Порядок и дата успешно записаны в файл: order.txt';
} else {
    echo 'Ошибка при записи порядка и даты в файл.';
}
?>
