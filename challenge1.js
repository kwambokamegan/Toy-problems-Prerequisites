
function studentGradeDetector(){

    //Prompts user to enter students marks

    let marks = prompt("Kindly  enter the students marks(between 0 and 100)")


// Converts the input to a number 

     marks = Number(marks);


//Validates the input 

    if (isNaN(marks) || marks < 0 || marks > 100){

        console.log("Invalid input. Enter an number between  0 and 100.");

        return;
    }



 //Grades according to  marks 

 let grade;

 if (marks > 79){
     grade = 'A';
 }

 else if (marks >= 60 &&  marks  <= 79){
     grade = 'B';
 }

 else if (marks >= 50 && marks <= 59){
     grade = 'C';
 }

 else if (marks >= 40 && marks <= 49){
     grade = 'D';
 }

 else {
    grade = 'E';
}


//Outputs the grade

console.log(`The student's grade is: ${grade}`);

}

//calling the function to prompt the user 

studentGradeDetector();
