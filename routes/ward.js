const wardController = require("../controllers/wardController")

const router = require("express").Router()

/// Add ward
router.post("/", wardController.addWard)

// Get all ward
router.get("/", wardController.getAllWard)

module.exports = router