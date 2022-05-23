export interface AuthConfiguration {
    issuer: string
    redirectUri: string
    clientId: string
    responseType: string
    scope: string
    showDebugInformation: boolean
    tokenEndpoint: string
}