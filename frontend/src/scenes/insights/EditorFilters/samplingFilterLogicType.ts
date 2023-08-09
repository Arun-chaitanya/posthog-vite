// Generated by kea-typegen on Thu, 20 Jul 2023 11:14:21 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { FilterType, InsightLogicProps } from '../../../types'
import type { InsightQueryNode } from '../../../queries/schema'

export interface samplingFilterLogicType extends Logic {
    actionCreators: {
        updateQuerySource: (querySource: Omit<Partial<InsightQueryNode>, 'kind'>) => {
            type: 'update query source (scenes.insights.EditorFilters.samplingFilterLogic)'
            payload: {
                querySource: Omit<Partial<InsightQueryNode>, 'kind'>
            }
        }
        setGlobalInsightFilters: (globalInsightFilters: Partial<FilterType>) => {
            type: 'set global insight filters (scenes.insights.EditorFilters.samplingFilterLogic)'
            payload: {
                globalInsightFilters: Partial<FilterType>
            }
        }
        setSamplingPercentage: (samplingPercentage: number | null) => {
            type: 'set sampling percentage (scenes.insights.EditorFilters.samplingFilterLogic)'
            payload: {
                samplingPercentage: number | null
            }
        }
    }
    actionKeys: {
        'update query source (scenes.insights.EditorFilters.samplingFilterLogic)': 'updateQuerySource'
        'set global insight filters (scenes.insights.EditorFilters.samplingFilterLogic)': 'setGlobalInsightFilters'
        'set sampling percentage (scenes.insights.EditorFilters.samplingFilterLogic)': 'setSamplingPercentage'
    }
    actionTypes: {
        updateQuerySource: 'update query source (scenes.insights.EditorFilters.samplingFilterLogic)'
        setGlobalInsightFilters: 'set global insight filters (scenes.insights.EditorFilters.samplingFilterLogic)'
        setSamplingPercentage: 'set sampling percentage (scenes.insights.EditorFilters.samplingFilterLogic)'
    }
    actions: {
        updateQuerySource: (querySource: Omit<Partial<InsightQueryNode>, 'kind'>) => void
        setGlobalInsightFilters: (globalInsightFilters: Partial<FilterType>) => void
        setSamplingPercentage: (samplingPercentage: number | null) => void
    }
    asyncActions: {
        updateQuerySource: (querySource: Omit<Partial<InsightQueryNode>, 'kind'>) => Promise<any>
        setGlobalInsightFilters: (globalInsightFilters: Partial<FilterType>) => Promise<any>
        setSamplingPercentage: (samplingPercentage: number | null) => Promise<any>
    }
    defaults: {
        samplingPercentage: number | null
    }
    events: {}
    key: undefined
    listeners: {
        setSamplingPercentage: ((
            action: {
                type: 'set sampling percentage (scenes.insights.EditorFilters.samplingFilterLogic)'
                payload: {
                    samplingPercentage: number | null
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'insights', 'EditorFilters', 'samplingFilterLogic']
    pathString: 'scenes.insights.EditorFilters.samplingFilterLogic'
    props: InsightLogicProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        samplingPercentage: number | null
    }
    reducers: {
        samplingPercentage: (state: number | null, action: any, fullState: any) => number | null
    }
    selector: (state: any) => {
        samplingPercentage: number | null
    }
    selectors: {
        samplingPercentage: (state: any, props?: any) => number | null
        querySource: (state: any, props?: any) => InsightQueryNode | null
        suggestedSamplingPercentage: (state: any, props?: any) => number | null
    }
    sharedListeners: {}
    values: {
        samplingPercentage: number | null
        querySource: InsightQueryNode | null
        suggestedSamplingPercentage: number | null
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        suggestedSamplingPercentage: (samplingPercentage: number | null) => number | null
    }
}