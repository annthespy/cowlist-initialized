var models = require("./models.js");

module.exports = {
  //read all cow data
  //[{name: 'Buttercup', description: '...'}, {name: 'Daisy', description: '...'}]
  get: function (req, res) {
    models.getAll((err, data) => {
      if (err) {
        console.log("error in get controllers");
      } else {
        res.status(200).json(data);
      }
    });
  },

  //create new cow data
  //{name: 'Milkshake', description: '...'}
  post: function (req, res) {
    let params = [req.body.name, req.body.description];
    models.create(params, (err, data) => {
      if (err) {
        console.log("error in controllers create");
      } else {
        res.sendStatus(201);
      }
    });
  },

  update: function (req, res) {
    console.log("req body id: ", req.body.id);
    console.log("req body name: ", req.body.name);
    console.log("req params id: ", req.params.id);

    let params = [req.body.name, req.body.id];
    models.update(params, (err, data) => {
      if (err) {
        console.log("error in controllers update");
      } else {
        res.sendStatus(201);
      }
    });
  },

  delete: function (req, res) {
    let id = req.params.id;
    models.delete(id, (err, data) => {
      if (err) {
        console.log("error in controllers delete");
      } else {
        res.sendStatus(201);
      }
    });
  },
};
