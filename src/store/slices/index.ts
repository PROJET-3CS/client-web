import { combineReducers, Reducer } from 'redux'

import { RootState } from '../../helpers/types'

import syncReducer from './sync'
import authReducer from './auth'
import managmentReducer from './usersManagement'
import folderReducer from './folder'
import appointmentReducer from './appointment'

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
 authState: authReducer,
 syncState: syncReducer,
 managmentState: managmentReducer,
 folderState: folderReducer,
 appointmentState: appointmentReducer,
})

export default rootReducer
