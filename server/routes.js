var controllers = require("./controllers.js");
var router = require("express").Router();

router.get("/cows", controllers.get);
//app.post("/api/cows	", (req, res) => res.send("Hello World!"));
router.post("/cows", controllers.post);
router.put("/cows/:id", controllers.update);
router.delete("/cows/:id", controllers.delete);

module.exports = router;
