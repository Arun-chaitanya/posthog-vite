// Generated by kea-typegen on Thu, 20 Jul 2023 10:54:59 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { InsightModel } from '../types'

export interface insightsModelType extends Logic {
    actionCreators: {
        renameInsight: (item: InsightModel) => {
            type: 'rename insight (models.insightsModel)'
            payload: {
                item: InsightModel
            }
        }
        renameInsightSuccess: (item: InsightModel) => {
            type: 'rename insight success (models.insightsModel)'
            payload: {
                item: InsightModel
            }
        }
        duplicateInsight: (
            item: InsightModel,
            dashboardId?: number
        ) => {
            type: 'duplicate insight (models.insightsModel)'
            payload: {
                item: InsightModel
                dashboardId: number | undefined
            }
        }
        duplicateInsightSuccess: (item: InsightModel) => {
            type: 'duplicate insight success (models.insightsModel)'
            payload: {
                item: InsightModel
            }
        }
        insightsAddedToDashboard: ({ dashboardId, insightIds }: { dashboardId: number; insightIds: number[] }) => {
            type: 'insights added to dashboard (models.insightsModel)'
            payload: {
                dashboardId: number
                insightIds: number[]
            }
        }
    }
    actionKeys: {
        'rename insight (models.insightsModel)': 'renameInsight'
        'rename insight success (models.insightsModel)': 'renameInsightSuccess'
        'duplicate insight (models.insightsModel)': 'duplicateInsight'
        'duplicate insight success (models.insightsModel)': 'duplicateInsightSuccess'
        'insights added to dashboard (models.insightsModel)': 'insightsAddedToDashboard'
    }
    actionTypes: {
        renameInsight: 'rename insight (models.insightsModel)'
        renameInsightSuccess: 'rename insight success (models.insightsModel)'
        duplicateInsight: 'duplicate insight (models.insightsModel)'
        duplicateInsightSuccess: 'duplicate insight success (models.insightsModel)'
        insightsAddedToDashboard: 'insights added to dashboard (models.insightsModel)'
    }
    actions: {
        renameInsight: (item: InsightModel) => void
        renameInsightSuccess: (item: InsightModel) => void
        duplicateInsight: (item: InsightModel, dashboardId?: number) => void
        duplicateInsightSuccess: (item: InsightModel) => void
        insightsAddedToDashboard: ({ dashboardId, insightIds }: { dashboardId: number; insightIds: number[] }) => void
    }
    asyncActions: {
        renameInsight: (item: InsightModel) => Promise<any>
        renameInsightSuccess: (item: InsightModel) => Promise<any>
        duplicateInsight: (item: InsightModel, dashboardId?: number) => Promise<any>
        duplicateInsightSuccess: (item: InsightModel) => Promise<any>
        insightsAddedToDashboard: ({
            dashboardId,
            insightIds,
        }: {
            dashboardId: number
            insightIds: number[]
        }) => Promise<any>
    }
    defaults: {}
    events: {}
    key: undefined
    listeners: {
        renameInsight: ((
            action: {
                type: 'rename insight (models.insightsModel)'
                payload: {
                    item: InsightModel
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        duplicateInsight: ((
            action: {
                type: 'duplicate insight (models.insightsModel)'
                payload: {
                    item: InsightModel
                    dashboardId: number | undefined
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['models', 'insightsModel']
    pathString: 'models.insightsModel'
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