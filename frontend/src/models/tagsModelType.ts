// Generated by kea-typegen on Thu, 20 Jul 2023 11:19:44 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

export interface tagsModelType extends Logic {
    actionCreators: {
        loadTags: () => {
            type: 'load tags (models.tagsModel)'
            payload: any
        }
        loadTagsSuccess: (
            tags: string[],
            payload?: any
        ) => {
            type: 'load tags success (models.tagsModel)'
            payload: {
                tags: string[]
                payload?: any
            }
        }
        loadTagsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load tags failure (models.tagsModel)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'load tags (models.tagsModel)': 'loadTags'
        'load tags success (models.tagsModel)': 'loadTagsSuccess'
        'load tags failure (models.tagsModel)': 'loadTagsFailure'
    }
    actionTypes: {
        loadTags: 'load tags (models.tagsModel)'
        loadTagsSuccess: 'load tags success (models.tagsModel)'
        loadTagsFailure: 'load tags failure (models.tagsModel)'
    }
    actions: {
        loadTags: () => void
        loadTagsSuccess: (tags: string[], payload?: any) => void
        loadTagsFailure: (error: string, errorObject?: any) => void
    }
    asyncActions: {
        loadTags: () => Promise<any>
        loadTagsSuccess: (tags: string[], payload?: any) => Promise<any>
        loadTagsFailure: (error: string, errorObject?: any) => Promise<any>
    }
    defaults: {
        tags: string[]
        tagsLoading: boolean
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['models', 'tagsModel']
    pathString: 'models.tagsModel'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        tags: string[]
        tagsLoading: boolean
    }
    reducers: {
        tags: (state: string[], action: any, fullState: any) => string[]
        tagsLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        tags: string[]
        tagsLoading: boolean
    }
    selectors: {
        tags: (state: any, props?: any) => string[]
        tagsLoading: (state: any, props?: any) => boolean
        hasDashboardCollaboration: (state: any, props?: any) => boolean | undefined
    }
    sharedListeners: {}
    values: {
        tags: string[]
        tagsLoading: boolean
        hasDashboardCollaboration: boolean | undefined
    }
    _isKea: true
    _isKeaWithKey: false
}