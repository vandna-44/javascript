//const declaration//
const accountID = 14455

// variables declaration //
let accountEmail = "text@gmail.com"
var accountPassword ="33443"
accountCity ="jaipur" //- this not right way to declaration



// accountID = 2// not allowed
accountEmail = "hay@gmail.com"
accountPassword = "99889"
accountCity = "Bhopal "
let accountState;


console.log(accountID);

/*
Prefer not to use var
because of issue in block scope and functional scope

*/


console.table ([accountID, accountEmail, accountPassword, accountCity])


