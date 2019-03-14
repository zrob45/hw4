
var low = require('lowdb');
var filesync = require('lowdb/adapters/FileSync');
var adapter = new filesync('db.json');
var db = low(adapter);

console.log('number of vehicle entries: ' + db.get('vehicles').size().value());

// number of vehicle entries counted: 1639
