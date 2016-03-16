/**
 * Created by alcidessorto on 3/2/16.
 */
var https = require('https');
var process = require('process');

    function httpsHandler() {
        this.token = process.env.PLACEMETER_TOKEN;
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

    };
//Todo the funciton below calles makeRequest funtion with the correct options
    httpsHandler.prototype.getAllPoints = function(){

        var options = this.ops("");

        this.makeRequest(options);


};

///////////////
///Todo create a method "getSinglePoint" that will call makeRequest with the correct string
//Todo for a single point request.4762

httpsHandler.prototype.getSinglePoint = function(point){

    var options = this.ops("/" + point);

    this.makeRequest(options);


};


//Todo this function takes in the formmated string in the correct form
httpsHandler.prototype.makeRequest = function(options){

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

};


module.exports = httpsHandler;