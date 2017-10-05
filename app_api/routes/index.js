"use strict";
exports.__esModule = true;
var express_1 = require("express");
var startpage_controller_1 = require("../controllers/startpage-controller");
var router = express_1.Router();
var startPageController = new startpage_controller_1.StartPageController();
router.get('/workouts', startPageController.GetAllWorkouts);
router.post('/createWorkout', startPageController.CreateWorkout);
router.get('/workout/:id', startPageController.GetWorkoutById);
router.post('/createWorkoutLog', startPageController.CreateWorkoutLog);
router.get('/workoutLogs', startPageController.GetAllWorkoutLogs);
router.get('/workoutLog/:id', startPageController.GetWorkoutLogById);
exports.StartPageApi = router;
//# sourceMappingURL=index.js.map