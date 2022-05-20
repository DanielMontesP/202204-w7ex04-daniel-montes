const express = require("express");
const { getAllKinds } = require("../../controllers/kindsControllers");

const kindsRouter = express.Router();

kindsRouter.get("/", getAllKinds);

module.exports = kindsRouter;
