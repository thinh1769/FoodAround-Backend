const { Location, City, District, Ward } = require("../model/model")

const locationController = {
    //Add Location
    addLocation: async(req, res) => {
        try {
            const newLocation = new Location(req.body)
            const savedLocation = await newLocation.save()
            const city = await City.findById(savedLocation.cityId)
            const district = await District.findById(savedLocation.districtId)
            const ward = await Ward.findById(savedLocation.wardId)
            res.status(200).json({ 
                statusCode: 200,
                message: "Add Location Successfully", 
                payload: {
                    id: savedLocation.id, 
                    name: savedLocation.name, 
                    type: savedLocation.type, 
                    address: savedLocation.address, 
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
                    note: savedLocation.note,
                    long: savedLocation.long,
                    lat: savedLocation.lat 
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
            const city = await City.findById(locations.cityId)
            const district = await District.findById(locations.districtId)
            const ward = await Ward.findById(locations.wardId)
            const listLocations = []

            locations.forEach((item) => {
                const city = City.findById(item.cityId)
                const district = District.findById(item.districtId)
                const ward = Ward.findById(item.wardId)
                const d = {
                    id: item.id,
                    name: item.name,
                    type: item.type,
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
                    address: item.address,
                    note: item.note,
                    long: item.long,
                    lat: item.lat 
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
            const city = await City.findById(location.cityId)
            const district = await District.findById(location.districtId)
            const ward = await Ward.findById(location.wardId)
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