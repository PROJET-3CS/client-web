import { combineReducers, Reducer } from 'redux'

import { RootState } from '../../helpers/types'

import syncReducer from './sync'
import authReducer from './auth'
import managementReducer from './management'
import folderReducer from './folder'

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
 authState: authReducer,
 syncState: syncReducer,
 managementState: managementReducer,
 folderState: folderReducer,
})

export default rootReducer
