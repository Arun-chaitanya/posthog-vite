// Generated by kea-typegen on Thu, 20 Jul 2023 11:19:52 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { HogQLEditorLogicProps } from './hogQLEditorLogic'
import type { HogQLMetadataResponse } from '../../../queries/schema'

export interface hogQLEditorLogicType extends Logic {
    actionCreators: {
        setLocalValue: (localValue: string) => {
            type: 'set local value (lib.components.HogQLEditor.hogQLEditorLogic)'
            payload: {
                localValue: string
            }
        }
        submit: () => {
            type: 'submit (lib.components.HogQLEditor.hogQLEditorLogic)'
            payload: {
                value: true
            }
        }
        submitSuccess: (
            response: HogQLMetadataResponse | null,
            payload?: {
                value: true
            }
        ) => {
            type: 'submit success (lib.components.HogQLEditor.hogQLEditorLogic)'
            payload: {
                response: HogQLMetadataResponse | null
                payload?: {
                    value: true
                }
            }
        }
        submitFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'submit failure (lib.components.HogQLEditor.hogQLEditorLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'set local value (lib.components.HogQLEditor.hogQLEditorLogic)': 'setLocalValue'
        'submit (lib.components.HogQLEditor.hogQLEditorLogic)': 'submit'
        'submit success (lib.components.HogQLEditor.hogQLEditorLogic)': 'submitSuccess'
        'submit failure (lib.components.HogQLEditor.hogQLEditorLogic)': 'submitFailure'
    }
    actionTypes: {
        setLocalValue: 'set local value (lib.components.HogQLEditor.hogQLEditorLogic)'
        submit: 'submit (lib.components.HogQLEditor.hogQLEditorLogic)'
        submitSuccess: 'submit success (lib.components.HogQLEditor.hogQLEditorLogic)'
        submitFailure: 'submit failure (lib.components.HogQLEditor.hogQLEditorLogic)'
    }
    actions: {
        setLocalValue: (localValue: string) => void
        submit: () => void
        submitSuccess: (
            response: HogQLMetadataResponse | null,
            payload?: {
                value: true
            }
        ) => void
        submitFailure: (error: string, errorObject?: any) => void
    }
    asyncActions: {
        setLocalValue: (localValue: string) => Promise<any>
        submit: () => Promise<any>
        submitSuccess: (
            response: HogQLMetadataResponse | null,
            payload?: {
                value: true
            }
        ) => Promise<any>
        submitFailure: (error: string, errorObject?: any) => Promise<any>
    }
    defaults: {
        response: HogQLMetadataResponse | null
        responseLoading: boolean
        localValue: string
    }
    events: {}
    key: string
    listeners: {}
    path: ['lib', 'components', 'HogQLEditor', 'hogQLEditorLogic']
    pathString: 'lib.components.HogQLEditor.hogQLEditorLogic'
    props: HogQLEditorLogicProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        response: HogQLMetadataResponse | null
        responseLoading: boolean
        localValue: string
    }
    reducers: {
        response: (state: HogQLMetadataResponse | null, action: any, fullState: any) => HogQLMetadataResponse | null
        responseLoading: (state: boolean, action: any, fullState: any) => boolean
        localValue: (state: string, action: any, fullState: any) => string
    }
    selector: (state: any) => {
        response: HogQLMetadataResponse | null
        responseLoading: boolean
        localValue: string
    }
    selectors: {
        response: (state: any, props?: any) => HogQLMetadataResponse | null
        responseLoading: (state: any, props?: any) => boolean
        localValue: (state: any, props?: any) => string
        error: (state: any, props?: any) => string | null
    }
    sharedListeners: {}
    values: {
        response: HogQLMetadataResponse | null
        responseLoading: boolean
        localValue: string
        error: string | null
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        error: (response: HogQLMetadataResponse | null) => string | null
    }
}