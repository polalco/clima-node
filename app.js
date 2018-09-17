const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugar(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${ coors.direccion } es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));


// lugar.getLugar(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));


// clima.getClima('-34.7965806', '-58.27601199999999')
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));