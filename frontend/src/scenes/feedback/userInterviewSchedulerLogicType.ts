// Generated by kea-typegen on Thu, 20 Jul 2023 11:14:26 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { DeepPartial, DeepPartialMap, FieldName, ValidationErrorType } from '../../../../node_modules/kea-forms'

export interface userInterviewSchedulerLogicType extends Logic {
    actionCreators: {
        toggleSchedulerInstructions: () => {
            type: 'toggle scheduler instructions (scenes.feedback.userInterviewSchedulerLogic)'
            payload: {
                value: true
            }
        }
        toggleInterviewFlagModal: () => {
            type: 'toggle interview flag modal (scenes.feedback.userInterviewSchedulerLogic)'
            payload: {
                value: true
            }
        }
        setInterviewFlagValue: (
            key: FieldName,
            value: any
        ) => {
            type: 'set interview flag value (scenes.feedback.userInterviewSchedulerLogic)'
            payload: {
                name: FieldName
                value: any
            }
        }
        setInterviewFlagValues: (
            values: DeepPartial<{
                key: string
                title: string
                body: string
                description: string
                bookingLink: string
            }>
        ) => {
            type: 'set interview flag values (scenes.feedback.userInterviewSchedulerLogic)'
            payload: {
                values: DeepPartial<{
                    key: string
                    title: string
                    body: string
                    description: string
                    bookingLink: string
                }>
            }
        }
        setInterviewFlagManualErrors: (errors: Record<string, any>) => {
            type: 'set interview flag manual errors (scenes.feedback.userInterviewSchedulerLogic)'
            payload: {
                errors: Record<string, any>
            }
        }
        touchInterviewFlagField: (key: string) => {
            type: 'touch interview flag field (scenes.feedback.userInterviewSchedulerLogic)'
            payload: {
                key: string
            }
        }
        resetInterviewFlag: (values?: {
            key: string
            title: string
            body: string
            description: string
            bookingLink: string
        }) => {
            type: 'reset interview flag (scenes.feedback.userInterviewSchedulerLogic)'
            payload: {
                values?: {
                    key: string
                    title: string
                    body: string
                    description: string
                    bookingLink: string
                }
            }
        }
        submitInterviewFlag: () => {
            type: 'submit interview flag (scenes.feedback.userInterviewSchedulerLogic)'
            payload: {
                value: boolean
            }
        }
        submitInterviewFlagRequest: (interviewFlag: {
            key: string
            title: string
            body: string
            description: string
            bookingLink: string
        }) => {
            type: 'submit interview flag request (scenes.feedback.userInterviewSchedulerLogic)'
            payload: {
                interviewFlag: {
                    key: string
                    title: string
                    body: string
                    description: string
                    bookingLink: string
                }
            }
        }
        submitInterviewFlagSuccess: (interviewFlag: {
            key: string
            title: string
            body: string
            description: string
            bookingLink: string
        }) => {
            type: 'submit interview flag success (scenes.feedback.userInterviewSchedulerLogic)'
            payload: {
                interviewFlag: {
                    key: string
                    title: string
                    body: string
                    description: string
                    bookingLink: string
                }
            }
        }
        submitInterviewFlagFailure: (
            error: Error,
            errors: Record<string, any>
        ) => {
            type: 'submit interview flag failure (scenes.feedback.userInterviewSchedulerLogic)'
            payload: {
                error: Error
                errors: Record<string, any>
            }
        }
    }
    actionKeys: {
        'toggle scheduler instructions (scenes.feedback.userInterviewSchedulerLogic)': 'toggleSchedulerInstructions'
        'toggle interview flag modal (scenes.feedback.userInterviewSchedulerLogic)': 'toggleInterviewFlagModal'
        'set interview flag value (scenes.feedback.userInterviewSchedulerLogic)': 'setInterviewFlagValue'
        'set interview flag values (scenes.feedback.userInterviewSchedulerLogic)': 'setInterviewFlagValues'
        'set interview flag manual errors (scenes.feedback.userInterviewSchedulerLogic)': 'setInterviewFlagManualErrors'
        'touch interview flag field (scenes.feedback.userInterviewSchedulerLogic)': 'touchInterviewFlagField'
        'reset interview flag (scenes.feedback.userInterviewSchedulerLogic)': 'resetInterviewFlag'
        'submit interview flag (scenes.feedback.userInterviewSchedulerLogic)': 'submitInterviewFlag'
        'submit interview flag request (scenes.feedback.userInterviewSchedulerLogic)': 'submitInterviewFlagRequest'
        'submit interview flag success (scenes.feedback.userInterviewSchedulerLogic)': 'submitInterviewFlagSuccess'
        'submit interview flag failure (scenes.feedback.userInterviewSchedulerLogic)': 'submitInterviewFlagFailure'
    }
    actionTypes: {
        toggleSchedulerInstructions: 'toggle scheduler instructions (scenes.feedback.userInterviewSchedulerLogic)'
        toggleInterviewFlagModal: 'toggle interview flag modal (scenes.feedback.userInterviewSchedulerLogic)'
        setInterviewFlagValue: 'set interview flag value (scenes.feedback.userInterviewSchedulerLogic)'
        setInterviewFlagValues: 'set interview flag values (scenes.feedback.userInterviewSchedulerLogic)'
        setInterviewFlagManualErrors: 'set interview flag manual errors (scenes.feedback.userInterviewSchedulerLogic)'
        touchInterviewFlagField: 'touch interview flag field (scenes.feedback.userInterviewSchedulerLogic)'
        resetInterviewFlag: 'reset interview flag (scenes.feedback.userInterviewSchedulerLogic)'
        submitInterviewFlag: 'submit interview flag (scenes.feedback.userInterviewSchedulerLogic)'
        submitInterviewFlagRequest: 'submit interview flag request (scenes.feedback.userInterviewSchedulerLogic)'
        submitInterviewFlagSuccess: 'submit interview flag success (scenes.feedback.userInterviewSchedulerLogic)'
        submitInterviewFlagFailure: 'submit interview flag failure (scenes.feedback.userInterviewSchedulerLogic)'
    }
    actions: {
        toggleSchedulerInstructions: () => void
        toggleInterviewFlagModal: () => void
        setInterviewFlagValue: (key: FieldName, value: any) => void
        setInterviewFlagValues: (
            values: DeepPartial<{
                key: string
                title: string
                body: string
                description: string
                bookingLink: string
            }>
        ) => void
        setInterviewFlagManualErrors: (errors: Record<string, any>) => void
        touchInterviewFlagField: (key: string) => void
        resetInterviewFlag: (values?: {
            key: string
            title: string
            body: string
            description: string
            bookingLink: string
        }) => void
        submitInterviewFlag: () => void
        submitInterviewFlagRequest: (interviewFlag: {
            key: string
            title: string
            body: string
            description: string
            bookingLink: string
        }) => void
        submitInterviewFlagSuccess: (interviewFlag: {
            key: string
            title: string
            body: string
            description: string
            bookingLink: string
        }) => void
        submitInterviewFlagFailure: (error: Error, errors: Record<string, any>) => void
    }
    asyncActions: {
        toggleSchedulerInstructions: () => Promise<any>
        toggleInterviewFlagModal: () => Promise<any>
        setInterviewFlagValue: (key: FieldName, value: any) => Promise<any>
        setInterviewFlagValues: (
            values: DeepPartial<{
                key: string
                title: string
                body: string
                description: string
                bookingLink: string
            }>
        ) => Promise<any>
        setInterviewFlagManualErrors: (errors: Record<string, any>) => Promise<any>
        touchInterviewFlagField: (key: string) => Promise<any>
        resetInterviewFlag: (values?: {
            key: string
            title: string
            body: string
            description: string
            bookingLink: string
        }) => Promise<any>
        submitInterviewFlag: () => Promise<any>
        submitInterviewFlagRequest: (interviewFlag: {
            key: string
            title: string
            body: string
            description: string
            bookingLink: string
        }) => Promise<any>
        submitInterviewFlagSuccess: (interviewFlag: {
            key: string
            title: string
            body: string
            description: string
            bookingLink: string
        }) => Promise<any>
        submitInterviewFlagFailure: (error: Error, errors: Record<string, any>) => Promise<any>
    }
    defaults: {
        schedulerInstructions: boolean
        interviewFlagModal: boolean
        interviewFlag: {
            key: string
            title: string
            body: string
            description: string
            bookingLink: string
        }
        isInterviewFlagSubmitting: boolean
        showInterviewFlagErrors: boolean
        interviewFlagChanged: boolean
        interviewFlagTouches: Record<string, boolean>
        interviewFlagManualErrors: Record<string, any>
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['scenes', 'feedback', 'userInterviewSchedulerLogic']
    pathString: 'scenes.feedback.userInterviewSchedulerLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        schedulerInstructions: boolean
        interviewFlagModal: boolean
        interviewFlag: {
            key: string
            title: string
            body: string
            description: string
            bookingLink: string
        }
        isInterviewFlagSubmitting: boolean
        showInterviewFlagErrors: boolean
        interviewFlagChanged: boolean
        interviewFlagTouches: Record<string, boolean>
        interviewFlagManualErrors: Record<string, any>
    }
    reducers: {
        schedulerInstructions: (state: boolean, action: any, fullState: any) => boolean
        interviewFlagModal: (state: boolean, action: any, fullState: any) => boolean
        interviewFlag: (
            state: {
                key: string
                title: string
                body: string
                description: string
                bookingLink: string
            },
            action: any,
            fullState: any
        ) => {
            key: string
            title: string
            body: string
            description: string
            bookingLink: string
        }
        isInterviewFlagSubmitting: (state: boolean, action: any, fullState: any) => boolean
        showInterviewFlagErrors: (state: boolean, action: any, fullState: any) => boolean
        interviewFlagChanged: (state: boolean, action: any, fullState: any) => boolean
        interviewFlagTouches: (state: Record<string, boolean>, action: any, fullState: any) => Record<string, boolean>
        interviewFlagManualErrors: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
    }
    selector: (state: any) => {
        schedulerInstructions: boolean
        interviewFlagModal: boolean
        interviewFlag: {
            key: string
            title: string
            body: string
            description: string
            bookingLink: string
        }
        isInterviewFlagSubmitting: boolean
        showInterviewFlagErrors: boolean
        interviewFlagChanged: boolean
        interviewFlagTouches: Record<string, boolean>
        interviewFlagManualErrors: Record<string, any>
    }
    selectors: {
        schedulerInstructions: (state: any, props?: any) => boolean
        interviewFlagModal: (state: any, props?: any) => boolean
        interviewFlag: (
            state: any,
            props?: any
        ) => {
            key: string
            title: string
            body: string
            description: string
            bookingLink: string
        }
        isInterviewFlagSubmitting: (state: any, props?: any) => boolean
        showInterviewFlagErrors: (state: any, props?: any) => boolean
        interviewFlagChanged: (state: any, props?: any) => boolean
        interviewFlagTouches: (state: any, props?: any) => Record<string, boolean>
        interviewFlagManualErrors: (state: any, props?: any) => Record<string, any>
        interviewFlagTouched: (state: any, props?: any) => boolean
        interviewFlagValidationErrors: (
            state: any,
            props?: any
        ) => DeepPartialMap<
            {
                key: string
                title: string
                body: string
                description: string
                bookingLink: string
            },
            ValidationErrorType
        >
        interviewFlagAllErrors: (state: any, props?: any) => Record<string, any>
        interviewFlagHasErrors: (state: any, props?: any) => boolean
        interviewFlagErrors: (
            state: any,
            props?: any
        ) => DeepPartialMap<
            {
                key: string
                title: string
                body: string
                description: string
                bookingLink: string
            },
            ValidationErrorType
        >
        isInterviewFlagValid: (state: any, props?: any) => boolean
        interviewFlagPayload: (
            state: any,
            props?: any
        ) => { invitationTitle: string; invitationBody: string; bookingLink: string }
    }
    sharedListeners: {}
    values: {
        schedulerInstructions: boolean
        interviewFlagModal: boolean
        interviewFlag: {
            key: string
            title: string
            body: string
            description: string
            bookingLink: string
        }
        isInterviewFlagSubmitting: boolean
        showInterviewFlagErrors: boolean
        interviewFlagChanged: boolean
        interviewFlagTouches: Record<string, boolean>
        interviewFlagManualErrors: Record<string, any>
        interviewFlagTouched: boolean
        interviewFlagValidationErrors: DeepPartialMap<
            {
                key: string
                title: string
                body: string
                description: string
                bookingLink: string
            },
            ValidationErrorType
        >
        interviewFlagAllErrors: Record<string, any>
        interviewFlagHasErrors: boolean
        interviewFlagErrors: DeepPartialMap<
            {
                key: string
                title: string
                body: string
                description: string
                bookingLink: string
            },
            ValidationErrorType
        >
        isInterviewFlagValid: boolean
        interviewFlagPayload: { invitationTitle: string; invitationBody: string; bookingLink: string }
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        interviewFlagPayload: (interviewFlag: {
            key: string
            title: string
            body: string
            description: string
            bookingLink: string
        }) => { invitationTitle: string; invitationBody: string; bookingLink: string }
    }
}
