import express from 'express';
const router = express.Router();

router.get("/bookings", handleFetchAllUserBookings);
router.get("/booking/:id", handleFetchUserBoking);
router.post("/book", handleSeatBook);
router.put("/update/booking", handleUpdateBooking);
router.delete("/delete/booking", handleDeleteBooking);
