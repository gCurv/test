// Welcome to the RazorFlow Dashbord Quickstart. Simply copy this "dashboard_quickstart"
// to somewhere in your computer/web-server to have a dashboard ready to use.
// This is a great way to get started with RazorFlow with minimal time in setup.
// However, once you're ready to go into deployment consult our documentation on tips for how to 
// maintain the most stable and secure 

StandaloneDashboard(function(db){
	// YOU CAN DELETE THE ENTIRE CONTENTS OF THIS FUNCTION AND CUSTOMIZE
	// AS PER YOUR REQUIREMENT. 
	// These components are simply here to give you a quick introduction of how RazorFlow Works

	db.setDashboardTitle ("Jarden Manufacturing KPIs");
    
    // Add a KPIComponent to the dashboard. This is a simple KPI with no customization.
    var kpi = new KPIComponent ();
    kpi.setDimensions (3, 2);
    kpi.setCaption ("August 2016, Labor Variance");
    kpi.setValue (44276.00, {
        numberPrefix: "$"
    });

    db.addComponent(kpi);

	// Add a KPIComponent to the dashboard. This is a simple KPI with no customization.
    var kpi2 = new KPIComponent ();
    kpi2.setDimensions (3, 2);
    kpi2.setCaption ("August 2016, Overhead Variance");
    kpi2.setValue (270062.00, {
        numberPrefix: "$"
    });

    db.addComponent(kpi2);

	// Add a KPIComponent to the dashboard. This is a simple KPI with no customization.
    var kpi3 = new KPIComponent ();
    kpi3.setDimensions (3, 2);
    kpi3.setCaption ("August 2016, Labor efficiency %");
    kpi3.setValue (102.94, {
		numberSuffix: "%"
    });

    db.addComponent(kpi3);

	// Add a KPIComponent to the dashboard. This is a simple KPI with no customization.
    var kpi4 = new KPIComponent ();
    kpi4.setDimensions (3, 2);
    kpi4.setCaption ("August 2016, Product attainment %");
    kpi4.setValue (103.39, {
        numberSuffix: "%"
    });

    db.addComponent(kpi4);
    
	// Add a chart to the dashboard. This is a simple chart with no customization.
	var chart = new ChartComponent ();
    chart.setDimensions (6, 4);
    chart.setCaption ("Product Attainment Summary (2014 - 2015)");
    chart.setLabels (["2014", "2015"]);
    chart.addSeries ("proatt", "PRODUCT ATTAINMENT", [143.40, 130.50]);
    chart.setYAxis("Product Attainment", {
        numberPrefix: "",
        numberSuffix: "%",
        numberHumanize: true
    });

    var selectedYear;
    var labelsForQuarters = {
        "Q1": ["January", "February", "March"],
        "Q2": ["April", "May", "June"],
        "Q3": ["July", "August", "September"],
        "Q4": ["October", "November", "December"]
    };
    var yearData = {
        "2014": {
            "Q1": [97.22, 94.12, 96.48],
            "Q2": [105.63, 102.63, 104.76],
            "Q3": [100.81, 101.37, 100.37],
            "Q4": [96.40, 102.26, 104.64],
            data: [287.82, 313.02, 302.55, 303.30]
        },
        "2015": {
            "Q1": [101.19, 98.10, 102.16],
            "Q2": [101.96, 95.16, 101.82],
            "Q3": [100.91, 101.93, 96.34],
            "Q4": [98.92, 100.70, 99.14],
            data: [301.45, 298.94, 299.18, 298.76]
        }
    }

    chart.addDrillStep (function (done, params, updatedComponent) {
        var label = selectedYear = params.label;
        updatedComponent.setLabels (["Q1", "Q2", "Q3", "Q4"]);
        updatedComponent.addSeries ("proatt", "PRODUCT ATTAINMENT", yearData[label].data);
        done();
    });

    chart.addDrillStep (function (done, params, updatedComponent) {
        var label = params.label;
        updatedComponent.setLabels (labelsForQuarters[label]);
        updatedComponent.addSeries ("proatt", "PRODUCT ATTAINMENT", yearData[selectedYear][label]);
        done();
    });
    
        db.addComponent (chart);

    // Add a chart to the dashboard. This is a simple chart with no customization.
    
    var chart1 = new ChartComponent();
    chart1.setDimensions (6, 4);
    chart1.setCaption("Product Attainment Monthly Comparison (2014-2015)");
    chart1.setLabels (["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]);
    
    chart1.addSeries ("proatt2014", "2014", [97.22, 94.12, 96.48, 105.63, 102.63, 104.76, 100.81, 101.37, 100.37, 96.40, 102.26, 104.64]);
    chart1.addSeries ("proatt2015", "2015", [101.19, 98.10, 102.16, 101.96, 95.16, 101.82, 100.91, 101.93, 96.34, 98.92, 100.70, 99.14]);
    
    chart1.setYAxis("Product Attainment", {numberSuffix: "%", numberHumanize: true});
    
    chart1.addComponentKPI ("max2014", {
        caption: "Max Product Attainment in 2014",
        value: 106,
        numberSuffix: " %",
        numberHumanize: true
    });

    chart1.addComponentKPI("max2015", {
        caption: "Max Product Attainment in 2015",
        value: 102,
        numberSuffix: " %",
        numberHumanize: true
    });

    db.addComponent (chart1);
    
    // Add a chart to the dashboard. This is a simple chart with no customization.
	var chart2 = new ChartComponent ();
    chart2.setDimensions (6, 4);
    chart2.setCaption ("Scrap Rate Summary (2014 - 2015)");
    chart2.setLabels (["2014", "2015"]);
    chart2.addSeries ("scrap", "SCRAP RATE", [1.18, 1.28]);
    chart2.setYAxis("Scrap Rate in %", {
        numberPrefix: "",
        numberSuffix: "%",
        numberHumanize: false
    });

    var selectedYear;
    var labelsForQuarters = {
        "Q1": ["January", "February", "March"],
        "Q2": ["April", "May", "June"],
        "Q3": ["July", "August", "September"],
        "Q4": ["October", "November", "December"]
    };
    var yearData = {
        "2014": {
            "Q1": [0.21, 0.18, 0.19],
            "Q2": [0.19, 0.19, 0.18],
            "Q3": [0.16, 0.18, 0.20],
            "Q4": [0.23, 0.16, 0.15],
            data: [0.58, 0.56, 0.54, 0.54]
        },
        "2015": {
            "Q1": [0.17, 0.17, 0.22],
            "Q2": [0.09, 0.17, 0.16],
            "Q3": [0.17, 0.14, 0.18],
            "Q4": [0.24, 0.17, 0.18],
            data: [0.56, 0.42, 0.49, 0.59]
        }
    }

    chart2.addDrillStep (function (done, params, updatedComponent) {
        var label = selectedYear = params.label;
        updatedComponent.setLabels (["Q1", "Q2", "Q3", "Q4"]);
        updatedComponent.addSeries ("proatt", "PRODUCT ATTAINMENT", yearData[label].data);
        done();
    });

    chart2.addDrillStep (function (done, params, updatedComponent) {
        var label = params.label;
        updatedComponent.setLabels (labelsForQuarters[label]);
        updatedComponent.addSeries ("proatt", "PRODUCT ATTAINMENT", yearData[selectedYear][label]);
        done();
    });
    
    db.addComponent (chart2);
    
    // Add a chart to the dashboard. This is a simple chart with no customization.
    
    var chart3 = new ChartComponent();
    chart3.setDimensions (6, 4);
    chart3.setCaption("Scrap Rate Monthly Comparison (2014-2015)");
    chart3.setLabels (["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]);
    
    //chart3.addSeries ("scrap2014", "2014", [0.21, 0.18, 0.19, 0.19, 0.19, 0.18, 0.16, 0.18, 0.20, 0.23, 0.16, 0.15])
    //chart3.addSeries ("scrap2015", "2015", [0.17, 0.17, 0.22, 0.09, 0.17, 0.16, 0.17, 0.14, 0.18, 0.24, 0.17, 0.18]);
    
    chart3.addSeries ("sales2013", "2013", [0.21, 0.18, 0.19, 0.19, 0.19, 0.18, 0.16, 0.18, 0.20, 0.23, 0.16, 0.15], {
		seriesDisplayType: "line"
    });
	chart3.addSeries ("sales2012", "2012", [0.17, 0.17, 0.22, 0.09, 0.17, 0.16, 0.17, 0.14, 0.18, 0.24, 0.17, 0.18], {
		seriesDisplayType: "line"
	});
    
    chart3.setYAxis("Scrap Rate", {numberSuffix: "%", numberHumanize: false});
    
    chart3.addComponentKPI ("max2014", {
        caption: "Max Scrap Rate in 2014",
        value: 0.23,
        numberSuffix: " %",
        numberHumanize: false
    });

    chart3.addComponentKPI("max2015", {
        caption: "Max Scrap Rate in 2015",
        value: 0.24,
        numberSuffix: " %",
        numberHumanize: false
    });

    db.addComponent (chart3);

 // Add a chart to the dashboard. This is a simple chart with no customization.
	var chart4 = new ChartComponent();
	chart4.setCaption("2016 Scrap rate %");
	chart4.setDimensions (6, 4);	
	chart4.setLabels (["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec"]);
	chart4.addSeries ([0.16, 0.16, 0.19, 0.17, 0.22, 0.22, 0.18, 0.16, 0.00, 0.00, 0.00, 0.00], {
			numberPrefix: "%",
		seriesDisplayType: "bar"
	});
	db.addComponent (chart4);

	// You can add multiple charts to the same dashboard. In fact you can add many 
	// different types of components. Check out the docs at razorflow.com/docs 
	// to read about all the types of components.
	// 
	// This is another chart with additional parameters passed to "addSeries" to 
	// make customizations like change it to a line chart, and add "$" to indicate currency
	var chart5 = new ChartComponent();
	chart5.setCaption("2016 Labor Efficiency %");
	chart5.setDimensions (6, 4);	
	chart5.setLabels (["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec"]);
	chart5.addSeries ([95.60, 100.62, 98.44, 93.78, 95.18, 97.74, 101.38, 102.94, 0.00, 0.00, 0.00, 0.00], {
			numberPrefix: "%",
		seriesDisplayType: "line"
	});
	db.addComponent (chart5);   
});

