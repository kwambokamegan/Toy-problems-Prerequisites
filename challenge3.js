

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

    // Paye

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


   ///Housing levy

   const housingLevy = grossSalary * 0.015;

   console.log(`Housing levy ${grossSalary}`)



          
}













































