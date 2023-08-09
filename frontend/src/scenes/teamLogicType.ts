// Generated by kea-typegen on Thu, 20 Jul 2023 11:18:04 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { CorrelationConfigType, TeamPublicType, TeamType } from '../types'
import type { FrequentMistakeAdvice } from './teamLogic'

export interface teamLogicType extends Logic {
    actionCreators: {
        loadUser: (resetOnFailure?: boolean) => {
            type: 'load user (scenes.teamLogic)'
            payload: {
                resetOnFailure: boolean | undefined
            }
        }
        deleteTeam: (team: TeamType) => {
            type: 'delete team (scenes.teamLogic)'
            payload: {
                team: TeamType
            }
        }
        deleteTeamSuccess: () => {
            type: 'delete team success (scenes.teamLogic)'
            payload: {
                value: true
            }
        }
        deleteTeamFailure: () => {
            type: 'delete team failure (scenes.teamLogic)'
            payload: {
                value: true
            }
        }
        loadCurrentTeam: () => {
            type: 'load current team (scenes.teamLogic)'
            payload: any
        }
        loadCurrentTeamSuccess: (
            currentTeam: TeamType | TeamPublicType | null,
            payload?: any
        ) => {
            type: 'load current team success (scenes.teamLogic)'
            payload: {
                currentTeam: TeamType | TeamPublicType | null
                payload?: any
            }
        }
        loadCurrentTeamFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load current team failure (scenes.teamLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        updateCurrentTeam: (payload: Partial<TeamType>) => {
            type: 'update current team (scenes.teamLogic)'
            payload: Partial<TeamType>
        }
        updateCurrentTeamSuccess: (
            currentTeam: TeamType,
            payload?: Partial<TeamType>
        ) => {
            type: 'update current team success (scenes.teamLogic)'
            payload: {
                currentTeam: TeamType
                payload?: Partial<TeamType>
            }
        }
        updateCurrentTeamFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'update current team failure (scenes.teamLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        createTeam: ({ name, is_demo }: { name: string; is_demo: boolean }) => {
            type: 'create team (scenes.teamLogic)'
            payload: {
                name: string
                is_demo: boolean
            }
        }
        createTeamSuccess: (
            currentTeam: TeamType,
            payload?: {
                name: string
                is_demo: boolean
            }
        ) => {
            type: 'create team success (scenes.teamLogic)'
            payload: {
                currentTeam: TeamType
                payload?: {
                    name: string
                    is_demo: boolean
                }
            }
        }
        createTeamFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'create team failure (scenes.teamLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        resetToken: () => {
            type: 'reset token (scenes.teamLogic)'
            payload: any
        }
        resetTokenSuccess: (
            currentTeam: TeamType | TeamPublicType | null,
            payload?: any
        ) => {
            type: 'reset token success (scenes.teamLogic)'
            payload: {
                currentTeam: TeamType | TeamPublicType | null
                payload?: any
            }
        }
        resetTokenFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'reset token failure (scenes.teamLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'load user (scenes.teamLogic)': 'loadUser'
        'delete team (scenes.teamLogic)': 'deleteTeam'
        'delete team success (scenes.teamLogic)': 'deleteTeamSuccess'
        'delete team failure (scenes.teamLogic)': 'deleteTeamFailure'
        'load current team (scenes.teamLogic)': 'loadCurrentTeam'
        'load current team success (scenes.teamLogic)': 'loadCurrentTeamSuccess'
        'load current team failure (scenes.teamLogic)': 'loadCurrentTeamFailure'
        'update current team (scenes.teamLogic)': 'updateCurrentTeam'
        'update current team success (scenes.teamLogic)': 'updateCurrentTeamSuccess'
        'update current team failure (scenes.teamLogic)': 'updateCurrentTeamFailure'
        'create team (scenes.teamLogic)': 'createTeam'
        'create team success (scenes.teamLogic)': 'createTeamSuccess'
        'create team failure (scenes.teamLogic)': 'createTeamFailure'
        'reset token (scenes.teamLogic)': 'resetToken'
        'reset token success (scenes.teamLogic)': 'resetTokenSuccess'
        'reset token failure (scenes.teamLogic)': 'resetTokenFailure'
    }
    actionTypes: {
        loadUser: 'load user (scenes.teamLogic)'
        deleteTeam: 'delete team (scenes.teamLogic)'
        deleteTeamSuccess: 'delete team success (scenes.teamLogic)'
        deleteTeamFailure: 'delete team failure (scenes.teamLogic)'
        loadCurrentTeam: 'load current team (scenes.teamLogic)'
        loadCurrentTeamSuccess: 'load current team success (scenes.teamLogic)'
        loadCurrentTeamFailure: 'load current team failure (scenes.teamLogic)'
        updateCurrentTeam: 'update current team (scenes.teamLogic)'
        updateCurrentTeamSuccess: 'update current team success (scenes.teamLogic)'
        updateCurrentTeamFailure: 'update current team failure (scenes.teamLogic)'
        createTeam: 'create team (scenes.teamLogic)'
        createTeamSuccess: 'create team success (scenes.teamLogic)'
        createTeamFailure: 'create team failure (scenes.teamLogic)'
        resetToken: 'reset token (scenes.teamLogic)'
        resetTokenSuccess: 'reset token success (scenes.teamLogic)'
        resetTokenFailure: 'reset token failure (scenes.teamLogic)'
    }
    actions: {
        loadUser: (resetOnFailure?: boolean) => void
        deleteTeam: (team: TeamType) => void
        deleteTeamSuccess: () => void
        deleteTeamFailure: () => void
        loadCurrentTeam: () => void
        loadCurrentTeamSuccess: (currentTeam: TeamType | TeamPublicType | null, payload?: any) => void
        loadCurrentTeamFailure: (error: string, errorObject?: any) => void
        updateCurrentTeam: (payload: Partial<TeamType>) => void
        updateCurrentTeamSuccess: (currentTeam: TeamType, payload?: Partial<TeamType>) => void
        updateCurrentTeamFailure: (error: string, errorObject?: any) => void
        createTeam: ({ name, is_demo }: { name: string; is_demo: boolean }) => void
        createTeamSuccess: (
            currentTeam: TeamType,
            payload?: {
                name: string
                is_demo: boolean
            }
        ) => void
        createTeamFailure: (error: string, errorObject?: any) => void
        resetToken: () => void
        resetTokenSuccess: (currentTeam: TeamType | TeamPublicType | null, payload?: any) => void
        resetTokenFailure: (error: string, errorObject?: any) => void
    }
    asyncActions: {
        loadUser: (resetOnFailure?: boolean) => Promise<any>
        deleteTeam: (team: TeamType) => Promise<any>
        deleteTeamSuccess: () => Promise<any>
        deleteTeamFailure: () => Promise<any>
        loadCurrentTeam: () => Promise<any>
        loadCurrentTeamSuccess: (currentTeam: TeamType | TeamPublicType | null, payload?: any) => Promise<any>
        loadCurrentTeamFailure: (error: string, errorObject?: any) => Promise<any>
        updateCurrentTeam: (payload: Partial<TeamType>) => Promise<any>
        updateCurrentTeamSuccess: (currentTeam: TeamType, payload?: Partial<TeamType>) => Promise<any>
        updateCurrentTeamFailure: (error: string, errorObject?: any) => Promise<any>
        createTeam: ({ name, is_demo }: { name: string; is_demo: boolean }) => Promise<any>
        createTeamSuccess: (
            currentTeam: TeamType,
            payload?: {
                name: string
                is_demo: boolean
            }
        ) => Promise<any>
        createTeamFailure: (error: string, errorObject?: any) => Promise<any>
        resetToken: () => Promise<any>
        resetTokenSuccess: (currentTeam: TeamType | TeamPublicType | null, payload?: any) => Promise<any>
        resetTokenFailure: (error: string, errorObject?: any) => Promise<any>
    }
    defaults: {
        teamBeingDeleted: TeamType | null
        currentTeam: TeamType | TeamPublicType | null
        currentTeamLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        deleteTeam: ((
            action: {
                type: 'delete team (scenes.teamLogic)'
                payload: {
                    team: TeamType
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        deleteTeamSuccess: ((
            action: {
                type: 'delete team success (scenes.teamLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'teamLogic']
    pathString: 'scenes.teamLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        teamBeingDeleted: TeamType | null
        currentTeam: TeamType | TeamPublicType | null
        currentTeamLoading: boolean
    }
    reducers: {
        teamBeingDeleted: (state: TeamType | null, action: any, fullState: any) => TeamType | null
        currentTeam: (
            state: TeamType | TeamPublicType | null,
            action: any,
            fullState: any
        ) => TeamType | TeamPublicType | null
        currentTeamLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        teamBeingDeleted: TeamType | null
        currentTeam: TeamType | TeamPublicType | null
        currentTeamLoading: boolean
    }
    selectors: {
        teamBeingDeleted: (state: any, props?: any) => TeamType | null
        currentTeam: (state: any, props?: any) => TeamType | TeamPublicType | null
        currentTeamLoading: (state: any, props?: any) => boolean
        currentTeamId: (state: any, props?: any) => number | null
        isCurrentTeamUnavailable: (state: any, props?: any) => boolean
        demoOnlyProject: (state: any, props?: any) => boolean
        funnelCorrelationConfig: (state: any, props?: any) => CorrelationConfigType
        timezone: (state: any, props?: any) => string
        isTeamTokenResetAvailable: (state: any, props?: any) => boolean
        testAccountFilterWarningLabels: (state: any, props?: any) => string[] | null
        testAccountFilterFrequentMistakes: (state: any, props?: any) => FrequentMistakeAdvice[]
    }
    sharedListeners: {}
    values: {
        teamBeingDeleted: TeamType | null
        currentTeam: TeamType | TeamPublicType | null
        currentTeamLoading: boolean
        currentTeamId: number | null
        isCurrentTeamUnavailable: boolean
        demoOnlyProject: boolean
        funnelCorrelationConfig: CorrelationConfigType
        timezone: string
        isTeamTokenResetAvailable: boolean
        testAccountFilterWarningLabels: string[] | null
        testAccountFilterFrequentMistakes: FrequentMistakeAdvice[]
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        currentTeamId: (currentTeam: TeamType | TeamPublicType | null) => number | null
        isCurrentTeamUnavailable: (
            currentTeam: TeamType | TeamPublicType | null,
            currentTeamLoading: boolean
        ) => boolean
        demoOnlyProject: (
            currentTeam: TeamType | TeamPublicType | null,
            currentOrganization:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').OrganizationType
                | null
        ) => boolean
        funnelCorrelationConfig: (currentTeam: TeamType | TeamPublicType | null) => CorrelationConfigType
        timezone: (currentTeam: TeamType | TeamPublicType | null) => string
        isTeamTokenResetAvailable: (currentTeam: TeamType | TeamPublicType | null) => boolean
        testAccountFilterWarningLabels: (currentTeam: TeamType | TeamPublicType | null) => string[] | null
        testAccountFilterFrequentMistakes: (currentTeam: TeamType | TeamPublicType | null) => FrequentMistakeAdvice[]
    }
}
