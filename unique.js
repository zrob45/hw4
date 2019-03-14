
var low = require('lowdb');
var filesync = require('lowdb/adapters/FileSync');
var adapter = new filesync('db.json');
var db = low(adapter);

var uniqueIDs = [];
var busIDs = db.get('vehicles').map('id').value();

busIDs.forEach(function(bus){
    if(uniqueIDs.includes(bus)){
        uniqueIDs; // do not add to array
    }
    else{
        uniqueIDs.push(bus); // add to array
    }
});

console.log('Number of Unique Bus ID numbers: ' + uniqueIDs.length);

// Number of Unique Bus ID numbers found: 7