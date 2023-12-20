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
const main = function (args) {
  const filePath = "./playersList.json"
  const currentSet = args[args.indexOf('--set') + 1] - 1;
  let result = '';
  result = getCurrentPlayer(filePath, currentSet);
  console.log(result);
}
main(process.argv.slice(2))