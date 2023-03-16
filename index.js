const readLineSync = require('readline-sync')
const chalk = require('chalk')

const propriedades = []
let input = ""

while(input != "sair"){
    
    propriedades.push(input)
    input = readLineSync.question(chalk.magenta("Insira uma propriedade do CSS ")).toLocaleLowerCase()
}


console.log(chalk.blue.italic(propriedades.sort().join("\n"))) 