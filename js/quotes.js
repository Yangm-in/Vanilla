const quotes = [
    {
        quote : "유비 하나 내놔라~",
        author : "인삿말을 고민하는 코로네",
    },
    {
        quote : "유비, 유비~",
        author : "방송을 시작하는 코로네",
    },
    {
        quote : "오카유~~~",
        author : "오카유가 좋은 코로네",
    },
    {
        quote : "캐나다는 말이야... 좋단 말이지",
        author : "알 수 없는 화법의 코로네",
    },
    {
        quote : "그거 하↘겐↗다쯔→야?",
        author : "편의점 달인 코로네",
    },
    {
        quote : "본인 인생은 본인이 주인공이라고",
        author : "멋진 말 코로네",
    },
    {
        quote : "반자이~~~~ 아, 반다이...",
        author : "눈이 침침한 코로네",
    },
    {
        quote : "노치쿠쇼오~",
        author : "축농증 걸린 코로네",
    },
    {
        quote : "으아 너 진짜 기분 나쁘다...",
        author : "본심을 숨길 수 없는 코로네",
    },
    {
        quote : "EATING MIKE TYSON'S ASS!",
        author : "영어 개잘하는 코로네",
    },
];

const quote = document.querySelector("#quote span:first-child");

const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;