var readLineSync = require('readLine-sync');

var TotalSales= readLineSync.question('please enter the projected amount of total sales ');

if (TotalSales)
{
	var Profit = TotalSales * .23;

console.log('The expected Profit is ' + Profit);

}

TotalSales += console.log('please enter a number');

