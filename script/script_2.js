// 2. Создать функцию, возводящую число в степень, 
// число и сама степень вводится пользователем

// первый вариант через цикл
    
const number = parseInt(prompt('Введите первое число'));
const index = parseInt(prompt('Введите степень, в которую возвести число'));
let result = 1;

function exponentiation1(base, exponent) {

    if(isNaN(number) || isNaN(index)) {        
        document.write('Нужно вводить число. Начните сначала </br>');
        return;
    }

     for (let i = 0; i < exponent; i++) {      
        result *= base;
     }
   
     document.write(`Результат решения через цикл: ${result} </br>`);

}

exponentiation1(number, index);



// второй вариант через метод Math.pow

function exponentiation2(base, exponent) {
    if(isNaN(number) || isNaN(index)) {
        document.write('Нужно вводить число. Начните сначала');
        return;
    }
    document.write(`Результат решения через метод Math.pow: ${Math.pow(base, exponent)}`);

}

exponentiation2(number, index);

