const { Location, City, District, Ward } = require("../model/model")

const locationController = {
    //Add Location
    addLocation: async(req, res) => {
        try {
            const newLocation = new Location(req.body)
            const savedLocation = await newLocation.save()
            res.status(200).json({ 
                statusCode: 200,
                message: "Add Location Successfully", 
                payload: {
                    id: savedLocation.id, 
                    name: savedLocation.name, 
                    type: savedLocation.type, 
                    address: savedLocation.address, 
                    city: savedLocation.city, 
                    district: savedLocation.district, 
                    ward: savedLocation.ward, 
                    note: savedLocation.note 
                }
            })
        } catch(error) {
            console.log(error)
            res.status(500).json({ 
                statusCode: 500, 
                message: "Internal Server Error", 
                payload: null 
            })
        }
    },

    //Get all location
    getAllLocation: async(req, res) => {
        try {
            const locations = await Location.find()
            const listLocations = []

            locations.forEach((item) => {
                const city = City.findById(item.city)
                const district = District.findById(item.district)
                const ward = Ward.findById(item.ward)
                const d = {
                    id: item.id,
                    name: item.name,
                    type: item.type,
                    city: item.city,
                    district: item.district,
                    ward: item.ward,
                    address: item.address,
                    note: item.note
                };
                listLocations.push(d);
            })
            res.status(200).json({ 
                statusCode: 200, 
                message: "Get All Location Successfully", 
                payload: listLocations
            })
        } catch(error) {
            res.status(500).json({ 
                statusCode: 500, 
                message: "Internal Server Error", 
                payload: null 
            })
        }
    },

    //Get a location
    getALocation: async(req, res) => {
        try {
            const location = await Location.findById(req.params.id)
            const city = await City.findById(location.city)
            const district = await District.findById(location.district)
            const ward = await Ward.findById(location.ward)
            res.status(200).json({ 
                statusCode: 200, 
                message: "Get Location Successfully", 
                payload: {
                    id: location.id, 
                    name: location.name, 
                    type: location.type, 
                    city: {
                        id: city.id,
                        name: city.name
                    },
                    district: {
                        id: district.id,
                        name: district.name
                    },
                    ward: {
                        id: ward.id,
                        name: ward.name
                    }, 
                    address: location.address,
                    note: location.note
            }
        })
        } catch (error) {
            res.status(500).json({ 
                statusCode: 500, 
                message: "Internal Server Error", 
                payload: null 
            })
        }
    },

    // Update location
    updateLocation: async(req, res) => {
        try {
            const location = await Location.findById(req.params.id)
            await location.updateOne({
                $set: req.body
            })
            res.status(200).json({
                statusCode: 200, 
                message: "Update Location Successfully", 
                payload: null
            })
        } catch(error) {res.status(500).json({ 
            statusCode: 500, 
            message: "Internal Server Error", 
            payload: null 
        })
        }
    },

    // Delete location
    deleteLocation: async(req, res) => {
        try {
            await Location.findByIdAndDelete(req.params.id)
            res.status(200).json({
                statusCode: 200, 
                message: "Delete Location Successfully", 
                payload: null
            })
        }catch(error) {
            res.status(500).json({ 
                statusCode: 500, 
                message: "Internal Server Error", 
                payload: null 
            })
        }
    }
}

module.exports = locationController             