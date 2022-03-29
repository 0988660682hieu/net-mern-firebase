const express = require("express");
const router = express.Router();
const listController = require("../app/controller/listController");
const verifyToken = require("../verifyToken");

router.post("/", verifyToken, listController.create);
router.delete("/:id", verifyToken, listController.delete);
router.get("/", verifyToken, listController.get);

module.exports = router;
