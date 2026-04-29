const user = {
    username : "soumya",
    signedin : true,
    logincount: 9,
    getuserdetails: function(){
        console.log("got the userdata from the database")
    }      
}

console.log(user.username)
console.log(user.getuserdetails())

