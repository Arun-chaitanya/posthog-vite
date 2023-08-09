// Generated by kea-typegen on Thu, 20 Jul 2023 10:55:11 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { PromptType } from './inAppPromptLogic'

export interface inAppPromptEventCaptureLogicType extends Logic {
    actionCreators: {
        reportPromptShown: (
            type: PromptType,
            sequence: string,
            step: number,
            totalSteps: number
        ) => {
            type: 'report prompt shown (lib.logic.inAppPrompt.eventCapture)'
            payload: {
                type: 'tooltip'
                sequence: string
                step: number
                totalSteps: number
            }
        }
        reportPromptForward: (
            sequence: string,
            step: number,
            totalSteps: number
        ) => {
            type: 'report prompt forward (lib.logic.inAppPrompt.eventCapture)'
            payload: {
                sequence: string
                step: number
                totalSteps: number
            }
        }
        reportPromptBackward: (
            sequence: string,
            step: number,
            totalSteps: number
        ) => {
            type: 'report prompt backward (lib.logic.inAppPrompt.eventCapture)'
            payload: {
                sequence: string
                step: number
                totalSteps: number
            }
        }
        reportPromptSequenceDismissed: (
            sequence: string,
            step: number,
            totalSteps: number
        ) => {
            type: 'report prompt sequence dismissed (lib.logic.inAppPrompt.eventCapture)'
            payload: {
                sequence: string
                step: number
                totalSteps: number
            }
        }
        reportPromptSequenceCompleted: (
            sequence: string,
            step: number,
            totalSteps: number
        ) => {
            type: 'report prompt sequence completed (lib.logic.inAppPrompt.eventCapture)'
            payload: {
                sequence: string
                step: number
                totalSteps: number
            }
        }
        reportProductTourStarted: () => {
            type: 'report product tour started (lib.logic.inAppPrompt.eventCapture)'
            payload: {
                value: true
            }
        }
        reportProductTourSkipped: () => {
            type: 'report product tour skipped (lib.logic.inAppPrompt.eventCapture)'
            payload: {
                value: true
            }
        }
    }
    actionKeys: {
        'report prompt shown (lib.logic.inAppPrompt.eventCapture)': 'reportPromptShown'
        'report prompt forward (lib.logic.inAppPrompt.eventCapture)': 'reportPromptForward'
        'report prompt backward (lib.logic.inAppPrompt.eventCapture)': 'reportPromptBackward'
        'report prompt sequence dismissed (lib.logic.inAppPrompt.eventCapture)': 'reportPromptSequenceDismissed'
        'report prompt sequence completed (lib.logic.inAppPrompt.eventCapture)': 'reportPromptSequenceCompleted'
        'report product tour started (lib.logic.inAppPrompt.eventCapture)': 'reportProductTourStarted'
        'report product tour skipped (lib.logic.inAppPrompt.eventCapture)': 'reportProductTourSkipped'
    }
    actionTypes: {
        reportPromptShown: 'report prompt shown (lib.logic.inAppPrompt.eventCapture)'
        reportPromptForward: 'report prompt forward (lib.logic.inAppPrompt.eventCapture)'
        reportPromptBackward: 'report prompt backward (lib.logic.inAppPrompt.eventCapture)'
        reportPromptSequenceDismissed: 'report prompt sequence dismissed (lib.logic.inAppPrompt.eventCapture)'
        reportPromptSequenceCompleted: 'report prompt sequence completed (lib.logic.inAppPrompt.eventCapture)'
        reportProductTourStarted: 'report product tour started (lib.logic.inAppPrompt.eventCapture)'
        reportProductTourSkipped: 'report product tour skipped (lib.logic.inAppPrompt.eventCapture)'
    }
    actions: {
        reportPromptShown: (type: PromptType, sequence: string, step: number, totalSteps: number) => void
        reportPromptForward: (sequence: string, step: number, totalSteps: number) => void
        reportPromptBackward: (sequence: string, step: number, totalSteps: number) => void
        reportPromptSequenceDismissed: (sequence: string, step: number, totalSteps: number) => void
        reportPromptSequenceCompleted: (sequence: string, step: number, totalSteps: number) => void
        reportProductTourStarted: () => void
        reportProductTourSkipped: () => void
    }
    asyncActions: {
        reportPromptShown: (type: PromptType, sequence: string, step: number, totalSteps: number) => Promise<any>
        reportPromptForward: (sequence: string, step: number, totalSteps: number) => Promise<any>
        reportPromptBackward: (sequence: string, step: number, totalSteps: number) => Promise<any>
        reportPromptSequenceDismissed: (sequence: string, step: number, totalSteps: number) => Promise<any>
        reportPromptSequenceCompleted: (sequence: string, step: number, totalSteps: number) => Promise<any>
        reportProductTourStarted: () => Promise<any>
        reportProductTourSkipped: () => Promise<any>
    }
    defaults: {}
    events: {}
    key: undefined
    listeners: {
        reportPromptShown: ((
            action: {
                type: 'report prompt shown (lib.logic.inAppPrompt.eventCapture)'
                payload: {
                    type: 'tooltip'
                    sequence: string
                    step: number
                    totalSteps: number
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        reportPromptForward: ((
            action: {
                type: 'report prompt forward (lib.logic.inAppPrompt.eventCapture)'
                payload: {
                    sequence: string
                    step: number
                    totalSteps: number
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        reportPromptBackward: ((
            action: {
                type: 'report prompt backward (lib.logic.inAppPrompt.eventCapture)'
                payload: {
                    sequence: string
                    step: number
                    totalSteps: number
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        reportPromptSequenceDismissed: ((
            action: {
                type: 'report prompt sequence dismissed (lib.logic.inAppPrompt.eventCapture)'
                payload: {
                    sequence: string
                    step: number
                    totalSteps: number
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        reportPromptSequenceCompleted: ((
            action: {
                type: 'report prompt sequence completed (lib.logic.inAppPrompt.eventCapture)'
                payload: {
                    sequence: string
                    step: number
                    totalSteps: number
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        reportProductTourStarted: ((
            action: {
                type: 'report product tour started (lib.logic.inAppPrompt.eventCapture)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        reportProductTourSkipped: ((
            action: {
                type: 'report product tour skipped (lib.logic.inAppPrompt.eventCapture)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['lib', 'logic', 'inAppPrompt', 'eventCapture']
    pathString: 'lib.logic.inAppPrompt.eventCapture'
    props: Record<string, unknown>
    reducer: (state: any, action: any, fullState: any) => {}
    reducers: {}
    selector: (state: any) => {}
    selectors: {}
    sharedListeners: {}
    values: {}
    _isKea: true
    _isKeaWithKey: false
}
