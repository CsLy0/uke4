document.getElementById('spinButton').addEventListener('click', spinReels);

function spinReels() {
    const symbols = ["🍒", "🍋", "🍊", "🍇", "🔔", "⭐"];
    const reel1 = getRandomSymbol(symbols);
    const reel2 = getRandomSymbol(symbols);
    const reel3 = getRandomSymbol(symbols);

    document.getElementById('reel1').textContent = reel1;
    document.getElementById('reel2').textContent = reel2;
    document.getElementById('reel3').textContent = reel3;

    checkOutcome(reel1, reel2, reel3);
}

function getRandomSymbol(symbols) {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function checkOutcome(reel1, reel2, reel3) {
    const resultElement = document.getElementById('result');
    if (reel1 === reel2 && reel1 === reel3) {
        resultElement.textContent = "Jackpot! You won!";
    } else if (reel1 === reel2 || reel1 === reel3 || reel2 === reel3) {
        resultElement.textContent = "You won!";
    } else {
        resultElement.textContent = "You lost. Try again!";
    }
}