// Generated by kea-typegen on Thu, 20 Jul 2023 11:14:20 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { OrganizationType, TeamPublicType, TeamType, UserType } from '../types'

export interface appContextLogicType extends Logic {
    actionCreators: {
        loadUserSuccess: (
            user: UserType | null,
            payload?: {
                resetOnFailure: boolean | undefined
            }
        ) => {
            type: 'load user success (scenes.appContextLogic)'
            payload: {
                user: UserType | null
                payload?: {
                    resetOnFailure: boolean | undefined
                }
            }
        }
        loadCurrentOrganizationSuccess: (
            currentOrganization: OrganizationType | null,
            payload?: any
        ) => {
            type: 'load current organization success (scenes.appContextLogic)'
            payload: {
                currentOrganization: OrganizationType | null
                payload?: any
            }
        }
        loadCurrentTeam: () => {
            type: 'load current team (scenes.appContextLogic)'
            payload: any
        }
        loadCurrentTeamSuccess: (
            currentTeam: TeamType | TeamPublicType | null,
            payload?: any
        ) => {
            type: 'load current team success (scenes.appContextLogic)'
            payload: {
                currentTeam: TeamType | TeamPublicType | null
                payload?: any
            }
        }
    }
    actionKeys: {
        'load user success (scenes.appContextLogic)': 'loadUserSuccess'
        'load current organization success (scenes.appContextLogic)': 'loadCurrentOrganizationSuccess'
        'load current team (scenes.appContextLogic)': 'loadCurrentTeam'
        'load current team success (scenes.appContextLogic)': 'loadCurrentTeamSuccess'
    }
    actionTypes: {
        loadUserSuccess: 'load user success (scenes.appContextLogic)'
        loadCurrentOrganizationSuccess: 'load current organization success (scenes.appContextLogic)'
        loadCurrentTeam: 'load current team (scenes.appContextLogic)'
        loadCurrentTeamSuccess: 'load current team success (scenes.appContextLogic)'
    }
    actions: {
        loadUserSuccess: (
            user: UserType | null,
            payload?: {
                resetOnFailure: boolean | undefined
            }
        ) => void
        loadCurrentOrganizationSuccess: (currentOrganization: OrganizationType | null, payload?: any) => void
        loadCurrentTeam: () => void
        loadCurrentTeamSuccess: (currentTeam: TeamType | TeamPublicType | null, payload?: any) => void
    }
    asyncActions: {
        loadUserSuccess: (
            user: UserType | null,
            payload?: {
                resetOnFailure: boolean | undefined
            }
        ) => Promise<any>
        loadCurrentOrganizationSuccess: (currentOrganization: OrganizationType | null, payload?: any) => Promise<any>
        loadCurrentTeam: () => Promise<any>
        loadCurrentTeamSuccess: (currentTeam: TeamType | TeamPublicType | null, payload?: any) => Promise<any>
    }
    defaults: {}
    events: {}
    key: undefined
    listeners: {}
    path: ['scenes', 'appContextLogic']
    pathString: 'scenes.appContextLogic'
    props: Record<string, unknown>
    reducer: (state: any, action: any, fullState: any) => {}
    reducers: {}
    selector: (state: any) => {}
    selectors: {}
    sharedListeners: {}
    values: {}
    _isKea: true
    _isKeaWithKey: false
}
