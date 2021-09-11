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
   type: Object.values(appInd).includes(el) ? 'individual' : 'collectif',
  }
 })

 return { appointments: res }
}

// eslint-disable-next-line
export const getUrlAnteced = (type: string, userId: string | number) => {
 let url = '/medical_folder/'

 if (type === 'affection' || type === 'generale') {
  url = `/medical_folder/add_general_illness/${userId}`
 } else if (type === 'intervention') {
  url = `/medical_folder/add_surgical_intervention/${userId}`
 } else if (type === 'allergies') {
  url = `/medical_folder/add_allergic_reaction/${userId}`
 }

 return url
}

// eslint-disable-next-line
export const getVPS = (number: number) => {
 let verbal = ''
 if (number === 0) verbal = 'No pain'
 if (number >= 1 && number <= 3) verbal = 'Mild'
 if (number >= 4 && number <= 6) verbal = 'Moderate'
 if (number >= 7 && number <= 9) verbal = 'Severe'
 if (number === 10) verbal = 'Very severe'

 return verbal
}
