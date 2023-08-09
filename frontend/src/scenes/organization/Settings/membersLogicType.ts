// Generated by kea-typegen on Thu, 20 Jul 2023 11:18:06 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { OrganizationMemberType, UserType } from '../../../types'
import type { OrganizationMembershipLevel } from '../../../lib/constants'
import type { MembersFuse } from './membersLogic'

export interface membersLogicType extends Logic {
    actionCreators: {
        setSearch: (search: any) => {
            type: 'set search (scenes.organization.Settings.membersLogic)'
            payload: {
                search: any
            }
        }
        changeMemberAccessLevel: (
            member: OrganizationMemberType,
            level: OrganizationMembershipLevel
        ) => {
            type: 'change member access level (scenes.organization.Settings.membersLogic)'
            payload: {
                member: OrganizationMemberType
                level: OrganizationMembershipLevel
            }
        }
        postRemoveMember: (userUuid: string) => {
            type: 'post remove member (scenes.organization.Settings.membersLogic)'
            payload: {
                userUuid: string
            }
        }
        loadMembers: () => {
            type: 'load members (scenes.organization.Settings.membersLogic)'
            payload: any
        }
        loadMembersSuccess: (
            members: OrganizationMemberType[],
            payload?: any
        ) => {
            type: 'load members success (scenes.organization.Settings.membersLogic)'
            payload: {
                members: OrganizationMemberType[]
                payload?: any
            }
        }
        loadMembersFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load members failure (scenes.organization.Settings.membersLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        removeMember: (member: OrganizationMemberType) => {
            type: 'remove member (scenes.organization.Settings.membersLogic)'
            payload: OrganizationMemberType
        }
        removeMemberSuccess: (
            members: OrganizationMemberType[],
            payload?: OrganizationMemberType
        ) => {
            type: 'remove member success (scenes.organization.Settings.membersLogic)'
            payload: {
                members: OrganizationMemberType[]
                payload?: OrganizationMemberType
            }
        }
        removeMemberFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'remove member failure (scenes.organization.Settings.membersLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'set search (scenes.organization.Settings.membersLogic)': 'setSearch'
        'change member access level (scenes.organization.Settings.membersLogic)': 'changeMemberAccessLevel'
        'post remove member (scenes.organization.Settings.membersLogic)': 'postRemoveMember'
        'load members (scenes.organization.Settings.membersLogic)': 'loadMembers'
        'load members success (scenes.organization.Settings.membersLogic)': 'loadMembersSuccess'
        'load members failure (scenes.organization.Settings.membersLogic)': 'loadMembersFailure'
        'remove member (scenes.organization.Settings.membersLogic)': 'removeMember'
        'remove member success (scenes.organization.Settings.membersLogic)': 'removeMemberSuccess'
        'remove member failure (scenes.organization.Settings.membersLogic)': 'removeMemberFailure'
    }
    actionTypes: {
        setSearch: 'set search (scenes.organization.Settings.membersLogic)'
        changeMemberAccessLevel: 'change member access level (scenes.organization.Settings.membersLogic)'
        postRemoveMember: 'post remove member (scenes.organization.Settings.membersLogic)'
        loadMembers: 'load members (scenes.organization.Settings.membersLogic)'
        loadMembersSuccess: 'load members success (scenes.organization.Settings.membersLogic)'
        loadMembersFailure: 'load members failure (scenes.organization.Settings.membersLogic)'
        removeMember: 'remove member (scenes.organization.Settings.membersLogic)'
        removeMemberSuccess: 'remove member success (scenes.organization.Settings.membersLogic)'
        removeMemberFailure: 'remove member failure (scenes.organization.Settings.membersLogic)'
    }
    actions: {
        setSearch: (search: any) => void
        changeMemberAccessLevel: (member: OrganizationMemberType, level: OrganizationMembershipLevel) => void
        postRemoveMember: (userUuid: string) => void
        loadMembers: () => void
        loadMembersSuccess: (members: OrganizationMemberType[], payload?: any) => void
        loadMembersFailure: (error: string, errorObject?: any) => void
        removeMember: (member: OrganizationMemberType) => void
        removeMemberSuccess: (members: OrganizationMemberType[], payload?: OrganizationMemberType) => void
        removeMemberFailure: (error: string, errorObject?: any) => void
    }
    asyncActions: {
        setSearch: (search: any) => Promise<any>
        changeMemberAccessLevel: (member: OrganizationMemberType, level: OrganizationMembershipLevel) => Promise<any>
        postRemoveMember: (userUuid: string) => Promise<any>
        loadMembers: () => Promise<any>
        loadMembersSuccess: (members: OrganizationMemberType[], payload?: any) => Promise<any>
        loadMembersFailure: (error: string, errorObject?: any) => Promise<any>
        removeMember: (member: OrganizationMemberType) => Promise<any>
        removeMemberSuccess: (members: OrganizationMemberType[], payload?: OrganizationMemberType) => Promise<any>
        removeMemberFailure: (error: string, errorObject?: any) => Promise<any>
    }
    defaults: {
        search: string
        members: OrganizationMemberType[]
        membersLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        changeMemberAccessLevel: ((
            action: {
                type: 'change member access level (scenes.organization.Settings.membersLogic)'
                payload: {
                    member: OrganizationMemberType
                    level: OrganizationMembershipLevel
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        postRemoveMember: ((
            action: {
                type: 'post remove member (scenes.organization.Settings.membersLogic)'
                payload: {
                    userUuid: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'organization', 'Settings', 'membersLogic']
    pathString: 'scenes.organization.Settings.membersLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        search: string
        members: OrganizationMemberType[]
        membersLoading: boolean
    }
    reducers: {
        search: (state: string, action: any, fullState: any) => string
        members: (state: OrganizationMemberType[], action: any, fullState: any) => OrganizationMemberType[]
        membersLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        search: string
        members: OrganizationMemberType[]
        membersLoading: boolean
    }
    selectors: {
        search: (state: any, props?: any) => string
        members: (state: any, props?: any) => OrganizationMemberType[]
        membersLoading: (state: any, props?: any) => boolean
        user: (state: any, props?: any) => UserType | null
        meFirstMembers: (state: any, props?: any) => OrganizationMemberType[]
        membersFuse: (state: any, props?: any) => MembersFuse
        filteredMembers: (state: any, props?: any) => OrganizationMemberType[]
    }
    sharedListeners: {}
    values: {
        search: string
        members: OrganizationMemberType[]
        membersLoading: boolean
        user: UserType | null
        meFirstMembers: OrganizationMemberType[]
        membersFuse: MembersFuse
        filteredMembers: OrganizationMemberType[]
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        meFirstMembers: (
            members: OrganizationMemberType[],
            user:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').UserType
                | null
        ) => OrganizationMemberType[]
        membersFuse: (members: OrganizationMemberType[]) => MembersFuse
        filteredMembers: (
            members: OrganizationMemberType[],
            membersFuse: MembersFuse,
            search: string
        ) => OrganizationMemberType[]
    }
}
