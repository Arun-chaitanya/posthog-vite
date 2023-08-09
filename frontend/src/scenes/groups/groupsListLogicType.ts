// Generated by kea-typegen on Thu, 20 Jul 2023 11:23:55 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { GroupsListLogicProps, GroupsPaginatedResponse } from './groupsListLogic'
import type { Breadcrumb, GroupType } from '../../types'
import type { Noun } from '../../models/groupsModel'

export interface groupsListLogicType extends Logic {
    actionCreators: {
        loadGroups: (url?: string | null) => {
            type: 'load groups (groups.groupsListLogic)'
            payload: {
                url: string | null | undefined
            }
        }
        setSearch: (
            search: string,
            debounce?: boolean
        ) => {
            type: 'set search (groups.groupsListLogic)'
            payload: {
                search: string
                debounce: boolean
            }
        }
        loadGroupsSuccess: (
            groups: GroupsPaginatedResponse,
            payload?: {
                url: string | null | undefined
            }
        ) => {
            type: 'load groups success (groups.groupsListLogic)'
            payload: {
                groups: GroupsPaginatedResponse
                payload?: {
                    url: string | null | undefined
                }
            }
        }
        loadGroupsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load groups failure (groups.groupsListLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'load groups (groups.groupsListLogic)': 'loadGroups'
        'set search (groups.groupsListLogic)': 'setSearch'
        'load groups success (groups.groupsListLogic)': 'loadGroupsSuccess'
        'load groups failure (groups.groupsListLogic)': 'loadGroupsFailure'
    }
    actionTypes: {
        loadGroups: 'load groups (groups.groupsListLogic)'
        setSearch: 'set search (groups.groupsListLogic)'
        loadGroupsSuccess: 'load groups success (groups.groupsListLogic)'
        loadGroupsFailure: 'load groups failure (groups.groupsListLogic)'
    }
    actions: {
        loadGroups: (url?: string | null) => void
        setSearch: (search: string, debounce?: boolean) => void
        loadGroupsSuccess: (
            groups: GroupsPaginatedResponse,
            payload?: {
                url: string | null | undefined
            }
        ) => void
        loadGroupsFailure: (error: string, errorObject?: any) => void
    }
    asyncActions: {
        loadGroups: (url?: string | null) => Promise<any>
        setSearch: (search: string, debounce?: boolean) => Promise<any>
        loadGroupsSuccess: (
            groups: GroupsPaginatedResponse,
            payload?: {
                url: string | null | undefined
            }
        ) => Promise<any>
        loadGroupsFailure: (error: string, errorObject?: any) => Promise<any>
    }
    defaults: {
        groups: GroupsPaginatedResponse
        groupsLoading: boolean
        search: string
    }
    events: {
        afterMount: () => void
    }
    key: number
    listeners: {
        setSearch: ((
            action: {
                type: 'set search (groups.groupsListLogic)'
                payload: {
                    search: string
                    debounce: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['groups', 'groupsListLogic']
    pathString: 'groups.groupsListLogic'
    props: GroupsListLogicProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        groups: GroupsPaginatedResponse
        groupsLoading: boolean
        search: string
    }
    reducers: {
        groups: (state: GroupsPaginatedResponse, action: any, fullState: any) => GroupsPaginatedResponse
        groupsLoading: (state: boolean, action: any, fullState: any) => boolean
        search: (state: string, action: any, fullState: any) => string
    }
    selector: (state: any) => {
        groups: GroupsPaginatedResponse
        groupsLoading: boolean
        search: string
    }
    selectors: {
        groups: (state: any, props?: any) => GroupsPaginatedResponse
        groupsLoading: (state: any, props?: any) => boolean
        search: (state: any, props?: any) => string
        currentTeamId: (state: any, props?: any) => number | null
        groupTypes: (state: any, props?: any) => Array<GroupType>
        aggregationLabel: (
            state: any,
            props?: any
        ) => (groupTypeIndex: number | null | undefined, deferToUserWording?: boolean) => Noun
        groupsEnabled: (state: any, props?: any) => boolean
        groupTypeName: (state: any, props?: any) => Noun
        breadcrumbs: (state: any, props?: any) => Breadcrumb[]
    }
    sharedListeners: {}
    values: {
        groups: GroupsPaginatedResponse
        groupsLoading: boolean
        search: string
        currentTeamId: number | null
        groupTypes: Array<GroupType>
        aggregationLabel: (groupTypeIndex: number | null | undefined, deferToUserWording?: boolean) => Noun
        groupsEnabled: boolean
        groupTypeName: Noun
        breadcrumbs: Breadcrumb[]
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        groupTypeName: (
            groupTypeIndex: number,
            aggregationLabel: (
                groupTypeIndex: number | null | undefined,
                deferToUserWording?: boolean | undefined
            ) => Noun
        ) => Noun
        breadcrumbs: (groupTypeName: Noun, groupTypeIndex: number) => Breadcrumb[]
    }
}