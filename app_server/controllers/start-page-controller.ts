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


        res.render('start-page', { title: 'Badass FITNESS', allWorkout: workouts });
    }

    public async Post(req, res, next) {

        var workout = new Workout();
        workout.exercises = Array<Exercise>()
        workout.name = req.body.workoutName;
        console.log(req.body);

        for (var index = 1; index < 6; index++) {
            var exercise = new Exercise();
            exercise.name = req.body["n" + index];
            exercise.description = req.body["d" + index];
            exercise.sets = req.body["s" + index];
            exercise.reps = req.body["r" + index];
            workout.exercises.push(exercise)
        }

        var dataAccess = new DataAccess();

        dataAccess.create("Workouts", workout);

        workouts.push(workout);

        res.render('start-page', { title: 'Badass FITNESS', allWorkout: workouts });
    }
}