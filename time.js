function Constructor(date, options = {}) {
	if (!Array.isArray(date)) {
		date = [date]
	}
	let settings = Object.assign({
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	}, options);

	Object.freeze(settings);

	Object.defineProperties(this, {
		date: {
			value: new Date(...date),
		},
		settings: {
			value: settings,
		}
	});
}

/**
 * Get the day of the week
 * @param  {Date}   date  The date object
 * @return {String}       The day of the week
 */
Constructor.prototype.getDay = function () {
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return this.settings.days[this.date.getDay()];
}

/**
 * Get the month of the year
 * @param  {Date}   date  The date object
 * @return {String}       The month of the year
 */
Constructor.prototype.getMonth = function () {
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	return this.settings.months[this.date.getMonth()];
}

/**
 * Add days to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of days to add
 */
Constructor.prototype.addDays = function (n) {
	let d = new Date(this.date);
	d.setDate(d.getDate() + n);
	return new Constructor(d);
}

/**
 * Add months to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of months to add
 */
Constructor.prototype.addMonths = function (n) {
	let d = new Date(this.date);
	d.setMonth(d.getMonth() + n);
	return new Constructor(d);
}

/**
 * Add years to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of years to add
 */
Constructor.prototype.addYears = function (n) {
	let d = new Date(this.date);
	d.setFullYear(d.getFullYear() + n);
	return new Constructor(d);
}

export default Constructor;