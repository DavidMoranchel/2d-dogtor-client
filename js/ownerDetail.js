const getOwnerDetail = async (id) => {
	try {
		const response = await fetch(`${API_URL}owners/${id}`);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

$(document).ready(async () => {
	const urlSearchParams = new URLSearchParams(window.location.search);
	const { owner: owner_id } = Object.fromEntries(urlSearchParams.entries());
	const owner = await getOwnerDetail(owner_id);
	console.log(owner);
	$("#owner-fullName").text(`${owner.first_name} ${owner.last_name}`);
	$("#owner-mobile").text(owner.phone);
	$("#owner-email").text(owner.email);
	$("#owner-address").text(owner.address);
});
