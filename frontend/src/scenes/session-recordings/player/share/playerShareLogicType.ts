// Generated by kea-typegen on Thu, 20 Jul 2023 11:14:20 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { PlayerShareLogicProps } from './playerShareLogic'
import type { DeepPartial, DeepPartialMap, FieldName, ValidationErrorType } from '../../../../../../node_modules/kea-forms'

export interface playerShareLogicType extends Logic {
    actionCreators: {
        setShareUrlValue: (
            key: FieldName,
            value: any
        ) => {
            type: 'set share url value (scenes.session-recordings.player.playerShareLogic)'
            payload: {
                name: FieldName
                value: any
            }
        }
        setShareUrlValues: (
            values: DeepPartial<{
                time: string | null
                includeTime: boolean
            }>
        ) => {
            type: 'set share url values (scenes.session-recordings.player.playerShareLogic)'
            payload: {
                values: DeepPartial<{
                    time: string | null
                    includeTime: boolean
                }>
            }
        }
        setShareUrlManualErrors: (errors: Record<string, any>) => {
            type: 'set share url manual errors (scenes.session-recordings.player.playerShareLogic)'
            payload: {
                errors: Record<string, any>
            }
        }
        touchShareUrlField: (key: string) => {
            type: 'touch share url field (scenes.session-recordings.player.playerShareLogic)'
            payload: {
                key: string
            }
        }
        resetShareUrl: (values?: { time: string | null; includeTime: boolean }) => {
            type: 'reset share url (scenes.session-recordings.player.playerShareLogic)'
            payload: {
                values?: {
                    time: string | null
                    includeTime: boolean
                }
            }
        }
        submitShareUrl: () => {
            type: 'submit share url (scenes.session-recordings.player.playerShareLogic)'
            payload: {
                value: boolean
            }
        }
        submitShareUrlRequest: (shareUrl: { time: string | null; includeTime: boolean }) => {
            type: 'submit share url request (scenes.session-recordings.player.playerShareLogic)'
            payload: {
                shareUrl: {
                    time: string | null
                    includeTime: boolean
                }
            }
        }
        submitShareUrlSuccess: (shareUrl: { time: string | null; includeTime: boolean }) => {
            type: 'submit share url success (scenes.session-recordings.player.playerShareLogic)'
            payload: {
                shareUrl: {
                    time: string | null
                    includeTime: boolean
                }
            }
        }
        submitShareUrlFailure: (
            error: Error,
            errors: Record<string, any>
        ) => {
            type: 'submit share url failure (scenes.session-recordings.player.playerShareLogic)'
            payload: {
                error: Error
                errors: Record<string, any>
            }
        }
    }
    actionKeys: {
        'set share url value (scenes.session-recordings.player.playerShareLogic)': 'setShareUrlValue'
        'set share url values (scenes.session-recordings.player.playerShareLogic)': 'setShareUrlValues'
        'set share url manual errors (scenes.session-recordings.player.playerShareLogic)': 'setShareUrlManualErrors'
        'touch share url field (scenes.session-recordings.player.playerShareLogic)': 'touchShareUrlField'
        'reset share url (scenes.session-recordings.player.playerShareLogic)': 'resetShareUrl'
        'submit share url (scenes.session-recordings.player.playerShareLogic)': 'submitShareUrl'
        'submit share url request (scenes.session-recordings.player.playerShareLogic)': 'submitShareUrlRequest'
        'submit share url success (scenes.session-recordings.player.playerShareLogic)': 'submitShareUrlSuccess'
        'submit share url failure (scenes.session-recordings.player.playerShareLogic)': 'submitShareUrlFailure'
    }
    actionTypes: {
        setShareUrlValue: 'set share url value (scenes.session-recordings.player.playerShareLogic)'
        setShareUrlValues: 'set share url values (scenes.session-recordings.player.playerShareLogic)'
        setShareUrlManualErrors: 'set share url manual errors (scenes.session-recordings.player.playerShareLogic)'
        touchShareUrlField: 'touch share url field (scenes.session-recordings.player.playerShareLogic)'
        resetShareUrl: 'reset share url (scenes.session-recordings.player.playerShareLogic)'
        submitShareUrl: 'submit share url (scenes.session-recordings.player.playerShareLogic)'
        submitShareUrlRequest: 'submit share url request (scenes.session-recordings.player.playerShareLogic)'
        submitShareUrlSuccess: 'submit share url success (scenes.session-recordings.player.playerShareLogic)'
        submitShareUrlFailure: 'submit share url failure (scenes.session-recordings.player.playerShareLogic)'
    }
    actions: {
        setShareUrlValue: (key: FieldName, value: any) => void
        setShareUrlValues: (
            values: DeepPartial<{
                time: string | null
                includeTime: boolean
            }>
        ) => void
        setShareUrlManualErrors: (errors: Record<string, any>) => void
        touchShareUrlField: (key: string) => void
        resetShareUrl: (values?: { time: string | null; includeTime: boolean }) => void
        submitShareUrl: () => void
        submitShareUrlRequest: (shareUrl: { time: string | null; includeTime: boolean }) => void
        submitShareUrlSuccess: (shareUrl: { time: string | null; includeTime: boolean }) => void
        submitShareUrlFailure: (error: Error, errors: Record<string, any>) => void
    }
    asyncActions: {
        setShareUrlValue: (key: FieldName, value: any) => Promise<any>
        setShareUrlValues: (
            values: DeepPartial<{
                time: string | null
                includeTime: boolean
            }>
        ) => Promise<any>
        setShareUrlManualErrors: (errors: Record<string, any>) => Promise<any>
        touchShareUrlField: (key: string) => Promise<any>
        resetShareUrl: (values?: { time: string | null; includeTime: boolean }) => Promise<any>
        submitShareUrl: () => Promise<any>
        submitShareUrlRequest: (shareUrl: { time: string | null; includeTime: boolean }) => Promise<any>
        submitShareUrlSuccess: (shareUrl: { time: string | null; includeTime: boolean }) => Promise<any>
        submitShareUrlFailure: (error: Error, errors: Record<string, any>) => Promise<any>
    }
    defaults: {
        shareUrl: {
            time: string | null
            includeTime: boolean
        }
        isShareUrlSubmitting: boolean
        showShareUrlErrors: boolean
        shareUrlChanged: boolean
        shareUrlTouches: Record<string, boolean>
        shareUrlManualErrors: Record<string, any>
    }
    events: {}
    key: string
    listeners: {}
    path: ['scenes', 'session-recordings', 'player', 'playerShareLogic']
    pathString: 'scenes.session-recordings.player.playerShareLogic'
    props: PlayerShareLogicProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        shareUrl: {
            time: string | null
            includeTime: boolean
        }
        isShareUrlSubmitting: boolean
        showShareUrlErrors: boolean
        shareUrlChanged: boolean
        shareUrlTouches: Record<string, boolean>
        shareUrlManualErrors: Record<string, any>
    }
    reducers: {
        shareUrl: (
            state: {
                time: string | null
                includeTime: boolean
            },
            action: any,
            fullState: any
        ) => {
            time: string | null
            includeTime: boolean
        }
        isShareUrlSubmitting: (state: boolean, action: any, fullState: any) => boolean
        showShareUrlErrors: (state: boolean, action: any, fullState: any) => boolean
        shareUrlChanged: (state: boolean, action: any, fullState: any) => boolean
        shareUrlTouches: (state: Record<string, boolean>, action: any, fullState: any) => Record<string, boolean>
        shareUrlManualErrors: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
    }
    selector: (state: any) => {
        shareUrl: {
            time: string | null
            includeTime: boolean
        }
        isShareUrlSubmitting: boolean
        showShareUrlErrors: boolean
        shareUrlChanged: boolean
        shareUrlTouches: Record<string, boolean>
        shareUrlManualErrors: Record<string, any>
    }
    selectors: {
        shareUrl: (
            state: any,
            props?: any
        ) => {
            time: string | null
            includeTime: boolean
        }
        isShareUrlSubmitting: (state: any, props?: any) => boolean
        showShareUrlErrors: (state: any, props?: any) => boolean
        shareUrlChanged: (state: any, props?: any) => boolean
        shareUrlTouches: (state: any, props?: any) => Record<string, boolean>
        shareUrlManualErrors: (state: any, props?: any) => Record<string, any>
        shareUrlTouched: (state: any, props?: any) => boolean
        shareUrlValidationErrors: (
            state: any,
            props?: any
        ) => DeepPartialMap<
            {
                time: string | null
                includeTime: boolean
            },
            ValidationErrorType
        >
        shareUrlAllErrors: (state: any, props?: any) => Record<string, any>
        shareUrlHasErrors: (state: any, props?: any) => boolean
        shareUrlErrors: (
            state: any,
            props?: any
        ) => DeepPartialMap<
            {
                time: string | null
                includeTime: boolean
            },
            ValidationErrorType
        >
        isShareUrlValid: (state: any, props?: any) => boolean
        queryParams: (state: any, props?: any) => { t?: undefined } | { t: string }
        url: (state: any, props?: any) => string
    }
    sharedListeners: {}
    values: {
        shareUrl: {
            time: string | null
            includeTime: boolean
        }
        isShareUrlSubmitting: boolean
        showShareUrlErrors: boolean
        shareUrlChanged: boolean
        shareUrlTouches: Record<string, boolean>
        shareUrlManualErrors: Record<string, any>
        shareUrlTouched: boolean
        shareUrlValidationErrors: DeepPartialMap<
            {
                time: string | null
                includeTime: boolean
            },
            ValidationErrorType
        >
        shareUrlAllErrors: Record<string, any>
        shareUrlHasErrors: boolean
        shareUrlErrors: DeepPartialMap<
            {
                time: string | null
                includeTime: boolean
            },
            ValidationErrorType
        >
        isShareUrlValid: boolean
        queryParams: { t?: undefined } | { t: string }
        url: string
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        queryParams: (
            shareUrl: {
                time: string | null
                includeTime: boolean
            },
            shareUrlHasErrors: boolean
        ) => { t?: undefined } | { t: string }
        url: (
            queryParams:
                | {
                      t?: undefined
                  }
                | {
                      t: string
                  }
        ) => string
    }
}
