/*
edabit hardest level

In a calendar year, it is exactly 365.25 days. But, eventually, 
this will lead to confusion because humans normally count by exact divisibility of 1 and not with decimal points. 
So, to avoid the latter, it was decided to add up all 0.25 days every four-year cycle and give that year 366 days 
(including February 29 as an intercalary day) and call it a leap year. 
The other three years in the four-year cycle would only contain 365 days and wouldn't be leap years.
In this challenge, though quite repetitive, we'll take it to a new level, 
where you are to determine if it's a leap year or not without the use of the Date() class, switch statements, 
if blocks, if-else blocks or ternary operation (x ? a : b) nor the logical operators AND (&&) and OR (||) with the exemption of the NOT (!) operator.

Return true if it's a leap year, false otherwise.
*/

/*
2000
1      1        1        1
1900
1      1        0        0
2004
1      0        0        1
2001
0      0        0        0
4     100      400      output
*/
(
    ()=>{
        function isLeapYear(year:number):boolean{
            return !!(Number(!(year % 4)) - Number(!(year % 100)) + Number(!(year % 400)));
        }
        console.log(isLeapYear(1942));
    }
)();