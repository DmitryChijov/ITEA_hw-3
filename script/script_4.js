 // 4. Напишите функцию, которая возвращает n-е число Фибоначчи. 
//  Для решения используйте рекурсию.



let userNumber = parseInt(prompt('какое элемент из ряда чисел Фибоначи вывести на экран?'));

function findNumberFibonacci(n) {

    if (isNaN(userNumber)) {
        return 'Введите корректное число';
    
    } else if (n == 1) {
        return 0;
            
    } else if (n == 2) {
        return 1;
            
    } else {
        return findNumberFibonacci(n - 1) + findNumberFibonacci(n - 2);
    }
    
}

let n = findNumberFibonacci(userNumber);
document.write(n);

