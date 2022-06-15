interface Rect {
    //переменная доступная только для чтения
    readonly id: string
    //не обязательный параметр с помощью ?
    color?: string
    size: {
        width: number
        height: number
    }
}

//переменные которые не были помечены знаком ?
//должны быть обязательно переданы
const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc',
}

const rect2: Rect = {
    id: '4555',
    size: {
        width: 10,
        height: 5
    }
}

//мутация объекта
rect2.color = 'black';
//нельзя мутировать поле объекта, потому что оно readonly в интерфейсе
//rect2.id = '5454';

//c функциями работает также как и с переменными
function rect(): Rect {
    return {
        id: '1234',
        size: {
            width: 20,
            height: 30
        },
        color: '#ccc',
    }
}

//c переменными внутри функций тоже работает
function useRect() {
    const rect3: Rect = {
        id: '4555',
        size: {
            width: 10,
            height: 5
        }
    }
}

//приводим сам объект не переменную к типу Rect
const rect3 = {} as Rect
//тоже самое только generic
const rect4 = <Rect>{}

// ======================

//наследование интерфейсом интерфейса(гибкость)
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 10
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}


// =======================

interface IClock {
    time: Date
    setTime(date: Date): void
}

//класс реализует интерфейс
class Clock implements IClock {
    time: Date = new Date();
    
    setTime(date: Date): void {
        this.time = date;
    }
}

//возможность типизировать объект в котором все значения всех полей строки
//чтобы не прописывать тысячу раз
interface Styles {
    //key: string говорит о том что сам key должен быть строкой
    //[key]: string говорит о том что значение ключа должно быть строкой
    [key: string]: string
}

const css: Styles = {
    border: '1px',
    marginTop: '2px',
    borderRadius: '5px'
}