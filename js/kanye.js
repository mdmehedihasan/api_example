const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => showQuote(data));
}
loadQuotes();
function showQuote(data) {
    console.log(data.quote);
    const quoteContainer = document.getElementById('quote');
    quoteContainer.innerText = data.quote;
}


///test
const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));
