import mongoose from "mongoose";

const TravelAgencySchema = new mongoose.Schema({
  agencyName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
})

