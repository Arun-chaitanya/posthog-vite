// Generated by kea-typegen on Thu, 20 Jul 2023 11:14:21 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { FilterType } from '../../../../types'
import type { CalcColumnState } from './insightsTableLogic'

export interface insightsTableLogicType extends Logic {
    actionCreators: {
        setCalcColumnState: (state: CalcColumnState) => {
            type: 'set calc column state (scenes.insights.InsightsTable.insightsTableLogic)'
            payload: {
                state: CalcColumnState
            }
        }
    }
    actionKeys: {
        'set calc column state (scenes.insights.InsightsTable.insightsTableLogic)': 'setCalcColumnState'
    }
    actionTypes: {
        setCalcColumnState: 'set calc column state (scenes.insights.InsightsTable.insightsTableLogic)'
    }
    actions: {
        setCalcColumnState: (state: CalcColumnState) => void
    }
    asyncActions: {
        setCalcColumnState: (state: CalcColumnState) => Promise<any>
    }
    defaults: {
        calcColumnState: CalcColumnState
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['scenes', 'insights', 'InsightsTable', 'insightsTableLogic']
    pathString: 'scenes.insights.InsightsTable.insightsTableLogic'
    props: {
        hasMathUniqueFilter: boolean
        filters: Partial<FilterType>
    }
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        calcColumnState: CalcColumnState
    }
    reducers: {
        calcColumnState: (state: CalcColumnState, action: any, fullState: any) => CalcColumnState
    }
    selector: (state: any) => {
        calcColumnState: CalcColumnState
    }
    selectors: {
        calcColumnState: (state: any, props?: any) => CalcColumnState
        showTotalCount: (state: any, props?: any) => boolean | undefined
    }
    sharedListeners: {}
    values: {
        calcColumnState: CalcColumnState
        showTotalCount: boolean | undefined
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        showTotalCount: (arg: any) => boolean | undefined
    }
}
