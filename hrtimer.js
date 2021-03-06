/**
 * @license
 * hrtimer
 * Copyright 2015-2016 Danny Nemer <http://dannynemer.com>
 * Available under MIT license <http://opensource.org/licenses/MIT>
 */

var util = require('dantil')

/**
 * Used as a key-value map for timers.
 *
 * @private
 * @type {Object}
 */
var _times = Object.create(null)

/**
 * Starts a high-resolution timer (with precision in microseconds) identified by `label`. Use `hrtimer.end(label)` to print the timer's current value.
 *
 * @static
 * @memberOf hrtimer
 * @param {string} label The timer identifier.
 */
exports.start = function (label) {
	_times[label] = process.hrtime()
}

/**
 * Prints the current high-resolution value of a timer initiated with `hrtimer.start(label)`.
 *
 * @static
 * @memberOf hrtimer
 * @param {string} label The timer identifier.
 */
exports.end = function (label) {
	var startTime = _times[label]

	if (!startTime) {
		throw new Error('No such label: ' + label)
	}

	var durationTuple = process.hrtime(startTime)
	var duration = durationTuple[0] * 1e3 + durationTuple[1] / 1e6

	// Separate the time's numerical value and unit symbol with a space, per SI unit style convention.
	util.log(label + ':', util.colors.yellow(duration.toFixed(3) + ' ms'))
}