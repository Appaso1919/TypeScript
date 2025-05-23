interface info{
    name:string,
    age:number,
    collage:string
}

interface TeacherType extends info{
    subject:string
}

var studentObj:info={
    name:'appaso',
    age:24,
    collage:"SUK",
}

var teacherObj:TeacherType={
    name:'sam',
    age:40,
    collage:"SUK",
    subject:"Javascript"
}

//calculatator
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

const calc: Calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y
};
