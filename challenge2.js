
function speedDetector(){


    let speed = 80;

    if (speed < 70) { 
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - 70) / 5);
        if (demeritPoints > 12 ){
            console,log("License suspended");
        } else { 
            return demeritPoints
        }
    }
     
}

console.log(speedDetector());