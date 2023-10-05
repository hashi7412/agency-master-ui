var mElement = document.getElementById("statusMessage");

mElement.style.display = "none";

var first = document.getElementById("firstNumber").textContent;
var second = document.getElementById("secondNumber").textContent;

function SendMail() {

	mElement.style.display = "none";

	var result = document.getElementById("verify").value;

	if (result != parseInt(first) + parseInt(second)){
		mElement.innerHTML = "Please enter the right validation";
		mElement.style.display = "";
	} else {

		var email = document.getElementById("emailContact").value;
		var message = document.getElementById("messageContact").value;
		var from_name = document.getElementById("contactName").value;
		var thedate = document.getElementById("dateContact").value;

		if (email.length === 0 || message.length === 0 || from_name.length === 0 || thedate.length === 0){
			mElement.innerHTML = "Please fill out all of the boxes";
			mElement.style.display = "";
		} else {
			var params = {
				from_name : from_name,
				message : message,
				date: thedate,
				email : email
			};
		
			emailjs.send("service_zx1aeph", "template_t3itph9", params).then(function (res) {
				mElement.innerHTML = "Success!";
				mElement.style.display = "";
			})
		}
	}
}
