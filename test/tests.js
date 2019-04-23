const test = QUnit.test;

function quizScore(jacksAnswer, denisesAnswer, erinsAnswer, leighAnnsAnswer) {
    let score = 0;

    if(jacksAnswer === "waterskiing"){
        score++;
    }

    if(denisesAnswer === "tacos"){
        score++;
    }

    if(erinsAnswer === "poetry"){
        score++;
    }

    if(leighAnnsAnswer === "eurovision"){
        score++;
    }

    return score;
}

test('All entrys are wrong expecting 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const jacksAnswer = "lsjkdf";
    const denisesAnswer = "cat";
    const erinsAnswer = "dog";
    const leighAnnsAnswer = "mouse";
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const score = quizScore(jacksAnswer, denisesAnswer, erinsAnswer, leighAnnsAnswer);

    //Assert
    assert.equal(score, expected);
});

test('All entrys are correct expecting 4', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const jacksAnswer = "waterskiing";
    const denisesAnswer = "tacos";
    const erinsAnswer = "poetry";
    const leighAnnsAnswer = "eurovision";
    const expected = 4;

    //Act 
    // Call the function you're testing and set the result to a const
    const score = quizScore(jacksAnswer, denisesAnswer, erinsAnswer, leighAnnsAnswer);

    //Assert
    assert.equal(score, expected);
});