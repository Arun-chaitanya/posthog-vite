// Generated by kea-typegen on Thu, 20 Jul 2023 11:26:41 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { ActionType, Breadcrumb, UserType } from '../../types'
import type { FeatureFlagsSet } from '../../lib/logic/featureFlagLogic'

export interface actionsLogicType extends Logic {
    actionCreators: {
        setFilterByMe: (filterByMe: boolean) => {
            type: 'set filter by me (scenes.actions.actionsLogic)'
            payload: {
                filterByMe: boolean
            }
        }
        setSearchTerm: (searchTerm: string) => {
            type: 'set search term (scenes.actions.actionsLogic)'
            payload: {
                searchTerm: string
            }
        }
    }
    actionKeys: {
        'set filter by me (scenes.actions.actionsLogic)': 'setFilterByMe'
        'set search term (scenes.actions.actionsLogic)': 'setSearchTerm'
    }
    actionTypes: {
        setFilterByMe: 'set filter by me (scenes.actions.actionsLogic)'
        setSearchTerm: 'set search term (scenes.actions.actionsLogic)'
    }
    actions: {
        setFilterByMe: (filterByMe: boolean) => void
        setSearchTerm: (searchTerm: string) => void
    }
    asyncActions: {
        setFilterByMe: (filterByMe: boolean) => Promise<any>
        setSearchTerm: (searchTerm: string) => Promise<any>
    }
    defaults: {
        filterByMe: boolean
        searchTerm: string
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['scenes', 'actions', 'actionsLogic']
    pathString: 'scenes.actions.actionsLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        filterByMe: boolean
        searchTerm: string
    }
    reducers: {
        filterByMe: (state: boolean, action: any, fullState: any) => boolean
        searchTerm: (state: string, action: any, fullState: any) => string
    }
    selector: (state: any) => {
        filterByMe: boolean
        searchTerm: string
    }
    selectors: {
        filterByMe: (state: any, props?: any) => boolean
        searchTerm: (state: any, props?: any) => string
        actions: (state: any, props?: any) => ActionType[]
        actionsLoading: (state: any, props?: any) => boolean
        user: (state: any, props?: any) => UserType | null
        featureFlags: (state: any, props?: any) => FeatureFlagsSet
        actionsFiltered: (state: any, props?: any) => ActionType[]
        breadcrumbs: (state: any, props?: any) => Breadcrumb[]
        shouldShowProductIntroduction: (state: any, props?: any) => boolean
        shouldShowEmptyState: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        filterByMe: boolean
        searchTerm: string
        actions: ActionType[]
        actionsLoading: boolean
        user: UserType | null
        featureFlags: FeatureFlagsSet
        actionsFiltered: ActionType[]
        breadcrumbs: Breadcrumb[]
        shouldShowProductIntroduction: boolean
        shouldShowEmptyState: boolean
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        actionsFiltered: (
            actions: ActionType[],
            filterByMe: boolean,
            searchTerm: string,
            user:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').UserType
                | null
        ) => ActionType[]
        shouldShowProductIntroduction: (
            user:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').UserType
                | null,
            featureFlags: import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/lib/logic/featureFlagLogic').FeatureFlagsSet
        ) => boolean
        shouldShowEmptyState: (actionsFiltered: ActionType[], actionsLoading: boolean, searchTerm: string) => boolean
    }
}
