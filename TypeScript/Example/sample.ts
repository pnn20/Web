interface ITodo{
    name:string;
    description: string;
    completed: boolean;
}

class Todo implements ITodo{

    constructor(public name:string,
        public description: string,
        public completed: boolean) {
    }
}