const fs = require('fs');

function getClientsService() {
  return JSON.parse(fs.readFileSync('clients.json'));
}

function insertClient(newClient) {
  const clients = getClientsService();
  fs.writeFileSync('clients.json', JSON.stringify([...clients, newClient]));
}

function verificationClient(client) {}

module.exports = {
  getClientsService,
  insertClient,
  verificationClient,
};
