export class Config {

    public static serverUrl: string;

    public static _initialize() {
        if(process.env.NODE_ENV === "production") {
            Config.serverUrl = "https://anywhere-you-wanna-go.herokuapp.com";
        }
        else {
            Config.serverUrl = "http://localhost:3000";
        }
    }
}

Config._initialize();