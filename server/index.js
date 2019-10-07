const express = require("express");
const {
  createMsg,
  readMsg,
  updateMsg,
  deleteMsg
} = require("./controllers/messages_controller");

const app = express();

const port = 3001;

app.use(express.json());
app.use(express.static(__dirname + "/../public/build")); //setup the API to serve front-end files

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, createMsg);
app.get(messagesBaseUrl, readMsg);
app.put(`${messagesBaseUrl}/:id`, updateMsg);
app.delete(`${messagesBaseUrl}/:id`, deleteMsg);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
