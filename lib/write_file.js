const fs = require('fs')


function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log('Your SVG has been created!')
    })
}

module.exports = writeToFile