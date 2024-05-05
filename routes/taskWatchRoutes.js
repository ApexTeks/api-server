const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const employerController = require("../controllers/employerController");
const jobController = require("../controllers/jobController");
const taskWatchController = require("../controllers/taskWatchController");
const middleware = require("../middlewares/authMiddleware")

// start watch
router.post("/watch/:contract_id/start", taskWatchController.startWatch);

// pause watch..
router.patch("/watch/:contract_id/pause", taskWatchController.pauseWatch);

// stop watch..
router.patch("/watch/:contract_id/stop", taskWatchController.stopWatch);

// get all watch list...
router.get("/watch/:contract_id", taskWatchController.getWatch);

// get current day watch list...
router.get("/watch/:contract_id/today", taskWatchController.getCurrentDayWatch);


module.exports = router;
