const accountId = 144553
let accountemail = "soumya@google.com"
var accountpassword = "12345"
accountcity = "jaipur"

// accountId = 2     not allowed
accountemail = "hello@gmail.com"
accountpassword = "575732"
accountcity = "cuttack"

// dont use var as it causes issue in block scope and functional scope


console.log(accountId);
console.table([accountId,accountemail,accountpassword,accountcity])



