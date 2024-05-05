const express = require("express");
const ctx = express();
const routes = require("./routes");
const releases = require("./releases");
const PORT = process.env.PORT || 5000;

// Use JSON
ctx.use(express.json());

// Use route files
ctx.use("/", routes);
ctx.use("/releases", routes);
ctx.use("/get/release/v1", releases);

// Listen to PORT
ctx.listen(PORT, () => {
     console.log(
          `Application is running. If you are a developer, visit http://localhost:${PORT} to view locally!`
     );
});

// Export for Vercel
module.exports = ctx;
