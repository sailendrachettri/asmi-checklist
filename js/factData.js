const options = {
    method: 'GET'
};

const displayQuote = document.getElementById('displayQuote')
const defaultQuote = "The way to get started is to quit talking and begin doing."

function changeFact() {

    fetch('js/db.json', options)
        .then(response => response.json())
        .then((response) => {
            let quote = response[1].fact

            if (quote.length > 90) {
                displayQuote.innerHTML = defaultQuote
            }
            else {
                displayQuote.innerHTML = quote
            }
        })
        .catch(err => console.error(err));

}
changeFact();
setInterval(changeFact, 12000);