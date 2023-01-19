import axios from "axios";

axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-12-19&sortBy=publishedAt&apiKey=6bd4a18884a9402d81e67a053cbb9cac\n')
    .then(function (response) {
        // обработка успешного запроса
        console.log(response);
    })
    .catch(function (error) {
        // обработка ошибки
        console.log(error);
    })