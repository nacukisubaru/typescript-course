class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}


class Car {
    readonly model: string
    readonly numberOfWheels: number = 4
    
    //поле readonly можно перезаписать только внутри конструктора
    constructor(theModel: string) {
        this.model = theModel;
    }
}

//Такая же реализация как и у класса Car только запись более короткая
//В конструкторе также создается переменная model и указывается что ее значением
// будет то что передадим в параметры конструктора
class Wheel {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

// =========================
//Модификаторы в классах
class Animal {
    protected voice: string = ''
    public color: string = 'black'

    constructor() {
        this.go()
    }

    private go() {
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)

// =======================
// Абстрактные классы
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render');
    }

    info(): string {
        return "This is info";
    }
}