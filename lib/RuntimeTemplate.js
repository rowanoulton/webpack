/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const Template = require("./Template");
const SyncWaterfallHook = require("tapable").SyncWaterfallHook;
const SyncHook = require("tapable").SyncHook;
const SyncBailHook = require("tapable").SyncBailHook;

module.exports = class RuntimeTemplate {
	constructor(outputOptions, requestShortener) {
		this.outputOptions = outputOptions || {};
		this.requestShortener = requestShortener;
	}
};
