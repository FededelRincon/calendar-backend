const moment = require('moment');

const isDate = ( value ) => {   //value viene en la req, en el body/raw
    console.log(value)

    if ( !value ) {
        return false;
    }

    const fecha = moment( value );
    if ( fecha.isValid() ) {
        return true;
    } else {
        return false;
    }

}


module.exports = {
    isDate
}