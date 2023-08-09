// Generated by kea-typegen on Mon, 31 Jul 2023 13:15:20 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic, BreakPointFunction } from 'kea'

import type { SDKVersion, SDKVersionWarning } from './versionCheckerLogic'

export interface versionCheckerLogicType extends Logic {
    actionCreators: {
        setVersionWarning: (versionWarning: SDKVersionWarning | null) => {
            type: 'set version warning (components.VersionChecker.versionCheckerLogic)'
            payload: {
                versionWarning: SDKVersionWarning | null
            }
        }
        loadAvailableVersions: () => {
            type: 'load available versions (components.VersionChecker.versionCheckerLogic)'
            payload: any
        }
        loadAvailableVersionsSuccess: (
            availableVersions: SDKVersion[] | null,
            payload?: any
        ) => {
            type: 'load available versions success (components.VersionChecker.versionCheckerLogic)'
            payload: {
                availableVersions: SDKVersion[] | null
                payload?: any
            }
        }
        loadAvailableVersionsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load available versions failure (components.VersionChecker.versionCheckerLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        loadUsedVersions: () => {
            type: 'load used versions (components.VersionChecker.versionCheckerLogic)'
            payload: any
        }
        loadUsedVersionsSuccess: (
            usedVersions: { version: any; timestamp: any }[] | null,
            payload?: any
        ) => {
            type: 'load used versions success (components.VersionChecker.versionCheckerLogic)'
            payload: {
                usedVersions: { version: any; timestamp: any }[] | null
                payload?: any
            }
        }
        loadUsedVersionsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load used versions failure (components.VersionChecker.versionCheckerLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'set version warning (components.VersionChecker.versionCheckerLogic)': 'setVersionWarning'
        'load available versions (components.VersionChecker.versionCheckerLogic)': 'loadAvailableVersions'
        'load available versions success (components.VersionChecker.versionCheckerLogic)': 'loadAvailableVersionsSuccess'
        'load available versions failure (components.VersionChecker.versionCheckerLogic)': 'loadAvailableVersionsFailure'
        'load used versions (components.VersionChecker.versionCheckerLogic)': 'loadUsedVersions'
        'load used versions success (components.VersionChecker.versionCheckerLogic)': 'loadUsedVersionsSuccess'
        'load used versions failure (components.VersionChecker.versionCheckerLogic)': 'loadUsedVersionsFailure'
    }
    actionTypes: {
        setVersionWarning: 'set version warning (components.VersionChecker.versionCheckerLogic)'
        loadAvailableVersions: 'load available versions (components.VersionChecker.versionCheckerLogic)'
        loadAvailableVersionsSuccess: 'load available versions success (components.VersionChecker.versionCheckerLogic)'
        loadAvailableVersionsFailure: 'load available versions failure (components.VersionChecker.versionCheckerLogic)'
        loadUsedVersions: 'load used versions (components.VersionChecker.versionCheckerLogic)'
        loadUsedVersionsSuccess: 'load used versions success (components.VersionChecker.versionCheckerLogic)'
        loadUsedVersionsFailure: 'load used versions failure (components.VersionChecker.versionCheckerLogic)'
    }
    actions: {
        setVersionWarning: (versionWarning: SDKVersionWarning | null) => void
        loadAvailableVersions: () => void
        loadAvailableVersionsSuccess: (availableVersions: SDKVersion[] | null, payload?: any) => void
        loadAvailableVersionsFailure: (error: string, errorObject?: any) => void
        loadUsedVersions: () => void
        loadUsedVersionsSuccess: (usedVersions: { version: any; timestamp: any }[] | null, payload?: any) => void
        loadUsedVersionsFailure: (error: string, errorObject?: any) => void
    }
    asyncActions: {
        setVersionWarning: (versionWarning: SDKVersionWarning | null) => Promise<any>
        loadAvailableVersions: () => Promise<any>
        loadAvailableVersionsSuccess: (availableVersions: SDKVersion[] | null, payload?: any) => Promise<any>
        loadAvailableVersionsFailure: (error: string, errorObject?: any) => Promise<any>
        loadUsedVersions: () => Promise<any>
        loadUsedVersionsSuccess: (
            usedVersions: { version: any; timestamp: any }[] | null,
            payload?: any
        ) => Promise<any>
        loadUsedVersionsFailure: (error: string, errorObject?: any) => Promise<any>
    }
    defaults: {
        availableVersions: SDKVersion[] | null
        availableVersionsLoading: boolean
        usedVersions: SDKVersion[] | null
        usedVersionsLoading: boolean
        lastCheckTimestamp: number
        versionWarning: SDKVersionWarning | null
    }
    events: {}
    key: undefined
    listeners: {
        loadAvailableVersionsSuccess: ((
            action: {
                type: 'load available versions success (components.VersionChecker.versionCheckerLogic)'
                payload: {
                    availableVersions: SDKVersion[] | null
                    payload?: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadUsedVersionsSuccess: ((
            action: {
                type: 'load used versions success (components.VersionChecker.versionCheckerLogic)'
                payload: {
                    usedVersions: { version: any; timestamp: any }[] | null
                    payload?: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['components', 'VersionChecker', 'versionCheckerLogic']
    pathString: 'components.VersionChecker.versionCheckerLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        availableVersions: SDKVersion[] | null
        availableVersionsLoading: boolean
        usedVersions: SDKVersion[] | null
        usedVersionsLoading: boolean
        lastCheckTimestamp: number
        versionWarning: SDKVersionWarning | null
    }
    reducers: {
        availableVersions: (state: SDKVersion[] | null, action: any, fullState: any) => SDKVersion[] | null
        availableVersionsLoading: (state: boolean, action: any, fullState: any) => boolean
        usedVersions: (state: SDKVersion[] | null, action: any, fullState: any) => SDKVersion[] | null
        usedVersionsLoading: (state: boolean, action: any, fullState: any) => boolean
        lastCheckTimestamp: (state: number, action: any, fullState: any) => number
        versionWarning: (state: SDKVersionWarning | null, action: any, fullState: any) => SDKVersionWarning | null
    }
    selector: (state: any) => {
        availableVersions: SDKVersion[] | null
        availableVersionsLoading: boolean
        usedVersions: SDKVersion[] | null
        usedVersionsLoading: boolean
        lastCheckTimestamp: number
        versionWarning: SDKVersionWarning | null
    }
    selectors: {
        availableVersions: (state: any, props?: any) => SDKVersion[] | null
        availableVersionsLoading: (state: any, props?: any) => boolean
        usedVersions: (state: any, props?: any) => SDKVersion[] | null
        usedVersionsLoading: (state: any, props?: any) => boolean
        lastCheckTimestamp: (state: any, props?: any) => number
        versionWarning: (state: any, props?: any) => SDKVersionWarning | null
    }
    sharedListeners: {
        checkForVersionWarning: (
            payload: any,
            breakpoint: BreakPointFunction,
            action: {
                type: string
                payload: any
            },
            previousState: any
        ) => void | Promise<void>
    }
    values: {
        availableVersions: SDKVersion[] | null
        availableVersionsLoading: boolean
        usedVersions: SDKVersion[] | null
        usedVersionsLoading: boolean
        lastCheckTimestamp: number
        versionWarning: SDKVersionWarning | null
    }
    _isKea: true
    _isKeaWithKey: false
}
