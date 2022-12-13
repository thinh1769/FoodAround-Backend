const { Location, City, District, Ward } = require("../model/model")

const locationController = {
    //Add Location
    addLocation: async(req, res) => {
        try {
            const newLocation = new Location(req.body)
            const savedLocation = await newLocation.save()
            res.status(200).json(savedLocation)
        } catch(error) {
            console.log(error)
            res.status(500).json(error.msg)
        }
    },

    //Get all location
    getAllLocation: async(req, res) => {
        try {
            const locations = await Location.find()
            res.status(200).json(locations)
        } catch(error) {
            res.status(500).json(error)
        }
    },
}

module.exports = locationController             