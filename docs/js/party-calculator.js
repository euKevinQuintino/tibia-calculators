function calculatePartyExperience(characterLevel) {
    if (characterLevel < 2) {
        document.getElementById("calculator-result").innerHTML = `Sorry, the character level must be a number greater than <strong>1</strong>.`;
    } else {
        let minimumLevel = Math.round(characterLevel / 3 * 2);
        let maximumLevel = Math.round(characterLevel / 2 * 3);
        document.getElementById("calculator-result").innerHTML = `The minimum level to share experience on party is <strong>${minimumLevel}</strong> and the maximum is <strong>${maximumLevel}</strong>.`;
    }
}