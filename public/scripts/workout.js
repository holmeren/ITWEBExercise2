console.log("called1");
function showTable() {

    document.getElementById("exerciseTable").hidden = false
    console.log("called");

}

function saveWorkout() {

    var workout = { name: document.getElementById("workoutName").value }

    for (var index = 1; index < 6; index++) {
        Exercise = {
            name: document.getElementById("n" + index),
            description: document.getElementById("d" + index),
            sets: document.getElementById("s" + index),
            reps: document.getElementById("r" + index)
        }    
    workout.exercises[index-1] = Exercise
    }

    document.getElementById("workoutForm").reset()

}



