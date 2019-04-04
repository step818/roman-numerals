Specs

--Return number as individual digits, i.e. ["1", "2", "3"]
-- Reverse order of individual digits, ["3", "2", "1"]
--For each digit position, add the number of zeros equivalent to the position (index 0, add no zeroes, index 2, add 00)
If n =0 "impossible number, this translator goes from 1-3,999"
--First number:
--Tell if first digit is 5
--Tell if first digit is 4
-- Tell if first digit is 9
--Tell if first digit is less than 4
-- Tell if first digit is greater than 5
--Tell the difference between 5 and numbers greater than 5
--If first digit is 4, show "IV"
--If first digit is 5, show "V"
--If first digit is 9, show "IX"
--For numbers less than 4, show an equivalent number of "I"
--For numbers where n-5<4, show V+(I*(n-5))
Second number:
--Tell if second number is 50
--Tell if second number is 40
-- Tell if second number is 90
--Tell if second number is less than 40
--Tell if second number is greater than 50
--Tell the difference between 50 and numbers greater than 50
--If second number is 40, show "XL"
--If second number is 50 show "L"
--If second number is 90, show "XC"
--For numbers less than 40, show an equivalent number of "X/10"
--For numbers greater than 50 where n-50<40, show L+(X*((n-50)/10))
Third number:
--Tell if third number is 500
--Tell if third number is 400
--Tell if third number is 900
--Tell if third number is less than 400
--Tell if third number is greater than 500
--If third number is 500, show "D"
--If third number is 400 show "CD"
--If third number is 900 show "CM"
--For numbers less than 400 show an equivalent number of" C/100"
--For numbers greater than 500, show D+(C*((n-500)/100))
Fourth number:
-If 4th number > 3000, return "impossible number, this translator goes from 1-3,999"
-If 4th number < 4000, return (n/1000)* M

Show
--Return 1st result
--Prepend 2nd result
--Prepend 3rd result,
--Prepend 4th result
