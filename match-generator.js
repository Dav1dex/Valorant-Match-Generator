function callError(errorMessage) { 
    console.error(colors.red(`Error: ${errorMessage}`)); 
    process.exit() 
}; 
const defTable = require('ascii-table'), 
    random = require('underscore'), 
    colors = require('chalk'), 
    fs = require('fs'), 
    config = require('./config.json'), 
    playersMain = Array.from(config.players), 
    maps = ["Breeze", "Icebox", "Bind", "Haven", "Split", "Ascent"], 
    teamLength = playersMain.length / 2, 
    matches = (config.matches > maps.length) ? callError(`You can't make more than ${maps.length} matches due to how many maps are defined.`) : config.matches;
var fullText = "" + new defTable("").addRow("- Valorant Match Generator -").setBorder("•"); 
if (playersMain.length === 0 || playersMain === undefined) { 
    callError("There are no players defined in config.json.") 
} 
else if (config === {} || config === undefined) { 
    callError("config.json file is empty.")
}; 
for (var match = 1; match <= matches; match++) {
    const players = Array.from(playersMain); 
    var mapIndex = Math.floor(Math.random() * maps.length), 
        tableMatch = new defTable(`Match ${match}`).addRow(`Map`, `${maps[mapIndex]}`).addRow("First Defending", `Team ${random.random(1, 2)}`), 
        table2 = new defTable("Team 1"), 
        table3 = new defTable("Team 2"); 
    maps.splice(mapIndex, 1); 
    for (var i = 1; i <= teamLength; i++) {
        var playerIndex = Math.floor(Math.random() * players.length), 
        randomPlayer = players[playerIndex]; table2.addRow(i, randomPlayer); 
        players.splice(playerIndex, 1)
    }; 
    for (var i = 1; i <= teamLength; i++) { 
        var playerIndex = Math.floor(Math.random() * players.length), 
        randomPlayer = players[playerIndex]; 
        table3.addRow(i, randomPlayer); players.splice(playerIndex, 1)
    }; 
    fullText += `\n\n${tableMatch.toString()}` + `\n${table2.toString()}` + `\n${table3.toString()}`
}; 
fs.writeFile((config.outputFile || "matches.txt"), fullText, function(err, result) { 
    if (err) { 
        callError(err) 
    } 
    else { 
        console.log(`\n${colors.red(new defTable("").addRow("- Valorant Match Generator -").setBorder("•").toString())}\n\n${colors.greenBright(`Matches generated succesfully in ${colors.green(config.outputFile || "matches.txt")}`)}`) 
    } 
})