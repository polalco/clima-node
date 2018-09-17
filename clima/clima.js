const axios = require('axios');

const apikey = '05193c4cc35cb3bad596b8feaa4628f5';

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/find?lat=${ lat }&lon=${ lng }&cnt=10&units=metric&appid=${ apikey }`);
    return resp.data.list[0].main.temp;
}

module.exports = {
    getClima
}