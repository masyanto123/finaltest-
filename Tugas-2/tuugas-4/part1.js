"use strict";
// Function to calculate the grade based on score
function getGrade(score) {
    if (score >= 90 && score <= 100)
        return 'A';
    if (score >= 80 && score < 90)
        return 'B';
    if (score >= 70 && score < 80)
        return 'C';
    if (score >= 60 && score < 70)
        return 'D';
    return 'E';
}
// Function to calculate the average and grade
function calculateAverageAndGrade(webProgramming, computerProgramming, statistics, databaseSystems) {
    // Calculate average
    const average = (webProgramming + computerProgramming + statistics + databaseSystems) / 4;
    // Determine grade
    const grade = getGrade(average);
    return { average, grade };
}
// Example usage
try {
    const webProgramming = 85;
    const computerProgramming = 90;
    const statistics = 78;
    const databaseSystems = 88;
    const result = calculateAverageAndGrade(webProgramming, computerProgramming, statistics, databaseSystems);
    console.log(`Average: ${result.average.toFixed(2)}`);
    console.log(`Grade: ${result.grade}`);
}
catch (error) {
    console.error(error.message);
}
