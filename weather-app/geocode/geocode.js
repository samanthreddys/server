const request = require('request');
const weatherForecast = require('../weatherforecast/weatherforecast');
var geocodeAddress = (address,callback) => {
    const encodedAddress = encodeURIComponent(address);
    
    request({ url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`, json: true }, (error, response, body) => {
       
        if(error){
            callback('Unable to conect to maps service');
            
        }else if(body.status === "ZERO_RESULTS"){
            callback("Unable to find address");
           
        }else if(body.status === "OK"){
            callback(undefined,{
                address: body.results[0].formatted_address,
                temperature: weatherForecast.weatherForecast(body.results[0].geometry.location.lat,body.results[0].geometry.location.lng,(errorMessage,temperature) =>{
                    if(errorMessage){
                        console.log(errorMessage);
                    }else{
                        console.log(temperature);
                    }
                })
            });
            
        
        }
    });

};
module.exports.geocodeAddress = geocodeAddress;