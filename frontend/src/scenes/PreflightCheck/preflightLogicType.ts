// Generated by kea-typegen on Thu, 20 Jul 2023 11:18:02 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { PreflightStatus, Realm } from '../../types'
import type { EnvironmentConfigOption, PreflightCheckSummary, PreflightItem, PreflightMode } from './preflightLogic'

export interface preflightLogicType extends Logic {
    actionCreators: {
        loadPreflight: () => {
            type: 'load preflight (scenes.PreflightCheck.preflightLogic)'
            payload: any
        }
        loadPreflightSuccess: (
            preflight: PreflightStatus,
            payload?: any
        ) => {
            type: 'load preflight success (scenes.PreflightCheck.preflightLogic)'
            payload: {
                preflight: PreflightStatus
                payload?: any
            }
        }
        loadPreflightFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load preflight failure (scenes.PreflightCheck.preflightLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        registerInstrumentationProps: () => {
            type: 'register instrumentation props (scenes.PreflightCheck.preflightLogic)'
            payload: {
                value: true
            }
        }
        setPreflightMode: (
            mode: PreflightMode | null,
            noReload?: boolean
        ) => {
            type: 'set preflight mode (scenes.PreflightCheck.preflightLogic)'
            payload: {
                mode: PreflightMode | null
                noReload: boolean | undefined
            }
        }
        handlePreflightFinished: () => {
            type: 'handle preflight finished (scenes.PreflightCheck.preflightLogic)'
            payload: {
                value: true
            }
        }
        setChecksManuallyExpanded: (expanded: boolean | null) => {
            type: 'set checks manually expanded (scenes.PreflightCheck.preflightLogic)'
            payload: {
                expanded: boolean | null
            }
        }
        revalidatePreflight: () => {
            type: 'revalidate preflight (scenes.PreflightCheck.preflightLogic)'
            payload: {
                value: true
            }
        }
    }
    actionKeys: {
        'load preflight (scenes.PreflightCheck.preflightLogic)': 'loadPreflight'
        'load preflight success (scenes.PreflightCheck.preflightLogic)': 'loadPreflightSuccess'
        'load preflight failure (scenes.PreflightCheck.preflightLogic)': 'loadPreflightFailure'
        'register instrumentation props (scenes.PreflightCheck.preflightLogic)': 'registerInstrumentationProps'
        'set preflight mode (scenes.PreflightCheck.preflightLogic)': 'setPreflightMode'
        'handle preflight finished (scenes.PreflightCheck.preflightLogic)': 'handlePreflightFinished'
        'set checks manually expanded (scenes.PreflightCheck.preflightLogic)': 'setChecksManuallyExpanded'
        'revalidate preflight (scenes.PreflightCheck.preflightLogic)': 'revalidatePreflight'
    }
    actionTypes: {
        loadPreflight: 'load preflight (scenes.PreflightCheck.preflightLogic)'
        loadPreflightSuccess: 'load preflight success (scenes.PreflightCheck.preflightLogic)'
        loadPreflightFailure: 'load preflight failure (scenes.PreflightCheck.preflightLogic)'
        registerInstrumentationProps: 'register instrumentation props (scenes.PreflightCheck.preflightLogic)'
        setPreflightMode: 'set preflight mode (scenes.PreflightCheck.preflightLogic)'
        handlePreflightFinished: 'handle preflight finished (scenes.PreflightCheck.preflightLogic)'
        setChecksManuallyExpanded: 'set checks manually expanded (scenes.PreflightCheck.preflightLogic)'
        revalidatePreflight: 'revalidate preflight (scenes.PreflightCheck.preflightLogic)'
    }
    actions: {
        loadPreflight: () => void
        loadPreflightSuccess: (preflight: PreflightStatus, payload?: any) => void
        loadPreflightFailure: (error: string, errorObject?: any) => void
        registerInstrumentationProps: () => void
        setPreflightMode: (mode: PreflightMode | null, noReload?: boolean) => void
        handlePreflightFinished: () => void
        setChecksManuallyExpanded: (expanded: boolean | null) => void
        revalidatePreflight: () => void
    }
    asyncActions: {
        loadPreflight: () => Promise<any>
        loadPreflightSuccess: (preflight: PreflightStatus, payload?: any) => Promise<any>
        loadPreflightFailure: (error: string, errorObject?: any) => Promise<any>
        registerInstrumentationProps: () => Promise<any>
        setPreflightMode: (mode: PreflightMode | null, noReload?: boolean) => Promise<any>
        handlePreflightFinished: () => Promise<any>
        setChecksManuallyExpanded: (expanded: boolean | null) => Promise<any>
        revalidatePreflight: () => Promise<any>
    }
    defaults: {
        preflight: PreflightStatus | null
        preflightLoading: boolean
        preflightMode: PreflightMode | null
        areChecksManuallyExpanded: boolean | null
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        handlePreflightFinished: ((
            action: {
                type: 'handle preflight finished (scenes.PreflightCheck.preflightLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadPreflightSuccess: ((
            action: {
                type: 'load preflight success (scenes.PreflightCheck.preflightLogic)'
                payload: {
                    preflight: PreflightStatus
                    payload?: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        registerInstrumentationProps: ((
            action: {
                type: 'register instrumentation props (scenes.PreflightCheck.preflightLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setPreflightMode: ((
            action: {
                type: 'set preflight mode (scenes.PreflightCheck.preflightLogic)'
                payload: {
                    mode: PreflightMode | null
                    noReload: boolean | undefined
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        revalidatePreflight: ((
            action: {
                type: 'revalidate preflight (scenes.PreflightCheck.preflightLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'PreflightCheck', 'preflightLogic']
    pathString: 'scenes.PreflightCheck.preflightLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        preflight: PreflightStatus | null
        preflightLoading: boolean
        preflightMode: PreflightMode | null
        areChecksManuallyExpanded: boolean | null
    }
    reducers: {
        preflight: (state: PreflightStatus | null, action: any, fullState: any) => PreflightStatus | null
        preflightLoading: (state: boolean, action: any, fullState: any) => boolean
        preflightMode: (state: PreflightMode | null, action: any, fullState: any) => PreflightMode | null
        areChecksManuallyExpanded: (state: boolean | null, action: any, fullState: any) => boolean | null
    }
    selector: (state: any) => {
        preflight: PreflightStatus | null
        preflightLoading: boolean
        preflightMode: PreflightMode | null
        areChecksManuallyExpanded: boolean | null
    }
    selectors: {
        preflight: (state: any, props?: any) => PreflightStatus | null
        preflightLoading: (state: any, props?: any) => boolean
        preflightMode: (state: any, props?: any) => PreflightMode | null
        areChecksManuallyExpanded: (state: any, props?: any) => boolean | null
        checks: (state: any, props?: any) => PreflightItem[]
        checksSummary: (state: any, props?: any) => PreflightCheckSummary
        areChecksExpanded: (state: any, props?: any) => boolean
        socialAuthAvailable: (state: any, props?: any) => boolean
        objectStorageAvailable: (state: any, props?: any) => boolean
        realm: (state: any, props?: any) => Realm | null
        siteUrlMisconfigured: (state: any, props?: any) => boolean
        configOptions: (state: any, props?: any) => EnvironmentConfigOption[]
    }
    sharedListeners: {}
    values: {
        preflight: PreflightStatus | null
        preflightLoading: boolean
        preflightMode: PreflightMode | null
        areChecksManuallyExpanded: boolean | null
        checks: PreflightItem[]
        checksSummary: PreflightCheckSummary
        areChecksExpanded: boolean
        socialAuthAvailable: boolean
        objectStorageAvailable: boolean
        realm: Realm | null
        siteUrlMisconfigured: boolean
        configOptions: EnvironmentConfigOption[]
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        checks: (preflight: PreflightStatus | null, preflightMode: PreflightMode | null) => PreflightItem[]
        checksSummary: (checks: PreflightItem[]) => PreflightCheckSummary
        areChecksExpanded: (checksSummary: PreflightCheckSummary, areChecksManuallyExpanded: boolean | null) => boolean
        socialAuthAvailable: (preflight: PreflightStatus | null) => boolean
        objectStorageAvailable: (preflight: PreflightStatus | null) => boolean
        realm: (preflight: PreflightStatus | null) => Realm | null
        siteUrlMisconfigured: (preflight: PreflightStatus | null) => boolean
        configOptions: (preflight: PreflightStatus | null) => EnvironmentConfigOption[]
    }
}
