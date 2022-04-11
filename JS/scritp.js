let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

const user = {
    name: "John"
};
user.name = "Pete";


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
 let sum = 0;
 for (let key in salaries) {
     sum += salaries[key];
 }
 alert (sum);