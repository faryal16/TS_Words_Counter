#! /usr/bin/env node
// import inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
//display a colourful welcome message
console.log(chalk.blue.bold("\n\t>>>>>>WELCOME TO MY PROJECT<<<<<<<\t\n"));
console.log(chalk.blue.bold("\t\t>>>> WORD COUNTER<<<<\t"));
console.log("=".repeat(60));
//prompt the user to enter a sentense
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.green("Enter a sentence:")
    }
]);
//triming a sentence splitting it into words based on "spaces"
let words = answer.sentence.trim().split(" ");
// analizes of users input sentences
console.log("=".repeat(60));
console.log(chalk.gray.bold("\nWord Sentence:\n"));
console.log(words);
console.log(chalk.yellow(`\n Word Count: ${chalk.redBright(words.length)} \n`));
console.log("=".repeat(60));
