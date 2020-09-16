var util = require('Util'); 


module.exports = function () {

    var fileNamex = "test      ";

    Creep.prototype.debug = function (textColor, fileName, lineNumber, debugText) {
        console.log('<font color = "' + textColor + '">[' + fileName + 'line:' + lineNumber + '] ' + debugText +'</>');
    }
}