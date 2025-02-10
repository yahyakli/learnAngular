"use strict";
const signContract = (employee) => {
    console.log('contract signed by ' + employee.name + ' with email: ' + employee.email);
};
signContract({ name: 'yahya', creditStore: 20, id: 1, email: 'yahya@gmail.com' });
