import quizScore from "./quizScore.js"
const submitButton = document.getElementById('submit');


const jacksInput = document.getElementById('jacks-favorite-thing');
const denisesInput = document.getElementById('denises-favorite-thing');
const erinsInput = document.getElementById('erins-favorite-thing');
const leighAnnsInput = document.getElementById('leigh-anns-favorite-thing');

submitButton.addEventListener("click",() => {
    const jacksAnswer = jacksInput.value;
    const denisesAnswer = denisesInput.value;
    const erinsAnswer = erinsInput.value;
    const leighAnnsAnswer = leighAnnsInput.value;
    
    let scoreEl = document.getElementById("score")
    
    if(jacksAnswer.trim() === "" || denisesAnswer.trim() === "" || erinsAnswer.trim() === "" || leighAnnsAnswer.trim() === ""){
        scoreEl.textContent = "Please fill out all options.";
    } else {
        const score = quizScore(jacksAnswer, denisesAnswer, erinsAnswer, leighAnnsAnswer);

        scoreEl.textContent = "Your score: " + score;
    }
}) 