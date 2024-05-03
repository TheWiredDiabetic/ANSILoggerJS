# ANSILoggerJS

<img src="./docs/images/JavaScript-logo.png" align="right" width=150>

**HEADS UP** ANSILogger is not finalized, let alone confirmed working.

**ANSILoggerJS** is a compact Javascript 'plugin' that removes the **boringness** from logging & debugging with it's color-enabled log features using the **'ANSI'** format that works in most terminal outputs.

Not forgetting, it's customizablity right from the start with function options.

## How ANSILogger works

-    ASNILogger is combined with a list of ANSI-friendly formats used in making outputted text look colorful or stylish. (E.g. vite's colorful output text.)

-    ANSILogger also uses JavaScript's default logging tools such as `console.log()` but with modifications to apply the customizations.

## Usage

### Normal JS

Suitable for JS that handles webservers or applications, such as a express app file. And the fact it requries no link imports, just file imports.

**Example:** <a href="./docs/examples/example-server.js">/docs/examples/example-server.js</a>

<details><summary><b>Show instructions</b></summary>

1. **Download** a copy of ANSILoggerJS.

     Once downloaded, place in a folder; ideally something like **utils** or **plugins.**

2. **Import** ANSILogger.

     Once placed in a folder of your choice within your project directory. Open a .js file you wish to use ANSI within and type the following:

     ```js
     const ANSILogger = require(" LOCATION OF JS FILE ");
     ```

3. **Define** your logger.

     Once you've 'required' ANSILogger, you can now type the following anywhere in your script. Ideally, place it where your 'require' blocks are:

     ```js
     const log = new ANSILogger();
     ```

     Baring in mind, this plugin has options avaliable to configure it; you can do this also:

     ```js
     const log = new ANSILogger({
     	tagName: "React Application",
     	fillStringWithColor: true,
     });
     ```

     `tagName` - The '[Text]' block that is at the start of the output message.

     **e.g. ** [ReactApp] Started application.

     `fillStringWithColor` - Defines wether or not the output message should be full coloured or only half coloured.

</details>

### Client JS

**Example:** ⚠️ Example not avaliable.

⌛ Instructions coming soon when support is provided.

## Current Support

-    ❌ Client JS
     -    **Why:** Not tested to work on a client side script, and is still being made compatiable.
-    ❌ Other Languages (TS, PY etc.)
     -    **Why:** Other languages require their own version in their own language, a TS version is being worked on.
-    ✅ Normal JS
     -    **Why:** Normal JS (non-browser friendly JS) allows this 'plugin' to work as intended, as it tends to use code such as `module.exports = {}`
