interface IShape{
    length?:number;
    breadth?:number;
    radius?:number;
    area(rad:number,opt?:number):number;
}
class Circle implements IShape{
    area(rad:number):number{
        return 3.14*rad*rad
    }
}
class Rectangle implements IShape{
    area(length:number,breadth:number):number{
        return length*breadth;
    }
}

const obj1:IShape = new Rectangle();
console.log(obj1.area(5,4));

const obj2:IShape = new Circle();
console.log(obj2.area(5));