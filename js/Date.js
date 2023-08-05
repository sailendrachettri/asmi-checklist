let dateAndTime = document.getElementById('dateAndTime')
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function displayDateAndTime() {
    // Get the current date and time
    const date = new Date();
    let day = date.getDate()

    if (day == 1) {
        day = date.getDate() + '<sup>st</sup>'
    } else if (day == 2) {
        day = date.getDate() + '<sup>nd</sup>'

    } else if (day == 3) {
        day = date.getDate() + '<sup>rd</sup>'

    } else {
        day = date.getDate() + '<sup>th</sup>'

    }
    const month = months[date.getMonth()];
    const year = date.getFullYear()

    dateAndTime.innerHTML = day + " " + month + " " + year;
}
displayDateAndTime()