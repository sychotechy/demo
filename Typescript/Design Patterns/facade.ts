class PlumbingSystem{
    setPressure(pressure: number){}
    turnOn(){}
    turnOff(){}
}
class ElectricalSystem{
    setVoltage(voltage: number){}
    turnOn(){}
    turnOff(){}
}
class House{
    private plumbling = new PlumbingSystem();
    private electrical = new ElectricalSystem();

    public turnOnSystems(){
        this.plumbling.setPressure(150);
        this.plumbling.turnOn();

        this.electrical.setVoltage(130);
        this.electrical.turnOn();
    }

    public turnOffSystems(){
        this.plumbling.turnOff();
        this.electrical.turnOff();
    }
}

const client = new House();
client.turnOnSystems();
client.turnOffSystems();
console.log(client);