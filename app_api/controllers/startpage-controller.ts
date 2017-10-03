import { Exercise } from '../../app_api/models/exercise';
import { Workout } from '../../app_api/models/workout';
import { DataAccess } from '../../app_api/services/data-acces';
import { Router } from 'express';

var workouts = new Array<Workout>();

export class StartPageController {
    public async StartPage(req, res) {
        var dataAccess = new DataAccess();

        await dataAccess.getAll("Workouts").then(result => {
            console.log(result);
            workouts = result;

        });


        res.json( {allWorkout: workouts });
    }

    public async Post(req, res, next) {

        var workout = req.body;
        
        var dataAccess = new DataAccess();

        dataAccess.create("Workouts", workout);

        workouts.push(workout);

        res.json({allWorkout: workouts });
    }
}