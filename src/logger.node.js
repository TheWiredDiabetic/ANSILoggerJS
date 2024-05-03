//
//  ANSI Logger JS - Compact JS Logger
//  - by TheWiredDiabetic (github.com/TheWiredDiabetic) -
//  - https://github.com/TheWiredDiabetic/ANSILoggerJS  -
//  - Version: 1.0.0 (Node.js Friendly)                 -
//

const txtOptions = {
	stringColors: {
		colorOrange: "\x1b[33m",
		colorGreen: "\x1b[32m",
		colorRed: "\x1b[31m",
		colorCyan: "\x1b[36m",
		colorWhite: "\x1b[37m",
	},
	stringStyles: {
		resetAll: "\x1b[0m",
		fontBold: "\x1b[1m",
	},
};

function AnsiLogger(options) {
	// DOCS: Provides the default options table that can be configured on a new (item) - shown in the example.
	let defaultOptions = {
		tagName: "Server",
		fillStringWithColor: false, // Might be difficult to read depending on console - terminal theme.
	};

	// DOCS: Tell function options (e.g. var x = new ansilogger({tagname: blah blah}))
	options = { ...defaultOptions, ...options };
	function log(string) {
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
                  `;
			console.log(msg);
		} else if (!options.fillStringWithColor) {
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
                  `;
			console.log(msg);
		}
	}

	function warn(string) {
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
                  `;
			console.warn(msg);
		} else if (!options.fillStringWithColor) {
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
                  `;
			console.warn(msg);
		}
	}

	function error(string) {
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
                  `;
			console.error(msg);
		} else if (!options.fillStringWithColor) {
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
                  `;
			console.error(msg);
		}
	}

	function debug(string) {
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
                  `;
			console.error(msg);
		} else if (!options.fillStringWithColor) {
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
                  `;
			console.debug(msg);
		}
	}

	return {
		log,
		warn,
		debug,
		error,
	};
}

// DOCS: Exports the function so it can be used in other JS files in your project.
module.exports = { AnsiLogger };
