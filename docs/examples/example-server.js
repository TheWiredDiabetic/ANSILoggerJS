const express = require("express");
const PORT = process.env.PORT || PORT;
const app = express();

const ANSILogger = require("./utils/logger.node");
const logger = new ANSILogger({
	tagName: "Express",
});

app.listen(PORT, () => {
	logger.log("Server is alive!");
});
