const locationController = require("../controllers/locationController")

const router = require("express").Router()

/// Add location
router.post("/", locationController.addLocation)

// Get all location
router.get("/", locationController.getAllLocation)

// Get a location
router.get("/:id", locationController.getALocation)

// Update location
router.put("/:id", locationController.updateLocation)

// Delete location
router.delete("/:id", locationController.deleteLocation)

module.exports = router