import {Router, Request, Response} from 'express';
import {StartPageController} from '../controllers/startpage-controller';

const router = Router();

var startPageController = new StartPageController();

router.get('/workouts', startPageController.GetAllWorkouts);

router.post('/createWorkout', startPageController.CreateWorkout);

router.get('/workout/:id', startPageController.GetWorkoutById);



export const StartPageApi: Router = router;