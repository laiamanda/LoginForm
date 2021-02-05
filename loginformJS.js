//static array to test the function to see if user exist or not bc I don't have a database 
var objPeople = [
	{
		username: "Sam",
		password: "Password"
	},
	{
		username: "Matt",
		password: "1234"
	},
	{
		username: "Amanda",
		password: "Egg"
	}
]

function getInfo(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	for (i = 0; i<objPeople.length;i++){
		if (username == objPeople[i].username && password == objPeople[i].password){
			console.log(username + " is logged in");
			return
		}
	}
	console.log("Your username or password is incorrect");
}
