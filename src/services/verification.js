const verifyUserInput = (input, userInput) => {
    if (input === '0' || isNaN(input)) {
        alert(`The <<< ${userInput} >>> should be an integer number greater than 0.`);

        return false;
    }; 
    
}


const verification = {
    verifyUserInput
}

export default verification;