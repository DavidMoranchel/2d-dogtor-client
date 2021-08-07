const AUTH_TOKEN = localStorage.getItem("token");
if (!AUTH_TOKEN) {
	window.location.href = "/login.html";
}
