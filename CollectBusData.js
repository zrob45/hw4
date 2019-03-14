
var url = 'https://api-v3.mbta.com/vehicles?api_key=2dc335aae5ae472b8b3be5865f5fd0fb&filter[route]=1&include=trip';
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const fetch = require('node-fetch');

db.defaults({ vehicles: [] }).write();

async function CollectBusData(){ // asynchronous function

    const response = await fetch(url); // fetch bus data
    data = await response.json();
    return data.data;
    console.log(data);

}

async function AddBuses(){
    var collectdata = await CollectBusData();
    collectdata.forEach(function(bus){
        var businfo ={
            id: bus.id,
            label: bus.attributes.label,
            direction_id: bus.attributes.direction_id,
            latitude: bus.attributes.latitude,
            longitude: bus.attributes.longitude
        }     
    db.get('vehicles').push(businfo).write();  
    })
}

// Call MBTA route 1 every 15 seconds for a duration of 1 hour from Server (using Node)
var time = setInterval(AddBuses,15000); // 15s
setTimeout(function() { // end after 1hr
    clearInterval(time);
}, 3600100);