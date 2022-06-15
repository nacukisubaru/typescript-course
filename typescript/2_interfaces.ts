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

