import type { Preference, SmokingStatus } from './user';

export interface DefaultRequest {
  visitorId: number;
  at: string;
}

export interface LandingRequest {
  visitorId: number;
  landingAt: string;
  newVisitor: 'TRUE' | 'FALSE';
}

export interface ImageVideoRequest {
  visitorId: number;
  contentsNumber: number;
  nextImageOrVideoEndAt: string;
}

export interface FormRequest {
  visitorId: number;
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
