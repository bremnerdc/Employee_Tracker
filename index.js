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
const employee = await db.findAllEmployees();
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

const employeePrompt = await prompt([
    {type: "input",
    name: "first_name",
    message: "What is your first name?"
    },
    {
    type: "input",
    name: "last_name",
    message: "What is your last name?"
    },
]);
const roleChoices = roles.map(({ id, title }) => ({
name: title,
value: id
}));

const { roleId } = await prompt({
    type: "list",
    name: "roleId",
    message: "What is your first name?",
    choices: roleChoices
});
employee.role_id = roleId;

const managerChoice = roles.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id
    }));
    managerChoice.unshift({ name: "none", value: none});
    const { managerId } = await prompt({
        type: "list",
        name: "first_name",
        message: "What is your first name?",
        choices: managerChoice
    });
employee.manager_id = managerId;

async function updateEmployeeManager() {
    const employees = await db.findAllEmployees();
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }));
    await db.updateEmployeeManager(employeeId, managerId);
  console.log("Updated employee's manager");
editTeam();
}


    const { employeeId } = await prompt([
      {
        type: "list",
        name: "employeeId",
        message: "Which employee's manager do you want to update?",
        choices: employeeChoices
      }
    ]);
    const managers = await db.findAllPossibleManagers(employeeId);
    

    async function removeEmployee() {
        const employees = await db.findAllEmployees();
        const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
          name: `${first_name} ${last_name}`,
          value: id
        }));
        const { employeeId } = await prompt([
            {
              type: "list",
              name: "employeeId",
              message: "Which employee do you want to remove?",
              choices: employeeChoices
            }
          ]);
    await db.removeEmployee(employee);
    editTeam();
    }
    async function viewAllRoles() {
        const roles = await db.findAllRoles();
                        console.log("/n");
                        console.table(roles);
                        editTeam();
    });