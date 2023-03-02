import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';

const initialState = {
  token: '',
  isAuthenticated: false,
};

const logout = createAsyncThunk('user/logout', () => {
  try {
    return auth().signOut();
  } catch (error) {
    console.log('🚀~ logout ~ error:', error);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticate: (state, {payload}) => {
      state.token = payload;
      state.isAuthenticated = true;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(logout.fulfilled, state => {
      // Add user to the state array
      state.token = '';
      state.isAuthenticated = false;
    });
  },
});

export const {authenticate} = userSlice.actions;
export const logOutFunc = logout;
export default userSlice.reducer;
