const { Location, City, District, Ward } = require("../model/model")

const locationController = {
    //Add Location
    addLocation: async(req, res) => {
        try {
            const newLocation = new Location(req.body)
            const savedLocation = await newLocation.save()
            res.status(200).json({ "statusCode": 200, "message": "Add Location Successfully", payload: {
                "id": savedLocation._id, "name": savedLocation.name, "type": savedLocation.type, "address": savedLocation.address, "cityId": savedLocation.cityId, 
                "districtId": savedLocation.districtId, "wardId": savedLocation.wardId, "note": savedLocation.note } })
        } catch(error) {
            console.log(error)
            res.status(500).json({ "statusCode": 500, "message": "Internal Server Error", payload: null })
        }
    },

    //Get all location
    getAllLocation: async(req, res) => {
        try {
            const locations = await Location.find()
            const listLocations = []

            locations.forEach((item) => {
                const d = {
                    id: item._id,
                    name: item.name,
                    type: item.type,
                    address: item.address,
                    cityId: item.cityId,
                    districtId: item.districtId,
                    wardId: item.wardId,
                    note: item.note
                };
                listLocations.push(d);
            })
            res.status(200).json({ "statusCode": 200, "message": "Get All Location Successfully", payload: listLocations})
        } catch(error) {
            res.status(500).json({ "statusCode": 500, "message": "Internal Server Error", payload: null })
        }
    },
}

module.exports = locationController             