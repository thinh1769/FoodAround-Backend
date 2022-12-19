const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 40
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

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
    long: {
        type: Number,
        required: true
    },
    lat: {
        type: Number,
        required: true
    }
})

let User = mongoose.model("User", userSchema)
let Location = mongoose.model("Location", locationSchema)
let City = mongoose.model("City", citySchema)
let District = mongoose.model("District", districtSchema)
let Ward = mongoose.model("Ward", wardSchema)

module.exports = { User, Location, City, District, Ward }
