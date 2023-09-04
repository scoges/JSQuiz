document.addEventListener("DOMContentLoaded", function () {
    const highScoreList = document.getElementById("high-score-list");
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    highScores.sort((a, b) => b.score - a.score); // Sort high scores by score in descending order

    highScores.forEach((score, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${score.initials}: ${score.score}`;
        highScoreList.appendChild(listItem);
    });
});