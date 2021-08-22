import React from 'react'

//= =============================================================================
// Items
//= =============================================================================
export interface User {
 [anyProp: string]: any
}

export interface authData {
 email: string
 password: string
}

//= =============================================================================
// State
//= =============================================================================

// The code down below is only an example
export interface SyncState {
 syncing: boolean
 lastSynced: string
 error: string
 pendingSync: boolean
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
 managementState: managementState
}

//= =============================================================================
// API
//= =============================================================================

export interface SyncPayload {
 categories: number[]
}
export interface ManagementPayload {
 users: User[]
}

//= =============================================================================
// Events
//= =============================================================================

export type ReactChangeEvent = React.ChangeEvent<HTMLInputElement>
export type ReactSubmitEvent = React.FormEvent<HTMLFormElement> | React.FocusEvent<HTMLInputElement>

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
