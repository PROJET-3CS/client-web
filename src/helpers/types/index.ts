//==============================================================================
// Items
//==============================================================================
export interface User {
 [anyProp: string]: any
}
//==============================================================================
// State
//==============================================================================

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
 isAuthenticated: boolean
 error?: string
}

export interface RootState {
 authState: AuthState
 syncState: SyncState
}

//==============================================================================
// API
//==============================================================================

export interface SyncPayload {
 categories: Number[]
}

export interface RootState {
 syncState: SyncState
}
