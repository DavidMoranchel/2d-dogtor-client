const getOwners = async () => {
	try {
		const response = await fetch(`${API_URL}owners/`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Token ${AUTH_TOKEN}`,
			},
		});
		const data = await response.json();
		console.log(data);
		const ownersUI = data.map(({ id, first_name, last_name, email }) =>
			buildOwnerLI(id, first_name, last_name, email)
		);
		$("#owners").html(ownersUI);
	} catch (error) {
		console.log(error);
	}
};

$(document).ready(() => {
	getOwners();
});
