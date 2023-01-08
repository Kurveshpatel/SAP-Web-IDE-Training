sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("demozfirst.controller.View1", {
		
		
		
		
		
		
		
		
		
		onInit : function(){
			
			//Step 1: Declare a brand new model object
			var jsonModel = new sap.ui.model.json.JSONModel();
			
			//Step 2: Set the data to the model object
			jsonModel.setData({
				"empData":{
					"empName":"Kurveh",
					"empSal":90000
				}
			});
			
			//Step 3: Set the model to the app/view/control level
			
			//App level instance
			// sap.ui.getCore().setModel(jsonModel);
			
			//View level instance
			this.getView().setModel(jsonModel);
			// //Controll level instance
			// this.getView().byId("pwd").bindValue("/empData/empSal");
	
		}
		
		// onBtnClick : function(evt){
		// 	this.getView().byId("pwd").bindValue("/empData/empSal");
		// }
		

	});
});