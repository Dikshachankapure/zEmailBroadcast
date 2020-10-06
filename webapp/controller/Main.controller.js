sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("poc.ZEmailbroadcast.controller.Main", {
		onInit: function () {

		},

		onSendEmail: function () {
			debugger;
			var txtSubject = this.getView().byId("txtSubject").getValue();
			var txtbody = this.getView().byId("txtbody").getValue();
			var sEmail = "pratik.modh@vsdtechno.com";
			//var sMobile="9016226649"
			//var sEmail1 = "pmmodipratik@gmail.com";
			//sap.m.URLHelper.triggerEmail(sEmail, txtSubject, txtbody);
			//sap.m.URLHelper.triggerSms(sMobile);

		},

		onNotifyUserPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oBinding = oItem.getBindingContext();
			// Set some vars for the email package
			var sEmpEmail = oBinding.getProperty("Smtp");
			var sEmpName = oBinding.getProperty("STEXT_2");
			var sEmailSubject = "Your Subject " + sEmpName;
			// Create DateFormat Object
			var oDateFormat = DateFormat.getDateTimeInstance({
				pattern: "dd/MM/yyyy"
			});

			// Retrieve Table Data
			var oTable = this.getView().byId("yourTable");
			var aTableData = oTable.getBinding("items").getContexts();
			// Build the email body
			var sBody = sEmpName + " - Some Body Text\n\n";
			sBody += "Field 1 | " + "Field 2 | " + "Field 3 | " + "Field 4" + "\n";
			// Loop through table data and build the output for the rest of the email body
			aTableData.forEach(function (oModel) {
				var oModelData = oModel.getObject();
				var sEndDate = oDateFormat.format(oModelData.Vendd);
				var sStatus = this._formatStatus(oModelData.ZQ_STAT);
				sBody += (oModelData.Essential === "X" ? "Yes" : "No") + " | " + oModelData.Ttext + " | " + sEndDate + " | " + sStatus + "\n";
			}.bind(this));
			// Open email client window and prepopulate with info
			window.open("mailto:" + sEmpEmail + "&subject=" + sEmailSubject + "&body=" + encodeURIComponent(sBody), "_self");
		},

	});
});