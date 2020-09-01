# Belly Button Biodiversity Dashboard
An interactive "Belly Button Biodiversity Dashboard" with a panel for demographic information and capability of displaying the bacterial 
data for each individual. The individuals are be able to identify the top 10 bacterial species in their belly buttons. 

## Project Overview
A dashboard has been designed using the data from the samples of some individuals to find the type and 
quantity of the bacterias found in the their belly buttons.

## Software
Plotly, JavaScript, HTML, CSS, D3.json()

## Data source
samples.json

## Source code
plots.js

## Summary
- The dashboard shows the demographic information, "Bar" chart, "Bubble" chart, and the "Gauge" which displays 
 the respective informations about an individual as per their "id", which can be selected from the dropdown menu.

- When an individual’s ID is selected, the top 10 bacterial species (OTUs) found in his/her belly button is 
 visualized in the bar chart.

- In the Demographics Info panel, all the information of the selected individual’s demographic data is displayed.

- The bubble chart helps to visualize the relative frequency of all the bacterial species found in a volunteer’s navel.

- The gauge chart shows the weekly washing frequency of the individual.


## The Dashboard's working version is deployed to Github pages at:


https://archanarohilla.github.io/BellyButtonBiodiversity/



![alt text](https://github.com/ArchanaRohilla/BellyButtonBiodiversity/blob/master/Images/Dash1.png)



![alt text](https://github.com/ArchanaRohilla/BellyButtonBiodiversity/blob/master/Images/dash3.png)


- When the dashboard is first opened in a browser, ID 940’s data will be displayed in the dashboard. 

- When a new ID number is selected from the dropdown menu, all the plots and the info panel will be updated.

- The weekly washing frequency of the individual will be updated in the gauge chart whenever a new sample is selected. 