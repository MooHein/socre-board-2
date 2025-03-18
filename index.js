let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function addHome(points) {
    homeScore += points;
    homeScoreEl.innerText = homeScore;
}

function addGuest(points) {
    guestScore += points;
    guestScoreEl.innerText = guestScore;
}

// Reset Scores
function resetScores() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.innerText = homeScore;
    guestScoreEl.innerText = guestScore;
}



