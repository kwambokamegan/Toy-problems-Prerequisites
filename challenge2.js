
function speedDetector(){

    let speed =  prompt ("Speed of the car:");

    // converts input to a number

    speed = Number(speed);

    //validates the input

    if (isNaN(speed) || speed <0 ) { 

        console.log("Kindly enter a valid speed.");

        return;

    }

    //Determine speed limit and demerit 

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;


    //Check the speed

    if (speed <= speedLimit ){
        console.log("Ok");
    }
    else { 
        //calculate demerit points 

        let demeritPoints = Math.floor((speed - speedLimit) / 
        kmPerDemeritPoint);
        

        //Check  if demerit points exceed

        if (demeritPoints > maxDemeritPoints) {
            console.log("LIcence suspended");
        }

        

    }


}

//call the function to promt

speedDetector()










