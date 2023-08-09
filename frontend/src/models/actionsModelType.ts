// Generated by kea-typegen on Thu, 20 Jul 2023 11:14:21 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { ActionsModelProps } from './actionsModel'
import type { ActionType, TeamPublicType, TeamType } from '../types'

export interface actionsModelType extends Logic {
    actionCreators: {
        loadActions: () => {
            type: 'load actions (models.actionsModel)'
            payload: any
        }
        loadActionsSuccess: (
            actions: ActionType[],
            payload?: any
        ) => {
            type: 'load actions success (models.actionsModel)'
            payload: {
                actions: ActionType[]
                payload?: any
            }
        }
        loadActionsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load actions failure (models.actionsModel)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        updateAction: (action: ActionType) => {
            type: 'update action (models.actionsModel)'
            payload: ActionType
        }
        updateActionSuccess: (
            actions: ActionType[],
            payload?: ActionType
        ) => {
            type: 'update action success (models.actionsModel)'
            payload: {
                actions: ActionType[]
                payload?: ActionType
            }
        }
        updateActionFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'update action failure (models.actionsModel)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'load actions (models.actionsModel)': 'loadActions'
        'load actions success (models.actionsModel)': 'loadActionsSuccess'
        'load actions failure (models.actionsModel)': 'loadActionsFailure'
        'update action (models.actionsModel)': 'updateAction'
        'update action success (models.actionsModel)': 'updateActionSuccess'
        'update action failure (models.actionsModel)': 'updateActionFailure'
    }
    actionTypes: {
        loadActions: 'load actions (models.actionsModel)'
        loadActionsSuccess: 'load actions success (models.actionsModel)'
        loadActionsFailure: 'load actions failure (models.actionsModel)'
        updateAction: 'update action (models.actionsModel)'
        updateActionSuccess: 'update action success (models.actionsModel)'
        updateActionFailure: 'update action failure (models.actionsModel)'
    }
    actions: {
        loadActions: () => void
        loadActionsSuccess: (actions: ActionType[], payload?: any) => void
        loadActionsFailure: (error: string, errorObject?: any) => void
        updateAction: (action: ActionType) => void
        updateActionSuccess: (actions: ActionType[], payload?: ActionType) => void
        updateActionFailure: (error: string, errorObject?: any) => void
    }
    asyncActions: {
        loadActions: () => Promise<any>
        loadActionsSuccess: (actions: ActionType[], payload?: any) => Promise<any>
        loadActionsFailure: (error: string, errorObject?: any) => Promise<any>
        updateAction: (action: ActionType) => Promise<any>
        updateActionSuccess: (actions: ActionType[], payload?: ActionType) => Promise<any>
        updateActionFailure: (error: string, errorObject?: any) => Promise<any>
    }
    defaults: {
        actions: ActionType[]
        actionsLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {}
    path: ['models', 'actionsModel']
    pathString: 'models.actionsModel'
    props: ActionsModelProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        actions: ActionType[]
        actionsLoading: boolean
    }
    reducers: {
        actions: (state: ActionType[], action: any, fullState: any) => ActionType[]
        actionsLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        actions: ActionType[]
        actionsLoading: boolean
    }
    selectors: {
        actions: (state: any, props?: any) => ActionType[]
        actionsLoading: (state: any, props?: any) => boolean
        currentTeam: (state: any, props?: any) => TeamType | TeamPublicType | null
        actionsGrouped: (
            state: any,
            props?: any
        ) => { label: string; options: { label: string | null; value: number }[] }[]
        actionsById: (state: any, props?: any) => Partial<Record<string | number, ActionType>>
    }
    sharedListeners: {}
    values: {
        actions: ActionType[]
        actionsLoading: boolean
        currentTeam: TeamType | TeamPublicType | null
        actionsGrouped: { label: string; options: { label: string | null; value: number }[] }[]
        actionsById: Partial<Record<string | number, ActionType>>
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        actionsGrouped: (
            actions: ActionType[]
        ) => { label: string; options: { label: string | null; value: number }[] }[]
        actionsById: (actions: ActionType[]) => Partial<Record<string | number, ActionType>>
    }
}
