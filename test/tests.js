const test = QUnit.test;

function quizScore(jacksAnswer, denisesAnswer, erinsAnswer, leighAnnsAnswer) {
    let score = 0;

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

test('All entrys are correct as top favorite expecting 4', function(assert) {
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

test('All entrys are correct as second favorite expecting 4', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const jacksAnswer = "lacrosse";
    const denisesAnswer = "running";
    const erinsAnswer = "traveling";
    const leighAnnsAnswer = "puppies";
    const expected = 4;

    //Act 
    // Call the function you're testing and set the result to a const
    const score = quizScore(jacksAnswer, denisesAnswer, erinsAnswer, leighAnnsAnswer);

    //Assert
    assert.equal(score, expected);
});

test('All entrys are correct as third favorite expecting 4', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const jacksAnswer = "hockey";
    const denisesAnswer = "swimming";
    const erinsAnswer = "nature";
    const leighAnnsAnswer = "podcasts";
    const expected = 4;

    //Act 
    // Call the function you're testing and set the result to a const
    const score = quizScore(jacksAnswer, denisesAnswer, erinsAnswer, leighAnnsAnswer);

    //Assert
    assert.equal(score, expected);
});