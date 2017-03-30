const fs = require('fs')
const path = require('path')
module.exports = () => {
    const imgBuffer = fs.readFileSync(path.resolve(__dirname, '../assets/CAPTCHA.png'))
    return imgBuffer.toString('base64')
}