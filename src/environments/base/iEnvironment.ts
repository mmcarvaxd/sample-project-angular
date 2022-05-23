export interface IEnvironment {
    /**
     * @return If is true, application is in production mode
     */
    production: boolean
    /**
     * @return Default application language
     */
    defaultLanguage: string
    /**
     * @return Languages which is supperted by the application
     */
    supportedLanguages: string[]
    /**
     * @return Main API Url
     */
    serverUrl: string
    /**
     * @return OAuth2 Issuer Url
     */
    oAuth2Issuer: string
    /**
     * @return OAuth2 Redirect Url
     */
    oAuth2RedirectUri: string
    /**
     * @return OAuth2 Application Client Id
     */
    oAuth2ClientId: string,
    /**
     * @return OAuth2 Application Response Type
     */
    oAuth2ResponseType: string,
    /**
     * @return OAuth2 Application Scope
     */
    oAuth2Scope: string,
    /**
     * @return OAuth2 Debug Mode
     */
     oAuth2ShowDebugInformation: boolean,
     oAuth2TokenEndpoint: string
}