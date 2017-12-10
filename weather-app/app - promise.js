
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: "Address to fetch for weather application",
        string: true
    }

}).help()
.alias('help','h')
.argv;
const encodedAddress = encodeURIComponent(argv.address);
const geocodeurl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
const apikey = '49e1944bedc548f840b3d43b7e0e00c5';


axios.get(geocodeurl).then((response) => {
    if(response.data.status === "ZERO_RESULTS"){
        throw new Error('Unable to find address')
    }
    
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    
    var weatherurl = `https://api.darksky.net/forecast/${apikey}/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherurl);
}).then((response) =>{
    var temperature = response.data.currently.temperature;
    var apparenttemperature = response.data.currently.apparentTemperature;
    console.log(`Its currently ${temperature}. It feels like ${apparenttemperature}`);

    }).catch((e) =>{
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API Services');
    }else{
        console.log(e.message);
    }

});





 

 