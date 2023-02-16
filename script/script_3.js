 // 3.  Создать игру "Камень-Ножницы-Бумага".
    //     Выбор компьютера определяется строкой:  
    //     "var computerChoice = Math.random();
    //     alert(computerChoice);".
    //     Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.


    // а) принимает ввод пользователя и переводим в нижний регистр
    // б) запускаем метод случайного выбора числа
    // в) сначала фукция проверяет правильность ввода пользователя
    // г) присваиваем значения "камень" или "ножницы" или "бумага" случайным цифрам в трех диапазонах
    // д) сначала проверяем совпадения, когда ничья
    // е) через switch перебираем варианты проигрыша или победы

    let userChoice = prompt('Введите "Камень", "Ножницы" или "Бумага"').toLowerCase(); 
    let computerChoice = Math.random();

    function gameRockPaperScissors(user, computer) {

        if (user !== 'камень' && user !== 'ножницы' && user !== 'бумага') {
            document.write('Ошибка! Введите свой выбор корректно.')
            return;
        }

        if (computer < 0.34) {
            computer = 'камень';
        } else if (computer <= 0.68) {
            computer = 'ножницы';
        } else {
            computer = 'бумага';
        }

        if (user === computer) {
            document.write(`Ваш выбор: ${user} </br>`);
            document.write(`Выбор компьютера: ${computer} </br>`);
            document.write(`Ничья!`);

        } else if (user === 'камень') {

            switch(computer) {

                case 'ножницы':
                    document.write(`Ваш выбор: ${user} </br>`);
                    document.write(`Выбор компьютера: ${computer} </br>`);
                    document.write(`Вы выиграли!`);
                    break;

                case 'бумага':
                    document.write(`Ваш выбор: ${user} </br>`);
                    document.write(`Выбор компьютера: ${computer} </br>`);
                    document.write(`Вы проиграли!`);
                    break;
                }
        } else if (user === 'ножницы') {

            switch(computer) {

                case 'камень':
                    document.write(`Ваш выбор: ${user} </br>`);
                    document.write(`Выбор компьютера: ${computer} </br>`);
                    document.write(`Вы проиграли!`);
                    break;

                case 'бумага':
                    document.write(`Ваш выбор: ${user} </br>`);
                    document.write(`Выбор компьютера: ${computer} </br>`);
                    document.write(`Вы выиграли!`);
                    break;
                }

        } else {

            switch(computer) {

                case 'камень':
                    document.write(`Ваш выбор: ${user} </br>`);
                    document.write(`Выбор компьютера: ${computer} </br>`);
                    document.write(`Вы выиграли!`);
                    break;

                case 'ножницы':
                    document.write(`Ваш выбор: ${user} </br>`);
                    document.write(`Выбор компьютера: ${computer} </br>`);
                    document.write(`Вы проиграли!`);
                    break;
                }
        }
    }

    gameRockPaperScissors(userChoice, computerChoice);