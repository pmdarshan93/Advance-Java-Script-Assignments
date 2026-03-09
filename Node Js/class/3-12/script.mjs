import chalk from 'chalk';
import dayjs from 'dayjs';

// console.log(chalk.bold.bgGreen("THIS IS NODE BUDDYYYYYYYY"));

console.log(chalk.underline.green("3 Months to go to team"));

let today=dayjs();

let abiBDY=dayjs('2008-10-12');

function format(date){
    return dayjs(date).format('{YYYY} MM-DD  HH:mm')
}

console.log(today);

console.log('\nAbi Birthday '+format(abiBDY));

console.log("\n Today : "+format(today))

let wcDay=dayjs().set('month',5).set('year',1983).set('date',25);

console.log("\nWORLD CUP DAY :"+format(wcDay));


console.log(wcDay.isBefore(abiBDY));

console.log(wcDay.isAfter(dayjs('1982-01-01')));

console.log(wcDay.isSame(dayjs('1983-06-25')))

console.log(wcDay.isSame(dayjs('1983-06-25'),'day'))

console.log(dayjs().diff(dayjs("2025-12-5"),'day'));


console.log(dayjs().add(1,"Month").format('YYYY-MM-DD HH:mm'));

console.log(dayjs().format("DD/DD"));
console.log(dayjs().format("dddd"));