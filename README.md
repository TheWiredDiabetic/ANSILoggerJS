# ANSILoggerJS

<img src="./docs/images/JavaScript-logo.png" align="right" width=150>

**HEADS UP:** ANSILogger is not finalized, there may be stil bugs surronding it's code.

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

**Example:** <a href="./docs/examples/example-client.html">/docs/examples/example-client.html</a>

<details><summary><b>Show instructions</b></summary>
    
1. **Import** ASNILogger via 'script'
    
    If you've stored a version of ANSILogger locally in a '/assets' type folder, or has been provided via a CDN of some sort. Link it by doing this in your HTML file:

    ```html
    <script src="/path/to/file"></script>
    ```

2. **Define** your new logger element.

    Using this script block, either under the body tag or in your head tag, you can now define this as:

    ```html
    <script src="/path/to/file">
        const ansi = new ANSILogger({
            tagName: "My Tag Name",
            fillStringWithColor: false
        });
    </script>

    This means it should then be usable in your normal script.js file.

3. **Use** in your script.

    Once fully setup and configured following steps 2 & 3, you can try do the following.

    Normal JS
    ```js
        document.addEventListener("DOMContentLoaded", function() {
            ansi.log("Page loaded successfully!")
        });
    ```

    jQuery
    ```js
        $(document).ready(function() {
            ansi.log("Page loaded successfully!")
        });
    ```

    **⚠️ If you experience an error:**
    You've incorrectly followed the steps above, or
    the documentation (here) is missing a step that is
    important. 

    If so, head over to Issues and create a new issue surronding your error message.
</details>

## Current Support

-    ✅ Client JS
     -    **Why:** It has been proven to work if you are using logger.main.js, but may be buggy.
-    ❌ Other Languages (TS, PY etc.)
     -    **Why:** Other languages require their own version in their own language, a TS version is being worked on.
-    ✅ Normal JS
     -    **Why:** Normal JS (non-browser friendly JS) allows this 'plugin' to work as intended, as it tends to use code such as `module.exports = {}`


## Reporting Errors, Bugs (etc.)
If you tend to run into a issue, such as a repeated error message or bug. Or even if the **Usage** docs been incorrect.

The best place to report it is via **[Issues](https://github.com/TheWiredDiabetic/ANSILoggerJS/issues) tab** as it can be easily organized to provide solutions or hotfixes for certain errors or issues that occur using either versions of ANSILogger.

## Contributing
If you wish to contribute to this project, you may make forks or even a pull request with your improvements or fixes.

All contrubitions will be appericated and you may
appear on this readme or a contributions list (whenever it happens.)