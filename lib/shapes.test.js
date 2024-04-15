// Subclass object imported for testing
const shapes = require('./shapes')

// This test will un to see if the color input (blus) is present in the shape element string of the svg. This is acheved using the '.toContain' method built into Jest
describe('Shapes', ()=>{

    test('Should return a blue triangle string', () => {
        const triangle = new shapes.Triangle('TMI', 'white', 'blue')
        const renderedTriangle = triangle.render()
        expect(renderedTriangle).toContain('<polygon points="0, 0 160, 60 0, 120" fill="blue" transform="translate(98, 46)"/>')
    })

    test('Should return a blue circle string', () => {
        const circle = new shapes.Circle('TMI', 'white', 'blue')
        const renderedCircle = circle.render()
        expect(renderedCircle).toContain('<circle cx="150" cy="103" r="80" fill="blue"/>')
    })

    test('Should return a blue square string', () => {
        const square = new shapes.Square('TMI', 'white', 'blue')
        const renderedSquare = square.render()
        expect(renderedSquare).toContain('<rect x="75" y="30" width="150" height="150" rx="5" ry="5" fill="blue"/>')
    })
})