// CLASSES
class Shapes {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }

    render() {
        return ''
    }
}

class Square extends Shapes {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<rect x="75" y="30" width="150" height="150" rx="5" ry="5" fill="${this.shapeColor}"/>`
    }
}

class Circle extends Shapes {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<circle cx="150" cy="103" r="80" fill="${this.shapeColor}" />`
    }
}

class Triangle extends Shapes {
    constructor(shapeColor) {
        super(shapeColor)
    }
    render() {
        return `<polygon points="0, 0 160, 60 0, 120" fill="${this.shapeColor}" transform="translate(98, 46)"/>`
    }
}

function setShape(shape, shapeColor) {
    const triangle = new Triangle(shapeColor)
    const circle = new Circle(shapeColor)
    const square = new Square(shapeColor)

    if (shape === 'polygon') {
        return triangle
    } else if (shape === 'circle') {
        return circle
    } else { return square }
}

function renderSVG(answers) {
    const shapeObj = setShape(answers.shape, answers.shapeColor)
    const shapeString = shapeObj.render()

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${shapeString}

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text.toUpperCase()}</text>
    
    </svg>`
}

module.exports = renderSVG