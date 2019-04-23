function quizScore(jacksAnswer, denisesAnswer, erinsAnswer, leighAnnsAnswer) {
    let score = 0;

    jacksAnswer = jacksAnswer.toLowerCase();
    denisesAnswer = denisesAnswer.toLowerCase();
    erinsAnswer = erinsAnswer.toLowerCase();
    leighAnnsAnswer = leighAnnsAnswer.toLowerCase();

    if(jacksAnswer === "waterskiing" || jacksAnswer === "lacrosse" || jacksAnswer === "hockey"){
        score++;
    }

    if(denisesAnswer === "tacos" || denisesAnswer === "running" || denisesAnswer === "swimming"){
        score++;
    }

    if(erinsAnswer === "poetry" || erinsAnswer === "traveling" || erinsAnswer === "nature"){
        score++;
    }

    if(leighAnnsAnswer === "eurovision" || leighAnnsAnswer === "puppies" || leighAnnsAnswer === "podcasts"){
        score++;
    }

    return score;
}

export default quizScore;