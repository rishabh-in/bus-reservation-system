import express from 'express';
const router = express.Router();

// End User Bus Routes
router.get("/buses", handleFetchAllBuses);
router.get("/buses/:id", handleFetchBusDetails);


// Agency Bus Routes
router.post("/buses/add", handleAddBus);
router.put("/buses/update/:id", handleUpdateBusDetails);
router.delete("/buses/delete/:id", handleDeleteBus);