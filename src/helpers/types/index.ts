/* eslint-disable max-lines */
import React, { ComponentProps, ChangeEventHandler } from 'react'
import { Input } from 'reactstrap'

//  ==============================================================================
//  Items
//  ==============================================================================
export interface File {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 [anyProp: string]: any
}

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

export interface AppointmentItem {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [anyProp: string]: any
   }

export interface Exam {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 [anyProp: string]: any
}

export interface Medicament {
 nomCommercial: string
 type: string
 foisParJours: number | string
 qnt: number | string
 qntType: number | string
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
 address: string
 birthDay: string
 birthPlace: string
 situation: string
 speciality: string
 promo: number
 groupe: number
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

export interface AntecedentItem {
 title: string
 date: Date | string
 details: string
 type?: string | undefined
}

export interface AntecedentDetail {
 id: number
 name: string
 description: string
 date: Date | string
 createdAt: Date | string
}

export interface userInterface {
 firstname: string
 lastname: string
 email: string
}

export interface infoConditionType {
 fever: number | undefined
 pulsation: number | undefined
 pressure: number | undefined
 weight: number | undefined
 state: string
}

export interface infoInterrogationType {
 reason: string
 startedAt: Date | string
 painPlace: string
 intensity: number
 interrogationNote: string
}

export interface infoDiagnosticType {
 inspection: string
 auscultation: string
 percussion: string
 palpation: string
 diagnosticNote: string
}

export interface infoConclusionType {
 conclusion: string
 file: File | undefined
}

export interface MedicationType {
 nomCommercial: string
 type: string
 foisParJours: number | string
 qnt: number | string
 qntType: number | string
}

export interface PrescriptionType {
 date: Date | string
 medications: MedicationType[]
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
 added: boolean
 updated: boolean
 msg: string
 folder: Folder | Record<string, unknown>
 patient: User
 infoGeneral: InfoGeneralType | Record<string, unknown>
 infoMedical: InfoMedicalType | Record<string, unknown>
 antecedent: AntecedentType | Record<string, unknown>
 antecedentItem: AntecedentItem
}

export interface AuthState {
 loading: boolean
 currentUser: User
 user: User
 isAuthenticated: boolean | undefined
 error: boolean
 msg: string
 token: string
 newPassword: string
 confirmNewPassword: string
 redirect: boolean
 activated: boolean
}

export interface managmentState {
 routeQueries: Record<string, unknown>
 usersCount: number
 totalPages: number
 users: User[]
 selectedUser: User | Record<string, unknown>
 loading: boolean
 error: boolean
 notify: boolean
}

export interface AppointmentState {
 loading: boolean
 error: boolean
 msg: string
 appointments: Appointment | Record<string, unknown>
 appointment: Appointment | Record<string, unknown>
 selectedAppointment: Appointment | Record<string, unknown>
 users: User[]
}
export interface activeState {
 error: boolean
 id: string
 msg: string
}

export interface ResetPassState {
 email: string
 error: boolean
 msg: string
 password: string
}

export interface ExamState {
 loading: boolean
 error: boolean
 msg: string
 exam: Exam | Record<string, unknown>
 infoCondition: infoConditionType
 infoInterrogation: infoInterrogationType
 infoDiagnostic: infoDiagnosticType
 infoConclusion: infoConclusionType
 prescription: PrescriptionType[]
}

export interface RootState {
 authState: AuthState
 syncState: SyncState
 managmentState: managmentState
 folderState: FolderState
 appointmentState: AppointmentState
 examState: ExamState
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

export interface FolderPayload {
 medicalFolder: Folder
 user: User
}

export interface ExamPayload {
 exam: Exam
}

export interface updatePasswordPayload {
 password: string
 confirmPassword: string
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
 title?: ComponentProps<typeof Input>['title']
 description?: ComponentProps<typeof Input>['description']
 image?: ComponentProps<typeof Input>['image']
}

export interface ModalProps {
 modal: boolean
 toggle: () => void
 handler?: () => void
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
