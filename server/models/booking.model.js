import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true
  },
  scheduleId: {
    type: mongoose.ObjectId.Types.ObjectId,
    ref: "Schedule",
    required: true
  },
  seatNumber: {
    type: [Number],
    required: true
  },
  travelerDetails: {
    type: [{
      name: String,
      age: Number
    }]
  },
  bookingDate: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ["Booked", "Cancelled"],
    required: true
  }
});

const BookingModel = mongoose.model("Booking", BookingSchema);

export default BookingModel;