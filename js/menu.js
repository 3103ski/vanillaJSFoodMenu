menu = (function () {
	// Menu HTML Templates
	function menuContainerHTML() {
		return `
			<div id="menu_content_container" class="menu_content_container">
				<div id="menu_wrapper" class="menu_wrapper" />
			</div>
	`;
	}

	function menuItemHTML(item) {
		return `
        <div class="menu_item">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <p class="menu_item_price">${item.price}</p>
            <button class="btn white btn_add" id="${item.prop}_add_btn">Add To Cart</button>
        </div>
        `;
	}

	// Render Methods
	function renderMenuItems() {
		menuWrapper = document.getElementById('menu_wrapper');
		menuWrapper.innerHTML = '';

		for (const item in food) {
			let mi = food[item];
			menuWrapper.insertAdjacentHTML('beforeend', menuItemHTML(mi));
			document
				.getElementById(`${mi.prop}_add_btn`)
				.addEventListener('click', () => mi.addOne());
		}
	}

	function renderMenuPage() {
		emptyAppEl();
		renderAppContent([bannerHTML('This Menu Uses JS Closures'), menuContainerHTML()]);

		document
			.getElementById('menu_content_container')
			.insertAdjacentHTML('beforeend', cart.htmlTemplates.widget());

		renderMenuItems();
		cart.render.cartItems();
	}

	// Menu API
	function removeMenu() {
		menuContainer.remove();
	}

	return {
		api: {
			removeMenu,
		},
		render: {
			menuItems: renderMenuItems,
			menuPage: renderMenuPage,
		},
		htmlTemplates: { item: menuItemHTML, container: menuContainerHTML },
	};
})();
