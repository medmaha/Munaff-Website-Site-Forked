const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const SOURCE_DIR_NAME = "";
const ALLOWED_FILETYPES = ["html", "css", "js", "jpg", "png"];

const main = () => {
  const __ALLOWED_FILETYPES = ALLOWED_FILETYPES.map((a) => a.toLowerCase());

  // Request logger middleware
  app.use((req, res, next) => {
    const requestedAt = new Date();
    res.on("finish", () => {
      const finishedAt = new Date();
      const seconds = Math.floor(finishedAt - requestedAt);
      const timestamp = requestedAt.toISOString().split("T")[1].split(".")[0];
      console.log(`[${timestamp}] ${res.statusCode} ${res.statusMessage} ${req.originalUrl} Duration: ${seconds}ms`);
    });
    next();
  });

  // Serve only specific file types (HTML, CSS, JS)
  app.use(
    (req, res, next) => {
      const pathname = req.path;
      const stringWithFileExtension = /\.(\w{1,})/gi;

      // Check if pathname contains a file-extension
      if (stringWithFileExtension.test(pathname)) {
        const ext = pathname.split(".").at(-1)?.toLowerCase();

        if (!__ALLOWED_FILETYPES.some(_e => _e === ext)) {
          return res.status(403).send("Forbidden Request");
        }
      }
      next();
    },

    // Static files server
    express.static(path.join(__dirname, SOURCE_DIR_NAME))
  );

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

main();
