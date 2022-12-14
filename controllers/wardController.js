const { City, District, Ward } = require("../model/model")

const wardController = {
    //Add Ward
    addWard: async(req, res) => {
        try {
            const newWard = new Ward(req.body)
            const savedWard = await newWard.save()
            if (req.body.district) {
                const district = District.findById(req.body.district)
                await district.updateOne({ districtId: savedWard._id}) 
            }
            res.status(200).json({ "statusCode": 200, "message": "Add District Successfully", payload: {
                "id": savedWard._id, "name": savedWard.name, "cityId": savedWard.districtId
            } })
        } catch(error) {
            console.log(error)
            res.status(500).json({ "statusCode": 500, "message": "Internal Server Error", payload: null })
        }
    },

    //Get all Ward
    getAllWard: async(req, res) => {
        try {
            const wards = await Ward.find()
            const listWard = []

            wards.forEach((item) => {
                const d = {
                    id: item._id,
                    name: item.name,
                    districtId: item.districtId
                };
                listWard.push(d);
            })
            res.status(200).json({ "statusCode": 200, "message": "Get All Ward Successfully", payload: listWard })
        } catch(error) {
            res.status(500).json({ "statusCode": 500, "message": "Internal Server Error", payload: null })
        }
    },
}

module.exports = wardController