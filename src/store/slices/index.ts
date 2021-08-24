import { combineReducers, Reducer } from 'redux'

import { RootState } from '../../helpers/types'

import syncReducer from './sync'
import authReducer from './auth'
<<<<<<< HEAD
import managementReducer from './management'

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  authState: authReducer,
  syncState: syncReducer,
  managementState: managementReducer,
=======
import folderReducer from './folder'

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
 authState: authReducer,
 syncState: syncReducer,
 folderState: folderReducer,
>>>>>>> 1a05ac864fd6def133a9848daf86e8d848d7a005
})

export default rootReducer
