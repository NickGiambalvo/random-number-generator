function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumber(){
    const min = Number(document.getElementById('min').value);
    const max = Number(document.getElementById('max').value);
   
    if (min > max) {
        alert('Minimum value cannot be greater than maximum value.');
        return;
    }

    const randomNumber = randomNumberGenerator(min, max);

    const numberDisplay = document.getElementById('numberDisplay');
    numberDisplay.textContent = randomNumber;

    const logResults = document.getElementById('logResults');
    const logEntry = document.createElement('li');

    logEntry.textContent = randomNumber;
    logResults.appendChild(logEntry);
}