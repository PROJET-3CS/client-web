import { RootState } from '../../helpers/types'

export const getSync = (state: RootState) => {
 return state.syncState
}
