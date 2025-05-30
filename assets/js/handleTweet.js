const box1 = document.getElementById("area1")
const box2 = document.getElementById("area2")

import cResponse from './cake.js'
import dResponse from './dildo.js'

const genLink = (tweet) => {
    //     return `
    // https://twitter.com/intent/tweet?url=https://choiceonsolana.wtf&hashtags=choice,choiceonsolana&text=${tweet}
    // `
    return `
https://twitter.com/intent/tweet?url=https://choiceonsolana.wtf&text=${tweet}
`
}

const handleCakeClick = () => {
    const randomIndex = Math.floor(Math.random() * cResponse.length);
    const tweet = `
${cResponse[randomIndex]}%0A%0A
    `

    console.log(tweet)
    window.open(genLink(tweet))
}

const handleDildoClick = () => {
    const randomIndex = Math.floor(Math.random() * dResponse.length);
    const tweet = `
${dResponse[randomIndex]}%0A%0A
    `
    window.open(genLink(tweet))
}


box1.addEventListener("click", handleCakeClick);
box2.addEventListener("click", handleDildoClick);