// Imported files and packages to be used
const writeToFile = require('./write_file')
const shapes = require('./shapes')
const inquirer = require('inquirer')
const questions = require('./questions')

// This function chooses whish shape to render to the svg by what shape was selected in the terminal prompt
function createSVGFile() {
    // Inisialize the inquirer package
    inquirer.prompt(questions)
        .then((answers) => {
            // Switch case to determine what shape class to use
            let shapeChoice
            switch(answers.shape){
                case 'Triangle':
                    shapeChoice = new shapes.Triangle(answers.text, answers.textColor, answers.shapeColor).render()
                    break
                case 'Circle':
                    shapeChoice = new shapes.Circle(answers.text, answers.textColor, answers.shapeColor).render()
                    break
                case 'Square':
                    shapeChoice = new shapes.Square(answers.text, answers.textColor, answers.shapeColor).render()
                    break
                default:
                    console.log('Invalid shape entered')
            }
            
            // Write file if valid otherwise throw an error message
            if (shapeChoice) {
                writeToFile('./examples/logo.svg', shapeChoice)
            } else {
                console.log('Error generating SVG content')
            }           
        })
        // Second error in case the first fails
        .catch((err) => {
            console.log(err)
        })
}

// Exported to index.js
module.exports = createSVGFile