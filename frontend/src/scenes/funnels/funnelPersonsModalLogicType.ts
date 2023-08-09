// Generated by kea-typegen on Thu, 20 Jul 2023 11:23:46 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { FunnelCorrelation, FunnelStep, FunnelStepWithConversionMetrics, FunnelStepWithNestedBreakdown, InsightLogicProps } from '../../types'
import type { FunnelsFilter } from '../../queries/schema'

export interface funnelPersonsModalLogicType extends Logic {
    actionCreators: {
        openPersonsModalForStep: ({
            step,
            stepIndex,
            converted,
        }: {
            step: FunnelStep
            stepIndex?: number
            converted: boolean
        }) => {
            type: 'open persons modal for step (scenes.funnels.funnelPersonsModalLogic.*)'
            payload: {
                step: FunnelStep
                stepIndex: number | undefined
                converted: boolean
            }
        }
        openPersonsModalForSeries: ({
            step,
            series,
            converted,
        }: {
            step: FunnelStep
            series: Omit<FunnelStepWithConversionMetrics, 'nested_breakdown'>
            converted: boolean
        }) => {
            type: 'open persons modal for series (scenes.funnels.funnelPersonsModalLogic.*)'
            payload: {
                step: FunnelStep
                series: Omit<FunnelStepWithConversionMetrics, 'nested_breakdown'>
                converted: boolean
            }
        }
        openCorrelationPersonsModal: (
            correlation: FunnelCorrelation,
            success: boolean
        ) => {
            type: 'open correlation persons modal (scenes.funnels.funnelPersonsModalLogic.*)'
            payload: {
                correlation: FunnelCorrelation
                success: boolean
            }
        }
    }
    actionKeys: {
        'open persons modal for step (scenes.funnels.funnelPersonsModalLogic.*)': 'openPersonsModalForStep'
        'open persons modal for series (scenes.funnels.funnelPersonsModalLogic.*)': 'openPersonsModalForSeries'
        'open correlation persons modal (scenes.funnels.funnelPersonsModalLogic.*)': 'openCorrelationPersonsModal'
    }
    actionTypes: {
        openPersonsModalForStep: 'open persons modal for step (scenes.funnels.funnelPersonsModalLogic.*)'
        openPersonsModalForSeries: 'open persons modal for series (scenes.funnels.funnelPersonsModalLogic.*)'
        openCorrelationPersonsModal: 'open correlation persons modal (scenes.funnels.funnelPersonsModalLogic.*)'
    }
    actions: {
        openPersonsModalForStep: ({
            step,
            stepIndex,
            converted,
        }: {
            step: FunnelStep
            stepIndex?: number
            converted: boolean
        }) => void
        openPersonsModalForSeries: ({
            step,
            series,
            converted,
        }: {
            step: FunnelStep
            series: Omit<FunnelStepWithConversionMetrics, 'nested_breakdown'>
            converted: boolean
        }) => void
        openCorrelationPersonsModal: (correlation: FunnelCorrelation, success: boolean) => void
    }
    asyncActions: {
        openPersonsModalForStep: ({
            step,
            stepIndex,
            converted,
        }: {
            step: FunnelStep
            stepIndex?: number
            converted: boolean
        }) => Promise<any>
        openPersonsModalForSeries: ({
            step,
            series,
            converted,
        }: {
            step: FunnelStep
            series: Omit<FunnelStepWithConversionMetrics, 'nested_breakdown'>
            converted: boolean
        }) => Promise<any>
        openCorrelationPersonsModal: (correlation: FunnelCorrelation, success: boolean) => Promise<any>
    }
    defaults: {}
    events: {}
    key: string
    listeners: {
        openPersonsModalForStep: ((
            action: {
                type: 'open persons modal for step (scenes.funnels.funnelPersonsModalLogic.*)'
                payload: {
                    step: FunnelStep
                    stepIndex: number | undefined
                    converted: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        openPersonsModalForSeries: ((
            action: {
                type: 'open persons modal for series (scenes.funnels.funnelPersonsModalLogic.*)'
                payload: {
                    step: FunnelStep
                    series: Omit<FunnelStepWithConversionMetrics, 'nested_breakdown'>
                    converted: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        openCorrelationPersonsModal: ((
            action: {
                type: 'open correlation persons modal (scenes.funnels.funnelPersonsModalLogic.*)'
                payload: {
                    correlation: FunnelCorrelation
                    success: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'funnels', 'funnelPersonsModalLogic', '*']
    pathString: 'scenes.funnels.funnelPersonsModalLogic.*'
    props: InsightLogicProps
    reducer: (state: any, action: any, fullState: any) => {}
    reducers: {}
    selector: (state: any) => {}
    selectors: {
        isInDashboardContext: (state: any, props?: any) => boolean
        funnelsFilter: (state: any, props?: any) => FunnelsFilter | null | undefined
        steps: (state: any, props?: any) => FunnelStepWithNestedBreakdown[]
        canOpenPersonModal: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        isInDashboardContext: boolean
        funnelsFilter: FunnelsFilter | null | undefined
        steps: FunnelStepWithNestedBreakdown[]
        canOpenPersonModal: boolean
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        canOpenPersonModal: (
            funnelsFilter:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/queries/schema').FunnelsFilter
                | null
                | undefined,
            isInDashboardContext: boolean
        ) => boolean
    }
}