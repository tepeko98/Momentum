const quotes = [
    {
        quote: "When you have faults, do not fear to abandon them.",
        author: "Confucius",
    },
    {
        quote: "They must often change who would be constant in happiness or wisdom.",
        author: "Confucius",
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "Lawana",
    },
    {
        quote: "Youth isn’t always all it’s touted to be.",
        author: "Lawana Blackwell",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "The goal of life is living in agreement with nature.",
        author: "Zeno",
    },
    {
        quote: "When you have faults, do not fear to abandon them.",
        author: "Confucius",
    },
    {
        quote: "This too shall pass.",
        author: "Et hoc transibit",
    },
    {
        quote: "The die is cast.",
        author: "Julius caesar",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 0-9까지 세어주는 function, Math.모듈 활용
// Math.random()은 0~1 사이 값이 랜덤으로 출력되므로
// * 10을 하여 0~10 사이의 숫자들을 얻고, integer로 변환
// round() 반올림, ceil() 올림, floor() 내림

// console.log(quotes[Math.floor(Math.random() * 10)]);

// * 10 을 변수로 처리하기 위해 Array.leneth 활용하여 길이 구하기
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// innerText로 웹사이트에 출력
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
