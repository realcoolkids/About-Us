import quizScore from "./quizScore.js"
const submitButton = document.getElementById('submit');


const jacksInput = document.getElementById('jacks-favorite-thing');
const denisesInput = document.getElementById('denises-favorite-thing');
const erinsInput = document.getElementById('erins-favorite-thing');
const leighAnnsInput = document.getElementById('leigh-anns-favorite-thing');
// console.log(submitButton, jacksAnswer, denisesAnswer, erinsAnswer, leighAnnAnswer);

submitButton.addEventListener("click",() => {
    const jacksAnswer = jacksInput.value;
    const denisesAnswer = denisesInput.value;
    const erinsAnswer = erinsInput.value;
    const leighAnnsAnswer = leighAnnsInput.value;

    const score = quizScore(jacksAnswer, denisesAnswer, erinsAnswer, leighAnnsAnswer);

    let scoreEl = document.getElementById("score")
    scoreEl.textContent = "Your score: " + score;

    console.log(scoreEl)
}) 