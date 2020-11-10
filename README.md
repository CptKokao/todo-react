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


### 2-12. Классы

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

### 3-2. Пустой React проект

* create-react-app создает структуру проекта
* src/index.js - 'главный' JS файл
* public/index.html - HTML шаблон

### 3-3. React элементы

        const a = <h1>Hi</h1>;

* Создаются при помощи JSX
* Легковесные объекты - Virtual DOM
* TeactDOM.render() превращает React элементы в обычные браузерные DOM элементыи рендерит их на страницу

### 3-4. React компоненты

        const Header = () => {
            return <h1>Hi</h1>;
        };

* Функции, которые возвращают React элементы
* Должны начинаться с большой буквы
* Имя затем можно использовать в JSX как HTML тег <AnyComponent />

### 3-5. JSX

* Позволяет использовать выражение { aneConst }
* Атрибуты называются camelCase'ом (fontSize)
* class = className, for = htmlFor
* В свойство можно передаввать любое значение
* null, undefined, true, flase в теле тегов игнорируются(не вызывая ошибок)

### 3-6. Props

        const Header = (props) => {
            return <h1>Hi {props.name}</h1>;
        };

### 3-7. Массивы, как свойства компонентов


        const App = () => {

          const todoData = [
              { label: 'Drink coffee', important: false },
              { label: 'Build Awesome App', important: true },
              { label: 'Have a lunch', important: false },
          ];

          return (
              <div>
                  <TodoList todos = { todoData } />
              </div>
          );
        };

### 3-8. Коллекции и ключи

* Каждому JSX элементу в массиве нужно уникальное свойство key
* React использует key чтобы эффективно сравнивать элементы при обновлении
* Не стоит делать ключи из индексов массива

### 3-9. Структура React проекта - часть 2

* Позволяет использовать выражение { aneConst }

        app
          app.js
          app.css
          index.js

## Раздел 4:Состояние компонентов и обработка событий

### 4-1. Компоненты-классы

* Классы используются, когда нужно хранить состояние
* Классы наследуют React.Component
* Метод rendor() возвращает элемент
* props доступны через this.props

### 4-2. Обработка событий

* Добавить свойство onClick (onBlur, onMouseOver,..) к элементу
* Передать функцию
* Убедиться, что this сохраняет правильное значение внутри функции

        class TodoListItem extends Component {
          constructor() {
            super();

            this.onLabelClick = () => {
              console.log(this);
              console.log(`Done: ${this.props.label}`);
            };
          }

        render() {
        
          return (
            <span
              className="todo-list-item-label"
              style={style}
              onClick={ this.onLabelClick}
              >
              {label}
            </span>

### 4-3. State - состояние React компонента

* Состояние хранится в поле state
* this.state инициализируется в конструкторе или в теле класса
* После инициализации state нельзя изменять напрямую (только читать)
* Чтобы обновить state используй setState()

          this.onLabelClick = () => {
            this.setState({
              done: true
            })
          };

### 4-5. Обновление состояние которое зависит от предыдущего

* setState принимает функцию

          this.setState((state) => {
            return {
              done: !state.done
            }
          })

          this.setState(({ done }) => {
            return {
              done: !done
            }
          })

### 4-6. Собственная система событий

* Любой компонент может генерировать собственные события (onDone, onAdded ...)
* Достаточно передать callback функцию, как propery, а затем вызвать ее из компонента, когда настпит событие
* Через события, данные поднимаются "вверх" по иерархии компонентов

### 4-7. setState() - удалить элемент

* setState() не должен изменять текущий state
* Методы которые изменяют массив (mutate) массив использовать нельзя

          newArr = [...oldArr.slice(0, idx),
                    ...oldArr.slice(idx + 1)];

> Метод slice() возвращает новый массив, содержащий копию части исходного массива.

> Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые

### 4-8. setState() - добавление элемента

* Добавить элемент в конец массива

          const newArr = [...oldArr, newItem];

* Добавить элемент в начало массива

          const newArr = [newItem, ...oldArr];

### 4-9. setState() - изменить элемент

* Копирует объект (новый объект) и меняет его свойство

          const newObj = [...oldOdj, prop: newVlaue];

* Копирует массив и изменяет объект

          const newArr = [...oldArr.slice(0, idx),
						              newItem,
					                ...oldArr.slice(idx + 1)];

### 4-10. Работа с формой

* onChabge() получает текущее значение (e.target.value)
* onSubmit() событие отправки формы
* e.preventDefault() отмена собыитий по-умолчанию