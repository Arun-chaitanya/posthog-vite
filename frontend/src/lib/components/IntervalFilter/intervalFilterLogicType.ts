// Generated by kea-typegen on Thu, 20 Jul 2023 11:14:20 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { InsightLogicProps, IntervalType } from '../../../types'
import type { InsightQueryNode } from '../../../queries/schema'
import type { IntervalKeyType, Intervals } from './intervals'

export interface intervalFilterLogicType extends Logic {
    actionCreators: {
        updateQuerySource: (querySource: Omit<Partial<InsightQueryNode>, 'kind'>) => {
            type: 'update query source (lib.components.IntervalFilter.intervalFilterLogic.*)'
            payload: {
                querySource: Omit<Partial<InsightQueryNode>, 'kind'>
            }
        }
        setInterval: (interval: IntervalKeyType) => {
            type: 'set interval (lib.components.IntervalFilter.intervalFilterLogic.*)'
            payload: {
                interval: IntervalKeyType
            }
        }
        setEnabledIntervals: (enabledIntervals: Intervals) => {
            type: 'set enabled intervals (lib.components.IntervalFilter.intervalFilterLogic.*)'
            payload: {
                enabledIntervals: Intervals
            }
        }
    }
    actionKeys: {
        'update query source (lib.components.IntervalFilter.intervalFilterLogic.*)': 'updateQuerySource'
        'set interval (lib.components.IntervalFilter.intervalFilterLogic.*)': 'setInterval'
        'set enabled intervals (lib.components.IntervalFilter.intervalFilterLogic.*)': 'setEnabledIntervals'
    }
    actionTypes: {
        updateQuerySource: 'update query source (lib.components.IntervalFilter.intervalFilterLogic.*)'
        setInterval: 'set interval (lib.components.IntervalFilter.intervalFilterLogic.*)'
        setEnabledIntervals: 'set enabled intervals (lib.components.IntervalFilter.intervalFilterLogic.*)'
    }
    actions: {
        updateQuerySource: (querySource: Omit<Partial<InsightQueryNode>, 'kind'>) => void
        setInterval: (interval: IntervalKeyType) => void
        setEnabledIntervals: (enabledIntervals: Intervals) => void
    }
    asyncActions: {
        updateQuerySource: (querySource: Omit<Partial<InsightQueryNode>, 'kind'>) => Promise<any>
        setInterval: (interval: IntervalKeyType) => Promise<any>
        setEnabledIntervals: (enabledIntervals: Intervals) => Promise<any>
    }
    defaults: {
        enabledIntervals: Intervals
    }
    events: {}
    key: string
    listeners: {
        setInterval: ((
            action: {
                type: 'set interval (lib.components.IntervalFilter.intervalFilterLogic.*)'
                payload: {
                    interval: IntervalKeyType
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateQuerySource: ((
            action: {
                type: 'update query source (lib.components.IntervalFilter.intervalFilterLogic.*)'
                payload: {
                    querySource: Omit<Partial<InsightQueryNode>, 'kind'>
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['lib', 'components', 'IntervalFilter', 'intervalFilterLogic', '*']
    pathString: 'lib.components.IntervalFilter.intervalFilterLogic.*'
    props: InsightLogicProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        enabledIntervals: Intervals
    }
    reducers: {
        enabledIntervals: (state: Intervals, action: any, fullState: any) => Intervals
    }
    selector: (state: any) => {
        enabledIntervals: Intervals
    }
    selectors: {
        enabledIntervals: (state: any, props?: any) => Intervals
        querySource: (state: any, props?: any) => InsightQueryNode | null
        interval: (state: any, props?: any) => IntervalType | null | undefined
    }
    sharedListeners: {}
    values: {
        enabledIntervals: Intervals
        querySource: InsightQueryNode | null
        interval: IntervalType | null | undefined
    }
    _isKea: true
    _isKeaWithKey: true
}