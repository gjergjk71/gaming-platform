
function getCookie(name) {
	    var cookieValue = null;
	    if (document.cookie && document.cookie !== '') {
	        var cookies = document.cookie.split(';');
	        for (var i = 0; i < cookies.length; i++) {
	            var cookie = jQuery.trim(cookies[i]);
	            // Does this cookie string begin with the name we want?
	            if (cookie.substring(0, name.length + 1) === (name + '=')) {
	                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	                break;
	            }
	        }
	    }
	    return cookieValue;
	}

var csrftoken = getCookie('csrftoken');
login_button = document.getElementById("login_button");



function validate_credentials(){
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var errors = document.getElementById("errors");
	$.ajax({
		type:"POST",
		data: {"csrfmiddlewaretoken":csrftoken,
				"username":username.value,
				"password":password.value},
		url:"/auth/valid_credentials_api"
	}).done(function(json){
		if(json["valid_credentials"]){
			window.location.replace("/");
		} else {
			errors.innerHTML = "Invalid credentials";
		}
	})
}

login_button.onclick = validate_credentials;
