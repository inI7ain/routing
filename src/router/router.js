const express = require("express");
const path = require("path");

const router = new express.Router();

router.get("", async function (request, response, next) {
	response.sendFile(path.join(__dirname + "../../../views/index.html"));
});
router.get("/", async function (request, response, next) {
	response.sendFile(path.join(__dirname + "../../../views/index.html"));
});
router.get("/user", async function (request, response, next) {
	response.sendFile(path.join(__dirname + "../../../views/user.html"));
});
router.get("/contact", async function (request, response, next) {
	response.sendFile(path.join(__dirname + "../../../views/contact.html"));
});

module.exports = router;