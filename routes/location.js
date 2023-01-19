const locationController = require("../controllers/locationController")
const middlewareController = require("../controllers/middlewareController")

const router = require("express").Router()

/// Add location
router.post("/add-location", middlewareController.verifyToken, locationController.addLocation)

// Get all location
router.get("/all-location", middlewareController.verifyToken, locationController.getAllLocation)

// Get a location
router.get("/:id", middlewareController.verifyToken, locationController.getALocation)

// Find location
router.post("/find-location", middlewareController.verifyToken, locationController.findLocation)

// Update location
router.put("/update-location/:id", middlewareController.verifyToken, locationController.updateLocation)

// Delete location
router.delete("/delete-location/:id", middlewareController.verifyToken, locationController.deleteLocation)

module.exports = router