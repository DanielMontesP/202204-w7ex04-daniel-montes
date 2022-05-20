const Kind = require("../middlewares/models/kind");

const getAllKinds = async (req, res, next) => {
  try {
    const kinds = await Kind.find();

    res.json({ kinds });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllKinds,
};
