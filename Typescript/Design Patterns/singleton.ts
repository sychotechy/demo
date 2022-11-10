class Settings{
    static instance: Settings;
    private constructor(){

    }
    static getInstance(): Settings{
        if(!Settings.instance){
            Settings.instance = new Settings();
        }
        return Settings.instance;
    }
}

const sett = Settings.getInstance();
console.log(sett);