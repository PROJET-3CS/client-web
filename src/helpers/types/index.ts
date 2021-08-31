/* eslint-disable max-lines */
import React, { ComponentProps, ChangeEventHandler } from 'react'
import { Input } from 'reactstrap'

//  ==============================================================================
//  Items
//  ==============================================================================
export interface User {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 [anyProp: string]: any
}

export interface authData {
 email: string
 password: string
}

export interface Folder {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 [anyProp: string]: any
}

export interface Appointment {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 [anyProp: string]: any
}

export interface eventType {
 title: string
 start: string
 end: string
 backgroundColor: string
 textColor: string
}

export interface AppointmentType {
 type?: string
 doctorId: number | string
 patientId?: number | string
 group?: number | string
 promo?: number | string
 targetEmail?: string
 description?: string
 date: string | number
 startTime: Date | string
 endTime: Date | string
}

export interface AppointmentInfo {
 medecins: User[]
 patients: User[]
 appointment: AppointmentType
}

export interface InfoGeneralType {
 firstname: string
 lastname: string
 gender: string
 adress: string
 birthDay: string
 birthPlace: string
 situation: string
 speciality: string
}

export interface InfoMedicalType {
 numFolder: string
 socSecNum: string

 // to Fix later
 tall: number

 weight: number
 blood: string
}

export interface TabacType {
 value: boolean
 nbr: number
}

export interface AntecedentType {
 fumer: TabacType
 chiquer: TabacType
 prise: TabacType
 exFumeur: TabacType
 medicaments: string[]
}

export interface medicamentType {
 name: string
 dose: number
 unit: string
}

//  ==============================================================================
//  State
//  ==============================================================================

// The code down below is only an example
export interface SyncState {
 syncing: boolean
 lastSynced: string
 error: string
 pendingSync: boolean
}

export interface FolderState {
 loading: boolean
 error: boolean
 folder: Folder | Record<string, unknown>
 patient: User
 infoGeneral: InfoGeneralType | Record<string, unknown>
 infoMedical: InfoMedicalType | Record<string, unknown>
 antecedent: AntecedentType | Record<string, unknown>
}

export interface AuthState {
 loading: boolean
 currentUser: User
 user: User
 isAuthenticated: boolean | undefined
 error: boolean
 msg: string
}

export interface managmentState {
 users: User[]
 selectedUser: User | Record<string, unknown>
 loading: boolean
 error: string
}

export interface AppointmentState {
 loading: boolean
 error: boolean
 msg: string
 appointments: Appointment | Record<string, unknown>
 appointment: Appointment | Record<string, unknown>
}

export interface RootState {
 authState: AuthState
 syncState: SyncState
 managmentState: managmentState
 folderState: FolderState
 appointmentState: AppointmentState
}

// ==============================================================================
// API
// ==============================================================================

export interface SyncPayload {
 categories: number[]
}
export interface ManagementPayload {
 users: User[]
}

export interface AppointmentPayload {
 appointments: Appointment[]
}

//= =============================================================================
// Events
//= =============================================================================

export interface FolderPayload {
 medicalFolder: Folder
 user: User
}

// ==============================================================================
// Events
// =============================================================================

export type ReactChangeEvent = React.ChangeEvent<HTMLInputElement>
export type ReactSubmitEvent = React.FormEvent<HTMLFormElement> | React.FocusEvent<HTMLInputElement>
export type ReactClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>
export type ReactClickEventHandler = React.MouseEventHandler<HTMLButtonElement>

//  ==============================================================================
//  Props
//  ==============================================================================
export interface OptionType {
 value: string
 label: string
}

export interface InputProps {
 id?: ComponentProps<typeof Input>['id']
 type?: ComponentProps<typeof Input>['type']
 name?: ComponentProps<typeof Input>['name']
 placeholder?: ComponentProps<typeof Input>['placeholder']
 label?: ComponentProps<typeof Input>['label']
 value?: ComponentProps<typeof Input>['value']
 required?: ComponentProps<typeof Input>['required']
 defaultValue?: ComponentProps<typeof Input>['value'] | undefined
 className?: ComponentProps<typeof Input>['className'] | undefined
 onChange?: ChangeEventHandler<HTMLInputElement> | undefined
 onClick?: ReactClickEventHandler | undefined
 options?: OptionType[]
 min?: ComponentProps<typeof Input>['min']
 max?: ComponentProps<typeof Input>['max']
 style?: ComponentProps<typeof Input>['style']
}

export interface ModalProps {
 modal: boolean
 toggle: () => void
}

// ==============================================================================

export interface IState {
 users: {
  name: string
  year: number
  role: string
  ngroupe?: string
  status: string
  lastconnexion?: string
  url: string
 }[]
}

// ==========================================================================