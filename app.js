window.addEventListener('DOMContentLoaded', function() {
  // Функция для получения текущей даты в формате 'YYYY-MM-DD'
  function getCurrentDate() {
    var today = new Date();
    var year = today.getFullYear();
    var month = (today.getMonth() + 1).toString().padStart(2, '0');
    var day = today.getDate().toString().padStart(2, '0');
    return year + '-' + month + '-' + day;
  }

  // Функция для проверки, является ли текущая дата следующим днем после сохраненной даты
  function isNextDay(currentDate, savedDate) {
    var nextDay = new Date(savedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    var nextDayFormatted = nextDay.toISOString().substr(0, 10);
    return currentDate === nextDayFormatted;
  }

  // Функция для загрузки порядка из файла
  function loadOrderFromFile() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = xhr.responseText;
        var orderMatch = response.match(/Order: (.*)/);
        var dateMatch = response.match(/Date: (.*)/);
        if (orderMatch && dateMatch) {
          var order = orderMatch[1].split(', ');
          var savedDate = dateMatch[1];
          var currentDate = getCurrentDate();
          if (isNextDay(currentDate, savedDate)) {
            // Если текущая дата следующий день, генерируем новый порядок и записываем в файл
            generateNewOrder();
          } else {
            // Иначе загружаем порядок из файла
            displayOrder(order);
          }
        } else {
          generateNewOrder();
        }
      }
    };
    xhr.open('GET', 'order.txt', true);
    xhr.send();
  }

  // Функция для генерации нового порядка и записи в файл
  function generateNewOrder() {
    var employers = document.querySelectorAll('.employers-main > div');
    var order = Array.from(employers).map(function(employer) {
      return employer.textContent;
    });
    shuffleArray(order);
    displayOrder(order);
    writeOrderAndDateToFile(order);
  }

  // Функция для перемешивания элементов массива (алгоритм Фишера-Йетса)
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Функция для отображения порядка на странице
  function displayOrder(order) {
    var employers = document.querySelectorAll('.employers-main > div');
    employers.forEach(function(employer, index) {
      employer.textContent = order[index];
    });
  }

  // Функция для записи порядка и даты в файл
  function writeOrderAndDateToFile(order) {
    var xhr = new XMLHttpRequest();
    var currentDate = getCurrentDate();
    var data = 'Order: ' + order.join(', ') + '\nDate: ' + currentDate;
    xhr.open('POST', 'write_order.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('data=' + encodeURIComponent(data));
  }

  // Загрузка порядка из файла при загрузке страницы
  loadOrderFromFile();
});
