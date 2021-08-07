const login = async (username, password) => {
	const response = await fetch(`${API_URL}token-auth/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username,
			password,
		}),
	});
	return await response.json();
};

$("#login-form").on("submit", async (event) => {
	event.preventDefault();
	const username = $("#username").val();
	const password = $("#password").val();
	const response = await login(username, password);

	if (response.token) {
		localStorage.setItem("token", response.token);

		window.location.href = "/";
	}
});
