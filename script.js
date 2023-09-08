function table() {
    let table = document.getElementById('finance');
    table.style.color = 'blue';

    //Делаем заголовки
    let header1 = document.createElement("th");
    header1.innerHTML = "Дата";
    header1.style.color = 'red';
    header1.style.width = '12vw';
    table.appendChild(header1);

    let header2 = document.createElement("th");
    header2.innerHTML = "Цена акций";
    header2.style.color = 'red';
    table.appendChild(header2);

    //создаем таблицу и выводим в нее значения из массивов
    let date = ['28.04.2023', '27.04.2023', '26.04.2023', '25.04.2023', '24.04.2023', '21.04.2023', '20.04.2023', '19.04.2023', '18.04.2023', '17.04.2023',
                '14.04.2023', '13.04.2023', '12.04.2023', '11.04.2023', '10.04.2023', '07.04.2023', '06.04.2023', '05.04.2023', '04.04.2023', '04.04.2023'];
                
    let closePrice = [1002.00, 1004.60, 998.00, 1010.20, 1016.60, 1018.80, 1013.60, 1026.80, 1052.20, 1038.00, 
                      1021.40, 1021.60, 1026.20, 1023.40, 1038.60, 1033.80, 1039.40, 1048.80, 1044.20, 1053.00];

    for (let i = 0; i < closePrice.length; i++) {
        let row = document.createElement('tr');
        let cell1 = document.createElement('td');
        cell1.innerHTML = date[i];
        cell1.style.textAlign = 'center';
        cell1.style.color = 'red';
        row.appendChild(cell1);

        let cell2 = document.createElement('td');
        cell2.innerHTML = closePrice[i];
        cell2.style.textAlign = 'center';
        cell2.style.color = 'red';
        row.appendChild(cell2);
        table.appendChild(row);
    }

    let priceSum = 0;
    for (let i = 0; i < closePrice.length; i++) {
        priceSum = priceSum + closePrice[i];
    }

    let stockAverage = priceSum / closePrice.length;
    let squared_diff_sum = 0;
    for (i = 0 ; i < closePrice.length; i++){
        squared_diff_sum = squared_diff_sum + (closePrice[i] - stockAverage) ** 2;
    }
    let st_deviation = (Math.sqrt(squared_diff_sum / closePrice.length)).toFixed(5);
    let alert1 = document.getElementById('average');
    alert1.innerHTML = 'Среднеквадратическое отклонение: ' + st_deviation;

    let minValue = Math.min.apply(0, closePrice);
    let alert2 = document.getElementById('minValue');
    alert2.innerHTML = 'Минимальное значение: ' + minValue;

    let maxValue = Math.max.apply(0, closePrice);
    let alert3 = document.getElementById('maxValue');
    alert3.innerHTML = 'Максимальное значение: ' + maxValue;
}
    table()