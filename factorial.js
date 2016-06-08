/**************************

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

******************/


function factorialize(num){
    
    // Checks if function argument is less than 1
    // which ends the recursion
    if(num <= 1){
        return 1;
    }else{
    // reduce function argument (i.e num) by 1
    // multiply returned value by function argument.
    // pass result of evaluation of statement
    // as value of function argument.
        num = factorialize(num - 1) * num;
    }
    return num;
}
