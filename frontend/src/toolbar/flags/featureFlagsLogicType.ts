// Generated by kea-typegen on Thu, 20 Jul 2023 11:26:49 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { CombinedFeatureFlagAndValueType, FeatureFlagType } from '../../types'

export interface featureFlagsLogicType extends Logic {
    actionCreators: {
        getUserFlags: () => {
            type: 'get user flags (toolbar.flags.featureFlagsLogic)'
            payload: {
                value: true
            }
        }
        setOverriddenUserFlag: (
            flagKey: string,
            overrideValue: string | boolean
        ) => {
            type: 'set overridden user flag (toolbar.flags.featureFlagsLogic)'
            payload: {
                flagKey: string
                overrideValue: string | boolean
            }
        }
        deleteOverriddenUserFlag: (flagKey: string) => {
            type: 'delete overridden user flag (toolbar.flags.featureFlagsLogic)'
            payload: {
                flagKey: string
            }
        }
        setSearchTerm: (searchTerm: string) => {
            type: 'set search term (toolbar.flags.featureFlagsLogic)'
            payload: {
                searchTerm: string
            }
        }
        checkLocalOverrides: () => {
            type: 'check local overrides (toolbar.flags.featureFlagsLogic)'
            payload: {
                value: true
            }
        }
        storeLocalOverrides: (localOverrides: Record<string, string | boolean>) => {
            type: 'store local overrides (toolbar.flags.featureFlagsLogic)'
            payload: {
                localOverrides: Record<string, string | boolean>
            }
        }
        getUserFlagsSuccess: (
            userFlags: CombinedFeatureFlagAndValueType[],
            payload?: {
                value: true
            }
        ) => {
            type: 'get user flags success (toolbar.flags.featureFlagsLogic)'
            payload: {
                userFlags: CombinedFeatureFlagAndValueType[]
                payload?: {
                    value: true
                }
            }
        }
        getUserFlagsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'get user flags failure (toolbar.flags.featureFlagsLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'get user flags (toolbar.flags.featureFlagsLogic)': 'getUserFlags'
        'set overridden user flag (toolbar.flags.featureFlagsLogic)': 'setOverriddenUserFlag'
        'delete overridden user flag (toolbar.flags.featureFlagsLogic)': 'deleteOverriddenUserFlag'
        'set search term (toolbar.flags.featureFlagsLogic)': 'setSearchTerm'
        'check local overrides (toolbar.flags.featureFlagsLogic)': 'checkLocalOverrides'
        'store local overrides (toolbar.flags.featureFlagsLogic)': 'storeLocalOverrides'
        'get user flags success (toolbar.flags.featureFlagsLogic)': 'getUserFlagsSuccess'
        'get user flags failure (toolbar.flags.featureFlagsLogic)': 'getUserFlagsFailure'
    }
    actionTypes: {
        getUserFlags: 'get user flags (toolbar.flags.featureFlagsLogic)'
        setOverriddenUserFlag: 'set overridden user flag (toolbar.flags.featureFlagsLogic)'
        deleteOverriddenUserFlag: 'delete overridden user flag (toolbar.flags.featureFlagsLogic)'
        setSearchTerm: 'set search term (toolbar.flags.featureFlagsLogic)'
        checkLocalOverrides: 'check local overrides (toolbar.flags.featureFlagsLogic)'
        storeLocalOverrides: 'store local overrides (toolbar.flags.featureFlagsLogic)'
        getUserFlagsSuccess: 'get user flags success (toolbar.flags.featureFlagsLogic)'
        getUserFlagsFailure: 'get user flags failure (toolbar.flags.featureFlagsLogic)'
    }
    actions: {
        getUserFlags: () => void
        setOverriddenUserFlag: (flagKey: string, overrideValue: string | boolean) => void
        deleteOverriddenUserFlag: (flagKey: string) => void
        setSearchTerm: (searchTerm: string) => void
        checkLocalOverrides: () => void
        storeLocalOverrides: (localOverrides: Record<string, string | boolean>) => void
        getUserFlagsSuccess: (
            userFlags: CombinedFeatureFlagAndValueType[],
            payload?: {
                value: true
            }
        ) => void
        getUserFlagsFailure: (error: string, errorObject?: any) => void
    }
    asyncActions: {
        getUserFlags: () => Promise<any>
        setOverriddenUserFlag: (flagKey: string, overrideValue: string | boolean) => Promise<any>
        deleteOverriddenUserFlag: (flagKey: string) => Promise<any>
        setSearchTerm: (searchTerm: string) => Promise<any>
        checkLocalOverrides: () => Promise<any>
        storeLocalOverrides: (localOverrides: Record<string, string | boolean>) => Promise<any>
        getUserFlagsSuccess: (
            userFlags: CombinedFeatureFlagAndValueType[],
            payload?: {
                value: true
            }
        ) => Promise<any>
        getUserFlagsFailure: (error: string, errorObject?: any) => Promise<any>
    }
    defaults: {
        userFlags: CombinedFeatureFlagAndValueType[]
        userFlagsLoading: boolean
        localOverrides: Record<string, string | boolean>
        searchTerm: string
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        checkLocalOverrides: ((
            action: {
                type: 'check local overrides (toolbar.flags.featureFlagsLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setOverriddenUserFlag: ((
            action: {
                type: 'set overridden user flag (toolbar.flags.featureFlagsLogic)'
                payload: {
                    flagKey: string
                    overrideValue: string | boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        deleteOverriddenUserFlag: ((
            action: {
                type: 'delete overridden user flag (toolbar.flags.featureFlagsLogic)'
                payload: {
                    flagKey: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['toolbar', 'flags', 'featureFlagsLogic']
    pathString: 'toolbar.flags.featureFlagsLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        userFlags: CombinedFeatureFlagAndValueType[]
        userFlagsLoading: boolean
        localOverrides: Record<string, string | boolean>
        searchTerm: string
    }
    reducers: {
        userFlags: (
            state: CombinedFeatureFlagAndValueType[],
            action: any,
            fullState: any
        ) => CombinedFeatureFlagAndValueType[]
        userFlagsLoading: (state: boolean, action: any, fullState: any) => boolean
        localOverrides: (
            state: Record<string, string | boolean>,
            action: any,
            fullState: any
        ) => Record<string, string | boolean>
        searchTerm: (state: string, action: any, fullState: any) => string
    }
    selector: (state: any) => {
        userFlags: CombinedFeatureFlagAndValueType[]
        userFlagsLoading: boolean
        localOverrides: Record<string, string | boolean>
        searchTerm: string
    }
    selectors: {
        userFlags: (state: any, props?: any) => CombinedFeatureFlagAndValueType[]
        userFlagsLoading: (state: any, props?: any) => boolean
        localOverrides: (state: any, props?: any) => Record<string, string | boolean>
        searchTerm: (state: any, props?: any) => string
        userFlagsWithOverrideInfo: (
            state: any,
            props?: any
        ) => {
            hasVariants: boolean
            currentValue: string | boolean
            hasOverride: boolean
            feature_flag: FeatureFlagType
            value: string | boolean
        }[]
        filteredFlags: (
            state: any,
            props?: any
        ) => {
            hasVariants: boolean
            currentValue: string | boolean
            hasOverride: boolean
            feature_flag: FeatureFlagType
            value: string | boolean
        }[]
        countFlagsOverridden: (state: any, props?: any) => number
    }
    sharedListeners: {}
    values: {
        userFlags: CombinedFeatureFlagAndValueType[]
        userFlagsLoading: boolean
        localOverrides: Record<string, string | boolean>
        searchTerm: string
        userFlagsWithOverrideInfo: {
            hasVariants: boolean
            currentValue: string | boolean
            hasOverride: boolean
            feature_flag: FeatureFlagType
            value: string | boolean
        }[]
        filteredFlags: {
            hasVariants: boolean
            currentValue: string | boolean
            hasOverride: boolean
            feature_flag: FeatureFlagType
            value: string | boolean
        }[]
        countFlagsOverridden: number
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        userFlagsWithOverrideInfo: (
            userFlags: CombinedFeatureFlagAndValueType[],
            localOverrides: Record<string, string | boolean>
        ) => {
            hasVariants: boolean
            currentValue: string | boolean
            hasOverride: boolean
            feature_flag: FeatureFlagType
            value: string | boolean
        }[]
        filteredFlags: (
            searchTerm: string,
            userFlagsWithOverrideInfo: {
                hasVariants: boolean
                currentValue: string | boolean
                hasOverride: boolean
                feature_flag: import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').FeatureFlagType
                value: string | boolean
            }[]
        ) => {
            hasVariants: boolean
            currentValue: string | boolean
            hasOverride: boolean
            feature_flag: FeatureFlagType
            value: string | boolean
        }[]
        countFlagsOverridden: (localOverrides: Record<string, string | boolean>) => number
    }
}