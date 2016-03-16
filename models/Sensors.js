/**
 * Created by alcidessorto on 3/16/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventsSchema = new Schema({
    id:Number,
    name:String,
    type:String,
    location: {
        latitude: Number,
        longitude: Number
    },
    metrics:[{
        id:String,
        name:String
    },{
        id:String,
        name:String
    }],
    classes:[String,
            String,
            String]
});


var Sensors = mongoose.model('Sensors', eventsSchema);
module.exports = Sensors;