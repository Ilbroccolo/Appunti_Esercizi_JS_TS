/*Scrivere una funzione JavaScript math che prende come primo parametro un 
operatore (stringa) e poi un numero indefinito di operandi (numeri), e applica 
l’operazione agli operandi, in sequenza. L’operatore può essere uno tra: '+', 
'-', '*', '/
                                                                            */

function math(operando, ...nums){
    let risultato = 0
    switch (operando) {
        case '+':
            for (let i = 0; i < nums.length-1; i++) {
                risultato = nums[i] + nums[i + 1]
            }
            break;
        case '-':
            for (let i = 0; i < nums.length-1; i++) {
                risultato = nums[i] - nums[i + 1]
            }
            break;
        case '*':
            for (let i = 0; i < nums.length-1; i++) {
                risultato = nums[i] * nums[i + 1]
            }
            break;
        case '/':
            for (let i = 0; i < nums.length-1; i++) {
                risultato = nums[i] / nums[i + 1]
            }

            break;

        default:
            return "che operando hai messo?!"
    }
    return risultato

    
}


console.log(math('fufu', 0,1,2,3));

