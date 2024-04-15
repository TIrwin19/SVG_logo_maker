// Questions object used in the create_file.js
const questions = [
    {
        name: 'text',
        message: 'Enter a three letter acronym:',
        // Validate function to check if the user inputs more than three characters
        validate: function (input) {
            if (input.length > 3) {
                return 'More than three letters entered.'
            }
            return true
        }
    },
    {
        name: 'textColor',
        message: 'Enter a color or hexidecimal number (Ex: #000000):'
    },
    {
        // List of shapes used to referance which shape class will be used to render the svg
        name: 'shape',
        type: 'list',
        message: 'Select a backdrop shape:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        name: 'shapeColor',
        message: 'Enter a color or hexidecimal number (Ex: #000000) for the backdrop shape:'
    },
]

// Stage the questions for export
module.exports = questions