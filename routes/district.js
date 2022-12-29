const districtController = require("../controllers/districtController")

const router = require("express").Router()

/// Add district
router.post("/", districtController.addDistrict)

/// Get Districts By CityId
router.get("/:id", districtController.getDistrictsByCityId)

// Get all district
router.get("/", districtController.getAllDistrict)

module.exports = router