const express = require("express");
const router = express.Router();
const authController = require("../app/controller/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
