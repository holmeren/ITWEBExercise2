import { Exercise } from '../../app_api/models/exercise';
import { Workout } from '../../app_api/models/workout';
import { DataAccess } from '../../app_api/services/data-acces';
import { Router } from 'express';
import { WorkoutLog } from '../../app_api/models/workoutLog';




export class StartPageController {
    // public async GetAllWorkouts(req, res) {
    //     var dataAccess = new DataAccess();
    //     var workouts = new Array<Workout>();
    //     await dataAccess.getAll("Workouts").then(result => {
    //         console.log(result);
    //         workouts = result;

    //     });


    //     res.json({ workouts });
    // }

    // public async CreateWorkout(req, res, next) {

    //     var workout = req.body;

    //     var dataAccess = new DataAccess();

    //     dataAccess.create("Workouts", workout);
    //     res.json({});
    // }

    // public async GetWorkoutById(req, res, next) {
    //     var id = req.params.id;
    //     var workout = new Workout();
    //     var dataAccess = new DataAccess();
    //     await dataAccess.getById("Workouts", id).then(result => {
    //         workout= result
    //     });

    //     res.json({workout});
    // }

    // public async GetAllWorkoutLogs(req, res) {
    //     var dataAccess = new DataAccess();
    //     var workoutLogs = new Array<WorkoutLog>();
    //     await dataAccess.getAll("workoutLogs").then(result => {
    //         workoutLogs = result;
    //     });


    //     res.json({workoutLogs});
    // }

    // public async CreateWorkoutLog(req, res, next) {

    //     var workoutLog = req.body;

    //     var dataAccess = new DataAccess();

    //     dataAccess.create("workoutLogs", workoutLog);

    //     res.json({});
    // }

    // public async GetWorkoutLogById(req, res, next) {
    //     var id = req.params.id;
    //     var workoutLog = new WorkoutLog();
    //     var dataAccess = new DataAccess();
    //     await dataAccess.getById("workoutLogs", id).then(result => {
    //         workoutLog= result;
    //     });

    //     res.json({workoutLog});
    // }
}