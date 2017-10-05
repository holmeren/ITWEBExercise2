import { Exercise } from '../../app_api/models/exercise';
import { Workout } from '../../app_api/models/workout';
import { DataAccess } from '../../app_api/services/data-acces';
import { Router } from 'express';

var workouts = new Array<Workout>();

export class StartPageController {
    public async GetAllWorkouts(req, res) {
        var dataAccess = new DataAccess();

        await dataAccess.getAllWorkouts("Workouts").then(result => {
            workouts = result;

        });


        res.json( {allWorkout: workouts });
    }

    public async CreateWorkout(req, res, next) {

        var workout = req.body;
        
        var dataAccess = new DataAccess();

        dataAccess.create("Workouts", workout);

        workouts.push(workout);

        res.json({allWorkout: workouts });
    }

    public async GetWorkoutById(req, res ,next){
        var id = req.params.id;

        var dataAccess = new DataAccess();
        await dataAccess.getWorkout("Workouts", id).then(result =>{
            if(result != null){
                res.json( {allWorkout: result });
            }
        });

        res.json( {allWorkout: null });
    }
}