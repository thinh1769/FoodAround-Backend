const cityController = require("../controllers/cityController")

const router = require("express").Router()

/// Add city
router.post("/", cityController.addCity)

// Get all city
router.get("/", cityController.getAllCity)

module.exports = router