import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { Preference, SmokingStatus } from '@/types';

interface UserState {
  visitorId: number;
  nickname: string;
  preference: Preference | null;
  smokingStatus: SmokingStatus | null;
}

const initialState: UserState = {
  visitorId: 0,
  nickname: '',
  preference: null,
  smokingStatus: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (user, action: PayloadAction<Pick<UserState, 'visitorId'>>) => {
      user.visitorId = action.payload.visitorId;
    },
    setUser: (user, action: PayloadAction<UserState>) => {
      const { nickname, preference, smokingStatus } = action.payload;

      user.nickname = nickname;
      user.preference = preference;
      user.smokingStatus = smokingStatus;
    },
  },
});

const { actions, reducer } = userSlice;

export const { setUserId, setUser } = actions;

export default reducer;
