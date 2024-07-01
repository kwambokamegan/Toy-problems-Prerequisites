# Week 1 Toy Problems Prerequisites


This code challenge  includes 3 challenges : Student grade generator, Speed detector, and Net salary calculator.


 
 1.CREATING A REPOSITORY 

Create a repository in your git hub account by  clicking the "+" icon and select "New Repository". 

Enter the repository name and make it public.

Add README file.

Click create repository.

On the repository page copy the SSH URL.

In your terminal  navigate to the directory where you would like to clone the repository . Here we clone it to te phase-1 directory under DEvelopment, code , and se-prep directory.

Open the created repository and create a folder called my-solutions.
 
 Open the folder and create 3 files for the challenges : challenge1.js , challenge2.js and challenge3.js

 Run code . to open vs code.


#CHALLENGE 1 : STUDENT GRADE GENERATOR (TOY PROBLEM)

In the first challenge we have create a function thet prompts the user to input students marks , validates the input and then gives an output of the corresponding grade . 

It ensures input is between 0 and 100 and assigns grades based on the criteria:

'A' for marks greater than 79

'B'for marks between 60 and 79 inclusive of 60 and 79

'C' for marks between 50 and 59 inclusive of 50 and 59

'D' for marks between  40 and 49 inclusive of 40 and 49

'E' for marks less than 40


#Function Implementation

The function `studentGradeDEtector` ;

1. Prompts user t enter student marks 

2. Converts the input into a  number .

3.Validates the input to ensure its within the range 0-100.

4. Outputs the grade to the console.

###code 

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



##USAGE

Copy the ode into a javascript file 

Open a web browser and open ghe developer tools (F2 of Ctrl + Shift + I).

Go to the console tab and paste the code .

Call the function by typing studentGradeDetector() in the console then press enter

Follow the prompt to enter the students marks and sss the corresponding grade displayed on the console.



This `README.md` provides a clear description of the challenge , the function implementation , usage instructions . 




#CHALLENGE 2 : SPEED DETECTOR (TOY PROBLEM)

This challenge has a javascript function that takes in the speed of a car as input, vlidates the input and calculates demerit points based on the speed limit . If the speed is within the limit it prints okayn, otherwise it prints the number of demerit points . If the demerit points exeed the set threshold it prints "Licence Suspended"

##Function Implementaion

The  main function , `speedDetector` performs the functions:

1.Prompts user to enter tye speed of the car

2. Converts the input into a number

3. Validates the input to ensure it is a non-negative number

4. Checks if the speed is within the limit and prints okay if true.

5.Calcilates demerit points if the speed exeedes tyhe limit.

6.Prints the number of demerit points

7.Prints "Lincence suspended if the demerit points exeed tyhe maximum allowed .

###code 


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


##usage 

To use this function

Copy the code into a javascript file 

Open a web browser and open ghe developer tools (F2 of Ctrl + Shift + I).

Go to the console tab and paste the code .

Call the function by typing speedDetector() in the console then press enter

Follow the prompt to enter the speed of the car   and see  the corresponding result displayed on the console.


This `README.md` provides a clear description of the challenge , the function implementation , usage instructions . 



CHALLENGE 3 : NET SALARY CALCULATOR (TOY PROBLEM)

This challence contains a program that calculates an individuals net salary by getting the inputs of basic salaries and benefits.

It calculates the payee , NHIF Deductions, NSSF Deductions , gross salary and net salary.

Specific values used are gotten fron the websites provided.


###code


const  basicSalary = parsefloat(prompt('Kindly enter your basic salary '));

const benefits = parseFloat (prompt('Enter benefits: '));

if (isNaN(basicSalary) || isNaN(benefits)) {
    console.log('Invalid input.Please enter valid input')
}
else if (basicSalary <= 0 || benefits <= 0 ) {
    console.log('Invalid input.')
}
else {

    //Gross salary

    const  grossSalary = basicSalary + benefits;

    console.log('Gross Salary: ${grossSalary}')


    //PAYE

    let paye = 0;
    if(grossSalary <= 24000){
        paye = grossSalary * 0.1;
    }
    else if (grossSalary <= 32333) {
        paye = (grossSalary - 24000) * 0.15;
    }
    else if (grossSalary <= 40667) {
        paye = (grossSalary - 32333) * 0.2;
    }
    else if (grossSalary <= 57000 ) {
        paye = (grossSalary - 40667) * 0.25;
    }
    else {paye = (grossSalary - 57000) * 0.3;

    }

    //paye 

    console.log(`PAYE: ${paye}`);

    //NHIF deductions

    const nhifDeductions = 0;

    if (grossSalary <= 5999){
        nhifDeductions = 150;
    }
    else if (grossSalary <= 7999){
        nhifDeductions = 300;}

    else if(grossSalary <= 11999){
        nhifDeductions = 400;}
        
    else if(grossSalary <= 14999){
        nhifDeductions = 500;}
        
    else if(grossSalary <= 19999){
        nhifDeductions = 600;}

    else if(grossSalary <= 24999){
        nhifDeductions = 750;}

    else if(grossSalary <= 29999){
        nhifDeductions = 850} 
    
    else if(grossSalary <= 34999){
        nhifDeductions = 900}
     
    else if(grossSalary <= 39999){
        nhifDeductions = 950}
    
    else if(grossSalary <= 44999){
        nhifDeductions = 1000}
    
    else if(grossSalary <= 49999){
        nhifDeductions = 1100}

    else if(grossSalary <= 59999){
        nhifDeductions = 1200}
    
    else if(grossSalary <= 69999){
        nhifDeductions = 1300}
    
    else if(grossSalary <= 79999){
        nhifDeductions = 1400}

    else if(grossSalary <= 89999){
        nhifDeductions = 1500}

    else if(grossSalary <= 99999){
        nhifDeductions = 1600}

    else{nhifDeductions = 1700;}
    
   
    console.log(`Gross Salary: ${grossSalary}`)
   
    
//NSSF deductions

const nssfDeductions = grossSalary * 0.06;

console.log(`NSSF Deductions: ${nssfDeductions}`) 

//this code calculates the nssf deductions by taking 6% of the gross salary and then logs a message to the console  showing calculated nssf deductions.


   ///Housing levy

   const housingLevy = grossSalary * 0.015;

   console.log(`Housing levy ${grossSalary}`)

   // this code calculates the housing levy by taking 15% of the gross salary then logs a message to then console showing the calculated housing levy.



}

AUTHOR 

This program was written by Megan Kwamboka Nyakina.


DATE :30/6/2023













































