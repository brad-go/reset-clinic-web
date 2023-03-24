import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { User } from '@/types';

const initialState: User = {
  visitorId: '',
  nickname: '',
  preference: null,
  smokingStatus: null,
  seen: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (user, action: PayloadAction<Pick<User, 'visitorId'>>) => {
      user.visitorId = action.payload.visitorId;
    },
    setUser: (user, action: PayloadAction<User>) => {
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
