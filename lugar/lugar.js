const axios = require('axios');
const colors = require('colors');

const getLugar = async(direccion) => {

    let encoderUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encoderUrl}`)
    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }
    let location = resp.data.results[0];
    let coor = location.geometry.location;
    return {
        direccion: location.formatted_address,
        lat: coor.lat,
        lng: coor.lng
    }
}


module.exports = { getLugar }









//.then(resp => {
// console.log(resp.status);
// //console.log(JSON.stringify(resp.data, undefined, 2));
// let location = resp.data.results[0];
// let pos = location.geometry.location;
// console.log('Direccion: ', location.formatted_address);
// console.log('Lat: ', pos.lat);
// console.log('lng', pos.lng);
// })
// .catch(e => console.log("Error!!!", e));