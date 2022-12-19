const locationController = require("../controllers/locationController")
const middlewareController = require("../controllers/middlewareController")

const router = require("express").Router()

/// Add location
router.post("/", middlewareController.verifyToken, locationController.addLocation)

// Get all location
router.get("/", middlewareController.verifyToken, locationController.getAllLocation)

// Get a location
router.get("/:id", middlewareController.verifyToken, locationController.getALocation)

// Update location
router.put("/:id", middlewareController.verifyToken, locationController.updateLocation)

// Delete location
router.delete("/:id", middlewareController.verifyToken, locationController.deleteLocation)

module.exports = router