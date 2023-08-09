// Generated by kea-typegen on Thu, 20 Jul 2023 11:19:58 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { AccessLevel, FusedTeamMemberType, Resource, RoleMemberType, RoleType, UserBasicType } from '../../../../../types'

export interface rolesLogicType extends Logic {
    actionCreators: {
        setCreateRoleModalShown: (shown: boolean) => {
            type: 'set create role modal shown (scenes.organization.rolesLogic)'
            payload: {
                shown: boolean
            }
        }
        setRoleInFocus: (role: null | RoleType) => {
            type: 'set role in focus (scenes.organization.rolesLogic)'
            payload: {
                role: RoleType | null
            }
        }
        setRoleMembersInFocus: (roleMembers: RoleMemberType[]) => {
            type: 'set role members in focus (scenes.organization.rolesLogic)'
            payload: {
                roleMembers: RoleMemberType[]
            }
        }
        setRoleMembersToAdd: (uuids: string[]) => {
            type: 'set role members to add (scenes.organization.rolesLogic)'
            payload: {
                uuids: string[]
            }
        }
        openCreateRoleModal: () => {
            type: 'open create role modal (scenes.organization.rolesLogic)'
            payload: {
                value: true
            }
        }
        setPermission: (
            resource: Resource,
            access: AccessLevel
        ) => {
            type: 'set permission (scenes.organization.rolesLogic)'
            payload: {
                resource: Resource
                access: AccessLevel
            }
        }
        clearPermission: () => {
            type: 'clear permission (scenes.organization.rolesLogic)'
            payload: {
                value: true
            }
        }
        updateRole: (role: RoleType) => {
            type: 'update role (scenes.organization.rolesLogic)'
            payload: {
                role: RoleType
            }
        }
        loadRoles: () => {
            type: 'load roles (scenes.organization.rolesLogic)'
            payload: any
        }
        loadRolesSuccess: (
            roles: RoleType[],
            payload?: any
        ) => {
            type: 'load roles success (scenes.organization.rolesLogic)'
            payload: {
                roles: RoleType[]
                payload?: any
            }
        }
        loadRolesFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load roles failure (scenes.organization.rolesLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        createRole: (roleName: string) => {
            type: 'create role (scenes.organization.rolesLogic)'
            payload: string
        }
        createRoleSuccess: (
            roles: RoleType[],
            payload?: string
        ) => {
            type: 'create role success (scenes.organization.rolesLogic)'
            payload: {
                roles: RoleType[]
                payload?: string
            }
        }
        createRoleFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'create role failure (scenes.organization.rolesLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        deleteRole: (role: RoleType) => {
            type: 'delete role (scenes.organization.rolesLogic)'
            payload: RoleType
        }
        deleteRoleSuccess: (
            roles: RoleType[],
            payload?: RoleType
        ) => {
            type: 'delete role success (scenes.organization.rolesLogic)'
            payload: {
                roles: RoleType[]
                payload?: RoleType
            }
        }
        deleteRoleFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'delete role failure (scenes.organization.rolesLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        loadRoleMembers: ({ roleId }: any) => {
            type: 'load role members (scenes.organization.rolesLogic)'
            payload: any
        }
        loadRoleMembersSuccess: (
            roleMembersInFocus: RoleMemberType[],
            payload?: any
        ) => {
            type: 'load role members success (scenes.organization.rolesLogic)'
            payload: {
                roleMembersInFocus: RoleMemberType[]
                payload?: any
            }
        }
        loadRoleMembersFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load role members failure (scenes.organization.rolesLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        addRoleMembers: ({ role, membersToAdd }: any) => {
            type: 'add role members (scenes.organization.rolesLogic)'
            payload: any
        }
        addRoleMembersSuccess: (
            roleMembersInFocus: any[],
            payload?: any
        ) => {
            type: 'add role members success (scenes.organization.rolesLogic)'
            payload: {
                roleMembersInFocus: any[]
                payload?: any
            }
        }
        addRoleMembersFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'add role members failure (scenes.organization.rolesLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        deleteRoleMember: ({ roleMemberUuid }: any) => {
            type: 'delete role member (scenes.organization.rolesLogic)'
            payload: any
        }
        deleteRoleMemberSuccess: (
            roleMembersInFocus: RoleMemberType[],
            payload?: any
        ) => {
            type: 'delete role member success (scenes.organization.rolesLogic)'
            payload: {
                roleMembersInFocus: RoleMemberType[]
                payload?: any
            }
        }
        deleteRoleMemberFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'delete role member failure (scenes.organization.rolesLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'set create role modal shown (scenes.organization.rolesLogic)': 'setCreateRoleModalShown'
        'set role in focus (scenes.organization.rolesLogic)': 'setRoleInFocus'
        'set role members in focus (scenes.organization.rolesLogic)': 'setRoleMembersInFocus'
        'set role members to add (scenes.organization.rolesLogic)': 'setRoleMembersToAdd'
        'open create role modal (scenes.organization.rolesLogic)': 'openCreateRoleModal'
        'set permission (scenes.organization.rolesLogic)': 'setPermission'
        'clear permission (scenes.organization.rolesLogic)': 'clearPermission'
        'update role (scenes.organization.rolesLogic)': 'updateRole'
        'load roles (scenes.organization.rolesLogic)': 'loadRoles'
        'load roles success (scenes.organization.rolesLogic)': 'loadRolesSuccess'
        'load roles failure (scenes.organization.rolesLogic)': 'loadRolesFailure'
        'create role (scenes.organization.rolesLogic)': 'createRole'
        'create role success (scenes.organization.rolesLogic)': 'createRoleSuccess'
        'create role failure (scenes.organization.rolesLogic)': 'createRoleFailure'
        'delete role (scenes.organization.rolesLogic)': 'deleteRole'
        'delete role success (scenes.organization.rolesLogic)': 'deleteRoleSuccess'
        'delete role failure (scenes.organization.rolesLogic)': 'deleteRoleFailure'
        'load role members (scenes.organization.rolesLogic)': 'loadRoleMembers'
        'load role members success (scenes.organization.rolesLogic)': 'loadRoleMembersSuccess'
        'load role members failure (scenes.organization.rolesLogic)': 'loadRoleMembersFailure'
        'add role members (scenes.organization.rolesLogic)': 'addRoleMembers'
        'add role members success (scenes.organization.rolesLogic)': 'addRoleMembersSuccess'
        'add role members failure (scenes.organization.rolesLogic)': 'addRoleMembersFailure'
        'delete role member (scenes.organization.rolesLogic)': 'deleteRoleMember'
        'delete role member success (scenes.organization.rolesLogic)': 'deleteRoleMemberSuccess'
        'delete role member failure (scenes.organization.rolesLogic)': 'deleteRoleMemberFailure'
    }
    actionTypes: {
        setCreateRoleModalShown: 'set create role modal shown (scenes.organization.rolesLogic)'
        setRoleInFocus: 'set role in focus (scenes.organization.rolesLogic)'
        setRoleMembersInFocus: 'set role members in focus (scenes.organization.rolesLogic)'
        setRoleMembersToAdd: 'set role members to add (scenes.organization.rolesLogic)'
        openCreateRoleModal: 'open create role modal (scenes.organization.rolesLogic)'
        setPermission: 'set permission (scenes.organization.rolesLogic)'
        clearPermission: 'clear permission (scenes.organization.rolesLogic)'
        updateRole: 'update role (scenes.organization.rolesLogic)'
        loadRoles: 'load roles (scenes.organization.rolesLogic)'
        loadRolesSuccess: 'load roles success (scenes.organization.rolesLogic)'
        loadRolesFailure: 'load roles failure (scenes.organization.rolesLogic)'
        createRole: 'create role (scenes.organization.rolesLogic)'
        createRoleSuccess: 'create role success (scenes.organization.rolesLogic)'
        createRoleFailure: 'create role failure (scenes.organization.rolesLogic)'
        deleteRole: 'delete role (scenes.organization.rolesLogic)'
        deleteRoleSuccess: 'delete role success (scenes.organization.rolesLogic)'
        deleteRoleFailure: 'delete role failure (scenes.organization.rolesLogic)'
        loadRoleMembers: 'load role members (scenes.organization.rolesLogic)'
        loadRoleMembersSuccess: 'load role members success (scenes.organization.rolesLogic)'
        loadRoleMembersFailure: 'load role members failure (scenes.organization.rolesLogic)'
        addRoleMembers: 'add role members (scenes.organization.rolesLogic)'
        addRoleMembersSuccess: 'add role members success (scenes.organization.rolesLogic)'
        addRoleMembersFailure: 'add role members failure (scenes.organization.rolesLogic)'
        deleteRoleMember: 'delete role member (scenes.organization.rolesLogic)'
        deleteRoleMemberSuccess: 'delete role member success (scenes.organization.rolesLogic)'
        deleteRoleMemberFailure: 'delete role member failure (scenes.organization.rolesLogic)'
    }
    actions: {
        setCreateRoleModalShown: (shown: boolean) => void
        setRoleInFocus: (role: null | RoleType) => void
        setRoleMembersInFocus: (roleMembers: RoleMemberType[]) => void
        setRoleMembersToAdd: (uuids: string[]) => void
        openCreateRoleModal: () => void
        setPermission: (resource: Resource, access: AccessLevel) => void
        clearPermission: () => void
        updateRole: (role: RoleType) => void
        loadRoles: () => void
        loadRolesSuccess: (roles: RoleType[], payload?: any) => void
        loadRolesFailure: (error: string, errorObject?: any) => void
        createRole: (roleName: string) => void
        createRoleSuccess: (roles: RoleType[], payload?: string) => void
        createRoleFailure: (error: string, errorObject?: any) => void
        deleteRole: (role: RoleType) => void
        deleteRoleSuccess: (roles: RoleType[], payload?: RoleType) => void
        deleteRoleFailure: (error: string, errorObject?: any) => void
        loadRoleMembers: ({ roleId }: any) => void
        loadRoleMembersSuccess: (roleMembersInFocus: RoleMemberType[], payload?: any) => void
        loadRoleMembersFailure: (error: string, errorObject?: any) => void
        addRoleMembers: ({ role, membersToAdd }: any) => void
        addRoleMembersSuccess: (roleMembersInFocus: any[], payload?: any) => void
        addRoleMembersFailure: (error: string, errorObject?: any) => void
        deleteRoleMember: ({ roleMemberUuid }: any) => void
        deleteRoleMemberSuccess: (roleMembersInFocus: RoleMemberType[], payload?: any) => void
        deleteRoleMemberFailure: (error: string, errorObject?: any) => void
    }
    asyncActions: {
        setCreateRoleModalShown: (shown: boolean) => Promise<any>
        setRoleInFocus: (role: null | RoleType) => Promise<any>
        setRoleMembersInFocus: (roleMembers: RoleMemberType[]) => Promise<any>
        setRoleMembersToAdd: (uuids: string[]) => Promise<any>
        openCreateRoleModal: () => Promise<any>
        setPermission: (resource: Resource, access: AccessLevel) => Promise<any>
        clearPermission: () => Promise<any>
        updateRole: (role: RoleType) => Promise<any>
        loadRoles: () => Promise<any>
        loadRolesSuccess: (roles: RoleType[], payload?: any) => Promise<any>
        loadRolesFailure: (error: string, errorObject?: any) => Promise<any>
        createRole: (roleName: string) => Promise<any>
        createRoleSuccess: (roles: RoleType[], payload?: string) => Promise<any>
        createRoleFailure: (error: string, errorObject?: any) => Promise<any>
        deleteRole: (role: RoleType) => Promise<any>
        deleteRoleSuccess: (roles: RoleType[], payload?: RoleType) => Promise<any>
        deleteRoleFailure: (error: string, errorObject?: any) => Promise<any>
        loadRoleMembers: ({ roleId }: any) => Promise<any>
        loadRoleMembersSuccess: (roleMembersInFocus: RoleMemberType[], payload?: any) => Promise<any>
        loadRoleMembersFailure: (error: string, errorObject?: any) => Promise<any>
        addRoleMembers: ({ role, membersToAdd }: any) => Promise<any>
        addRoleMembersSuccess: (roleMembersInFocus: any[], payload?: any) => Promise<any>
        addRoleMembersFailure: (error: string, errorObject?: any) => Promise<any>
        deleteRoleMember: ({ roleMemberUuid }: any) => Promise<any>
        deleteRoleMemberSuccess: (roleMembersInFocus: RoleMemberType[], payload?: any) => Promise<any>
        deleteRoleMemberFailure: (error: string, errorObject?: any) => Promise<any>
    }
    defaults: {
        createRoleModalShown: boolean
        roleInFocus: null | RoleType
        roleMembersInFocus: RoleMemberType[]
        roleMembersToAdd: string[]
        roles: RoleType[]
        rolesLoading: boolean
        roleMembersInFocusLoading: boolean
    }
    events: {}
    key: undefined
    listeners: {
        setRoleInFocus: ((
            action: {
                type: 'set role in focus (scenes.organization.rolesLogic)'
                payload: {
                    role: RoleType | null
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        openCreateRoleModal: ((
            action: {
                type: 'open create role modal (scenes.organization.rolesLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setCreateRoleModalShown: ((
            action: {
                type: 'set create role modal shown (scenes.organization.rolesLogic)'
                payload: {
                    shown: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        deleteRoleSuccess: ((
            action: {
                type: 'delete role success (scenes.organization.rolesLogic)'
                payload: {
                    roles: RoleType[]
                    payload?: RoleType
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'organization', 'rolesLogic']
    pathString: 'scenes.organization.rolesLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        createRoleModalShown: boolean
        roleInFocus: null | RoleType
        roleMembersInFocus: RoleMemberType[]
        roleMembersToAdd: string[]
        roles: RoleType[]
        rolesLoading: boolean
        roleMembersInFocusLoading: boolean
    }
    reducers: {
        createRoleModalShown: (state: boolean, action: any, fullState: any) => boolean
        roleInFocus: (state: null | RoleType, action: any, fullState: any) => null | RoleType
        roleMembersInFocus: (state: RoleMemberType[], action: any, fullState: any) => RoleMemberType[]
        roleMembersToAdd: (state: string[], action: any, fullState: any) => string[]
        roles: (state: RoleType[], action: any, fullState: any) => RoleType[]
        rolesLoading: (state: boolean, action: any, fullState: any) => boolean
        roleMembersInFocusLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        createRoleModalShown: boolean
        roleInFocus: null | RoleType
        roleMembersInFocus: RoleMemberType[]
        roleMembersToAdd: string[]
        roles: RoleType[]
        rolesLoading: boolean
        roleMembersInFocusLoading: boolean
    }
    selectors: {
        createRoleModalShown: (state: any, props?: any) => boolean
        roleInFocus: (state: any, props?: any) => null | RoleType
        roleMembersInFocus: (state: any, props?: any) => RoleMemberType[]
        roleMembersToAdd: (state: any, props?: any) => string[]
        roles: (state: any, props?: any) => RoleType[]
        rolesLoading: (state: any, props?: any) => boolean
        roleMembersInFocusLoading: (state: any, props?: any) => boolean
        allMembers: (state: any, props?: any) => FusedTeamMemberType[]
        addableMembers: (state: any, props?: any) => UserBasicType[]
    }
    sharedListeners: {}
    values: {
        createRoleModalShown: boolean
        roleInFocus: null | RoleType
        roleMembersInFocus: RoleMemberType[]
        roleMembersToAdd: string[]
        roles: RoleType[]
        rolesLoading: boolean
        roleMembersInFocusLoading: boolean
        allMembers: FusedTeamMemberType[]
        addableMembers: UserBasicType[]
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        addableMembers: (
            allMembers: import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').FusedTeamMemberType[],
            roleMembersInFocus: RoleMemberType[]
        ) => UserBasicType[]
    }
}