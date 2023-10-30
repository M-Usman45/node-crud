const express = require("express");
const stories = require("./routes/stories");
require("dotenv").config();
const app = express();

const port = 3000;

// Routes for app
app.use("/stories", stories);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
