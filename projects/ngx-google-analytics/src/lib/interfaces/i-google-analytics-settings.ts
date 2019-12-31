import { IGoogleAnalyticsCommand } from './i-google-analytics-commant';

export interface IGoogleAnalyticsSettings {
  trackingCode: string;
  trackingCodes: any[];
  initCommands?: Array<IGoogleAnalyticsCommand>;
  uri?: string;
}
