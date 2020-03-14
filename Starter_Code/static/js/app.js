console.log("Welcome to Belly Button Homework")
// the id for the dropdown is: selDataset
var dropdown = d3.select('#selDataset');
​
var readData = {}
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("./static/data/samples.json").then((importedData) => {
//     console.log(importedData);
    var data = importedData;
//for loop to add patient ids to dropdown menu (for bar chart)
//build the dropdown menu items (called options in a dropdown) 
//tell it to append each option based on what we named the variable for each value
    for (let index = 0; index < data.names.length; index++) {
       const id = data.names[index];
         dropdown
        .append("option")
        .text(id)
        .property("value", id);
    } 
});
​
//function option changed (that was given to us in the starter html file)
//MUST hit CTRL + F5 EVERY TIME 
//in order to loop through the array to display in the chart, what was selected from the dropdown, 
//the for loop for the x and y values must be inside the option change function 
function optionChanged (id){ 
console.log("Option Changed in Dropdown");
console.log(id)
​
​
};
​
function getRightID(id) {
	d3.json("./static/data/samples.json").then((data) => {
		
		// each of these is an array
		metadata = data.metadata
		names = data.names
		samples = data.samples
	})
	
	
}
getRightID('anything')
​
