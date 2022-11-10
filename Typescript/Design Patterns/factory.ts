class IOSButton{}
class AndroidButton{}

class ButtonFactory{
    createButton(os: string): IOSButton | AndroidButton{
        if(os === 'ios'){
            return new IOSButton;
        }
        else{
            return new AndroidButton;
        }
    }
}

const factory = new ButtonFactory();

const IOSBtn = factory.createButton('ios');
const AndroidBtn = factory.createButton('android');

console.log(IOSBtn);
console.log(AndroidBtn);