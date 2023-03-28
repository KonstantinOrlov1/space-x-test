const router = require("express").Router();
const { bikeType, bikes, reviews } = require("./mock");
const { reply, getById } = require("./utils");

router.get("/bikeType", (req, res, next) => {
  reply(res, bikeType);
});

router.get("/bikes", (req, res, next) => {
  const { id, bikeId } = req.query;
  let result = bikes;

  if (id) {
    const bike = getById(bikeType)(id);
    if (bike) {
      result = bike.bikes.map(getById(result));
    }
  }

  if (!id && bikeId) {
    result = getById(result)(bikeId);
  }
  reply(res, result);
});

router.get("/reviews", (req, res, next) => {
  reply(res, reviews);
});

// router.post("/autorized", urlencodedParser, function (request, response) {
//   if (!request.body) return response.sendStatus(400);
//   console.log(request.body);
//   response.send(`${request.body.userName} - ${request.body.userAge}`);
// });

module.exports = router;
