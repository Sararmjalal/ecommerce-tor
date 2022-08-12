import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const initialState = {
  current_user: null,
  current_admin: null
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
      cookies.remove('ut', { path: '/' })
    },
    setAdmin: (state, action) => {
      state.current_admin = action.payload
    },
    adminLogout: (state) => {
      state.current_admin = null
      cookies.remove('at', { path: '/' })
    }
  }
})


export const { setUser, logout, setAdmin, adminLogout } = userSlice.actions
export const current_user = state => state.userReducer.current_user
export const current_admin = state => state.userReducer.current_admin
export default userSlice.reducer