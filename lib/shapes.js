class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    render() {
        return ''
    }
}

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
    }
    render(){
    return`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0, 0 160, 60 0, 120" fill="${this.shapeColor}" transform="translate(98, 46)"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text.toUpperCase()}</text>
    </svg>`
    }
}

class Circle extends Shapes {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
    }
    render(){
    return`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="103" r="80" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text.toUpperCase()}</text>
    </svg>`
    }
}

class Square extends Shapes {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
    }
    render(){
    return`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="75" y="30" width="150" height="150" rx="5" ry="5" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text.toUpperCase()}</text>
    </svg>`
    }
}

module.exports = {Triangle, Circle, Square}