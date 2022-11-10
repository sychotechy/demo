let canvas = document.getElementById('display') as HTMLCanvasElement;
let context = canvas.getContext('2d');

interface Shape{
    draw();
}
class Circle implements Shape{
    draw(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(150, 100, 60, 0, 2 * Math.PI);
        context.stroke();
    }
}
class Rectangle implements Shape{
    draw(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.rect(80, 50, 150, 100);
        context.stroke();
    }
}
class Square implements Shape{
    draw(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.rect(105, 50, 100, 100);
        context.stroke();
    }
}
class Triangle implements Shape{
    draw(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.moveTo(100, 50);
        context.lineTo(200, 150);
        context.lineTo(100, 150);
        context.closePath();
        context.lineWidth = 1;
        context.stroke();
    }
}


function changeShape(event:any){
    switch((event.target.value).toLowerCase()){
        case 'circle':
            const circleObj:Shape = new Circle();
            circleObj.draw();
            break;

        case 'rectangle':
            const rectangleObj:Shape = new Rectangle();
            rectangleObj.draw();
            break;

        case 'square':
            const squareObj:Shape = new Square();
            squareObj.draw();
            break;
        
        case 'triangle':
            const triangleObj:Shape = new Triangle();
            triangleObj.draw();
            break;

        case 'initial':
            context.clearRect(0, 0, canvas.width, canvas.height);
            break;

        default:
            alert("Wrong choice !!!");
    }
}