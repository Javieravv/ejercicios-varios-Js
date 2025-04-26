console.clear();
console.log('Time Conversión.')

const timeConversion = (s) => {
    let typeHour = s.substr(8, 9)
    let hour = s.substr(0, 2)
    let hourMilitary = '';
    // (typeHour === 'PM') ? hourMilitary = Number(hour) + 12 : hourMilitary = hour;
    (typeHour === 'PM')
        ? (Number(hour) === 12 ? hourMilitary = 12 : hourMilitary = Number(hour) + 12)
        : (Number(hour) === 12 ? hourMilitary = '00' : hourMilitary = hour)
    return `${hourMilitary}${s.substr(2, s.length - 4)}`;
}

console.log(timeConversion('07:05:45PM'))
console.log(timeConversion('03:15:00AM'))
console.log(timeConversion('12:25:45PM'))
console.log(timeConversion('12:00:00AM'))
console.log(timeConversion('12:45:54PM'))
console.log(timeConversion('12:05:39AM'))
console.log(timeConversion('12:40:39AM'))
console.log(timeConversion('06:40:03AM'))


/*
* 12:00:00AM  -> 00:00:00

*/