const loadQuote=()=>{
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(json => displayQuote(json))
}
const displayQuote=(quote)=>{
    const quoteElement=document.getElementById('quote');
    quoteElement.innerHTML=`${quote.quote}`;
}