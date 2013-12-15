var $ = require('jQuery')

var result = $.map ([[1,2], [3,6]], function(elem) {
    return elem;
})

console.log('### result: ' + result)


var payload = { id : 1, username : "xyz", points : 10}
console.log('### payload: ' + JSON.stringify(payload))

var retrieveKeys = function (value, key) {
        return key;
    },
    retrieveValues = function (value, key) {
	return value;
    },
    payloadKeys = $.map(payload, retrieveKeys),
    payloadValues = $.map(payload, retrieveValues);

 
console.log('### payloadKeys: ...')
console.log('\t' + payloadKeys);//logs ["id", "username", "points"]
console.log('### payloadValues: ...')
console.log('\t' + payloadValues);
