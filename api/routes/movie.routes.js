const express = require("express");
const router = express.Router();
const movieController = require("../app/controller/movieController");
const verifyToken = require("../verifyToken");

router.post("/", verifyToken, movieController.create);
router.put("/:id", verifyToken, movieController.update);
router.delete("/:id", verifyToken, movieController.delete);
router.get("/find/:id", verifyToken, movieController.get);
router.get("/random", verifyToken, movieController.getRandom);
router.get("/", verifyToken, movieController.getAll);

module.exports = router;
