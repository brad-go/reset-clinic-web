export type Preference =
  | 'MOTIVATION'
  | 'COGNITIVE_INTERVENTION'
  | 'DISTRACTION';

export type SmokingStatus =
  | 'SMOKER_WITH_MOTIVATION'
  | 'SMOKER_WITHOUT_MOTIVATION'
  | 'NOT_SMOKER';

export interface User {
  visitorId: string;
  nickname: string;
  preference: Preference | null;
  smokingStatus: SmokingStatus | null;
  seenVideos: number[];
}
