import { RootState } from '../../helpers/types'

/* eslint-disable */
export const getSync = (state: RootState) => state.syncState
export const getAuth = (state: RootState) => state.authState
export const getManagement = (state: RootState) => state.managmentState
export const getFolder = (state: RootState) => state.folderState
<<<<<<< HEAD
export const getAppointment = (state: RootState) => state.appointmentState
=======
export const getReset = (state: RootState) => state.authState.resetPassState
export const getActive = (state: RootState) => state.authState.activeState
>>>>>>> med-zino-zino-branche
/* eslint-enable */
