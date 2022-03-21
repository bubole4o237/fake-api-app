const verifyUserInput = (input, userInputType, check) => {
    let limit = 0;
    if (userInputType === "userId") {
        limit = 10;
    }
    if (userInputType === "postId") {
        limit = 100;
    }

    let message = `The <<< ${userInputType} >>> should be an integer number greater than 0 and less then or equal to ${limit}.`;

    if (userInputType === "user ID") {
        message = `The <<< ${userInputType} >>> should be an integer number greater than 0.`
    }

    if (
        input === '0' ||
        isNaN(input) ||
        ((userInputType === 'postId') && (Number(input) > 100)) ||
        ((userInputType === 'userId') && (Number(input) > 10))
    ) {
        alert(message);

        return false;
    };

}


const verification = {
    verifyUserInput
}

export default verification;