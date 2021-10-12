# Problem 1
## Calculate and EXPLAIN the complexity of algorithm below:

\* 
F(n) = { 
count = 0      
FOR i = 1 to n DO
IF n MODULO i = 0 THEN
count = count + 1
END IF
END FOR
IF count = 2 THEN
RETURN PRIME
ELSE
RETURN NOT-PRIME
END IF
} 
\*

> Answer: The Complexity is O(n) because the complexity increases as n increases linearly

# Problem 2
## Calculate and EXPLAIN the complexity of algorithm below:

\* 
F(n) = F(n/3) +1
  with F(0) is 0
\*

> Answer: The Complexity is O(log base 3 of n) because this function is calling itself and is considered recursion. Most recursion functions are complexity of log base 2(n). The reason why the base is 3 is because n is being divided by 3. When you do binary search the complexity is log base 2 becuase n is being split in half or divided by TWO. So in this case it is 3 because of n being divided by THREE.

# Problem 3
## Calculate and EXPLAIN the complexity of function that calculate the n-th  Fibonacci number.
\*
F(n) = F(n-1) + F(n-2)
\*

> Answer: The Complexity is O(1.6180339887^n). The easy part is n because thats the number you give into the algorithm. The golden ratio is hard to explain because if we look at the call stack it resembles the fibonacci sequence itself. 

