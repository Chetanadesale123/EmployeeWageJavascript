class EmpPayrollData{
    id;
    salary;
    gender;
    startDate;
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    get name(){return this._name;}
    set name(name){
        this._name = name;

    }
    //method
    toString(){
        return "id="+this.id+",name "+this.name+", salary="+this.salary;

    }
}
let empPayrollData = new EmpPayrollData(1,"Mark",30000);
console.log(empPayrollData.toString())
empPayrollData.id = 0;
empPayrollData.name="jeff";
console.log(empPayrollData.toString());
