const txtOptions = {
    "stringColors" : {
        "colorOrange": "\x1b[33m",
        "colorGreen": "\x1b[32m",
        "colorRed": "\x1b[31m",
        "colorCyan": "\x1b[36m",
        "colorWhite": "\x1b[37m"
    },
    "stringStyles": {
        "resetAll": "\x1b[0m",
        "fontBold": "\x1b[1m",
    }
};

function AnsiLogger(options) {
    // DOCS: Provides the default options table that can be configured on a new (item) - shown in the example.
    let defaultOptions = {
        tagName: "Server",
        fillStringWithColor: false // Might be difficult to read depending on console - terminal theme.
    }


    // DOCS: Tell function options (e.g. var x = new ansilogger({tagname: blah blah}))
    options = { ...defaultOptions, ...options};
    
    function setupPrototypes(tagName) {
        AnsiLogger.prototype.log = function(string) {
            if (options.fillStringWithColor == true) {
                var ps = `
                    ${txtOptions.stringStyles.fontBold}
                    ${txtOptions.stringColors.colorGreen}
                    [${options.tagName}]:
                    ${txtOptions.stringStyles.resetAll}
                `;
                var msg = `
                    ${ps}
                    ${string}
                    ${txtOptions.stringColors.colorWhite}
                `
                console.log(
                    msg
                )
            } else if(!options.fillStringWithColor) {
                    var ps = `
                    ${txtOptions.stringStyles.fontBold}
                    ${txtOptions.stringColors.colorGreen}
                    [${options.tagName}]:
                    ${txtOptions.stringStyles.resetAll}
                `;
                var msg = `
                    ${txtOptions.stringColors.colorWhite}
                    ${ps}
                    ${string}
                    ${txtOptions.stringStyles.resetAll}
                `
                console.log(
                    msg
                )
            };
        };

        AnsiLogger.prototype.warn = function(string) {
            if (options.fillStringWithColor == true) {
                var ps = `
                    ${txtOptions.stringStyles.fontBold}
                    ${txtOptions.stringColors.colorOrange}
                    [${options.tagName}]:
                    ${txtOptions.stringStyles.resetAll}
                `;
                var msg = `
                    ${ps}
                    ${string}
                    ${txtOptions.stringColors.colorWhite}
                `
                console.warn(
                    msg
                )
            } else if(!options.fillStringWithColor) {
                var ps = `
                    ${txtOptions.stringStyles.fontBold}
                    ${txtOptions.stringColors.colorOrange}
                    [${options.tagName}]:
                    ${txtOptions.stringStyles.resetAll}
                `;
                var msg = `
                    ${txtOptions.stringColors.colorWhite}
                    ${ps}
                    ${string}
                    ${txtOptions.stringStyles.resetAll}
                `
                console.warn(
                    msg
                )
            };
        };

        AnsiLogger.prototype.error = function(string) {
            if (options.fillStringWithColor == true) {
                var ps = `
                    ${txtOptions.stringStyles.fontBold}
                    ${txtOptions.stringColors.colorRed}
                    [${options.tagName}]:
                    ${txtOptions.stringStyles.resetAll}
                `;
                var msg = `
                    ${ps}
                    ${string}
                    ${txtOptions.stringColors.colorWhite}
                `
                console.error(
                    msg
                )
            } else if(!options.fillStringWithColor) {
                    var ps = `
                    ${txtOptions.stringStyles.fontBold}
                    ${txtOptions.stringColors.colorRed}
                    [${options.tagName}]:
                    ${txtOptions.stringStyles.resetAll}
                `;
                var msg = `
                    ${txtOptions.stringColors.colorWhite}
                    ${ps}
                    ${string}
                    ${txtOptions.stringStyles.resetAll}
                `
                console.error(
                    msg
                )
            };
        };

        AnsiLogger.prototype.debug = function(string) {
            if (options.fillStringWithColor == true) {
                var ps = `
                    ${txtOptions.stringStyles.fontBold}
                    ${txtOptions.stringColors.colorCyan}
                    [${options.tagName}]:
                    ${txtOptions.stringStyles.resetAll}
                `;
                var msg = `
                    ${ps}
                    ${string}
                    ${txtOptions.stringColors.colorWhite}
                `
                console.error(
                    msg
                )
            } else if(!options.fillStringWithColor) {
                var ps = `
                    ${txtOptions.stringStyles.fontBold}
                    ${txtOptions.stringColors.colorCyan}
                    [${options.tagName}]:
                    ${txtOptions.stringStyles.resetAll}
                `;
                var msg = `
                    ${txtOptions.stringColors.colorWhite}
                    ${ps}
                    ${string}
                    ${txtOptions.stringStyles.resetAll}
                `
                console.debug(
                    msg
                )
            };
        };
    };
};