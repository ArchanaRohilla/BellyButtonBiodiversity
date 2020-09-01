// d3.json("samples.json").then(function(data){
//     console.log("hello");
// });

d3.json("samples.json").then(function(data){
    console.log("hello");
});

d3.json("samples.json").then(function(data){
    console.log(data);
});

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq)
                        .sort((a,b) => b-a);                        
    filteredWfreq = wfreq.filter(element => element!= null);
        console.log(filteredWfreq);
});

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key,val]) =>
        {console.log(key +":"+ val)});
    
});