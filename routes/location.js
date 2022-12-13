const locationController = require("../controllers/locationController")

const router = require("express").Router()

/// Add location
router.post("/", locationController.addLocation)

// Get all location
router.get("/", locationController.getAllLocation)

module.exports = router