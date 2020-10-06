/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"poc/ZEmailbroadcast/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});