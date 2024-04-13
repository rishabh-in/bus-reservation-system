import mongoose from "mongoose";

const BusSchema = new mongoose.Schema({
  busName: {
    type: String,
    required: true
  },
  busNumber: {
    type: String,
    required: true,
    unique: true
  },
  capacity: {
    type: Number,
    required: true
  },
  amenities: {
    type: [String],
    required: true
  },
  agencyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TravelAgency',
    required: true
  }
}, {timestamps: true});

const BusModel = mongoose.model("Bus", BusSchema);

export default BusModel;