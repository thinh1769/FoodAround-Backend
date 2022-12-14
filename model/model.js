const mongoose = require("mongoose")

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     phoneNumber: {
//         type: String,
//         required: true
//     },
//     password: {}
// })

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
})

const districtSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City"
    }
})

const wardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    districtId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "District"
    },
})

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true                                                       
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City"
    },
    district: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "District"
    },
    ward: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ward"
    },
    note: {
        type: String,
        required: true
    },
})

let Location = mongoose.model("Location", locationSchema)
let City = mongoose.model("City", citySchema)
let District = mongoose.model("District", districtSchema)
let Ward = mongoose.model("Ward", wardSchema)

module.exports = { Location, City, District, Ward }
