{
    const IS_ABSENT= 0
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck==IS_ABSENT)
    {
        console.log(" EMPLOYEE is Absent");
    }
    else
    {
        console.log(" EMPLOYEE is Present ");
    }
}
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
{
    function getWorkingHours(empCheck)
    {
        switch(empCheck)
        {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOUR;
            default:
                return 0;
        }
    }
    function calculateDailyWage(empHrs)
    {
        return empHrs * WAGE_PER_HOUR;
    }
    let empHrs=0;
    let totalEmpHrs=0;
    let totalWorkingDays=0;
    let empDailyWageArr=new Array();
   while(totalEmpHrs<= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
    {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calculateDailyWage(empHrs));
    }
    let empWage = calculateDailyWage(totalEmpHrs);
    console.log("Total Days: " + totalWorkingDays +" " + "Total Hrs: " + totalEmpHrs +" " +"Emp Wage: " + empWage);
    let totEmpWage = 0;
    function sum(dailyWage)
    {
        totEmpWage += dailyWage;
    }
    empDailyWageArr.forEach(sum);
    console.log("Total Days: " + totalWorkingDays+" " + "Total Hours: " + totalEmpHrs +" " +"Employee Wage: " + totEmpWage);

    function totalWages(totalWage,dailyWage){
        return totalWage + dailyWage;
    }
    console.log("Emp Wage With Reduce: "+empDailyWageArr.reduce(totalWages,0));
    let dailyCntr = 0;
    function mapDayWithWage(dailyWage){
        dailyCntr++;
        return dailyCntr + " = " + dailyWage;
    }
    let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
    console.log("\n UC7B - Daily Wage Map");
    console.log(mapDayWithWageArr);
    //Uc7-C
    function fulltimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
    console.log("\nUC7-C - Daily Wage Filter When Fulltime Wage Earned");
    console.log(fullDayWageArr);
    //UC7-D
    function findFulltimeWage(dailyWage){
        return dailyWage.includes("160");
    }
    console.log("\n UC 7D - First Time Fulltime Wage Was Earned On Day: "+ mapDayWithWageArr.find(findFulltimeWage));
    //UC-E
    function isAllFulltimeWage(dailyWage){
        return dailyWage.includes("160");
    }
    console.log("\nUC 7E - Check All Element Have Full Time Wage: "+fullDayWageArr.every(isAllFulltimeWage));

    //UC7-F
    function isAnyPartTimeWage(dailyWage){
        return dailyWage.includes("80");
    }
    console.log("\nUC 7F - Check If Any Part Time Wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));
    //UC7-G
    function totalDaysWorked(numOfDays,dailyWage){
        if(dailyWage > 0) return numOfDays+1;
        return numOfDays;
    }
    console.log("\nUC 7G - Number Of Days Employee Worked: "+empDailyWageArr.reduce(totalDaysWorked, 0));

    //UC-8   
    let empDailyWageMap=0;
    console.log("\nUC8 - Employee Wage Map TotalHrs: "+Array.from(empDailyWageMap.Values()).reduce(totalWages,0));

    //UC-9 
    const findTotal = (totalVal, dailyVal) =>{
        return totalVal + dailyVal;
    }
    let totalHours = Array.from(empDailyHrsMap.values()).filter(dailyHours =>dailyHours > 0).reduce(findTotal,0);
    let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal,0);
    console.log("UC 9A - Employee Wage With Arrow: "+"Total Hours: "+totalHours+"Total Wages: "+totalSalary);

    let nonWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();
    empDailyHrsMap.forEach( (value, key, map)=> {
        if(value == 8) fullWorkingDays.push(key);
        else if (value == 4) partWorkingDays.push(key);
        else nonWorkingDays.push(key);
    });
    console.log("Full Working Days: "+fullWorkingDays);
    console.log("Part Working Days: "+partWorkingDays);
    console.log("Non Working Days: "+nonWorkingDays);

     //UC 10 Object Creation
     let totalEmpHrs = 0;
     let totalWorkingDays = 0;
     let empDailyHrsAndWageArr = new Array();
     while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
     {
         totalWorkingDays++;
         let empCheck = Math.floor(Math.random() * 10) % 3;
         let empHrs = getWorkingHours(empCheck);
         totalEmpHrs += empHrs;
         empDailyHrsAndWageArr.push(
             {
                 dayNum: totalWorkingDays,
                 dailyHours: empHrs,
                 dailyWage: calcDailyWage(empHrs),
                 toString()
                 {
                     return '\nDay' +this.dayNum+ '=> Working Hours is'+this.dailyHours+'And Wage Earned = '+this.dailyWage
                 },
             });
     }
     console.log("\nUC 10 Showing Daily Hours Worked and Wage Earned: "+empDailyHrsAndWageArr);

     //UC 11A to 11D Using Object Functions Along With Arrow Functions
     let totalWages=empDailyHrsAndWageArr
                    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                    .reduce((totalWage,dailyHrsAndWage) =>totalWage += dailyHrsAndWage.dailyWage,0);

     let totalHours=empDailyHrsAndWageArr
                    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                    .reduce((totalHours,dailyHrsAndWage) =>totalHours += dailyHrsAndWage.dailyHours,0);
     console.log("\nUC 11A Total Hours: "+totalHours+"Total Wages: "+totalWages);

     process.stdout.write("\nUC 11B Logging Full Work Days")
     empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                        .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

     let partWorkingDayStrArr = empDailyHrsAndWageArr
                                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                                .map(dailyHrsAndWage => dailyHrsAndWage.toString());
     console.log("\nUC 11C PartWorkingDayStrings: "+partWorkingDayStrArr);

     let nonWorkingDayNum=empDailyHrsAndWageArr
                            .filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==0)
                            .map(dailyHrsAndWage=>dailyHrsAndWage.dayNum);
     console.log("\nUC 11D NonWorkingDayNums: "+nonWorkingDayNum);
    }