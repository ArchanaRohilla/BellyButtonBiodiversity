const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(spaceXResults => console.log(spaceXResults));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

d3.json(url).then(spaceXResults => console.log(spaceXResults.map(function(station) {

    return station.location.latitude;
})
));
    
d3.json(url).then(spaceXResults => console.log(spaceXResults.map(function(station) {

    return station.location.longitude;
})
));

