import React, { ComponentProps, ChangeEventHandler } from 'react'
import { Input } from 'reactstrap'

<<<<<<< HEAD
//= =============================================================================
// Items
//= =============================================================================
=======
//  ==============================================================================
//  Items
//  ==============================================================================
>>>>>>> 1a05ac864fd6def133a9848daf86e8d848d7a005
export interface User {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 [anyProp: string]: any
}

export interface authData {
 email: string
 password: string
}

<<<<<<< HEAD
//= =============================================================================
// State
//= =============================================================================
=======
export interface Folder {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 [anyProp: string]: any
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
>>>>>>> 1a05ac864fd6def133a9848daf86e8d848d7a005

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
 isAuthenticated: boolean
 error: boolean
 msg: string
}

export interface RootState {
 authState: AuthState
 syncState: SyncState
<<<<<<< HEAD
 managementState: managementState
}

//= =============================================================================
// API
//= =============================================================================
=======
 folderState: FolderState
}

// ==============================================================================
// API
// ==============================================================================
>>>>>>> 1a05ac864fd6def133a9848daf86e8d848d7a005

export interface SyncPayload {
 categories: number[]
}
<<<<<<< HEAD
export interface ManagementPayload {
 users: User[]
}

//= =============================================================================
// Events
//= =============================================================================
=======

export interface FolderPayload {
 medicalFolder: Folder
 user: User
}

// ==============================================================================
// Events
// =============================================================================
>>>>>>> 1a05ac864fd6def133a9848daf86e8d848d7a005

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

<<<<<<< HEAD
//= =============================================================================

// export interface ManagementState {
//     loading:false,
//     error:'',
//     users:[],
// }

//= =========================================================================
export interface managementState {
 users: User[]
 loading: boolean
 error: string
}
=======
export interface InputProps {
 id?: ComponentProps<typeof Input>['id']
 type?: ComponentProps<typeof Input>['type']
 name?: ComponentProps<typeof Input>['name']
 placeholder?: ComponentProps<typeof Input>['placeholder']
 label?: ComponentProps<typeof Input>['label']
 value?: ComponentProps<typeof Input>['value']
 required?: ComponentProps<typeof Input>['required']
 defaultValue?: ComponentProps<typeof Input>['value'] | undefined
 onChange?: ChangeEventHandler<HTMLInputElement> | undefined
 onClick?: ReactClickEventHandler | undefined
 options?: OptionType[]
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
>>>>>>> 1a05ac864fd6def133a9848daf86e8d848d7a005
