// Generated by kea-typegen on Thu, 20 Jul 2023 10:55:48 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { SessionRecordingType } from '../../../../types'

export interface sessionPlayerModalLogicType extends Logic {
    actionCreators: {
        openSessionPlayer: (
            sessionRecording: Pick<SessionRecordingType, 'id' | 'matching_events'>,
            initialTimestamp?: number | null
        ) => {
            type: 'open session player (scenes.session-recordings.sessionPlayerModalLogic)'
            payload: {
                sessionRecording: Pick<SessionRecordingType, 'id' | 'matching_events'>
                initialTimestamp: number | null
            }
        }
        closeSessionPlayer: () => {
            type: 'close session player (scenes.session-recordings.sessionPlayerModalLogic)'
            payload: {
                value: true
            }
        }
    }
    actionKeys: {
        'open session player (scenes.session-recordings.sessionPlayerModalLogic)': 'openSessionPlayer'
        'close session player (scenes.session-recordings.sessionPlayerModalLogic)': 'closeSessionPlayer'
    }
    actionTypes: {
        openSessionPlayer: 'open session player (scenes.session-recordings.sessionPlayerModalLogic)'
        closeSessionPlayer: 'close session player (scenes.session-recordings.sessionPlayerModalLogic)'
    }
    actions: {
        openSessionPlayer: (
            sessionRecording: Pick<SessionRecordingType, 'id' | 'matching_events'>,
            initialTimestamp?: number | null
        ) => void
        closeSessionPlayer: () => void
    }
    asyncActions: {
        openSessionPlayer: (
            sessionRecording: Pick<SessionRecordingType, 'id' | 'matching_events'>,
            initialTimestamp?: number | null
        ) => Promise<any>
        closeSessionPlayer: () => Promise<any>
    }
    defaults: {
        activeSessionRecording: Pick<SessionRecordingType, 'id' | 'matching_events'> | null
        initialTimestamp: number | null
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['scenes', 'session-recordings', 'sessionPlayerModalLogic']
    pathString: 'scenes.session-recordings.sessionPlayerModalLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        activeSessionRecording: Pick<SessionRecordingType, 'id' | 'matching_events'> | null
        initialTimestamp: number | null
    }
    reducers: {
        activeSessionRecording: (
            state: Pick<SessionRecordingType, 'id' | 'matching_events'> | null,
            action: any,
            fullState: any
        ) => Pick<SessionRecordingType, 'id' | 'matching_events'> | null
        initialTimestamp: (state: number | null, action: any, fullState: any) => number | null
    }
    selector: (state: any) => {
        activeSessionRecording: Pick<SessionRecordingType, 'id' | 'matching_events'> | null
        initialTimestamp: number | null
    }
    selectors: {
        activeSessionRecording: (state: any, props?: any) => Pick<SessionRecordingType, 'id' | 'matching_events'> | null
        initialTimestamp: (state: any, props?: any) => number | null
    }
    sharedListeners: {}
    values: {
        activeSessionRecording: Pick<SessionRecordingType, 'id' | 'matching_events'> | null
        initialTimestamp: number | null
    }
    _isKea: true
    _isKeaWithKey: false
}
