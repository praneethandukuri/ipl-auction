const { readFromFile, writeToFile } = require("./fsUtils");



const getCurrentPlayer = function (filePath, set) {
  const existingPlayers = readFromFile(filePath);
  const currentSet = existingPlayers[set];
  const randomNumber = Math.floor(Math.random() * (currentSet.length - 1));
  const currentPlayer = currentSet[randomNumber]
  currentSet.splice(randomNumber, 1);
  writeToFile(filePath, existingPlayers);
  return currentPlayer;
}

const writeSoldPlayers = function (soldPlayersPath, currentPlayer) {
  const soldPlayers = readFromFile(soldPlayersPath);
  soldPlayers.push(currentPlayer);
  writeToFile(soldPlayersPath, soldPlayers);
}
const main = function (args) {
  const filePath = "./playersList.json";
  const soldPlayersPath = "./soldPlayers.json"
  const currentSet = args[args.indexOf('--set') + 1] - 1;
  let result = '';
  result = getCurrentPlayer(filePath, currentSet);
  writeSoldPlayers(soldPlayersPath, result);
  console.log(result);
}
main(process.argv.slice(2))