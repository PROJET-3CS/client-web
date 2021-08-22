import React from 'react'

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
 folderState: FolderState
}

// ==============================================================================
// API
// ==============================================================================

export interface SyncPayload {
 categories: number[]
}

export interface FolderPayload {
 medicalFolder: Folder
 user: User
}

// ==============================================================================
// Events
// ==============================================================================

export type ReactChangeEvent = React.ChangeEvent<HTMLInputElement>
export type ReactSubmitEvent = React.FormEvent<HTMLFormElement> | React.FocusEvent<HTMLInputElement>

//  ==============================================================================
//  Props
//  ==============================================================================
export interface OptionType {
 value: string
 label: string
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
