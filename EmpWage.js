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
}