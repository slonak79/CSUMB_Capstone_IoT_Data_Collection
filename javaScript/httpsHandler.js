/**
 * Created by alcidessorto on 3/2/16.
 */
var https = require('https');

function httpsHandler() {

        this.token = "Token R2GQJQVnd4rXW71Z70FnWxMe-8Zp8VVYfEEdtJgbj7tn";

    }

    httpsHandler.prototype.ops = function(point){

        if (typeof(point)==='undefined') point = "";

        return {
            host: 'api.placemeter.net',
            port: 443,
            path: '/api/v1/measurementpoints' +  point,
            method: 'GET',
            headers: {
                'Authorization': this.token
            }
        };



    }
//Todo the funciton below calles teh makeRequest funtion with the correct options
    httpsHandler.prototype.getAllPoints = function(){

        var options = this.ops();

}

///////////////
///Todo create a method "getSinglePoint" that will call makeRequest with the correct string
//Todo for a single point request.

////////////


//Todo this function takes in the formated string in the correct form
    httpsHandler.prototype.makeRequest = funciton(){

    var req = https.request(options, function (res) {
        console.log(res.statusCode);
        res.on('data', function (d) {
            process.stdout.write(d);

        });
    });
    req.end();

    req.on('error', function (e) {
        console.error(e);
    });
}
module.exports = httpsHandler;