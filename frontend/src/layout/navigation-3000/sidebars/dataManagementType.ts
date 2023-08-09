// Generated by kea-typegen on Thu, 20 Jul 2023 11:24:06 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { Scene, SceneParams } from '../../../scenes/sceneTypes'
import type { ActionType, EventDefinition, PropertyDefinition } from '../../../types'
import type { FuseSearchMatch } from './utils'
import type { SidebarCategory } from '../types'

export interface dataManagementSidebarLogicType extends Logic {
    actionCreators: {
        loadEventDefinitions: (
            startIndex: number,
            stopIndex: number
        ) => {
            type: 'load event definitions (layout.navigation-3000.sidebars.dataManagementSidebarLogic)'
            payload: {
                startIndex: number
                stopIndex: number
            }
        }
        loadPropertyDefinitions: (
            startIndex: number,
            stopIndex: number
        ) => {
            type: 'load property definitions (layout.navigation-3000.sidebars.dataManagementSidebarLogic)'
            payload: {
                startIndex: number
                stopIndex: number
            }
        }
        loadEventDefinitionsSuccess: (
            infiniteEventDefinitions: [(EventDefinition | null)[], number],
            payload?: {
                startIndex: number
                stopIndex: number
            }
        ) => {
            type: 'load event definitions success (layout.navigation-3000.sidebars.dataManagementSidebarLogic)'
            payload: {
                infiniteEventDefinitions: [(EventDefinition | null)[], number]
                payload?: {
                    startIndex: number
                    stopIndex: number
                }
            }
        }
        loadEventDefinitionsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load event definitions failure (layout.navigation-3000.sidebars.dataManagementSidebarLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        loadPropertyDefinitionsSuccess: (
            infinitePropertyDefinitions: [(PropertyDefinition | null)[], number],
            payload?: {
                startIndex: number
                stopIndex: number
            }
        ) => {
            type: 'load property definitions success (layout.navigation-3000.sidebars.dataManagementSidebarLogic)'
            payload: {
                infinitePropertyDefinitions: [(PropertyDefinition | null)[], number]
                payload?: {
                    startIndex: number
                    stopIndex: number
                }
            }
        }
        loadPropertyDefinitionsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load property definitions failure (layout.navigation-3000.sidebars.dataManagementSidebarLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'load event definitions (layout.navigation-3000.sidebars.dataManagementSidebarLogic)': 'loadEventDefinitions'
        'load property definitions (layout.navigation-3000.sidebars.dataManagementSidebarLogic)': 'loadPropertyDefinitions'
        'load event definitions success (layout.navigation-3000.sidebars.dataManagementSidebarLogic)': 'loadEventDefinitionsSuccess'
        'load event definitions failure (layout.navigation-3000.sidebars.dataManagementSidebarLogic)': 'loadEventDefinitionsFailure'
        'load property definitions success (layout.navigation-3000.sidebars.dataManagementSidebarLogic)': 'loadPropertyDefinitionsSuccess'
        'load property definitions failure (layout.navigation-3000.sidebars.dataManagementSidebarLogic)': 'loadPropertyDefinitionsFailure'
    }
    actionTypes: {
        loadEventDefinitions: 'load event definitions (layout.navigation-3000.sidebars.dataManagementSidebarLogic)'
        loadPropertyDefinitions: 'load property definitions (layout.navigation-3000.sidebars.dataManagementSidebarLogic)'
        loadEventDefinitionsSuccess: 'load event definitions success (layout.navigation-3000.sidebars.dataManagementSidebarLogic)'
        loadEventDefinitionsFailure: 'load event definitions failure (layout.navigation-3000.sidebars.dataManagementSidebarLogic)'
        loadPropertyDefinitionsSuccess: 'load property definitions success (layout.navigation-3000.sidebars.dataManagementSidebarLogic)'
        loadPropertyDefinitionsFailure: 'load property definitions failure (layout.navigation-3000.sidebars.dataManagementSidebarLogic)'
    }
    actions: {
        loadEventDefinitions: (startIndex: number, stopIndex: number) => void
        loadPropertyDefinitions: (startIndex: number, stopIndex: number) => void
        loadEventDefinitionsSuccess: (
            infiniteEventDefinitions: [(EventDefinition | null)[], number],
            payload?: {
                startIndex: number
                stopIndex: number
            }
        ) => void
        loadEventDefinitionsFailure: (error: string, errorObject?: any) => void
        loadPropertyDefinitionsSuccess: (
            infinitePropertyDefinitions: [(PropertyDefinition | null)[], number],
            payload?: {
                startIndex: number
                stopIndex: number
            }
        ) => void
        loadPropertyDefinitionsFailure: (error: string, errorObject?: any) => void
    }
    asyncActions: {
        loadEventDefinitions: (startIndex: number, stopIndex: number) => Promise<any>
        loadPropertyDefinitions: (startIndex: number, stopIndex: number) => Promise<any>
        loadEventDefinitionsSuccess: (
            infiniteEventDefinitions: [(EventDefinition | null)[], number],
            payload?: {
                startIndex: number
                stopIndex: number
            }
        ) => Promise<any>
        loadEventDefinitionsFailure: (error: string, errorObject?: any) => Promise<any>
        loadPropertyDefinitionsSuccess: (
            infinitePropertyDefinitions: [(PropertyDefinition | null)[], number],
            payload?: {
                startIndex: number
                stopIndex: number
            }
        ) => Promise<any>
        loadPropertyDefinitionsFailure: (error: string, errorObject?: any) => Promise<any>
    }
    defaults: {
        infiniteEventDefinitions: [(EventDefinition | null)[], number]
        infiniteEventDefinitionsLoading: boolean
        infinitePropertyDefinitions: [(PropertyDefinition | null)[], number]
        infinitePropertyDefinitionsLoading: boolean
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['layout', 'navigation-3000', 'sidebars', 'dataManagementSidebarLogic']
    pathString: 'layout.navigation-3000.sidebars.dataManagementSidebarLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        infiniteEventDefinitions: [(EventDefinition | null)[], number]
        infiniteEventDefinitionsLoading: boolean
        infinitePropertyDefinitions: [(PropertyDefinition | null)[], number]
        infinitePropertyDefinitionsLoading: boolean
    }
    reducers: {
        infiniteEventDefinitions: (
            state: [(EventDefinition | null)[], number],
            action: any,
            fullState: any
        ) => [(EventDefinition | null)[], number]
        infiniteEventDefinitionsLoading: (state: boolean, action: any, fullState: any) => boolean
        infinitePropertyDefinitions: (
            state: [(PropertyDefinition | null)[], number],
            action: any,
            fullState: any
        ) => [(PropertyDefinition | null)[], number]
        infinitePropertyDefinitionsLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        infiniteEventDefinitions: [(EventDefinition | null)[], number]
        infiniteEventDefinitionsLoading: boolean
        infinitePropertyDefinitions: [(PropertyDefinition | null)[], number]
        infinitePropertyDefinitionsLoading: boolean
    }
    selectors: {
        infiniteEventDefinitions: (state: any, props?: any) => [(EventDefinition | null)[], number]
        infiniteEventDefinitionsLoading: (state: any, props?: any) => boolean
        infinitePropertyDefinitions: (state: any, props?: any) => [(PropertyDefinition | null)[], number]
        infinitePropertyDefinitionsLoading: (state: any, props?: any) => boolean
        activeScene: (state: any, props?: any) => Scene | null
        sceneParams: (state: any, props?: any) => SceneParams
        searchTerm: (state: any, props?: any) => string
        actions: (state: any, props?: any) => ActionType[]
        actionsLoading: (state: any, props?: any) => boolean
        contents: (state: any, props?: any) => SidebarCategory[]
        activeListItemKey: (state: any, props?: any) => [string, string] | null
        debounceSearch: (state: any, props?: any) => true
        relevantActions: (state: any, props?: any) => [ActionType, FuseSearchMatch[] | null][]
    }
    sharedListeners: {}
    values: {
        infiniteEventDefinitions: [(EventDefinition | null)[], number]
        infiniteEventDefinitionsLoading: boolean
        infinitePropertyDefinitions: [(PropertyDefinition | null)[], number]
        infinitePropertyDefinitionsLoading: boolean
        activeScene: Scene | null
        sceneParams: SceneParams
        searchTerm: string
        actions: ActionType[]
        actionsLoading: boolean
        contents: SidebarCategory[]
        activeListItemKey: [string, string] | null
        debounceSearch: true
        relevantActions: [ActionType, FuseSearchMatch[] | null][]
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        contents: (
            infiniteEventDefinitions: [(EventDefinition | null)[], number],
            infiniteEventDefinitionsLoading: boolean,
            infinitePropertyDefinitions: [(PropertyDefinition | null)[], number],
            infinitePropertyDefinitionsLoading: boolean,
            relevantActions: [ActionType, FuseSearchMatch[] | null][],
            actionsLoading: boolean
        ) => SidebarCategory[]
        activeListItemKey: (
            activeScene: Scene | null,
            sceneParams: import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/scenes/sceneTypes').SceneParams
        ) => [string, string] | null
        debounceSearch: (searchTerm: string) => true
        relevantActions: (actions: ActionType[], searchTerm: string) => [ActionType, FuseSearchMatch[] | null][]
    }
}
