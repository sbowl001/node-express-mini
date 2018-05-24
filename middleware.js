module.exports = {
    logger,
    greeter
}



function logger(msg) {
  return function(req, res, next) {
    console.log(`${msg || "requesting"} : ${req.url}`);
    next();
  };
}

function greeter() {
  return function(req, res, next) {
    if (req.query.passcode === "gandalf") {
      next();
    } else {
      res.send("You shall not pass!!"); // query string users?passcode=gandalf
    }
  };
}