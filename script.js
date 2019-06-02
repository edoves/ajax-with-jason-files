document.getElementById('button1').addEventListener('click', loadEmployee);

document.getElementById('button2').addEventListener('click', loadEmployees);



// display single Employee
function loadEmployee() {
    const xhr = new XMLHttpRequest();

    // open connection
    xhr.open('GET', 'employee.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const employee = JSON.parse(this.responseText); //JSON.pars will convert the jason obect in to a javascript object
            console.log(employee);
            const employeeContainer = document.getElementById('employee');

            const outPut = `
            <ul>
                <li>ID: ${employee.id}</li>
                <li>Name: ${employee.name}</li>
                <li>Company: ${employee.company}</li>
                <li>Job: ${employee.job}</li>
            </ul>
        `;
            employeeContainer.innerHTML = outPut;
        }
    }
    /*

    xhr.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {

            // get the response as an Object
            const employee = JSON.parse(this.responseText);

            const employeeContainer = document.getElementById('employee');
            // console.log(this.responseText);

            // build the templage  
            const outPut = `
                <ul>
                    <li>ID: ${employee.id}</li>
                    <li>Name: ${employee.name}</li>
                    <li>Company: ${employee.company}</li>
                    <li>Job: ${employee.job}</li>
                </ul>
            `;

            // prints the HTML
            employeeContainer.innerHTML = outPut;

        }
    }
    */

    xhr.send();
}

// display multiple Employees the json file is in array meaning it has mutlitple informaion
function loadEmployees() {
    const xhr = new XMLHttpRequest();

    // open connection
    xhr.open('GET', 'employees.json', true);

    xhr.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {

            const employees = JSON.parse(this.responseText);

            let outPut = ``;
            employees.forEach(function (employee) {
                outPut += `
                <ul>
                    <li>ID: ${employee.id}</li>
                    <li>Name: ${employee.name}</li>
                    <li>Company: ${employee.company}</li>
                    <li>Job: ${employee.job}</li>   
                 </ul>
                `;

            });


            document.getElementById('employees').innerHTML = outPut;
        }
    }

    xhr.send();
}