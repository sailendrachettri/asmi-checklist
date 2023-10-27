const options = {
    method: 'GET'
};

const displayQuote = document.getElementById('displayQuote')
const defaultQuote = "The way to get started is to quit talking and begin doing."


function changeFact() {
    let length = 1827;
    let quoteNumber = Math.floor(Math.random() * length);


    fetch('js/db.json', options)
        .then(response => response.json())
        .then((response) => {
            let quote = response[quoteNumber]

            if (quote.length > 90) {
                displayQuote.innerHTML = defaultQuote
            }
            else {
                displayQuote.innerHTML = quote[quoteNumber]
            }
        })
        .catch(err => console.error(err));

}
changeFact();
setInterval(changeFact, 10000);