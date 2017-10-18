import { Exercise } from '../../app_api/models/exercise';
import { Workout } from '../../app_api/models/workout';
import { DataAccess } from '../../app_api/services/data-acces';
import { Router } from 'express';

export class WorkoutController{
    public async GetAllWorkouts(req, res) {
        var dataAccess = new DataAccess();
        var workouts = new Array<Workout>();
        await dataAccess.getAll("Workouts").then(result => {
            console.log(result);
            workouts = result;

        });


        res.json({ workouts });
    }

    public async CreateWorkout(req, res, next) {

        var workout = req.body;

        var dataAccess = new DataAccess();

        dataAccess.create("Workouts", workout);
        res.json({});
    }

    public async GetWorkoutById(req, res, next) {
        var id = req.params.id;
        var workout = new Workout();
        var dataAccess = new DataAccess();
        await dataAccess.getById("Workouts", id).then(result => {
            workout= result
        });

        res.json({workout});
    }
}