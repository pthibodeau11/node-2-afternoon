messages = [];

id = 1;

function createMsg(req, res) {
  const { text, time } = req.body;
  messages.push({ id, text, time });
  id++;
  res.status(200).send(messages);
}

function readMsg(req, res) {
  res.status(200).send(messages);
}

function updateMsg(req, res) {
  // udpate method should update the text property of message using the text value from the request body.
  const { text } = req.body;
  const updateID = req.params.id; // determine which message to update based on the value of id from the request URL parameters.
  const messageIndex = messages.findIndex(message => message.id == updateID); // Use .findIndex to get the index where the id's match.
  let message = messages[messageIndex]; // Get the object using the index and update the object

  messages[messageIndex] = {
    id: message.id,
    text: text || message.text,
    time: message.time
  };

  res.status(200).send(messages);
}

function deleteMsg(req, res) {
  // delete method should delete a message using the value of id from the request URL parameters.
  const deleteID = req.params.id;
  messageIndex = messages.findIndex(message => message.id == deleteID); // we can use .findIndex with the id to get the index of the message obj.
  messages.splice(messageIndex, 1); // then use splice to remove it from the messages array.
  res.status(200).send(messages);
}

module.exports = {
  createMsg,
  readMsg,
  updateMsg,
  deleteMsg
};
