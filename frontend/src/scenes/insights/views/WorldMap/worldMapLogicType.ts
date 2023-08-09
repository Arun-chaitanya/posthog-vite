// Generated by kea-typegen on Thu, 20 Jul 2023 11:24:21 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { InsightLogicProps, TrendResult } from '../../../../types'
import type { ActionsNode, EventsNode, TrendsFilter } from '../../../../queries/schema'

export interface worldMapLogicType extends Logic {
    actionCreators: {
        showTooltip: (
            countryCode: string,
            countrySeries: TrendResult | null
        ) => {
            type: 'show tooltip (scenes.insights.WorldMap.worldMapLogic.*)'
            payload: {
                countryCode: string
                countrySeries: TrendResult | null
            }
        }
        hideTooltip: () => {
            type: 'hide tooltip (scenes.insights.WorldMap.worldMapLogic.*)'
            payload: {
                value: true
            }
        }
        updateTooltipCoordinates: (
            x: number,
            y: number
        ) => {
            type: 'update tooltip coordinates (scenes.insights.WorldMap.worldMapLogic.*)'
            payload: {
                x: number
                y: number
            }
        }
    }
    actionKeys: {
        'show tooltip (scenes.insights.WorldMap.worldMapLogic.*)': 'showTooltip'
        'hide tooltip (scenes.insights.WorldMap.worldMapLogic.*)': 'hideTooltip'
        'update tooltip coordinates (scenes.insights.WorldMap.worldMapLogic.*)': 'updateTooltipCoordinates'
    }
    actionTypes: {
        showTooltip: 'show tooltip (scenes.insights.WorldMap.worldMapLogic.*)'
        hideTooltip: 'hide tooltip (scenes.insights.WorldMap.worldMapLogic.*)'
        updateTooltipCoordinates: 'update tooltip coordinates (scenes.insights.WorldMap.worldMapLogic.*)'
    }
    actions: {
        showTooltip: (countryCode: string, countrySeries: TrendResult | null) => void
        hideTooltip: () => void
        updateTooltipCoordinates: (x: number, y: number) => void
    }
    asyncActions: {
        showTooltip: (countryCode: string, countrySeries: TrendResult | null) => Promise<any>
        hideTooltip: () => Promise<any>
        updateTooltipCoordinates: (x: number, y: number) => Promise<any>
    }
    defaults: {
        isTooltipShown: boolean
        currentTooltip: [string, TrendResult | null] | null
        tooltipCoordinates: [number, number] | null
    }
    events: {}
    key: string
    listeners: {}
    path: ['scenes', 'insights', 'WorldMap', 'worldMapLogic', '*']
    pathString: 'scenes.insights.WorldMap.worldMapLogic.*'
    props: InsightLogicProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        isTooltipShown: boolean
        currentTooltip: [string, TrendResult | null] | null
        tooltipCoordinates: [number, number] | null
    }
    reducers: {
        isTooltipShown: (state: boolean, action: any, fullState: any) => boolean
        currentTooltip: (
            state: [string, TrendResult | null] | null,
            action: any,
            fullState: any
        ) => [string, TrendResult | null] | null
        tooltipCoordinates: (state: [number, number] | null, action: any, fullState: any) => [number, number] | null
    }
    selector: (state: any) => {
        isTooltipShown: boolean
        currentTooltip: [string, TrendResult | null] | null
        tooltipCoordinates: [number, number] | null
    }
    selectors: {
        isTooltipShown: (state: any, props?: any) => boolean
        currentTooltip: (state: any, props?: any) => [string, TrendResult | null] | null
        tooltipCoordinates: (state: any, props?: any) => [number, number] | null
        insightData: (state: any, props?: any) => Record<string, any> | null
        series: (state: any, props?: any) => (EventsNode | ActionsNode)[] | null | undefined
        trendsFilter: (state: any, props?: any) => TrendsFilter | null | undefined
        countryCodeToSeries: (state: any, props?: any) => Record<string, TrendResult>
        maxAggregatedValue: (state: any, props?: any) => number
    }
    sharedListeners: {}
    values: {
        isTooltipShown: boolean
        currentTooltip: [string, TrendResult | null] | null
        tooltipCoordinates: [number, number] | null
        insightData: Record<string, any> | null
        series: (EventsNode | ActionsNode)[] | null | undefined
        trendsFilter: TrendsFilter | null | undefined
        countryCodeToSeries: Record<string, TrendResult>
        maxAggregatedValue: number
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        countryCodeToSeries: (insightData: Record<string, any> | null) => Record<string, TrendResult>
        maxAggregatedValue: (insightData: Record<string, any> | null) => number
    }
}