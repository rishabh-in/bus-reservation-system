import mongoose from "mongoose";

const RouteSchema = new mongoose.Schema({
  soruce: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  intermediateStops: {
    type: [String],
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  agencyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TravelAgency',
    required: true
  }
}, {timestamps: true});

const RouteModel = mongoose.model("Route", RouteSchema);

export default RouteModel;