import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  stopSmokingReason: string[];
  smokingStatus: boolean;
}

const initialState: UserState = {
  username: '',
  stopSmokingReason: [],
  smokingStatus: true,
};

const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUsername: (
      state,
      action: PayloadAction<Pick<UserState, 'username'>>
    ) => {
      state.username = action.payload.username;
    },
  },
});

export default counterSlice;
