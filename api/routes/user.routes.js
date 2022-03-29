const express = require("express");
const router = express.Router();
const userController = require("../app/controller/userController");
const verifyToken = require("../verifyToken");

router.put("/:id", verifyToken, userController.update);
router.delete("/:id", verifyToken, userController.delete);
router.get("/find/:id", userController.getUser);
router.get("/", verifyToken, userController.getAll);
router.get("/stats", verifyToken, userController.getUser);

module.exports = router;
