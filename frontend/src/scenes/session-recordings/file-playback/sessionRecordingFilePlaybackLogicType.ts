// Generated by kea-typegen on Thu, 20 Jul 2023 11:14:20 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { ExportedSessionRecordingFileV2 } from './sessionRecordingFilePlaybackLogic'
import type { Breadcrumb, PersonType, RecordingSnapshot } from '../../../types'

export interface sessionRecordingFilePlaybackLogicType extends Logic {
    actionCreators: {
        reportRecordingLoadedFromFile: (data: { success: boolean; error?: string }) => {
            type: 'report recording loaded from file (scenes.session-recordings.detail.sessionRecordingDetailLogic)'
            payload: {
                success: boolean
                error?: string | undefined
            }
        }
        loadFromFile: (file: File) => {
            type: 'load from file (scenes.session-recordings.detail.sessionRecordingDetailLogic)'
            payload: File
        }
        loadFromFileSuccess: (
            sessionRecording: { id: string; person: PersonType | undefined; snapshots: RecordingSnapshot[] } | null,
            payload?: File
        ) => {
            type: 'load from file success (scenes.session-recordings.detail.sessionRecordingDetailLogic)'
            payload: {
                sessionRecording: { id: string; person: PersonType | undefined; snapshots: RecordingSnapshot[] } | null
                payload?: File
            }
        }
        loadFromFileFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load from file failure (scenes.session-recordings.detail.sessionRecordingDetailLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        resetSessionRecording: () => {
            type: 'reset session recording (scenes.session-recordings.detail.sessionRecordingDetailLogic)'
            payload: any
        }
        resetSessionRecordingSuccess: (
            sessionRecording: null,
            payload?: any
        ) => {
            type: 'reset session recording success (scenes.session-recordings.detail.sessionRecordingDetailLogic)'
            payload: {
                sessionRecording: null
                payload?: any
            }
        }
        resetSessionRecordingFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'reset session recording failure (scenes.session-recordings.detail.sessionRecordingDetailLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'report recording loaded from file (scenes.session-recordings.detail.sessionRecordingDetailLogic)': 'reportRecordingLoadedFromFile'
        'load from file (scenes.session-recordings.detail.sessionRecordingDetailLogic)': 'loadFromFile'
        'load from file success (scenes.session-recordings.detail.sessionRecordingDetailLogic)': 'loadFromFileSuccess'
        'load from file failure (scenes.session-recordings.detail.sessionRecordingDetailLogic)': 'loadFromFileFailure'
        'reset session recording (scenes.session-recordings.detail.sessionRecordingDetailLogic)': 'resetSessionRecording'
        'reset session recording success (scenes.session-recordings.detail.sessionRecordingDetailLogic)': 'resetSessionRecordingSuccess'
        'reset session recording failure (scenes.session-recordings.detail.sessionRecordingDetailLogic)': 'resetSessionRecordingFailure'
    }
    actionTypes: {
        reportRecordingLoadedFromFile: 'report recording loaded from file (scenes.session-recordings.detail.sessionRecordingDetailLogic)'
        loadFromFile: 'load from file (scenes.session-recordings.detail.sessionRecordingDetailLogic)'
        loadFromFileSuccess: 'load from file success (scenes.session-recordings.detail.sessionRecordingDetailLogic)'
        loadFromFileFailure: 'load from file failure (scenes.session-recordings.detail.sessionRecordingDetailLogic)'
        resetSessionRecording: 'reset session recording (scenes.session-recordings.detail.sessionRecordingDetailLogic)'
        resetSessionRecordingSuccess: 'reset session recording success (scenes.session-recordings.detail.sessionRecordingDetailLogic)'
        resetSessionRecordingFailure: 'reset session recording failure (scenes.session-recordings.detail.sessionRecordingDetailLogic)'
    }
    actions: {
        reportRecordingLoadedFromFile: (data: { success: boolean; error?: string }) => void
        loadFromFile: (file: File) => void
        loadFromFileSuccess: (
            sessionRecording: { id: string; person: PersonType | undefined; snapshots: RecordingSnapshot[] } | null,
            payload?: File
        ) => void
        loadFromFileFailure: (error: string, errorObject?: any) => void
        resetSessionRecording: () => void
        resetSessionRecordingSuccess: (sessionRecording: null, payload?: any) => void
        resetSessionRecordingFailure: (error: string, errorObject?: any) => void
    }
    asyncActions: {
        reportRecordingLoadedFromFile: (data: { success: boolean; error?: string }) => Promise<any>
        loadFromFile: (file: File) => Promise<any>
        loadFromFileSuccess: (
            sessionRecording: { id: string; person: PersonType | undefined; snapshots: RecordingSnapshot[] } | null,
            payload?: File
        ) => Promise<any>
        loadFromFileFailure: (error: string, errorObject?: any) => Promise<any>
        resetSessionRecording: () => Promise<any>
        resetSessionRecordingSuccess: (sessionRecording: null, payload?: any) => Promise<any>
        resetSessionRecordingFailure: (error: string, errorObject?: any) => Promise<any>
    }
    defaults: {
        sessionRecording: ExportedSessionRecordingFileV2['data'] | null
        sessionRecordingLoading: boolean
        playerKey: string
    }
    events: {}
    key: undefined
    listeners: {
        loadFromFileSuccess: ((
            action: {
                type: 'load from file success (scenes.session-recordings.detail.sessionRecordingDetailLogic)'
                payload: {
                    sessionRecording: {
                        id: string
                        person: PersonType | undefined
                        snapshots: RecordingSnapshot[]
                    } | null
                    payload?: File
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'session-recordings', 'detail', 'sessionRecordingDetailLogic']
    pathString: 'scenes.session-recordings.detail.sessionRecordingDetailLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        sessionRecording: ExportedSessionRecordingFileV2['data'] | null
        sessionRecordingLoading: boolean
        playerKey: string
    }
    reducers: {
        sessionRecording: (
            state: ExportedSessionRecordingFileV2['data'] | null,
            action: any,
            fullState: any
        ) => ExportedSessionRecordingFileV2['data'] | null
        sessionRecordingLoading: (state: boolean, action: any, fullState: any) => boolean
        playerKey: (state: string, action: any, fullState: any) => string
    }
    selector: (state: any) => {
        sessionRecording: ExportedSessionRecordingFileV2['data'] | null
        sessionRecordingLoading: boolean
        playerKey: string
    }
    selectors: {
        sessionRecording: (state: any, props?: any) => ExportedSessionRecordingFileV2['data'] | null
        sessionRecordingLoading: (state: any, props?: any) => boolean
        playerKey: (state: any, props?: any) => string
        breadcrumbs: (state: any, props?: any) => Breadcrumb[]
    }
    sharedListeners: {}
    values: {
        sessionRecording: ExportedSessionRecordingFileV2['data'] | null
        sessionRecordingLoading: boolean
        playerKey: string
        breadcrumbs: Breadcrumb[]
    }
    _isKea: true
    _isKeaWithKey: false
}