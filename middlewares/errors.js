///funcion que hace el error mas visual///
const handleValidationError = (err, res) => {
  let errors = err.errors.map((el) => el.message);
  if (errors.length > 1) {
    const msgErr = errors.join(" || ");
    res.status(400).send({ messages: msgErr });
  } else {
    res.status(400).send({ messages: errors });
  }
};

///funcion Middleware error///
const typeError = (err, req, res, next) => {
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    handleValidationError(err, res);
    console.error('err',err)
  } else {
    console.error('err',err)
    res.status(500).send({ msg: "Hubo un problema", err });
  }
};

module.exports = { typeError };
