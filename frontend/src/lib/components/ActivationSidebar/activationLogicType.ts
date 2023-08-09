// Generated by kea-typegen on Wed, 02 Aug 2023 17:21:46 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { DashboardBasicType, DashboardType, OrganizationInviteType, OrganizationMemberType, PluginType, TeamBasicType, TeamPublicType, TeamType } from '../../../types'
import type { PluginTypeWithConfig } from '../../../scenes/plugins/types'
import type { InsightsResult } from '../../../scenes/saved-insights/savedInsightsLogic'
import type { PaginatedResponse } from '../../api'
import type { ActivationTaskType } from './activationLogic'

export interface activationLogicType extends Logic {
    actionCreators: {
        loadMembersSuccess: (
            members: OrganizationMemberType[],
            payload?: any
        ) => {
            type: 'load members success (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                members: OrganizationMemberType[]
                payload?: any
            }
        }
        loadMembersFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load members failure (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        showInviteModal: () => {
            type: 'show invite modal (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                value: true
            }
        }
        loadInvitesSuccess: (
            invites: OrganizationInviteType[],
            payload?: any
        ) => {
            type: 'load invites success (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                invites: OrganizationInviteType[]
                payload?: any
            }
        }
        loadInvitesFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load invites failure (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        loadPluginsSuccess: (
            plugins: Record<string, PluginType>,
            payload?: any
        ) => {
            type: 'load plugins success (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                plugins: Record<string, PluginType>
                payload?: any
            }
        }
        loadPluginsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load plugins failure (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        toggleActivationSideBar: () => {
            type: 'toggle activation side bar (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                value: true
            }
        }
        showActivationSideBar: () => {
            type: 'show activation side bar (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                value: true
            }
        }
        hideActivationSideBar: () => {
            type: 'hide activation side bar (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                value: true
            }
        }
        reportActivationSideBarShown: (
            activeTasksCount: number,
            completedTasksCount: number,
            completionPercent: number
        ) => {
            type: 'report activation side bar shown (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                activeTasksCount: number
                completedTasksCount: number
                completionPercent: number
            }
        }
        loadInsights: (debounce?: boolean) => {
            type: 'load insights (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                debounce: boolean
            }
        }
        loadInsightsSuccess: (
            insights: InsightsResult,
            payload?: {
                debounce: boolean
            }
        ) => {
            type: 'load insights success (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                insights: InsightsResult
                payload?: {
                    debounce: boolean
                }
            }
        }
        loadInsightsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load insights failure (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        loadDashboardsSuccess: (
            pagedDashboards: PaginatedResponse<DashboardBasicType> | null,
            payload?: string
        ) => {
            type: 'load dashboards success (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                pagedDashboards: PaginatedResponse<DashboardBasicType> | null
                payload?: string
            }
        }
        loadDashboardsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load dashboards failure (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        loadCustomEvents: () => {
            type: 'load custom events (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                value: true
            }
        }
        runTask: (id: string) => {
            type: 'run task (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                id: string
            }
        }
        skipTask: (id: string) => {
            type: 'skip task (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                id: string
            }
        }
        addSkippedTask: (
            teamId: TeamBasicType['id'],
            taskId: string
        ) => {
            type: 'add skipped task (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                teamId: number
                taskId: string
            }
        }
        setShowSessionRecordingConfig: (value: boolean) => {
            type: 'set show session recording config (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                value: boolean
            }
        }
        loadCustomEventsSuccess: (
            customEventsCount: number,
            payload?: {
                value: true
            }
        ) => {
            type: 'load custom events success (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                customEventsCount: number
                payload?: {
                    value: true
                }
            }
        }
        loadCustomEventsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load custom events failure (lib.components.ActivationSidebar.activationLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'load members success (lib.components.ActivationSidebar.activationLogic)': 'loadMembersSuccess'
        'load members failure (lib.components.ActivationSidebar.activationLogic)': 'loadMembersFailure'
        'show invite modal (lib.components.ActivationSidebar.activationLogic)': 'showInviteModal'
        'load invites success (lib.components.ActivationSidebar.activationLogic)': 'loadInvitesSuccess'
        'load invites failure (lib.components.ActivationSidebar.activationLogic)': 'loadInvitesFailure'
        'load plugins success (lib.components.ActivationSidebar.activationLogic)': 'loadPluginsSuccess'
        'load plugins failure (lib.components.ActivationSidebar.activationLogic)': 'loadPluginsFailure'
        'toggle activation side bar (lib.components.ActivationSidebar.activationLogic)': 'toggleActivationSideBar'
        'show activation side bar (lib.components.ActivationSidebar.activationLogic)': 'showActivationSideBar'
        'hide activation side bar (lib.components.ActivationSidebar.activationLogic)': 'hideActivationSideBar'
        'report activation side bar shown (lib.components.ActivationSidebar.activationLogic)': 'reportActivationSideBarShown'
        'load insights (lib.components.ActivationSidebar.activationLogic)': 'loadInsights'
        'load insights success (lib.components.ActivationSidebar.activationLogic)': 'loadInsightsSuccess'
        'load insights failure (lib.components.ActivationSidebar.activationLogic)': 'loadInsightsFailure'
        'load dashboards success (lib.components.ActivationSidebar.activationLogic)': 'loadDashboardsSuccess'
        'load dashboards failure (lib.components.ActivationSidebar.activationLogic)': 'loadDashboardsFailure'
        'load custom events (lib.components.ActivationSidebar.activationLogic)': 'loadCustomEvents'
        'run task (lib.components.ActivationSidebar.activationLogic)': 'runTask'
        'skip task (lib.components.ActivationSidebar.activationLogic)': 'skipTask'
        'add skipped task (lib.components.ActivationSidebar.activationLogic)': 'addSkippedTask'
        'set show session recording config (lib.components.ActivationSidebar.activationLogic)': 'setShowSessionRecordingConfig'
        'load custom events success (lib.components.ActivationSidebar.activationLogic)': 'loadCustomEventsSuccess'
        'load custom events failure (lib.components.ActivationSidebar.activationLogic)': 'loadCustomEventsFailure'
    }
    actionTypes: {
        loadMembersSuccess: 'load members success (lib.components.ActivationSidebar.activationLogic)'
        loadMembersFailure: 'load members failure (lib.components.ActivationSidebar.activationLogic)'
        showInviteModal: 'show invite modal (lib.components.ActivationSidebar.activationLogic)'
        loadInvitesSuccess: 'load invites success (lib.components.ActivationSidebar.activationLogic)'
        loadInvitesFailure: 'load invites failure (lib.components.ActivationSidebar.activationLogic)'
        loadPluginsSuccess: 'load plugins success (lib.components.ActivationSidebar.activationLogic)'
        loadPluginsFailure: 'load plugins failure (lib.components.ActivationSidebar.activationLogic)'
        toggleActivationSideBar: 'toggle activation side bar (lib.components.ActivationSidebar.activationLogic)'
        showActivationSideBar: 'show activation side bar (lib.components.ActivationSidebar.activationLogic)'
        hideActivationSideBar: 'hide activation side bar (lib.components.ActivationSidebar.activationLogic)'
        reportActivationSideBarShown: 'report activation side bar shown (lib.components.ActivationSidebar.activationLogic)'
        loadInsights: 'load insights (lib.components.ActivationSidebar.activationLogic)'
        loadInsightsSuccess: 'load insights success (lib.components.ActivationSidebar.activationLogic)'
        loadInsightsFailure: 'load insights failure (lib.components.ActivationSidebar.activationLogic)'
        loadDashboardsSuccess: 'load dashboards success (lib.components.ActivationSidebar.activationLogic)'
        loadDashboardsFailure: 'load dashboards failure (lib.components.ActivationSidebar.activationLogic)'
        loadCustomEvents: 'load custom events (lib.components.ActivationSidebar.activationLogic)'
        runTask: 'run task (lib.components.ActivationSidebar.activationLogic)'
        skipTask: 'skip task (lib.components.ActivationSidebar.activationLogic)'
        addSkippedTask: 'add skipped task (lib.components.ActivationSidebar.activationLogic)'
        setShowSessionRecordingConfig: 'set show session recording config (lib.components.ActivationSidebar.activationLogic)'
        loadCustomEventsSuccess: 'load custom events success (lib.components.ActivationSidebar.activationLogic)'
        loadCustomEventsFailure: 'load custom events failure (lib.components.ActivationSidebar.activationLogic)'
    }
    actions: {
        loadMembersSuccess: (members: OrganizationMemberType[], payload?: any) => void
        loadMembersFailure: (error: string, errorObject?: any) => void
        showInviteModal: () => void
        loadInvitesSuccess: (invites: OrganizationInviteType[], payload?: any) => void
        loadInvitesFailure: (error: string, errorObject?: any) => void
        loadPluginsSuccess: (plugins: Record<string, PluginType>, payload?: any) => void
        loadPluginsFailure: (error: string, errorObject?: any) => void
        toggleActivationSideBar: () => void
        showActivationSideBar: () => void
        hideActivationSideBar: () => void
        reportActivationSideBarShown: (
            activeTasksCount: number,
            completedTasksCount: number,
            completionPercent: number
        ) => void
        loadInsights: (debounce?: boolean) => void
        loadInsightsSuccess: (
            insights: InsightsResult,
            payload?: {
                debounce: boolean
            }
        ) => void
        loadInsightsFailure: (error: string, errorObject?: any) => void
        loadDashboardsSuccess: (pagedDashboards: PaginatedResponse<DashboardBasicType> | null, payload?: string) => void
        loadDashboardsFailure: (error: string, errorObject?: any) => void
        loadCustomEvents: () => void
        runTask: (id: string) => void
        skipTask: (id: string) => void
        addSkippedTask: (teamId: TeamBasicType['id'], taskId: string) => void
        setShowSessionRecordingConfig: (value: boolean) => void
        loadCustomEventsSuccess: (
            customEventsCount: number,
            payload?: {
                value: true
            }
        ) => void
        loadCustomEventsFailure: (error: string, errorObject?: any) => void
    }
    asyncActions: {
        loadMembersSuccess: (members: OrganizationMemberType[], payload?: any) => Promise<any>
        loadMembersFailure: (error: string, errorObject?: any) => Promise<any>
        showInviteModal: () => Promise<any>
        loadInvitesSuccess: (invites: OrganizationInviteType[], payload?: any) => Promise<any>
        loadInvitesFailure: (error: string, errorObject?: any) => Promise<any>
        loadPluginsSuccess: (plugins: Record<string, PluginType>, payload?: any) => Promise<any>
        loadPluginsFailure: (error: string, errorObject?: any) => Promise<any>
        toggleActivationSideBar: () => Promise<any>
        showActivationSideBar: () => Promise<any>
        hideActivationSideBar: () => Promise<any>
        reportActivationSideBarShown: (
            activeTasksCount: number,
            completedTasksCount: number,
            completionPercent: number
        ) => Promise<any>
        loadInsights: (debounce?: boolean) => Promise<any>
        loadInsightsSuccess: (
            insights: InsightsResult,
            payload?: {
                debounce: boolean
            }
        ) => Promise<any>
        loadInsightsFailure: (error: string, errorObject?: any) => Promise<any>
        loadDashboardsSuccess: (
            pagedDashboards: PaginatedResponse<DashboardBasicType> | null,
            payload?: string
        ) => Promise<any>
        loadDashboardsFailure: (error: string, errorObject?: any) => Promise<any>
        loadCustomEvents: () => Promise<any>
        runTask: (id: string) => Promise<any>
        skipTask: (id: string) => Promise<any>
        addSkippedTask: (teamId: TeamBasicType['id'], taskId: string) => Promise<any>
        setShowSessionRecordingConfig: (value: boolean) => Promise<any>
        loadCustomEventsSuccess: (
            customEventsCount: number,
            payload?: {
                value: true
            }
        ) => Promise<any>
        loadCustomEventsFailure: (error: string, errorObject?: any) => Promise<any>
    }
    defaults: {
        skippedTasks: Record<string, string[]>
        showSessionRecordingConfig: boolean
        areMembersLoaded: boolean
        areInvitesLoaded: boolean
        arePluginsLoaded: boolean
        areDashboardsLoaded: boolean
        areCustomEventsLoaded: boolean
        areInsightsLoaded: boolean
        customEventsCount: number
        customEventsCountLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        runTask: ((
            action: {
                type: 'run task (lib.components.ActivationSidebar.activationLogic)'
                payload: {
                    id: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        skipTask: ((
            action: {
                type: 'skip task (lib.components.ActivationSidebar.activationLogic)'
                payload: {
                    id: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        toggleActivationSideBar: ((
            action: {
                type: 'toggle activation side bar (lib.components.ActivationSidebar.activationLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        showActivationSideBar: ((
            action: {
                type: 'show activation side bar (lib.components.ActivationSidebar.activationLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['lib', 'components', 'ActivationSidebar', 'activationLogic']
    pathString: 'lib.components.ActivationSidebar.activationLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        skippedTasks: Record<string, string[]>
        showSessionRecordingConfig: boolean
        areMembersLoaded: boolean
        areInvitesLoaded: boolean
        arePluginsLoaded: boolean
        areDashboardsLoaded: boolean
        areCustomEventsLoaded: boolean
        areInsightsLoaded: boolean
        customEventsCount: number
        customEventsCountLoading: boolean
    }
    reducers: {
        skippedTasks: (state: Record<string, string[]>, action: any, fullState: any) => Record<string, string[]>
        showSessionRecordingConfig: (state: boolean, action: any, fullState: any) => boolean
        areMembersLoaded: (state: boolean, action: any, fullState: any) => boolean
        areInvitesLoaded: (state: boolean, action: any, fullState: any) => boolean
        arePluginsLoaded: (state: boolean, action: any, fullState: any) => boolean
        areDashboardsLoaded: (state: boolean, action: any, fullState: any) => boolean
        areCustomEventsLoaded: (state: boolean, action: any, fullState: any) => boolean
        areInsightsLoaded: (state: boolean, action: any, fullState: any) => boolean
        customEventsCount: (state: number, action: any, fullState: any) => number
        customEventsCountLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        skippedTasks: Record<string, string[]>
        showSessionRecordingConfig: boolean
        areMembersLoaded: boolean
        areInvitesLoaded: boolean
        arePluginsLoaded: boolean
        areDashboardsLoaded: boolean
        areCustomEventsLoaded: boolean
        areInsightsLoaded: boolean
        customEventsCount: number
        customEventsCountLoading: boolean
    }
    selectors: {
        skippedTasks: (state: any, props?: any) => Record<string, string[]>
        showSessionRecordingConfig: (state: any, props?: any) => boolean
        areMembersLoaded: (state: any, props?: any) => boolean
        areInvitesLoaded: (state: any, props?: any) => boolean
        arePluginsLoaded: (state: any, props?: any) => boolean
        areDashboardsLoaded: (state: any, props?: any) => boolean
        areCustomEventsLoaded: (state: any, props?: any) => boolean
        areInsightsLoaded: (state: any, props?: any) => boolean
        customEventsCount: (state: any, props?: any) => number
        customEventsCountLoading: (state: any, props?: any) => boolean
        currentTeam: (state: any, props?: any) => TeamType | TeamPublicType | null
        members: (state: any, props?: any) => OrganizationMemberType[]
        invites: (state: any, props?: any) => OrganizationInviteType[]
        installedPlugins: (state: any, props?: any) => PluginTypeWithConfig[]
        insights: (state: any, props?: any) => InsightsResult
        rawDashboards: (state: any, props?: any) => Record<string, DashboardBasicType | DashboardType>
        isReady: (state: any, props?: any) => boolean
        currentTeamSkippedTasks: (state: any, props?: any) => string[]
        tasks: (state: any, props?: any) => ActivationTaskType[]
        activeTasks: (state: any, props?: any) => ActivationTaskType[]
        completedTasks: (state: any, props?: any) => ActivationTaskType[]
        completionPercent: (state: any, props?: any) => number
        hasCompletedAllTasks: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        skippedTasks: Record<string, string[]>
        showSessionRecordingConfig: boolean
        areMembersLoaded: boolean
        areInvitesLoaded: boolean
        arePluginsLoaded: boolean
        areDashboardsLoaded: boolean
        areCustomEventsLoaded: boolean
        areInsightsLoaded: boolean
        customEventsCount: number
        customEventsCountLoading: boolean
        currentTeam: TeamType | TeamPublicType | null
        members: OrganizationMemberType[]
        invites: OrganizationInviteType[]
        installedPlugins: PluginTypeWithConfig[]
        insights: InsightsResult
        rawDashboards: Record<string, DashboardBasicType | DashboardType>
        isReady: boolean
        currentTeamSkippedTasks: string[]
        tasks: ActivationTaskType[]
        activeTasks: ActivationTaskType[]
        completedTasks: ActivationTaskType[]
        completionPercent: number
        hasCompletedAllTasks: boolean
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        isReady: (
            currentTeam:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').TeamType
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').TeamPublicType
                | null,
            areMembersLoaded: boolean,
            areInvitesLoaded: boolean,
            areDashboardsLoaded: boolean,
            arePluginsLoaded: boolean,
            areCustomEventsLoaded: boolean,
            areInsightsLoaded: boolean
        ) => boolean
        currentTeamSkippedTasks: (
            skippedTasks: Record<string, string[]>,
            currentTeam:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').TeamType
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').TeamPublicType
                | null
        ) => string[]
        tasks: (
            currentTeam:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').TeamType
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').TeamPublicType
                | null,
            members: import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').OrganizationMemberType[],
            invites: import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').OrganizationInviteType[],
            insights: import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/scenes/saved-insights/savedInsightsLogic').InsightsResult,
            rawDashboards: Record<
                string,
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').DashboardType
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').DashboardBasicType
            >,
            customEventsCount: number,
            installedPlugins: import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/scenes/plugins/types').PluginTypeWithConfig[],
            currentTeamSkippedTasks: string[]
        ) => ActivationTaskType[]
        activeTasks: (tasks: ActivationTaskType[]) => ActivationTaskType[]
        completedTasks: (tasks: ActivationTaskType[]) => ActivationTaskType[]
        completionPercent: (completedTasks: ActivationTaskType[], activeTasks: ActivationTaskType[]) => number
        hasCompletedAllTasks: (activeTasks: ActivationTaskType[]) => boolean
    }
}