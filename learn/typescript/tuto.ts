interface BusinessPartner {
    name: string;
    creditStore: number;
}

interface UserIdentity {
    id: number;
    email: string
}

type Employee = BusinessPartner & UserIdentity;

const signContract = (employee: Employee) => {
    console.log('contract signed by ' + employee.name + ' with email: ' + employee.email);
}

signContract({name: 'yahya', creditStore: 20, id: 1, email: 'yahya@gmail.com'});