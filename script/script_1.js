 
    // 1. Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
    //    Функция должна расчитывать результат операции, исходя из переданного ей знака. 
    //    Функция должна проверять корректность введенных чисел и знака операции.
    //    Все аргументы для функции принять от пользователя.

    // a) просим пользователя ввести данные
    // б) проверяем корректность введенны чисел
    // в) если данные не корректно выводим сообщение об ошибке
    // г) если данные введены корректно проводим расчет
    // д) если результат undefined, то выводим сообщение об ошибке
    // е) иначе выводим результат расчета


    const number1 = parseInt(prompt('Введите первое число'));
    const operation = prompt('Введите знак арифметической операции');
    const number2 = parseInt(prompt('Введите второе число'));
    let result;

   function calculate(operand1, operand2, sign) {

    if (isNaN(number1) || isNaN(number2)) {
        alert('Нужно вводить числa. Начните сначала');
        return;
    

    } else {
        switch(sign) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
            }
    }

        if (result == undefined) {
                document.write('Нужно вводить арифметический знак. Начните сначала');
                return;

        } else {
            document.write(result);
        }
                 
   }

calculate(number1, number2, operation);