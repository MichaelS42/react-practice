const express = require("express")
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();
const token =   "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98";

app.use(bodyParser.json());
app.use(CORS());


function authenticator(req, res, next) {
    const { authorization } = req.headers;
    if (authorization === token) {
      next();
    } else {
      res.status(403).json({ error: "User must be logged in to do that." });
    }
  }

  app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "" && password === "") {
      req.loggedIn = true;
      setTimeout(() => {
        res.status(200).json({
          payload: token
        });
      }, 1000);
    } else {
      res
        .status(403)
        .json({ error: "Username or Password incorrect. Please see Readme" });
    }
  });

  app.get("/", function(req, res) {
    res.send("App is working 👍");
  });
  
  app.listen(5000, () => {
    console.log("Server listening on port 5000");
  });