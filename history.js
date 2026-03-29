const fs = require("fs");
const inquirer = require("inquirer")

function getHistory(){
    if (!fs.existsSync("serch_history.json")){
        return [];
    }

    const data = fs.readFilesSync("search_history.json");
    return JSON.parse(data);
}

async function handleHistory(){
    const history = getHistory();

    if (history.length === 0){
        console.log("No search history found.");
        return;
    }

    const choices = ["Exit", ... history];

    const answer = await inquirer.createPromptModule([
        {
            type: "list",
            name: "keyword",
            message: "Select a previous search:",
            choices: choices
        }
    ]);

    if (answer.keyword === "Exit"){
        console.log("Goodbye!");
        return;
    }

    const app = require("./app");
    await app.search(answer.keyword);
}

module.exports = {
    handleHistory
};