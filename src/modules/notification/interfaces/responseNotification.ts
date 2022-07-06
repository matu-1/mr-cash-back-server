export interface ResponseNotification {
  multicast_id: number;
  success: number;
  failure: number;
  canonical_ids: number;
  results: Result[];
}

export interface Result {
  error: string;
}
