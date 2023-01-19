import axios from "axios";
import './style.css'
const body = document.querySelector('.grid-container')
function getAxios(cd) {
    axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-12-19&sortBy=publishedAt&apiKey=6bd4a18884a9402d81e67a053cbb9cac\n')
        .then(function (response) {
            cd(response.data.articles);
        })
        .catch(function (error) {
            console.log(error);
        })
}

getAxios((responce) => {
    const fragment = document.createDocumentFragment()
    responce.forEach((post) => {
        const title = document.createElement('div')
        title.classList = 'card-title'
        title.textContent = post.title
        const content = document.createElement('p')
        content.textContent = post.content
        const datePublished = document.createElement('div')
        datePublished.classList = 'right'
        datePublished.textContent = post.publishedAt
        const link = document.createElement("a")
        link.classList = 'link'
        link.textContent = 'link'
        link.href = post.url
        const img = document.createElement('img')
        img.src = post.urlToImage
        const cardImg = document.createElement('div')
        cardImg.classList = 'card-image'
        const cardContent = document.createElement('div')
        cardContent.classList = 'card-content'
        const cardAction = document.createElement('div')
        cardAction.classList = 'card-action'
        const card = document.createElement('div')
        card.classList = 'card'
        cardImg.appendChild(img)
        cardContent.appendChild(title)
        cardContent.appendChild(content)
        cardAction.appendChild(link)
        cardAction.appendChild(datePublished)
        card.appendChild(cardImg)
        card.appendChild(cardContent)
        card.appendChild(cardAction)
        fragment.appendChild(card)
    })
    body.appendChild(fragment)
})