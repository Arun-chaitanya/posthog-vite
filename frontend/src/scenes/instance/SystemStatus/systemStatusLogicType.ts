// Generated by kea-typegen on Thu, 20 Jul 2023 11:14:25 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { ConfigMode, InstanceStatusTabName } from './systemStatusLogic'
import type { InstanceSetting, SystemStatus, SystemStatusQueriesResult, SystemStatusRow } from '../../../types'

export interface systemStatusLogicType extends Logic {
    actionCreators: {
        setTab: (tab: InstanceStatusTabName) => {
            type: 'set tab (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: {
                tab: InstanceStatusTabName
            }
        }
        setOpenSections: (sections: string[]) => {
            type: 'set open sections (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: {
                sections: string[]
            }
        }
        setInstanceConfigMode: (mode: ConfigMode) => {
            type: 'set instance config mode (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: {
                mode: ConfigMode
            }
        }
        updateInstanceConfigValue: (
            key: string,
            value?: string | boolean | number
        ) => {
            type: 'update instance config value (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: {
                key: string
                value: string | number | boolean | undefined
            }
        }
        clearInstanceConfigEditing: () => {
            type: 'clear instance config editing (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: {
                value: true
            }
        }
        saveInstanceConfig: () => {
            type: 'save instance config (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: {
                value: true
            }
        }
        setUpdatedInstanceConfigCount: (count: number | null) => {
            type: 'set updated instance config count (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: {
                count: number | null
            }
        }
        increaseUpdatedInstanceConfigCount: () => {
            type: 'increase updated instance config count (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: {
                value: true
            }
        }
        loadSystemStatus: () => {
            type: 'load system status (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: any
        }
        loadSystemStatusSuccess: (
            systemStatus: SystemStatus | null,
            payload?: any
        ) => {
            type: 'load system status success (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: {
                systemStatus: SystemStatus | null
                payload?: any
            }
        }
        loadSystemStatusFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load system status failure (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        loadInstanceSettings: () => {
            type: 'load instance settings (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: any
        }
        loadInstanceSettingsSuccess: (
            instanceSettings: InstanceSetting[],
            payload?: any
        ) => {
            type: 'load instance settings success (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: {
                instanceSettings: InstanceSetting[]
                payload?: any
            }
        }
        loadInstanceSettingsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load instance settings failure (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        loadQueries: () => {
            type: 'load queries (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: any
        }
        loadQueriesSuccess: (
            queries: SystemStatusQueriesResult | null,
            payload?: any
        ) => {
            type: 'load queries success (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: {
                queries: SystemStatusQueriesResult | null
                payload?: any
            }
        }
        loadQueriesFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load queries failure (scenes.instance.SystemStatus.systemStatusLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'set tab (scenes.instance.SystemStatus.systemStatusLogic)': 'setTab'
        'set open sections (scenes.instance.SystemStatus.systemStatusLogic)': 'setOpenSections'
        'set instance config mode (scenes.instance.SystemStatus.systemStatusLogic)': 'setInstanceConfigMode'
        'update instance config value (scenes.instance.SystemStatus.systemStatusLogic)': 'updateInstanceConfigValue'
        'clear instance config editing (scenes.instance.SystemStatus.systemStatusLogic)': 'clearInstanceConfigEditing'
        'save instance config (scenes.instance.SystemStatus.systemStatusLogic)': 'saveInstanceConfig'
        'set updated instance config count (scenes.instance.SystemStatus.systemStatusLogic)': 'setUpdatedInstanceConfigCount'
        'increase updated instance config count (scenes.instance.SystemStatus.systemStatusLogic)': 'increaseUpdatedInstanceConfigCount'
        'load system status (scenes.instance.SystemStatus.systemStatusLogic)': 'loadSystemStatus'
        'load system status success (scenes.instance.SystemStatus.systemStatusLogic)': 'loadSystemStatusSuccess'
        'load system status failure (scenes.instance.SystemStatus.systemStatusLogic)': 'loadSystemStatusFailure'
        'load instance settings (scenes.instance.SystemStatus.systemStatusLogic)': 'loadInstanceSettings'
        'load instance settings success (scenes.instance.SystemStatus.systemStatusLogic)': 'loadInstanceSettingsSuccess'
        'load instance settings failure (scenes.instance.SystemStatus.systemStatusLogic)': 'loadInstanceSettingsFailure'
        'load queries (scenes.instance.SystemStatus.systemStatusLogic)': 'loadQueries'
        'load queries success (scenes.instance.SystemStatus.systemStatusLogic)': 'loadQueriesSuccess'
        'load queries failure (scenes.instance.SystemStatus.systemStatusLogic)': 'loadQueriesFailure'
    }
    actionTypes: {
        setTab: 'set tab (scenes.instance.SystemStatus.systemStatusLogic)'
        setOpenSections: 'set open sections (scenes.instance.SystemStatus.systemStatusLogic)'
        setInstanceConfigMode: 'set instance config mode (scenes.instance.SystemStatus.systemStatusLogic)'
        updateInstanceConfigValue: 'update instance config value (scenes.instance.SystemStatus.systemStatusLogic)'
        clearInstanceConfigEditing: 'clear instance config editing (scenes.instance.SystemStatus.systemStatusLogic)'
        saveInstanceConfig: 'save instance config (scenes.instance.SystemStatus.systemStatusLogic)'
        setUpdatedInstanceConfigCount: 'set updated instance config count (scenes.instance.SystemStatus.systemStatusLogic)'
        increaseUpdatedInstanceConfigCount: 'increase updated instance config count (scenes.instance.SystemStatus.systemStatusLogic)'
        loadSystemStatus: 'load system status (scenes.instance.SystemStatus.systemStatusLogic)'
        loadSystemStatusSuccess: 'load system status success (scenes.instance.SystemStatus.systemStatusLogic)'
        loadSystemStatusFailure: 'load system status failure (scenes.instance.SystemStatus.systemStatusLogic)'
        loadInstanceSettings: 'load instance settings (scenes.instance.SystemStatus.systemStatusLogic)'
        loadInstanceSettingsSuccess: 'load instance settings success (scenes.instance.SystemStatus.systemStatusLogic)'
        loadInstanceSettingsFailure: 'load instance settings failure (scenes.instance.SystemStatus.systemStatusLogic)'
        loadQueries: 'load queries (scenes.instance.SystemStatus.systemStatusLogic)'
        loadQueriesSuccess: 'load queries success (scenes.instance.SystemStatus.systemStatusLogic)'
        loadQueriesFailure: 'load queries failure (scenes.instance.SystemStatus.systemStatusLogic)'
    }
    actions: {
        setTab: (tab: InstanceStatusTabName) => void
        setOpenSections: (sections: string[]) => void
        setInstanceConfigMode: (mode: ConfigMode) => void
        updateInstanceConfigValue: (key: string, value?: string | boolean | number) => void
        clearInstanceConfigEditing: () => void
        saveInstanceConfig: () => void
        setUpdatedInstanceConfigCount: (count: number | null) => void
        increaseUpdatedInstanceConfigCount: () => void
        loadSystemStatus: () => void
        loadSystemStatusSuccess: (systemStatus: SystemStatus | null, payload?: any) => void
        loadSystemStatusFailure: (error: string, errorObject?: any) => void
        loadInstanceSettings: () => void
        loadInstanceSettingsSuccess: (instanceSettings: InstanceSetting[], payload?: any) => void
        loadInstanceSettingsFailure: (error: string, errorObject?: any) => void
        loadQueries: () => void
        loadQueriesSuccess: (queries: SystemStatusQueriesResult | null, payload?: any) => void
        loadQueriesFailure: (error: string, errorObject?: any) => void
    }
    asyncActions: {
        setTab: (tab: InstanceStatusTabName) => Promise<any>
        setOpenSections: (sections: string[]) => Promise<any>
        setInstanceConfigMode: (mode: ConfigMode) => Promise<any>
        updateInstanceConfigValue: (key: string, value?: string | boolean | number) => Promise<any>
        clearInstanceConfigEditing: () => Promise<any>
        saveInstanceConfig: () => Promise<any>
        setUpdatedInstanceConfigCount: (count: number | null) => Promise<any>
        increaseUpdatedInstanceConfigCount: () => Promise<any>
        loadSystemStatus: () => Promise<any>
        loadSystemStatusSuccess: (systemStatus: SystemStatus | null, payload?: any) => Promise<any>
        loadSystemStatusFailure: (error: string, errorObject?: any) => Promise<any>
        loadInstanceSettings: () => Promise<any>
        loadInstanceSettingsSuccess: (instanceSettings: InstanceSetting[], payload?: any) => Promise<any>
        loadInstanceSettingsFailure: (error: string, errorObject?: any) => Promise<any>
        loadQueries: () => Promise<any>
        loadQueriesSuccess: (queries: SystemStatusQueriesResult | null, payload?: any) => Promise<any>
        loadQueriesFailure: (error: string, errorObject?: any) => Promise<any>
    }
    defaults: {
        systemStatus: SystemStatus | null
        systemStatusLoading: boolean
        instanceSettings: InstanceSetting[]
        instanceSettingsLoading: boolean
        queries: SystemStatusQueriesResult | null
        queriesLoading: boolean
        tab: InstanceStatusTabName
        error: null | string
        openSections: string[]
        instanceConfigMode: ConfigMode
        instanceConfigEditingState: Record<string, string | boolean | number>
        updatedInstanceConfigCount: number | null
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        setTab: ((
            action: {
                type: 'set tab (scenes.instance.SystemStatus.systemStatusLogic)'
                payload: {
                    tab: InstanceStatusTabName
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateInstanceConfigValue: ((
            action: {
                type: 'update instance config value (scenes.instance.SystemStatus.systemStatusLogic)'
                payload: {
                    key: string
                    value: string | number | boolean | undefined
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        saveInstanceConfig: ((
            action: {
                type: 'save instance config (scenes.instance.SystemStatus.systemStatusLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'instance', 'SystemStatus', 'systemStatusLogic']
    pathString: 'scenes.instance.SystemStatus.systemStatusLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        systemStatus: SystemStatus | null
        systemStatusLoading: boolean
        instanceSettings: InstanceSetting[]
        instanceSettingsLoading: boolean
        queries: SystemStatusQueriesResult | null
        queriesLoading: boolean
        tab: InstanceStatusTabName
        error: null | string
        openSections: string[]
        instanceConfigMode: ConfigMode
        instanceConfigEditingState: Record<string, string | boolean | number>
        updatedInstanceConfigCount: number | null
    }
    reducers: {
        systemStatus: (state: SystemStatus | null, action: any, fullState: any) => SystemStatus | null
        systemStatusLoading: (state: boolean, action: any, fullState: any) => boolean
        instanceSettings: (state: InstanceSetting[], action: any, fullState: any) => InstanceSetting[]
        instanceSettingsLoading: (state: boolean, action: any, fullState: any) => boolean
        queries: (
            state: SystemStatusQueriesResult | null,
            action: any,
            fullState: any
        ) => SystemStatusQueriesResult | null
        queriesLoading: (state: boolean, action: any, fullState: any) => boolean
        tab: (state: InstanceStatusTabName, action: any, fullState: any) => InstanceStatusTabName
        error: (state: null | string, action: any, fullState: any) => null | string
        openSections: (state: string[], action: any, fullState: any) => string[]
        instanceConfigMode: (state: ConfigMode, action: any, fullState: any) => ConfigMode
        instanceConfigEditingState: (
            state: Record<string, string | boolean | number>,
            action: any,
            fullState: any
        ) => Record<string, string | boolean | number>
        updatedInstanceConfigCount: (state: number | null, action: any, fullState: any) => number | null
    }
    selector: (state: any) => {
        systemStatus: SystemStatus | null
        systemStatusLoading: boolean
        instanceSettings: InstanceSetting[]
        instanceSettingsLoading: boolean
        queries: SystemStatusQueriesResult | null
        queriesLoading: boolean
        tab: InstanceStatusTabName
        error: null | string
        openSections: string[]
        instanceConfigMode: ConfigMode
        instanceConfigEditingState: Record<string, string | boolean | number>
        updatedInstanceConfigCount: number | null
    }
    selectors: {
        systemStatus: (state: any, props?: any) => SystemStatus | null
        systemStatusLoading: (state: any, props?: any) => boolean
        instanceSettings: (state: any, props?: any) => InstanceSetting[]
        instanceSettingsLoading: (state: any, props?: any) => boolean
        queries: (state: any, props?: any) => SystemStatusQueriesResult | null
        queriesLoading: (state: any, props?: any) => boolean
        tab: (state: any, props?: any) => InstanceStatusTabName
        error: (state: any, props?: any) => null | string
        openSections: (state: any, props?: any) => string[]
        instanceConfigMode: (state: any, props?: any) => ConfigMode
        instanceConfigEditingState: (state: any, props?: any) => Record<string, string | boolean | number>
        updatedInstanceConfigCount: (state: any, props?: any) => number | null
        overview: (state: any, props?: any) => SystemStatusRow[]
        editableInstanceSettings: (state: any, props?: any) => InstanceSetting[]
    }
    sharedListeners: {}
    values: {
        systemStatus: SystemStatus | null
        systemStatusLoading: boolean
        instanceSettings: InstanceSetting[]
        instanceSettingsLoading: boolean
        queries: SystemStatusQueriesResult | null
        queriesLoading: boolean
        tab: InstanceStatusTabName
        error: null | string
        openSections: string[]
        instanceConfigMode: ConfigMode
        instanceConfigEditingState: Record<string, string | boolean | number>
        updatedInstanceConfigCount: number | null
        overview: SystemStatusRow[]
        editableInstanceSettings: InstanceSetting[]
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        overview: (systemStatus: SystemStatus | null) => SystemStatusRow[]
        editableInstanceSettings: (instanceSettings: InstanceSetting[]) => InstanceSetting[]
    }
}
