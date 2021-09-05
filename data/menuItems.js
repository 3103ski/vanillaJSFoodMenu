function createFoodItem(title, desc, price, prop) {
	let qty = 0;
	let total = 0.0;

	const addOne = () => {
		qty += 1;
		total += price;
		return cart.api.cartUpdate();
	};
	const removeOne = () => {
		qty -= 1;
		total -= price;
		return cart.api.cartUpdate();
	};

	const getQty = () => qty;
	const getTotal = () => parseFloat(total).toFixed(2);

	return {
		title,
		prop,
		desc,
		price,
		getQty,
		getTotal,
		addOne,
		removeOne,
	};
}

food = (function () {
	return {
		cheeseSticks: createFoodItem(
			'Cheese Sticks',
			'Deep fried cheesy goodness that you will just love.',
			9.99,
			'cheeseSticks'
		),
		gBread: createFoodItem(
			'Garlic Bread',
			'Greasy, toasty, and easy to eat too much of.',
			4.99,
			'gBread'
		),
		wingsApp: createFoodItem(
			'Chicken Wings App',
			'Order of 7 wings tossed in  whichever sauce you wnat.',
			8.99,
			'wingsApp'
		),
		chicParm: createFoodItem(
			'Chicken Parm',
			'Basic but classic. Breaded chicken with parm over pasta.',
			13.99,
			'chicParm'
		),
		pizza: createFoodItem(
			'Pizza',
			'The best pizza in town. unlimited toppings for free!',
			15.99,
			'pizza'
		),
	};
})();
