import type { Preference, SmokingStatus } from './user';

export interface DefaultRequest {
  visitorId: string;
  at: string;
}

export interface LandingRequest {
  visitorId: string;
  landingAt: string;
  newVisitor: 'TRUE' | 'FALSE';
}

export interface ImageVideoRequest {
  visitorId: string;
  contentsNumber: number;
  nextImageOrVideoEndAt: string;
}

export interface FormRequest {
  visitorId: string;
  nickname: string;
  preference: Preference;
  smokingStatus: SmokingStatus;
  formSavedAt: string;
}

export type RequestData =
  | DefaultRequest
  | LandingRequest
  | ImageVideoRequest
  | FormRequest;
