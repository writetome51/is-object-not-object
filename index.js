"use strict";
Object.defineProperty(exports, "__esModule", {value: true});


// Returns true if arg is object, and does not consider null an object.

function isObject(arg) {
	return !(arg === null || typeof arg !== 'object');
}
exports.isObject = isObject;


// Will return true if arg is null.

function notObject(arg) {
	return !(isObject(arg));
}
exports.notObject = notObject;
