/* 
This File is for reusable API calls such as:
    - GetAll, complexe queries ...etc

PS: Keep it clean, only API calls
*/

import { Appointment, AppointmentPayload } from '../types'

export const getToken = (): string | null => {
 const token = localStorage.getItem('token')

 return token
}

// eslint-disable-next-line
export const removeToken = () => localStorage.removeItem('token')

// eslint-disable-next-line
export const setToken = (token: string) => Promise.resolve(localStorage.setItem('token', token))

// eslint-disable-next-line
export const mixAppointments = (appInd: AppointmentPayload, appCol: AppointmentPayload) => {
 const array = [...Object.values(appInd), ...Object.values(appCol)]

 const res: Appointment[] = array.map((el) => {
  return {
   ...el,
   type: Object.values(appInd).includes(el) ? 'individual' : 'collectif'
  }
 })

 return { appointments: res }
}
