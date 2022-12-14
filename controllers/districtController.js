const { City, District, Ward } = require("../model/model")

const districtController = {
    //Add District
    addDistrict: async(req, res) => {
        try {
            const newDistrict = new District(req.body)
            const savedDistrict = await newDistrict.save()
            if (req.body.city) {
                const city = City.findById(req.body.city)
                await city.updateOne({ 
                    city: savedDistrict._id
                }) 
            }
            res.status(200).json({ 
                statusCode: 200, 
                message: "Add District Successfully", 
                payload: {
                    id: savedDistrict._id, 
                    name: savedDistrict.name, 
                    city: savedDistrict.city
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
    
    //Get all district
    getAllDistrict: async(req, res) => {
        try {
            const districts = await District.find()
            const listDistrict = []

            districts.forEach((item) => {
                const d = {
                    id: item._id,
                    name: item.name,
                    city: item.city
                };
                listDistrict.push(d);
            })
            res.status(200).json({ 
                statusCode: 200, 
                message: "Get All District Successfully", 
                payload: listDistrict 
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

module.exports = districtController