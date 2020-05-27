const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table")
const {prompt} = require(inquirer);

  async  function editTeam() { 
     const {choice} = await prompt([
            {
                type: "list",
                name: "choice",
                message: "What would you like to do?",
                choices: [
               { name: "View all employees",
               value: "View_all_employees" }, 
               { name: "View all Employees by Department",
               value: "View_all_employees_by_department"},
               { name: "View all Employees by Manager",
               value: "View_all_employees_by_manager"},
               { name: "Add Employee",
               value: "Add_employee"},
               { name: "Remove Employee",
               value: "Remove_employee"},
               { name: "Update Employee Role",
               value: "Update_employee_role"},
               { name: "Update Employee Manager",
               value: "Update_employee_manager"},
               { name: "View all Roles",
               value: "View_all_roles"}
                ]
            }
        ]);
            
                switch(choice){
                    case "View_all_employees":
                        viewEmployees();
                        break;
                        case "View_all_employees_by_department":
                        return viewEmployeesDepartment();
                        break;
                        case "View_all_employees_by_manager":
                        return viewEmployeesManager();
                        break;
                        case "Add_employee":
                        return addEmployee();
                        break;
                        case "Remove_employee":
                        return removeEmployee();
                        break;
                        case "Update_employee_role":
                        return updateEmployeeRole();
                        break;
                        case "Update_employee_manager":
                        return updateEmployeeManager();
                        break;
                        case "View_all_roles":
                        return viewAllRoles();
                        break;
                        default:
                }
            }
async function viewEmployees() {
const employees = await db.findAllEmployees();
                console.log("/n");
                console.table(employees);
                editTeam()};
                
async function viewEmployeesDepartment() {
const department = await db.findAllDepartments();
    const departmentOptions = department.map(({ id, name}) => ({
        name: name,
        value: id
}));
async function ViewEmployeesManager() {
const manager = await db.findAllEmployees();
    const managerOptions = manager.map(({ id, name}) => ({
    name: `${firstname} ${lastname}`,
    value: id
}));
async function addEmployee() {
const employee = await db.findAllEmployees();
const roles = await db.findAllRoles();

                                                      
                                                      
                                   
                
                
    function app(){
        function CreateManager(){
            inquirer.prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "What is your manager's name?"
                    },
                    {
                    type: "input",
                    name: "managerID",
                    message: "What is your manager's ID?"
                    },
                    {
                        type: "input",
                        name: "managerEmail",
                        message: "What is your manager's email?"
                        },
                    {
                    type: "input",
                    name: "officeNumber",
                    message: "What is your manager's office number?"
                    }
            ]).then(answers => {
                const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
                teamArray.push(manager);
                idArray.push(answers.managerID);
                createTeam();
            });
        }
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?"
                },
                {
                type: "input",
                name: "engineerID",
                message: "What is your engineer's ID?"
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is your engineer's email?"
                    },
                {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineer's github ID?"
                }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            console.log(engineer);
            idArray.push(answers.engineerID);
            createTeam();
        });
    }
        function addIntern() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "What is your intern's name?"
                    },
                    {
                    type: "input",
                    name: "internID",
                    message: "What is your intern's ID?"
                    },
                    {
                        type: "input",
                        name: "internEmail",
                        message: "What is your intern's email?"
                        },
                    {
                    type: "input",
                    name: "internSchool",
                    message: "What is your intern's school?"
                    }
            ]).then(answers => {
                const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
                teamArray.push(intern);
                idArray.push(answers.internID);
                createTeam();
            });
        }