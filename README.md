## Раздел 1: Введение

### 1-2. Что такое React
  - Open Source UI библиотека
  - JSX
  - Использует UI компоненты
  - Использует reconciliation алгоритм
  
### 1-3. Первое react приложение
[https://codesandbox.io/](https://codesandbox.io/)

### 1-4. Среда разработки

    npm i -g create-react-app
    mkdir react-apps
    cd react-apps/
    create-react-app todo
    cd todo
    ls
    npm start
    
    
## Раздел 2: ECMAScript 2019

### 2-1. let и const

* **let**  - переменная
* **const**  - константы
* область видимости блок кода {}

Используй **const**. Если действительно нужно поменять значение, то **let** 

### 2-2. Arrow-функции

    const f = (x) => x * x;
* cохраняет лексическое значение this
* нет свойства .prototype, не могут быть вызваны с new

### 2-3. Параметры по-умолчанию

    const f = (a = 10, b = true) => {};
* устанавливается если не передается значение или передается undefined
* могут иметь любой тип

### 2-4. Rest параметр (собирает несколько независимых аргументов в []) 

    const f = (a, b, ...other) => {};
* всегда массив [] (может быть пустым)
* должен быть последний в списке
* максимум один rest-параметр в функции

### 2-5. Spread оператор (разворачивает массив, превращая его в список аргументов)

    const a = [1, 2];
    const max = Math.max(...a)
    ---

    const b = [...arr1, ...arr2] - копия []

### 2-6. Деструктуризация объектов (упрощает получение свойств из объектов)

    const person = {
      name: 'Sergey',
      last: 'Markov'
    }
    const { name, last, age = 18 } = person; - параметр по умолчанию, если сойства нет (age = 18)
    const { name: firstname, last: lastname } = person; - изменяет название переменных
    ---

    const person = {
      name: {
        first: 'Sergey',
        last: 'Markov'
      }
    }
    const {name: {first: firstname, last: lastname} = {}} - получает свойства во вложенном {}

    
### 2-7. Деструктуризация массивов (упрощает получение свойств из объектов)

    const [a, , b] = [1, 2, 3]; - можно пропускать значения
    ---

    const [a, b, c = 3] = [1, 2]; - добавляет значения по-умолчанию
    ---

    const arr = [1, 2, 3];
    const [a, ...others] = arr; - получает все остальные значения
    ---
    
    const shape = {
      type: 'segment',
      coordinates: {
        start: [10, 15],
        end: [17, 15]
      }
    };

    const {coordinates: {start: [startX, startY], end: [endX, endY]}} = shape;
    console.log(startX, startY, endX, endY);

### 2-8. Шаблонные строки (template strings)

    `Hello ${world}`
    `Hello ${getWorld()}`

### 2-9. Объекты
    const x = 1;
    const y = 2;

    const a = {
      x, 
      y,
      draw() {...}  
    }
    ---

    const res = Object.assign({}, obj1, obj2) - копирование объектов

### 2-10. Оператор Object Spread

Разворарачивает объект, превращая его в список свойств.

    const res = {
      ...obj1,
      ...obj2,
      anyconst,
      anyfunc() {...}
    } 

### 2-11. Прототипы

**new**

    function Animal(name, voice) {
      this.name = name;
      this.voice = voice;
    }

    Animal.prototype.say = function() {
      console.log(this.name, 'goes', this.voice);
    }

    const dog = new Animal('Dog', 'woof')
    dog.say();
---

**Object.create** - Устаревший способ

    const animal = {
      say: function() {
        console.log(this.name, 'goes', this.voice);
      }
    };

    function createAnimal(name, voice) {
      const result = Object.create(animal);
      result.name = name;
      result.voice = voice;
      return result;
    }

    const dog = createAnimal('Dog', 'woof')
    dog.say();
---

**Object.setPrototypeOf** - Не оптимизирован

    const animal = {
      say: function() {
        console.log(this.name, 'goes', this.voice);
      }
    };

    const dog = {
      name: 'dog',
      voice: 'woof'
    };

    Object.setPrototypeOf(dog, animal)
    dog.say();


### 2-11. Классы

    class Animal {
      constructor(name, voice) {
        this.name = name;
        this.voice = voice;
      }

      say() {
        console.log(this.name, 'goes', this.voice);
      }
    }

    class Bird extends Animal {
      constructor(name, voice, canFly) {
        super(name, voice);
        this.canFly = canFly;
      }
    }

    const duck = new Bird('duck', 'quack', true);
    console.log(duck)

## Раздел 3: Основы React

### 2-2. Пустой React проект

* create-react-app создает структуру проекта
* src/index.js - 'главный' JS файл
* public/index.html - HTML шаблон

### 2-3. React элементы

        const a = <h1>Hi</h1>;

* Создаются при помощи JSX
* Легковесные объекты - Virtual DOM
* TeactDOM.render() превращает React элементы в обычные браузерные DOM элементыи рендерит их на страницу

### 2-4. React компоненты

        const Header = () => {
            return <h1>Hi</h1>;
        };

* Функции, которые возвращают React элементы
* Должны начинаться с большой буквы
* Имя затем можно использовать в JSX как HTML тег <AnyComponent />

### 2-5. JSX

* Позволяет использовать выражение { aneConst }
* Атрибуты называются camelCase'ом (fontSize)
* class = className, for = htmlFor
* В свойство можно передаввать любое значение
* null, undefined, true, flase в теле тегов игнорируются(не вызывая ошибок)

### 2-6. Props

        const Header = (props) => {
            return <h1>Hi {props.name}</h1>;
        };