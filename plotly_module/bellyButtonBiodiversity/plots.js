//define a function for the dropdownmenu for the id's
function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      sampleX = sample;
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

//call the function
init();


//define a function to display all the data of the default id (i.e.940)
function Iwanttoloaddatafor940here(){
  buildMetadata("940");
  buildCharts("940");
}

//call the function
Iwanttoloaddatafor940here();


//define a function when a "change" occurs
function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}


//define a function to display the demographic information in the panel
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];

    var PANEL = d3.select("#sample-metadata");  

    PANEL.html("");
    Object.entries(result).forEach(([key,val]) =>
    {PANEL.append("h6").text((key).toUpperCase() +":"+ val)});
    
  });
}


//define a function to display the "bar", "bubble" and  "gauge" plots
function buildCharts(sample) {
  d3.json("samples.json").then((data) => {
    var samples = data.samples;
    var resultSample = samples.filter(sampleObj => sampleObj.id == sample);
    var result = resultSample[0];
    
    var topTenBacteriasId = [];
    for (var i=0; i<10; i++) {
      var temp = "OTU" + result.otu_ids[i];
      topTenBacteriasId.push(temp);
    }

    var topTenBacteriaValues = result.sample_values.slice(0,10);
    var topTenBacteriaLabels = result.otu_labels.slice(0,10);
    
    //"Bar" chart
    var trace1 = [{
      x: topTenBacteriaValues,
      y: topTenBacteriasId,
      text: topTenBacteriaLabels,
      type: "bar",
      orientation: 'h'
    }];

    var layout1 = {
      title: 'Bar Chart',
      yaxis: { autorange: "reversed"}      
    }; 

    Plotly.newPlot('bar', trace1, layout1);


    //"Bubble" chart
    var trace2 = {
      x: result.otu_ids,
      y: result.sample_values,
      text: result.otu_labels,
      mode: 'markers',
      marker: {
        color: result.otu_ids,
        size: result.sample_values
      }
    };
    
    var data2 = [trace2];
    
    var layout2 = {
      title: 'Bubble Chart',
      xaxis: {title: "OTU ID"},
      showlegend: false,
      height: 600,
      width: 1500
    };
    
    Plotly.newPlot('bubble', data2, layout2);           
    });


    //"Gauge" chart
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var resultWfreq = resultArray[0].wfreq;


    var data3 = [
      {        
        value: resultWfreq,
        title: { text: "Belly Button Washing Frequency\n Scrubs per Week" },
        type: "indicator",
        mode: "gauge+delta",
        delta: { reference: 0 },
        
        gauge: {
          axis: { range: [0, 10],tickwidth: 1, tickcolor: "darkblue"  },
          
          bar: { color: "orange" },
          bgcolor: "white",
          borderwidth: 2,
          bordercolor: "black",
          steps: [
            { range: [0, 1], color: "rgba(0, 255,0, 0.6)" },
            { range: [1, 2], color: "rgba(30, 255, 0, 0.6)" },
            { range: [2, 3], color: "rgba(60, 255, 0, 0.6)" },
            { range: [3, 4], color: "rgba(90, 255, 0, 0.6)" },
            { range: [4, 5], color: "rgba(120, 255, 0, 0.6)" },
            { range: [5, 6], color: "rgba(150, 255, 0, 0.6)" },
            { range: [6, 7], color: "rgba(180, 255, 0, 0.6)" },
            { range: [7, 8], color: "rgba(210, 255, 0, 0.6)" },
            { range: [8, 9], color: "rgba(240, 255, 0, 0.6)" },
            { range: [9, 10], color: "rgba(255, 255, 0, 0.6)" }
          ]
          
        }
      }
    ];
    
    var layout3 = { width: 600, height: 450, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', data3, layout3);
})

}
