import dayjs from "dayjs";

const date1 = dayjs('2-10-1924');
const date2 = dayjs('2-10-2024');

let now = dayjs(new Date('2-30-2024'))

console.log(date1.format('YYYY-MMM-DD'))
console.log(date2.format('YYYY-MMM-DD'))

let yearDifference = date2.diff(date1, 'year', true);
let yearParteEntera = Math.floor(yearDifference);
let yearParteDecimal = yearDifference - yearParteEntera;

let totalMonths = yearParteDecimal * 12;
let totalMonthsInt = Math.floor(totalMonths);
let totalMonthsDec = totalMonths - totalMonthsInt;

let totalDays = Math.ceil(totalMonthsDec * 30);

console.log ({
    "año": yearParteEntera,
    "mes": totalMonthsInt,
    "diss": totalDays,
})