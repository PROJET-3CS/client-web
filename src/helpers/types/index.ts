import React from 'react'

//= =============================================================================
// Items
//= =============================================================================

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

//= =============================================================================
// API
//= =============================================================================

export interface SyncPayload {
 categories: number[]
}

export interface RootState {
 syncState: SyncState
}
