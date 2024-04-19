#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number between 1 -10:",
    },
]);
if (answer.userGuessNumber) {
    console.log(chalk.green.bold("Congratulatons ! You guess a correct number."));
}
else {
    console.log(chalk.red.bold("Sorry, You guess a wrong number."));
}
