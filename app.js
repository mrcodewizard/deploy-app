const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "/client")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
  });
}

app.get("/test", (req, res) => {
  res.send("Test app working successfully");
});

const port = process.env.PORT | 5000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
