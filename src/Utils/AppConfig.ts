class AppConfig {

    private readonly baseUrl = process.env.REACT_APP_BASE_URL;

}

export const appConfig = new AppConfig();
