cart = (function () {
	let cartItems = [];
	let cartTotal = (function () {
		let balance = 0.0;

		const add = (num) => (balance += parseFloat(num));
		const subtract = (num) => (balance -= num);
		const reset = () => (balance = 0.0);
		const getTotal = () => balance.toFixed(2);

		return {
			getTotal,
			add,
			subtract,
			reset,
		};
	})();

	// Cart HTML Templates
	function cartItemHTML(item) {
		return `
            <div id="cart_item_${item.prop}" class="cart_item_outer">
				<div class="cart_item_text">
					<p class="cart_item_title">${item.title}</p>
					<p id="cart_${item.prop}_qty" class="cart_item_qty">QTY: ${item.getQty()}</p>
					<p id="cart_${item.prop}_total" class="cart_item_total">$${item.price}</p>
				</div>
                <button id="${item.prop}_remove_btn" class="btn white btn_remove" >Remove</button>
            </div>
            `;
	}

	function cartWidgetHTML() {
		return `
			<div id="cart_widget_container" class="cart_widget_container">
				<h2>Your Order</h2>
				<div id="cart_list"></div>
				<h5 id="cart_widget_total"></h5>
			</div>
		`;
	}

	function cartTotalHTML() {
		return `<div id="cart_total_button"></div>`;
	}

	// Render Methods
	function renderTotal() {
		headerCartEl = document.getElementById('cart_total_button');
		widgetTotalEl = document.getElementById('cart_widget_total');
		if (headerCartEl) {
			headerCartEl.innerHTML = `<p class="white">Cart Total: $${cartTotal.getTotal()}</p>`;
			widgetTotalEl.innerHTML = `Total: $${cartTotal.getTotal()}`;
		}
	}

	function renderCartItems() {
		cartListEl = document.getElementById('cart_list');

		if (cartItems.length > 0) {
			cartItems.map((item) => {
				let itemEl = document.getElementById(`cart_item_${item.prop}`);
				let emptyNoticeEl = document.getElementById('empty_cart_text');

				if (emptyNoticeEl) {
					emptyNoticeEl.remove();
				}

				if (itemEl) {
					document.getElementById(
						`cart_${item.prop}_qty`
					).textContent = `QTY: ${item.getQty()}`;
					document.getElementById(
						`cart_${item.prop}_total`
					).textContent = `$${item.getTotal()}`;
				} else {
					cartListEl.insertAdjacentHTML('beforeend', cartItemHTML(item));
					document
						.getElementById(`${item.prop}_remove_btn`)
						.addEventListener('click', () => item.removeOne());
				}
			});
		} else {
			cartListEl.innerHTML = '';
			cartListEl.insertAdjacentHTML('beforeend', `<p id="empty_cart_text">Cart Is Empty</p>`);
		}

		return renderTotal();
	}

	// Cart API
	function cartUpdate() {
		let updatedCart = [];
		cartTotal.reset();

		for (const foodItem in food) {
			let item = food[foodItem];
			if (item.getQty() > 0) {
				updatedCart.push(item);
				cartTotal.add(item.getTotal());
			} else {
				let currItem = document.getElementById(`cart_item_${item.prop}`);
				if (currItem) {
					currItem.remove();
				}
			}
		}

		cartItems = updatedCart;

		return renderCartItems();
	}

	return {
		render: {
			total: renderTotal,
			cartItems: renderCartItems,
		},
		api: {
			cartUpdate,
		},
		htmlTemplates: {
			widget: cartWidgetHTML,
			cartItem: cartItemHTML,
			cartTotal: cartTotalHTML,
		},
	};
})();
