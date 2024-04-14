const questions = [
    {
        name: 'text',
        message: 'Enter a three letter acronym:',
        validate: function (input) {
            if (input.length > 3) {
                return 'More than three letters entered.'
            }
            return true
        }
    },
    {
        name: 'textColor',
        message: 'Enter a color or hex number:'
    },
    {
        name: 'shape',
        type: 'list',
        message: 'Select a backdrop shape:',
        choices: ['circle',
            {
                name: 'triangle',
                value: 'polygon'
            },
            {
                name: 'square',
                value: 'rect'
            }]
    },
    {
        name: 'shapeColor',
        message: 'Enter a color or hex number for the backdrop shape:'
    },
]

module.exports = questions