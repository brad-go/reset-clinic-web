import type { SmokingStatus, Preference } from '@/types';

interface SmokingOption {
  id: SmokingStatus;
  content: string;
}

interface PreferenceOption {
  id: Preference;
  content: string;
}

export const SMOKING_STATUS = {
  SMOKER_WITH_MOTIVATION: '금연 중이에요 / 금연할 거예요',
  SMOKER_WITHOUT_MOTIVATION: '흡연하지만 금연 생각 없어요',
  NOT_SMOKER: '비흡연자예요',
};

export const PREFERENCE = {
  MOTIVATION: '동기부여 영상',
  COGNITIVE_INTERVENTION: '생각을 바꿔주는 영상',
  DISTRACTION: '웃긴 영상',
};

export const SMOKING_OPTIONS: SmokingOption[] = [
  {
    id: 'SMOKER_WITH_MOTIVATION',
    content: '금연 중이에요 / 금연할 거예요',
  },
  {
    id: 'SMOKER_WITHOUT_MOTIVATION',
    content: '흡연하지만 금연 생각 없어요',
  },
  {
    id: 'NOT_SMOKER',
    content: '비흡연자예요',
  },
];

export const PREFERENCE_OPTIONS: PreferenceOption[] = [
  {
    id: 'MOTIVATION',
    content: '동기부여 영상',
  },
  {
    id: 'COGNITIVE_INTERVENTION',
    content: '생각을 바꿔주는 영상',
  },
  { id: 'DISTRACTION', content: '웃긴 영상' },
];

export const FIELDSETS = [
  {
    id: 'smokingStatus',
    legend: '현재 흡연 중이신지, 금연 생각은 있으신지 알려주세요!',
    options: SMOKING_OPTIONS,
    errorMessage: '흡연 여부를 선택해 주세요.',
  },
  {
    id: 'preference',
    legend: '원하시는 영상 종류를 선택해 주세요.',
    options: PREFERENCE_OPTIONS,
    errorMessage: '원하시는 영상 종류 하나를 선택해 주세요.',
  },
];
