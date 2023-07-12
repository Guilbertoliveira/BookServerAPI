const {
  getClientsService,
  insertClient,
  verificationClient,
} = require('../services/client');

function getClients(req, res) {
  try {
    const clients = getClientsService(); //in this case it will just get the existing data in the json
    res.send(clients);
  } catch (error) {
    //returning error 500 if the get is not found
    res.status(500);
    res.send(error.message);
  }
}

function postClient(req, res) {
  try {
    const newClient = req.body; //getting information sent by the front end
    if (req.body.email && req.body.senha) {
      insertClient(newClient);
      res.status(201).json({
        msg: `Usuario ${newClient.email} has been inserted successfully`,
      }); //successful creation
      // res.send('has been inserted successfully');
    } else {
      const retorno =
        newClient.email == null
          ? `The submitted book does not contain the property 'name'.`
          : `The book ${newClient.email} sent has the value less than 3 characters.`;
      res.status(422).json({ msg: retorno });
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLogin(req, res) {
  try {
    const resLogin = req.body;
    if (req.body.email && req.body.senha) {
      const clients = getClientsService();
      const user = clients.find((u) => u.email === resLogin.email);

      if (!user || user.senha !== resLogin.senha) {
        return res.status(401).json({ message: 'invalid credentials' });
      } else {
        console.log('nice job');
        res.status(201).json({
          msg: `Usuario ${resLogin.email} has logged`,
        }); //successful creation
        // res.send('has been inserted successfully');
      }
    } else {
      let retorno;
      if (resLogin.email == null || resLogin.senha == null) {
        retorno = 'empty input';
      }
      res.status(422).json({ msg: retorno });
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getClients,
  postClient,
  postLogin,
};
