export enum ApplianceStatus {
    'ON' = 'ON',
    'OFF' = 'OFF',

}

export type ApplianceAttributes = {
    location: string;
    status: ApplianceStatus | number;
}