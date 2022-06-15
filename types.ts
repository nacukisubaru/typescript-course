const str: string = 'Hello';
const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello typescript';

//указываем что в переменной хранится массив чисел number[]
const numberArray:number[] = [1, 1, 2, 3, 5, 8, 13];
//тоже самое только generic
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['Hello', 'Typescript'];

//Tuple
//указываем тип значения внутри массива
const contact: [string, number] = ['Alex', 1265426];

//У переменных есть не явное типизация
//нам не обязательно прописывать тип переменной, ide все равно будет
//выдавать ошибку если в param решили перезаписать строку
let param = 42;

//Any
//тип переменной для того чтобы можно было записывать переменную
//данные любого типа
let variable: any = 42;
variable = 'New string';