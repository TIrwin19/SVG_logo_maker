// Filed system imported to be used in function
const fs = require('fs')

// This function handles writing the svg file and inserting data into said file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log('Your SVG has been created!')
    })
}

// Exoported to create_file.js
module.exports = writeToFile