const writeToFile = require('./write_file')
const shapes = require('./shapes')
const inquirer = require('inquirer')
const questions = require('./questions')

function createSVGFile() {

    inquirer.prompt(questions)
        .then((answers) => {
            let shapeChoice
            switch(answers.shape){
                case 'polygon':
                    shapeChoice = new shapes.Triangle(answers.text, answers.textColor, answers.shapeColor).render()
                    break
                case 'circle':
                    shapeChoice = new shapes.Circle(answers.text, answers.textColor, answers.shapeColor).render()
                    break
                case 'rect':
                    shapeChoice = new shapes.Square(answers.text, answers.textColor, answers.shapeColor).render()
                    break
                default:
                    console.log('Invalid shape entered')
            }
            console.log(shapeChoice)

            if (shapeChoice) {
                writeToFile('./examples/logo.svg', shapeChoice)
            } else {
                console.log('Error generating SVG content')
            }
           
            // const svg = shapes(answers)

            // writeToFile('./examples/logo.svg', shapeChoice)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = createSVGFile