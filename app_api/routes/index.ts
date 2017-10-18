import {Router, Request, Response} from 'express';
import {StartPageController} from '../controllers/startpage-controller';
import { WorkoutController} from '../controllers/workout-controller';
import { WorkoutLogController} from '../controllers/workout-log-controller';
import { AuthenticationController} from '../controllers/authentication-controller';

const router = Router();

var workoutLogController = new WorkoutLogController();
var workoutController = new WorkoutController();
var authenticationController = new AuthenticationController();

router.get('/workouts', workoutController.GetAllWorkouts);

router.post('/createWorkout', workoutController.CreateWorkout);

router.get('/workout/:id', workoutController.GetWorkoutById);

router.post('/createWorkoutLog', workoutLogController.CreateWorkoutLog)

router.get('/workoutLogs', workoutLogController.GetAllWorkoutLogs)

router.get('/workoutLog/:id', workoutLogController.GetWorkoutLogById)

router.post('/register', authenticationController.Register.bind(authenticationController))

router.post('/login', authenticationController.Login.bind(authenticationController))

export const BadassFitnessAPI: Router = router;