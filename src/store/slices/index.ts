import { combineReducers, Reducer } from 'redux'

import { RootState } from '../../helpers/types'

import syncReducer from './sync'

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
 syncState: syncReducer,
})

export default rootReducer
