const request = require('request');
const apikey = '49e1944bedc548f840b3d43b7e0e00c5';
var weatherForecast = (lat,lng,callback) =>{
request({
    url:`https://api.darksky.net/forecast/${apikey}/${lat},${lng}`,
    json: true
},(error,response,body) => {
    if(error){
        callback("Unable to connect to weather forecast");
    }else if(response.statusCode === 400){
        callback("Unable to fetch weather");

    }else if(!error && response.statusCode === 200){
        callback(undefined,{Temperature:body.currently.temperature});
    }else{
        callback("Unable to fetch weather");
    }
});
};

module.exports.weatherForecast = weatherForecast;