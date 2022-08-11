import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current_user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.current_user = action.payload
    },
    logout: (state) => {
      state.current_user = null
      window.location.assign('/')
    }
  }
})


export const { setUser, logout } = userSlice.actions
export const current_user = state => state.userReducer.current_user
export default userSlice.reducer