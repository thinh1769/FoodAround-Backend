const { City } = require("../model/model")

const cityController = {
    //Add City
    addCity: async(req, res) => {
        try {
            const newCity = new City(req.body)
            const savedCity = await newCity.save()
            res.status(200).json({ 
                statusCode: 200, 
                message: "Add City Successfully", 
                payload: {
                    id: savedCity._id, 
                    name: savedCity.name 
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

    //Get all city
    getAllCity: async(req, res) => {
        try {
            const cities = await City.find()
            const listCities = []

            cities.forEach((item) => {
                const d = {
                    id: item._id,
                    name: item.name,
                };
                listCities.push(d);
            })

            res.status(200).json({ 
                statusCode: 200, 
                message: "Get All City Successfully", 
                payload: listCities
            })
        } catch(error) {
            res.status(500).json({ 
                statusCode: 500, 
                message: "Internal Server Error", 
                payload: null 
            })
        }
    },
}

module.exports = cityController             