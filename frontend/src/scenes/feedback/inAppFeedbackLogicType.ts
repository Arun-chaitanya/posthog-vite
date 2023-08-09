// Generated by kea-typegen on Thu, 20 Jul 2023 10:57:24 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { DataTableNode, InsightVizNode, Node, QuerySchema } from '../../queries/schema'
import type { EventType } from '../../types'

export interface inAppFeedbackLogicType extends Logic {
    actionCreators: {
        toggleInAppFeedbackInstructions: () => {
            type: 'toggle in app feedback instructions (scenes.feedback.inAppFeedbackLogic)'
            payload: {
                value: true
            }
        }
        setDataTableQuery: (query: Node | QuerySchema) => {
            type: 'set data table query (scenes.feedback.inAppFeedbackLogic)'
            payload: {
                query: Node | QuerySchema
            }
        }
        loadEvents: ({ eventName }: { eventName: string }) => {
            type: 'load events (scenes.feedback.inAppFeedbackLogic)'
            payload: {
                eventName: string
            }
        }
        loadEventsSuccess: (
            events: EventType[],
            payload?: {
                eventName: string
            }
        ) => {
            type: 'load events success (scenes.feedback.inAppFeedbackLogic)'
            payload: {
                events: EventType[]
                payload?: {
                    eventName: string
                }
            }
        }
        loadEventsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load events failure (scenes.feedback.inAppFeedbackLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'toggle in app feedback instructions (scenes.feedback.inAppFeedbackLogic)': 'toggleInAppFeedbackInstructions'
        'set data table query (scenes.feedback.inAppFeedbackLogic)': 'setDataTableQuery'
        'load events (scenes.feedback.inAppFeedbackLogic)': 'loadEvents'
        'load events success (scenes.feedback.inAppFeedbackLogic)': 'loadEventsSuccess'
        'load events failure (scenes.feedback.inAppFeedbackLogic)': 'loadEventsFailure'
    }
    actionTypes: {
        toggleInAppFeedbackInstructions: 'toggle in app feedback instructions (scenes.feedback.inAppFeedbackLogic)'
        setDataTableQuery: 'set data table query (scenes.feedback.inAppFeedbackLogic)'
        loadEvents: 'load events (scenes.feedback.inAppFeedbackLogic)'
        loadEventsSuccess: 'load events success (scenes.feedback.inAppFeedbackLogic)'
        loadEventsFailure: 'load events failure (scenes.feedback.inAppFeedbackLogic)'
    }
    actions: {
        toggleInAppFeedbackInstructions: () => void
        setDataTableQuery: (query: Node | QuerySchema) => void
        loadEvents: ({ eventName }: { eventName: string }) => void
        loadEventsSuccess: (
            events: EventType[],
            payload?: {
                eventName: string
            }
        ) => void
        loadEventsFailure: (error: string, errorObject?: any) => void
    }
    asyncActions: {
        toggleInAppFeedbackInstructions: () => Promise<any>
        setDataTableQuery: (query: Node | QuerySchema) => Promise<any>
        loadEvents: ({ eventName }: { eventName: string }) => Promise<any>
        loadEventsSuccess: (
            events: EventType[],
            payload?: {
                eventName: string
            }
        ) => Promise<any>
        loadEventsFailure: (error: string, errorObject?: any) => Promise<any>
    }
    defaults: {
        inAppFeedbackInstructions: boolean
        dataTableQuery: DataTableNode
        trendQuery: InsightVizNode
        events: EventType[]
        eventsLoading: boolean
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['scenes', 'feedback', 'inAppFeedbackLogic']
    pathString: 'scenes.feedback.inAppFeedbackLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        inAppFeedbackInstructions: boolean
        dataTableQuery: DataTableNode
        trendQuery: InsightVizNode
        events: EventType[]
        eventsLoading: boolean
    }
    reducers: {
        inAppFeedbackInstructions: (state: boolean, action: any, fullState: any) => boolean
        dataTableQuery: (state: DataTableNode, action: any, fullState: any) => DataTableNode
        trendQuery: (state: InsightVizNode, action: any, fullState: any) => InsightVizNode
        events: (state: EventType[], action: any, fullState: any) => EventType[]
        eventsLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        inAppFeedbackInstructions: boolean
        dataTableQuery: DataTableNode
        trendQuery: InsightVizNode
        events: EventType[]
        eventsLoading: boolean
    }
    selectors: {
        inAppFeedbackInstructions: (state: any, props?: any) => boolean
        dataTableQuery: (state: any, props?: any) => DataTableNode
        trendQuery: (state: any, props?: any) => InsightVizNode
        events: (state: any, props?: any) => EventType[]
        eventsLoading: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        inAppFeedbackInstructions: boolean
        dataTableQuery: DataTableNode
        trendQuery: InsightVizNode
        events: EventType[]
        eventsLoading: boolean
    }
    _isKea: true
    _isKeaWithKey: false
}
