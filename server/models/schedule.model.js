import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema({
  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bus',
    required: true,
  },
  routeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Route",
    require: true
  },
  departureTime: {
    type: Date,
    required: true
  },
  arrivalTime: {
    type: Date,
    required: true
  }
});

const ScheduleModel = mongoose.model("Schedule", ScheduleSchema);

export default ScheduleModel;