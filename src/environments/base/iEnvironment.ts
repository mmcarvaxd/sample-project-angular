export interface IEnvironment {
    production: boolean
    defaultLanguage: string
    supportedLanguages: string[]
    /**
     * @return URL da API principal
     */
    serverUrl: string
}