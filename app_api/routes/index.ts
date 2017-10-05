import {Router, Request, Response} from 'express';
import {StartPageController} from '../controllers/startpage-controller';

const router = Router();

var startPageController = new StartPageController();

router.get('/workouts', startPageController.GetAllWorkouts);

router.post('/createWorkout', startPageController.CreateWorkout);

router.get('/workout/:id', startPageController.GetWorkoutById);

router.post('/createWorkoutLogs')

router.get('/workoutLogs', startPageController.GetAllWorkoutLogs)

router.get('/workoutLog/:id', startPageController.GetWorkoutLogById)



export const StartPageApi: Router = router;