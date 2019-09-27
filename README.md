# BINARY GAP FOR JAVASCRIPT
_Code and logic explanation of binary gap solution with dynamic max value allowed_
### Binary gap
Find the longest secuence of zeros in a binary number based on an Integer. For example: the binary of *45* is *00101101* the gap is _1_.

### Our conditions
1. Has to be an integer.
2. Has to be greater than 0 but less than the specific value.
3. If there's not gap options, return zero.

### Logic to follow
1. Find the first 1
2. Find the second (next) 1
3. Count zeros between the indexes; keep it on a global variable
4. If the second index is minor than the array size, remove the already counted values
5. Repeat steps 1 to 4 until there's not more gap posibilities.
6. Finally, return the max gap found.