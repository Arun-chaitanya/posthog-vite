// Generated by kea-typegen on Thu, 20 Jul 2023 11:24:21 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { ChartDisplayType, InsightLogicProps } from '../../../types'
import type { DateRange, InsightFilter } from '../../../queries/schema'

export interface compareFilterLogicType extends Logic {
    actionCreators: {
        updateInsightFilter: (insightFilter: InsightFilter) => {
            type: 'update insight filter (lib.components.CompareFilter.compareFilterLogic.*)'
            payload: {
                insightFilter: InsightFilter
            }
        }
        setCompare: (compare: boolean) => {
            type: 'set compare (lib.components.CompareFilter.compareFilterLogic.*)'
            payload: {
                compare: boolean
            }
        }
        toggleCompare: () => {
            type: 'toggle compare (lib.components.CompareFilter.compareFilterLogic.*)'
            payload: {
                value: true
            }
        }
    }
    actionKeys: {
        'update insight filter (lib.components.CompareFilter.compareFilterLogic.*)': 'updateInsightFilter'
        'set compare (lib.components.CompareFilter.compareFilterLogic.*)': 'setCompare'
        'toggle compare (lib.components.CompareFilter.compareFilterLogic.*)': 'toggleCompare'
    }
    actionTypes: {
        updateInsightFilter: 'update insight filter (lib.components.CompareFilter.compareFilterLogic.*)'
        setCompare: 'set compare (lib.components.CompareFilter.compareFilterLogic.*)'
        toggleCompare: 'toggle compare (lib.components.CompareFilter.compareFilterLogic.*)'
    }
    actions: {
        updateInsightFilter: (insightFilter: InsightFilter) => void
        setCompare: (compare: boolean) => void
        toggleCompare: () => void
    }
    asyncActions: {
        updateInsightFilter: (insightFilter: InsightFilter) => Promise<any>
        setCompare: (compare: boolean) => Promise<any>
        toggleCompare: () => Promise<any>
    }
    defaults: {}
    events: {}
    key: string
    listeners: {
        setCompare: ((
            action: {
                type: 'set compare (lib.components.CompareFilter.compareFilterLogic.*)'
                payload: {
                    compare: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        toggleCompare: ((
            action: {
                type: 'toggle compare (lib.components.CompareFilter.compareFilterLogic.*)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['lib', 'components', 'CompareFilter', 'compareFilterLogic', '*']
    pathString: 'lib.components.CompareFilter.compareFilterLogic.*'
    props: InsightLogicProps
    reducer: (state: any, action: any, fullState: any) => {}
    reducers: {}
    selector: (state: any) => {}
    selectors: {
        canEditInsight: (state: any, props?: any) => boolean
        isLifecycle: (state: any, props?: any) => boolean
        dateRange: (state: any, props?: any) => DateRange | null | undefined
        display: (state: any, props?: any) => ChartDisplayType | null | undefined
        compare: (state: any, props?: any) => boolean | null | undefined
        insightFilter: (state: any, props?: any) => InsightFilter | null | undefined
        disabled: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        canEditInsight: boolean
        isLifecycle: boolean
        dateRange: DateRange | null | undefined
        display: ChartDisplayType | null | undefined
        compare: boolean | null | undefined
        insightFilter: InsightFilter | null | undefined
        disabled: boolean
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        disabled: (
            canEditInsight: boolean,
            isLifecycle: boolean,
            display: ChartDisplayType | null | undefined,
            dateRange:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/queries/schema').DateRange
                | null
                | undefined
        ) => boolean
    }
}
