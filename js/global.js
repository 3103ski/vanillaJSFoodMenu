appContainerEl = document.getElementById('app_main_container');

function emptyAppEl() {
	return (appContainerEl.innerHTML = '');
}

function renderAppContent(elements) {
	emptyAppEl();
	if (appContainerEl) {
		elements.map((el) => appContainerEl.insertAdjacentHTML('beforeend', el));
	}
}

// GLOBAL HTML TEMPLATES
function bannerHTML(headerText) {
	return `
		<div class="header_container">
			<h1 class="header_text">${headerText}</h1>
			${cart.htmlTemplates.cartTotal()}
		</div>
	`;
}
