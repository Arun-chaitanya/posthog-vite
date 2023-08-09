// Generated by kea-typegen on Thu, 20 Jul 2023 11:14:22 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { TextCardModalProps, TextTileForm } from './textCardModalLogic'
import type { DeepPartial, DeepPartialMap, FieldName, ValidationErrorType } from '../../../../../../node_modules/kea-forms'

export interface textCardModalLogicType extends Logic {
    actionCreators: {
        updateDashboard: ({ id, allowUndo, ...payload }: any) => {
            type: 'update dashboard (scenes.dashboard.dashboardTextTileModal.logic)'
            payload: any
        }
        setTextTileValue: (
            key: FieldName,
            value: any
        ) => {
            type: 'set text tile value (scenes.dashboard.dashboardTextTileModal.logic)'
            payload: {
                name: FieldName
                value: any
            }
        }
        setTextTileValues: (values: DeepPartial<TextTileForm>) => {
            type: 'set text tile values (scenes.dashboard.dashboardTextTileModal.logic)'
            payload: {
                values: DeepPartial<TextTileForm>
            }
        }
        setTextTileManualErrors: (errors: Record<string, any>) => {
            type: 'set text tile manual errors (scenes.dashboard.dashboardTextTileModal.logic)'
            payload: {
                errors: Record<string, any>
            }
        }
        touchTextTileField: (key: string) => {
            type: 'touch text tile field (scenes.dashboard.dashboardTextTileModal.logic)'
            payload: {
                key: string
            }
        }
        resetTextTile: (values?: TextTileForm) => {
            type: 'reset text tile (scenes.dashboard.dashboardTextTileModal.logic)'
            payload: {
                values?: TextTileForm
            }
        }
        submitTextTile: () => {
            type: 'submit text tile (scenes.dashboard.dashboardTextTileModal.logic)'
            payload: {
                value: boolean
            }
        }
        submitTextTileRequest: (textTile: TextTileForm) => {
            type: 'submit text tile request (scenes.dashboard.dashboardTextTileModal.logic)'
            payload: {
                textTile: TextTileForm
            }
        }
        submitTextTileSuccess: (textTile: TextTileForm) => {
            type: 'submit text tile success (scenes.dashboard.dashboardTextTileModal.logic)'
            payload: {
                textTile: TextTileForm
            }
        }
        submitTextTileFailure: (
            error: Error,
            errors: Record<string, any>
        ) => {
            type: 'submit text tile failure (scenes.dashboard.dashboardTextTileModal.logic)'
            payload: {
                error: Error
                errors: Record<string, any>
            }
        }
    }
    actionKeys: {
        'update dashboard (scenes.dashboard.dashboardTextTileModal.logic)': 'updateDashboard'
        'set text tile value (scenes.dashboard.dashboardTextTileModal.logic)': 'setTextTileValue'
        'set text tile values (scenes.dashboard.dashboardTextTileModal.logic)': 'setTextTileValues'
        'set text tile manual errors (scenes.dashboard.dashboardTextTileModal.logic)': 'setTextTileManualErrors'
        'touch text tile field (scenes.dashboard.dashboardTextTileModal.logic)': 'touchTextTileField'
        'reset text tile (scenes.dashboard.dashboardTextTileModal.logic)': 'resetTextTile'
        'submit text tile (scenes.dashboard.dashboardTextTileModal.logic)': 'submitTextTile'
        'submit text tile request (scenes.dashboard.dashboardTextTileModal.logic)': 'submitTextTileRequest'
        'submit text tile success (scenes.dashboard.dashboardTextTileModal.logic)': 'submitTextTileSuccess'
        'submit text tile failure (scenes.dashboard.dashboardTextTileModal.logic)': 'submitTextTileFailure'
    }
    actionTypes: {
        updateDashboard: 'update dashboard (scenes.dashboard.dashboardTextTileModal.logic)'
        setTextTileValue: 'set text tile value (scenes.dashboard.dashboardTextTileModal.logic)'
        setTextTileValues: 'set text tile values (scenes.dashboard.dashboardTextTileModal.logic)'
        setTextTileManualErrors: 'set text tile manual errors (scenes.dashboard.dashboardTextTileModal.logic)'
        touchTextTileField: 'touch text tile field (scenes.dashboard.dashboardTextTileModal.logic)'
        resetTextTile: 'reset text tile (scenes.dashboard.dashboardTextTileModal.logic)'
        submitTextTile: 'submit text tile (scenes.dashboard.dashboardTextTileModal.logic)'
        submitTextTileRequest: 'submit text tile request (scenes.dashboard.dashboardTextTileModal.logic)'
        submitTextTileSuccess: 'submit text tile success (scenes.dashboard.dashboardTextTileModal.logic)'
        submitTextTileFailure: 'submit text tile failure (scenes.dashboard.dashboardTextTileModal.logic)'
    }
    actions: {
        updateDashboard: ({ id, allowUndo, ...payload }: any) => void
        setTextTileValue: (key: FieldName, value: any) => void
        setTextTileValues: (values: DeepPartial<TextTileForm>) => void
        setTextTileManualErrors: (errors: Record<string, any>) => void
        touchTextTileField: (key: string) => void
        resetTextTile: (values?: TextTileForm) => void
        submitTextTile: () => void
        submitTextTileRequest: (textTile: TextTileForm) => void
        submitTextTileSuccess: (textTile: TextTileForm) => void
        submitTextTileFailure: (error: Error, errors: Record<string, any>) => void
    }
    asyncActions: {
        updateDashboard: ({ id, allowUndo, ...payload }: any) => Promise<any>
        setTextTileValue: (key: FieldName, value: any) => Promise<any>
        setTextTileValues: (values: DeepPartial<TextTileForm>) => Promise<any>
        setTextTileManualErrors: (errors: Record<string, any>) => Promise<any>
        touchTextTileField: (key: string) => Promise<any>
        resetTextTile: (values?: TextTileForm) => Promise<any>
        submitTextTile: () => Promise<any>
        submitTextTileRequest: (textTile: TextTileForm) => Promise<any>
        submitTextTileSuccess: (textTile: TextTileForm) => Promise<any>
        submitTextTileFailure: (error: Error, errors: Record<string, any>) => Promise<any>
    }
    defaults: {
        textTile: TextTileForm
        isTextTileSubmitting: boolean
        showTextTileErrors: boolean
        textTileChanged: boolean
        textTileTouches: Record<string, boolean>
        textTileManualErrors: Record<string, any>
    }
    events: {}
    key: string
    listeners: {}
    path: ['scenes', 'dashboard', 'dashboardTextTileModal', 'logic']
    pathString: 'scenes.dashboard.dashboardTextTileModal.logic'
    props: TextCardModalProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        textTile: TextTileForm
        isTextTileSubmitting: boolean
        showTextTileErrors: boolean
        textTileChanged: boolean
        textTileTouches: Record<string, boolean>
        textTileManualErrors: Record<string, any>
    }
    reducers: {
        textTile: (state: TextTileForm, action: any, fullState: any) => TextTileForm
        isTextTileSubmitting: (state: boolean, action: any, fullState: any) => boolean
        showTextTileErrors: (state: boolean, action: any, fullState: any) => boolean
        textTileChanged: (state: boolean, action: any, fullState: any) => boolean
        textTileTouches: (state: Record<string, boolean>, action: any, fullState: any) => Record<string, boolean>
        textTileManualErrors: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
    }
    selector: (state: any) => {
        textTile: TextTileForm
        isTextTileSubmitting: boolean
        showTextTileErrors: boolean
        textTileChanged: boolean
        textTileTouches: Record<string, boolean>
        textTileManualErrors: Record<string, any>
    }
    selectors: {
        textTile: (state: any, props?: any) => TextTileForm
        isTextTileSubmitting: (state: any, props?: any) => boolean
        showTextTileErrors: (state: any, props?: any) => boolean
        textTileChanged: (state: any, props?: any) => boolean
        textTileTouches: (state: any, props?: any) => Record<string, boolean>
        textTileManualErrors: (state: any, props?: any) => Record<string, any>
        textTileTouched: (state: any, props?: any) => boolean
        textTileValidationErrors: (state: any, props?: any) => DeepPartialMap<TextTileForm, ValidationErrorType>
        textTileAllErrors: (state: any, props?: any) => Record<string, any>
        textTileHasErrors: (state: any, props?: any) => boolean
        textTileErrors: (state: any, props?: any) => DeepPartialMap<TextTileForm, ValidationErrorType>
        isTextTileValid: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        textTile: TextTileForm
        isTextTileSubmitting: boolean
        showTextTileErrors: boolean
        textTileChanged: boolean
        textTileTouches: Record<string, boolean>
        textTileManualErrors: Record<string, any>
        textTileTouched: boolean
        textTileValidationErrors: DeepPartialMap<TextTileForm, ValidationErrorType>
        textTileAllErrors: Record<string, any>
        textTileHasErrors: boolean
        textTileErrors: DeepPartialMap<TextTileForm, ValidationErrorType>
        isTextTileValid: boolean
    }
    _isKea: true
    _isKeaWithKey: true
}
