import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number between 1 -10:",
    },
]);
if (answer.userGuessNumber) {
    console.log("Congratulatons ! You guess a correct number.");
}
else {
    console.log("Sorry, You guess a wrong number.");
}
