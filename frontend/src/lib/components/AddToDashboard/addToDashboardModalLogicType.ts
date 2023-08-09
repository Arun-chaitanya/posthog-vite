// Generated by kea-typegen on Wed, 02 Aug 2023 17:21:43 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { AddToDashboardModalLogicProps, Fuse } from './addToDashboardModalLogic'
import type { DashboardBasicType, DashboardType, InsightModel, InsightShortId, InsightType } from '../../../types'

export interface addToDashboardModalLogicType extends Logic {
    actionCreators: {
        updateInsight: (
            insight: Partial<InsightModel>,
            callback?: (insight: Partial<InsightModel>) => void
        ) => {
            type: 'update insight (lib.components.AddToDashboard.saveToDashboardModalLogic)'
            payload: {
                insight: Partial<InsightModel>
                callback: ((insight: Partial<InsightModel>) => void) | undefined
            }
        }
        updateInsightSuccess: (
            insight: Partial<InsightModel>,
            payload?: {
                insight: Partial<InsightModel>
                callback: ((insight: Partial<InsightModel>) => void) | undefined
            }
        ) => {
            type: 'update insight success (lib.components.AddToDashboard.saveToDashboardModalLogic)'
            payload: {
                insight: Partial<InsightModel>
                payload?: {
                    insight: Partial<InsightModel>
                    callback: ((insight: Partial<InsightModel>) => void) | undefined
                }
            }
        }
        updateInsightFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'update insight failure (lib.components.AddToDashboard.saveToDashboardModalLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        reportCreatedDashboardFromModal: () => {
            type: 'report created dashboard from modal (lib.components.AddToDashboard.saveToDashboardModalLogic)'
            payload: {
                value: true
            }
        }
        reportSavedInsightToDashboard: () => {
            type: 'report saved insight to dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)'
            payload: {
                value: true
            }
        }
        reportRemovedInsightFromDashboard: () => {
            type: 'report removed insight from dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)'
            payload: {
                value: true
            }
        }
        showNewDashboardModal: () => {
            type: 'show new dashboard modal (lib.components.AddToDashboard.saveToDashboardModalLogic)'
            payload: {
                value: true
            }
        }
        addNewDashboard: () => {
            type: 'add new dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)'
            payload: {
                value: true
            }
        }
        setDashboardId: (id: number) => {
            type: 'set dashboard id (lib.components.AddToDashboard.saveToDashboardModalLogic)'
            payload: {
                id: number
            }
        }
        setSearchQuery: (query: string) => {
            type: 'set search query (lib.components.AddToDashboard.saveToDashboardModalLogic)'
            payload: {
                query: string
            }
        }
        setInsight: (insight: InsightType) => {
            type: 'set insight (lib.components.AddToDashboard.saveToDashboardModalLogic)'
            payload: {
                insight: InsightType
            }
        }
        setScrollIndex: (index: number) => {
            type: 'set scroll index (lib.components.AddToDashboard.saveToDashboardModalLogic)'
            payload: {
                index: number
            }
        }
        addToDashboard: (
            insight: Partial<InsightModel>,
            dashboardId: number
        ) => {
            type: 'add to dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)'
            payload: {
                insight: Partial<InsightModel>
                dashboardId: number
            }
        }
        removeFromDashboard: (
            insight: Partial<InsightModel>,
            dashboardId: number
        ) => {
            type: 'remove from dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)'
            payload: {
                insight: Partial<InsightModel>
                dashboardId: number
            }
        }
    }
    actionKeys: {
        'update insight (lib.components.AddToDashboard.saveToDashboardModalLogic)': 'updateInsight'
        'update insight success (lib.components.AddToDashboard.saveToDashboardModalLogic)': 'updateInsightSuccess'
        'update insight failure (lib.components.AddToDashboard.saveToDashboardModalLogic)': 'updateInsightFailure'
        'report created dashboard from modal (lib.components.AddToDashboard.saveToDashboardModalLogic)': 'reportCreatedDashboardFromModal'
        'report saved insight to dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)': 'reportSavedInsightToDashboard'
        'report removed insight from dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)': 'reportRemovedInsightFromDashboard'
        'show new dashboard modal (lib.components.AddToDashboard.saveToDashboardModalLogic)': 'showNewDashboardModal'
        'add new dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)': 'addNewDashboard'
        'set dashboard id (lib.components.AddToDashboard.saveToDashboardModalLogic)': 'setDashboardId'
        'set search query (lib.components.AddToDashboard.saveToDashboardModalLogic)': 'setSearchQuery'
        'set insight (lib.components.AddToDashboard.saveToDashboardModalLogic)': 'setInsight'
        'set scroll index (lib.components.AddToDashboard.saveToDashboardModalLogic)': 'setScrollIndex'
        'add to dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)': 'addToDashboard'
        'remove from dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)': 'removeFromDashboard'
    }
    actionTypes: {
        updateInsight: 'update insight (lib.components.AddToDashboard.saveToDashboardModalLogic)'
        updateInsightSuccess: 'update insight success (lib.components.AddToDashboard.saveToDashboardModalLogic)'
        updateInsightFailure: 'update insight failure (lib.components.AddToDashboard.saveToDashboardModalLogic)'
        reportCreatedDashboardFromModal: 'report created dashboard from modal (lib.components.AddToDashboard.saveToDashboardModalLogic)'
        reportSavedInsightToDashboard: 'report saved insight to dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)'
        reportRemovedInsightFromDashboard: 'report removed insight from dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)'
        showNewDashboardModal: 'show new dashboard modal (lib.components.AddToDashboard.saveToDashboardModalLogic)'
        addNewDashboard: 'add new dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)'
        setDashboardId: 'set dashboard id (lib.components.AddToDashboard.saveToDashboardModalLogic)'
        setSearchQuery: 'set search query (lib.components.AddToDashboard.saveToDashboardModalLogic)'
        setInsight: 'set insight (lib.components.AddToDashboard.saveToDashboardModalLogic)'
        setScrollIndex: 'set scroll index (lib.components.AddToDashboard.saveToDashboardModalLogic)'
        addToDashboard: 'add to dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)'
        removeFromDashboard: 'remove from dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)'
    }
    actions: {
        updateInsight: (insight: Partial<InsightModel>, callback?: (insight: Partial<InsightModel>) => void) => void
        updateInsightSuccess: (
            insight: Partial<InsightModel>,
            payload?: {
                insight: Partial<InsightModel>
                callback: ((insight: Partial<InsightModel>) => void) | undefined
            }
        ) => void
        updateInsightFailure: (error: string, errorObject?: any) => void
        reportCreatedDashboardFromModal: () => void
        reportSavedInsightToDashboard: () => void
        reportRemovedInsightFromDashboard: () => void
        showNewDashboardModal: () => void
        addNewDashboard: () => void
        setDashboardId: (id: number) => void
        setSearchQuery: (query: string) => void
        setInsight: (insight: InsightType) => void
        setScrollIndex: (index: number) => void
        addToDashboard: (insight: Partial<InsightModel>, dashboardId: number) => void
        removeFromDashboard: (insight: Partial<InsightModel>, dashboardId: number) => void
    }
    asyncActions: {
        updateInsight: (
            insight: Partial<InsightModel>,
            callback?: (insight: Partial<InsightModel>) => void
        ) => Promise<any>
        updateInsightSuccess: (
            insight: Partial<InsightModel>,
            payload?: {
                insight: Partial<InsightModel>
                callback: ((insight: Partial<InsightModel>) => void) | undefined
            }
        ) => Promise<any>
        updateInsightFailure: (error: string, errorObject?: any) => Promise<any>
        reportCreatedDashboardFromModal: () => Promise<any>
        reportSavedInsightToDashboard: () => Promise<any>
        reportRemovedInsightFromDashboard: () => Promise<any>
        showNewDashboardModal: () => Promise<any>
        addNewDashboard: () => Promise<any>
        setDashboardId: (id: number) => Promise<any>
        setSearchQuery: (query: string) => Promise<any>
        setInsight: (insight: InsightType) => Promise<any>
        setScrollIndex: (index: number) => Promise<any>
        addToDashboard: (insight: Partial<InsightModel>, dashboardId: number) => Promise<any>
        removeFromDashboard: (insight: Partial<InsightModel>, dashboardId: number) => Promise<any>
    }
    defaults: {
        _dashboardId: null | number
        searchQuery: string
        scrollIndex: number
        dashboardWithActiveAPICall: number | null
    }
    events: {}
    key: InsightShortId
    listeners: {
        setDashboardId: ((
            action: {
                type: 'set dashboard id (lib.components.AddToDashboard.saveToDashboardModalLogic)'
                payload: {
                    id: number
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        addNewDashboard: ((
            action: {
                type: 'add new dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        'add dashboard success (models.dashboardsModel)': ((
            action: {
                type: 'add dashboard success (models.dashboardsModel)'
                payload: {
                    dashboard: DashboardType
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        addToDashboard: ((
            action: {
                type: 'add to dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)'
                payload: {
                    insight: Partial<InsightModel>
                    dashboardId: number
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        removeFromDashboard: ((
            action: {
                type: 'remove from dashboard (lib.components.AddToDashboard.saveToDashboardModalLogic)'
                payload: {
                    insight: Partial<InsightModel>
                    dashboardId: number
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['lib', 'components', 'AddToDashboard', 'saveToDashboardModalLogic']
    pathString: 'lib.components.AddToDashboard.saveToDashboardModalLogic'
    props: AddToDashboardModalLogicProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        _dashboardId: null | number
        searchQuery: string
        scrollIndex: number
        dashboardWithActiveAPICall: number | null
    }
    reducers: {
        _dashboardId: (state: null | number, action: any, fullState: any) => null | number
        searchQuery: (state: string, action: any, fullState: any) => string
        scrollIndex: (state: number, action: any, fullState: any) => number
        dashboardWithActiveAPICall: (state: number | null, action: any, fullState: any) => number | null
    }
    selector: (state: any) => {
        _dashboardId: null | number
        searchQuery: string
        scrollIndex: number
        dashboardWithActiveAPICall: number | null
    }
    selectors: {
        _dashboardId: (state: any, props?: any) => null | number
        searchQuery: (state: any, props?: any) => string
        scrollIndex: (state: any, props?: any) => number
        dashboardWithActiveAPICall: (state: any, props?: any) => number | null
        dashboardId: (state: any, props?: any) => any
        dashboardsFuse: (state: any, props?: any) => Fuse
        filteredDashboards: (state: any, props?: any) => DashboardBasicType[]
        currentDashboards: (state: any, props?: any) => DashboardBasicType[]
        availableDashboards: (state: any, props?: any) => DashboardBasicType[]
        orderedDashboards: (state: any, props?: any) => DashboardBasicType[]
    }
    sharedListeners: {}
    values: {
        _dashboardId: null | number
        searchQuery: string
        scrollIndex: number
        dashboardWithActiveAPICall: number | null
        dashboardId: any
        dashboardsFuse: Fuse
        filteredDashboards: DashboardBasicType[]
        currentDashboards: DashboardBasicType[]
        availableDashboards: DashboardBasicType[]
        orderedDashboards: DashboardBasicType[]
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        dashboardId: (
            _dashboardId: number | null,
            lastDashboardId: number | null,
            nameSortedDashboards: (DashboardType | DashboardBasicType)[],
            arg: any
        ) => any
        dashboardsFuse: (nameSortedDashboards: (DashboardType | DashboardBasicType)[]) => Fuse
        filteredDashboards: (
            searchQuery: string,
            dashboardsFuse: Fuse,
            nameSortedDashboards: (DashboardType | DashboardBasicType)[]
        ) => DashboardBasicType[]
        currentDashboards: (filteredDashboards: DashboardBasicType[], arg: any) => DashboardBasicType[]
        availableDashboards: (
            filteredDashboards: DashboardBasicType[],
            currentDashboards: DashboardBasicType[]
        ) => DashboardBasicType[]
        orderedDashboards: (
            currentDashboards: DashboardBasicType[],
            availableDashboards: DashboardBasicType[]
        ) => DashboardBasicType[]
    }
    __keaTypeGenInternalReducerActions: {
        'add dashboard success (models.dashboardsModel)': (dashboard: DashboardType) => {
            type: 'add dashboard success (models.dashboardsModel)'
            payload: {
                dashboard: DashboardType
            }
        }
    }
}