// Generated by kea-typegen on Tue, 08 Aug 2023 10:01:12 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { RenameModalProps } from './renameModalLogic'
import type { ActionFilter, EntityFilter } from '../../../../types'

export interface renameModalLogicType extends Logic {
    actionCreators: {
        selectFilter: (filter: EntityFilter | ActionFilter | null) => {
            type: 'select filter (scenes.insights.ActionFilter.renameModalLogic.*)'
            payload: {
                filter: EntityFilter | ActionFilter | null
            }
        }
        setName: (name: string) => {
            type: 'set name (scenes.insights.ActionFilter.renameModalLogic.*)'
            payload: {
                name: string
            }
        }
    }
    actionKeys: {
        'select filter (scenes.insights.ActionFilter.renameModalLogic.*)': 'selectFilter'
        'set name (scenes.insights.ActionFilter.renameModalLogic.*)': 'setName'
    }
    actionTypes: {
        selectFilter: 'select filter (scenes.insights.ActionFilter.renameModalLogic.*)'
        setName: 'set name (scenes.insights.ActionFilter.renameModalLogic.*)'
    }
    actions: {
        selectFilter: (filter: EntityFilter | ActionFilter | null) => void
        setName: (name: string) => void
    }
    asyncActions: {
        selectFilter: (filter: EntityFilter | ActionFilter | null) => Promise<any>
        setName: (name: string) => Promise<any>
    }
    defaults: {
        name: string
    }
    events: {}
    key: string
    listeners: {}
    path: ['scenes', 'insights', 'ActionFilter', 'renameModalLogic', '*']
    pathString: 'scenes.insights.ActionFilter.renameModalLogic.*'
    props: RenameModalProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        name: string
    }
    reducers: {
        name: (state: string, action: any, fullState: any) => string
    }
    selector: (state: any) => {
        name: string
    }
    selectors: {
        name: (state: any, props?: any) => string
    }
    sharedListeners: {}
    values: {
        name: string
    }
    _isKea: true
    _isKeaWithKey: true
}