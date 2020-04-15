function calculatePartyExperience(characterLevel) {
    if (characterLevel < 2) { //Verifies if the input number is > 1
        console.log("The character level must be greater than 1!");
    } else {
        let minimumLevel = Math.round(characterLevel / 3 * 2); //Calculates the minimum level with the formula
        let maximumLevel = Math.round(characterLevel / 2 * 3); //Calculates the maximum level with the formula
        console.log("Minimum level: " + minimumLevel + " | Maximum level: " + maximumLevel); //Show the outputs
    }
}
