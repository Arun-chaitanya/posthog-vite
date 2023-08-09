// Generated by kea-typegen on Thu, 20 Jul 2023 11:24:04 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { SceneConfig } from '../../scenes/sceneTypes'
import type { OrganizationMemberType } from '../../types'
import type { ProjectNoticeVariant } from './navigationLogic'

export interface navigationLogicType extends Logic {
    actionCreators: {
        reportProjectNoticeDismissed: (key: string) => {
            type: 'report project notice dismissed (layout.navigation.navigationLogic)'
            payload: {
                key: string
            }
        }
        toggleSideBarBase: (override?: boolean) => {
            type: 'toggle side bar base (layout.navigation.navigationLogic)'
            payload: {
                override: boolean | undefined
            }
        }
        toggleSideBarMobile: (override?: boolean) => {
            type: 'toggle side bar mobile (layout.navigation.navigationLogic)'
            payload: {
                override: boolean | undefined
            }
        }
        toggleActivationSideBar: () => {
            type: 'toggle activation side bar (layout.navigation.navigationLogic)'
            payload: {
                value: true
            }
        }
        showActivationSideBar: () => {
            type: 'show activation side bar (layout.navigation.navigationLogic)'
            payload: {
                value: true
            }
        }
        hideActivationSideBar: () => {
            type: 'hide activation side bar (layout.navigation.navigationLogic)'
            payload: {
                value: true
            }
        }
        hideSideBarMobile: () => {
            type: 'hide side bar mobile (layout.navigation.navigationLogic)'
            payload: {
                value: true
            }
        }
        openSitePopover: () => {
            type: 'open site popover (layout.navigation.navigationLogic)'
            payload: {
                value: true
            }
        }
        closeSitePopover: () => {
            type: 'close site popover (layout.navigation.navigationLogic)'
            payload: {
                value: true
            }
        }
        toggleSitePopover: () => {
            type: 'toggle site popover (layout.navigation.navigationLogic)'
            payload: {
                value: true
            }
        }
        showCreateOrganizationModal: () => {
            type: 'show create organization modal (layout.navigation.navigationLogic)'
            payload: {
                value: true
            }
        }
        hideCreateOrganizationModal: () => {
            type: 'hide create organization modal (layout.navigation.navigationLogic)'
            payload: {
                value: true
            }
        }
        showCreateProjectModal: () => {
            type: 'show create project modal (layout.navigation.navigationLogic)'
            payload: {
                value: true
            }
        }
        hideCreateProjectModal: () => {
            type: 'hide create project modal (layout.navigation.navigationLogic)'
            payload: {
                value: true
            }
        }
        toggleProjectSwitcher: () => {
            type: 'toggle project switcher (layout.navigation.navigationLogic)'
            payload: {
                value: true
            }
        }
        hideProjectSwitcher: () => {
            type: 'hide project switcher (layout.navigation.navigationLogic)'
            payload: {
                value: true
            }
        }
        openAppSourceEditor: (
            id: number,
            pluginId: number
        ) => {
            type: 'open app source editor (layout.navigation.navigationLogic)'
            payload: {
                id: number
                pluginId: number
            }
        }
        closeAppSourceEditor: () => {
            type: 'close app source editor (layout.navigation.navigationLogic)'
            payload: {
                value: true
            }
        }
        setOpenAppMenu: (id: number | null) => {
            type: 'set open app menu (layout.navigation.navigationLogic)'
            payload: {
                id: number | null
            }
        }
        closeProjectNotice: (projectNoticeVariant: ProjectNoticeVariant) => {
            type: 'close project notice (layout.navigation.navigationLogic)'
            payload: {
                projectNoticeVariant: ProjectNoticeVariant
            }
        }
        loadLatestVersion: () => {
            type: 'load latest version (layout.navigation.navigationLogic)'
            payload: any
        }
        loadLatestVersionSuccess: (
            latestVersion: string | null,
            payload?: any
        ) => {
            type: 'load latest version success (layout.navigation.navigationLogic)'
            payload: {
                latestVersion: string | null
                payload?: any
            }
        }
        loadLatestVersionFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load latest version failure (layout.navigation.navigationLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        loadNavigationStatus: () => {
            type: 'load navigation status (layout.navigation.navigationLogic)'
            payload: any
        }
        loadNavigationStatusSuccess: (
            navigationStatus: {
                system_status_ok: boolean
                async_migrations_ok: boolean
            },
            payload?: any
        ) => {
            type: 'load navigation status success (layout.navigation.navigationLogic)'
            payload: {
                navigationStatus: {
                    system_status_ok: boolean
                    async_migrations_ok: boolean
                }
                payload?: any
            }
        }
        loadNavigationStatusFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load navigation status failure (layout.navigation.navigationLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'report project notice dismissed (layout.navigation.navigationLogic)': 'reportProjectNoticeDismissed'
        'toggle side bar base (layout.navigation.navigationLogic)': 'toggleSideBarBase'
        'toggle side bar mobile (layout.navigation.navigationLogic)': 'toggleSideBarMobile'
        'toggle activation side bar (layout.navigation.navigationLogic)': 'toggleActivationSideBar'
        'show activation side bar (layout.navigation.navigationLogic)': 'showActivationSideBar'
        'hide activation side bar (layout.navigation.navigationLogic)': 'hideActivationSideBar'
        'hide side bar mobile (layout.navigation.navigationLogic)': 'hideSideBarMobile'
        'open site popover (layout.navigation.navigationLogic)': 'openSitePopover'
        'close site popover (layout.navigation.navigationLogic)': 'closeSitePopover'
        'toggle site popover (layout.navigation.navigationLogic)': 'toggleSitePopover'
        'show create organization modal (layout.navigation.navigationLogic)': 'showCreateOrganizationModal'
        'hide create organization modal (layout.navigation.navigationLogic)': 'hideCreateOrganizationModal'
        'show create project modal (layout.navigation.navigationLogic)': 'showCreateProjectModal'
        'hide create project modal (layout.navigation.navigationLogic)': 'hideCreateProjectModal'
        'toggle project switcher (layout.navigation.navigationLogic)': 'toggleProjectSwitcher'
        'hide project switcher (layout.navigation.navigationLogic)': 'hideProjectSwitcher'
        'open app source editor (layout.navigation.navigationLogic)': 'openAppSourceEditor'
        'close app source editor (layout.navigation.navigationLogic)': 'closeAppSourceEditor'
        'set open app menu (layout.navigation.navigationLogic)': 'setOpenAppMenu'
        'close project notice (layout.navigation.navigationLogic)': 'closeProjectNotice'
        'load latest version (layout.navigation.navigationLogic)': 'loadLatestVersion'
        'load latest version success (layout.navigation.navigationLogic)': 'loadLatestVersionSuccess'
        'load latest version failure (layout.navigation.navigationLogic)': 'loadLatestVersionFailure'
        'load navigation status (layout.navigation.navigationLogic)': 'loadNavigationStatus'
        'load navigation status success (layout.navigation.navigationLogic)': 'loadNavigationStatusSuccess'
        'load navigation status failure (layout.navigation.navigationLogic)': 'loadNavigationStatusFailure'
    }
    actionTypes: {
        reportProjectNoticeDismissed: 'report project notice dismissed (layout.navigation.navigationLogic)'
        toggleSideBarBase: 'toggle side bar base (layout.navigation.navigationLogic)'
        toggleSideBarMobile: 'toggle side bar mobile (layout.navigation.navigationLogic)'
        toggleActivationSideBar: 'toggle activation side bar (layout.navigation.navigationLogic)'
        showActivationSideBar: 'show activation side bar (layout.navigation.navigationLogic)'
        hideActivationSideBar: 'hide activation side bar (layout.navigation.navigationLogic)'
        hideSideBarMobile: 'hide side bar mobile (layout.navigation.navigationLogic)'
        openSitePopover: 'open site popover (layout.navigation.navigationLogic)'
        closeSitePopover: 'close site popover (layout.navigation.navigationLogic)'
        toggleSitePopover: 'toggle site popover (layout.navigation.navigationLogic)'
        showCreateOrganizationModal: 'show create organization modal (layout.navigation.navigationLogic)'
        hideCreateOrganizationModal: 'hide create organization modal (layout.navigation.navigationLogic)'
        showCreateProjectModal: 'show create project modal (layout.navigation.navigationLogic)'
        hideCreateProjectModal: 'hide create project modal (layout.navigation.navigationLogic)'
        toggleProjectSwitcher: 'toggle project switcher (layout.navigation.navigationLogic)'
        hideProjectSwitcher: 'hide project switcher (layout.navigation.navigationLogic)'
        openAppSourceEditor: 'open app source editor (layout.navigation.navigationLogic)'
        closeAppSourceEditor: 'close app source editor (layout.navigation.navigationLogic)'
        setOpenAppMenu: 'set open app menu (layout.navigation.navigationLogic)'
        closeProjectNotice: 'close project notice (layout.navigation.navigationLogic)'
        loadLatestVersion: 'load latest version (layout.navigation.navigationLogic)'
        loadLatestVersionSuccess: 'load latest version success (layout.navigation.navigationLogic)'
        loadLatestVersionFailure: 'load latest version failure (layout.navigation.navigationLogic)'
        loadNavigationStatus: 'load navigation status (layout.navigation.navigationLogic)'
        loadNavigationStatusSuccess: 'load navigation status success (layout.navigation.navigationLogic)'
        loadNavigationStatusFailure: 'load navigation status failure (layout.navigation.navigationLogic)'
    }
    actions: {
        reportProjectNoticeDismissed: (key: string) => void
        toggleSideBarBase: (override?: boolean) => void
        toggleSideBarMobile: (override?: boolean) => void
        toggleActivationSideBar: () => void
        showActivationSideBar: () => void
        hideActivationSideBar: () => void
        hideSideBarMobile: () => void
        openSitePopover: () => void
        closeSitePopover: () => void
        toggleSitePopover: () => void
        showCreateOrganizationModal: () => void
        hideCreateOrganizationModal: () => void
        showCreateProjectModal: () => void
        hideCreateProjectModal: () => void
        toggleProjectSwitcher: () => void
        hideProjectSwitcher: () => void
        openAppSourceEditor: (id: number, pluginId: number) => void
        closeAppSourceEditor: () => void
        setOpenAppMenu: (id: number | null) => void
        closeProjectNotice: (projectNoticeVariant: ProjectNoticeVariant) => void
        loadLatestVersion: () => void
        loadLatestVersionSuccess: (latestVersion: string | null, payload?: any) => void
        loadLatestVersionFailure: (error: string, errorObject?: any) => void
        loadNavigationStatus: () => void
        loadNavigationStatusSuccess: (
            navigationStatus: {
                system_status_ok: boolean
                async_migrations_ok: boolean
            },
            payload?: any
        ) => void
        loadNavigationStatusFailure: (error: string, errorObject?: any) => void
    }
    asyncActions: {
        reportProjectNoticeDismissed: (key: string) => Promise<any>
        toggleSideBarBase: (override?: boolean) => Promise<any>
        toggleSideBarMobile: (override?: boolean) => Promise<any>
        toggleActivationSideBar: () => Promise<any>
        showActivationSideBar: () => Promise<any>
        hideActivationSideBar: () => Promise<any>
        hideSideBarMobile: () => Promise<any>
        openSitePopover: () => Promise<any>
        closeSitePopover: () => Promise<any>
        toggleSitePopover: () => Promise<any>
        showCreateOrganizationModal: () => Promise<any>
        hideCreateOrganizationModal: () => Promise<any>
        showCreateProjectModal: () => Promise<any>
        hideCreateProjectModal: () => Promise<any>
        toggleProjectSwitcher: () => Promise<any>
        hideProjectSwitcher: () => Promise<any>
        openAppSourceEditor: (id: number, pluginId: number) => Promise<any>
        closeAppSourceEditor: () => Promise<any>
        setOpenAppMenu: (id: number | null) => Promise<any>
        closeProjectNotice: (projectNoticeVariant: ProjectNoticeVariant) => Promise<any>
        loadLatestVersion: () => Promise<any>
        loadLatestVersionSuccess: (latestVersion: string | null, payload?: any) => Promise<any>
        loadLatestVersionFailure: (error: string, errorObject?: any) => Promise<any>
        loadNavigationStatus: () => Promise<any>
        loadNavigationStatusSuccess: (
            navigationStatus: {
                system_status_ok: boolean
                async_migrations_ok: boolean
            },
            payload?: any
        ) => Promise<any>
        loadNavigationStatusFailure: (error: string, errorObject?: any) => Promise<any>
    }
    defaults: {
        isSideBarShownBase: boolean
        isSideBarShownMobile: boolean
        isActivationSideBarShownBase: boolean
        isSitePopoverOpen: boolean
        isCreateOrganizationModalShown: boolean
        isCreateProjectModalShown: boolean
        isProjectSwitcherShown: boolean
        appSourceEditor: null | {
            pluginId: number
            id: number
        }
        openAppMenu: null | number
        projectNoticesAcknowledged: Record<ProjectNoticeVariant, boolean>
        fullscreen: boolean
        mobileLayout: boolean
        latestVersion: string | null
        latestVersionLoading: boolean
        navigationStatus: {
            system_status_ok: boolean
            async_migrations_ok: boolean
        }
        navigationStatusLoading: boolean
    }
    events: {
        afterMount: () => void
    }
    key: undefined
    listeners: {
        closeProjectNotice: ((
            action: {
                type: 'close project notice (layout.navigation.navigationLogic)'
                payload: {
                    projectNoticeVariant: ProjectNoticeVariant
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        toggleActivationSideBar: ((
            action: {
                type: 'toggle activation side bar (layout.navigation.navigationLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['layout', 'navigation', 'navigationLogic']
    pathString: 'layout.navigation.navigationLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        isSideBarShownBase: boolean
        isSideBarShownMobile: boolean
        isActivationSideBarShownBase: boolean
        isSitePopoverOpen: boolean
        isCreateOrganizationModalShown: boolean
        isCreateProjectModalShown: boolean
        isProjectSwitcherShown: boolean
        appSourceEditor: null | {
            pluginId: number
            id: number
        }
        openAppMenu: null | number
        projectNoticesAcknowledged: Record<ProjectNoticeVariant, boolean>
        fullscreen: boolean
        mobileLayout: boolean
        latestVersion: string | null
        latestVersionLoading: boolean
        navigationStatus: {
            system_status_ok: boolean
            async_migrations_ok: boolean
        }
        navigationStatusLoading: boolean
    }
    reducers: {
        isSideBarShownBase: (state: boolean, action: any, fullState: any) => boolean
        isSideBarShownMobile: (state: boolean, action: any, fullState: any) => boolean
        isActivationSideBarShownBase: (state: boolean, action: any, fullState: any) => boolean
        isSitePopoverOpen: (state: boolean, action: any, fullState: any) => boolean
        isCreateOrganizationModalShown: (state: boolean, action: any, fullState: any) => boolean
        isCreateProjectModalShown: (state: boolean, action: any, fullState: any) => boolean
        isProjectSwitcherShown: (state: boolean, action: any, fullState: any) => boolean
        appSourceEditor: (
            state: null | {
                pluginId: number
                id: number
            },
            action: any,
            fullState: any
        ) => null | {
            pluginId: number
            id: number
        }
        openAppMenu: (state: null | number, action: any, fullState: any) => null | number
        projectNoticesAcknowledged: (
            state: Record<ProjectNoticeVariant, boolean>,
            action: any,
            fullState: any
        ) => Record<ProjectNoticeVariant, boolean>
        fullscreen: (state: boolean, action: any, fullState: any) => boolean
        mobileLayout: (state: boolean, action: any, fullState: any) => boolean
        latestVersion: (state: string | null, action: any, fullState: any) => string | null
        latestVersionLoading: (state: boolean, action: any, fullState: any) => boolean
        navigationStatus: (
            state: {
                system_status_ok: boolean
                async_migrations_ok: boolean
            },
            action: any,
            fullState: any
        ) => {
            system_status_ok: boolean
            async_migrations_ok: boolean
        }
        navigationStatusLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        isSideBarShownBase: boolean
        isSideBarShownMobile: boolean
        isActivationSideBarShownBase: boolean
        isSitePopoverOpen: boolean
        isCreateOrganizationModalShown: boolean
        isCreateProjectModalShown: boolean
        isProjectSwitcherShown: boolean
        appSourceEditor: null | {
            pluginId: number
            id: number
        }
        openAppMenu: null | number
        projectNoticesAcknowledged: Record<ProjectNoticeVariant, boolean>
        fullscreen: boolean
        mobileLayout: boolean
        latestVersion: string | null
        latestVersionLoading: boolean
        navigationStatus: {
            system_status_ok: boolean
            async_migrations_ok: boolean
        }
        navigationStatusLoading: boolean
    }
    selectors: {
        isSideBarShownBase: (state: any, props?: any) => boolean
        isSideBarShownMobile: (state: any, props?: any) => boolean
        isActivationSideBarShownBase: (state: any, props?: any) => boolean
        isSitePopoverOpen: (state: any, props?: any) => boolean
        isCreateOrganizationModalShown: (state: any, props?: any) => boolean
        isCreateProjectModalShown: (state: any, props?: any) => boolean
        isProjectSwitcherShown: (state: any, props?: any) => boolean
        appSourceEditor: (
            state: any,
            props?: any
        ) => null | {
            pluginId: number
            id: number
        }
        openAppMenu: (state: any, props?: any) => null | number
        projectNoticesAcknowledged: (state: any, props?: any) => Record<ProjectNoticeVariant, boolean>
        fullscreen: (state: any, props?: any) => boolean
        mobileLayout: (state: any, props?: any) => boolean
        latestVersion: (state: any, props?: any) => string | null
        latestVersionLoading: (state: any, props?: any) => boolean
        navigationStatus: (
            state: any,
            props?: any
        ) => {
            system_status_ok: boolean
            async_migrations_ok: boolean
        }
        navigationStatusLoading: (state: any, props?: any) => boolean
        sceneConfig: (state: any, props?: any) => SceneConfig | null
        members: (state: any, props?: any) => OrganizationMemberType[]
        membersLoading: (state: any, props?: any) => boolean
        bareNav: (state: any, props?: any) => boolean
        isSideBarShown: (state: any, props?: any) => boolean
        isActivationSideBarShown: (state: any, props?: any) => boolean
        systemStatus: (state: any, props?: any) => boolean
        asyncMigrationsOk: (state: any, props?: any) => boolean
        anyUpdateAvailable: (state: any, props?: any) => boolean
        minorUpdateAvailable: (state: any, props?: any) => boolean
        projectNoticeVariantWithClosability: (state: any, props?: any) => [ProjectNoticeVariant, boolean] | null
    }
    sharedListeners: {}
    values: {
        isSideBarShownBase: boolean
        isSideBarShownMobile: boolean
        isActivationSideBarShownBase: boolean
        isSitePopoverOpen: boolean
        isCreateOrganizationModalShown: boolean
        isCreateProjectModalShown: boolean
        isProjectSwitcherShown: boolean
        appSourceEditor: null | {
            pluginId: number
            id: number
        }
        openAppMenu: null | number
        projectNoticesAcknowledged: Record<ProjectNoticeVariant, boolean>
        fullscreen: boolean
        mobileLayout: boolean
        latestVersion: string | null
        latestVersionLoading: boolean
        navigationStatus: {
            system_status_ok: boolean
            async_migrations_ok: boolean
        }
        navigationStatusLoading: boolean
        sceneConfig: SceneConfig | null
        members: OrganizationMemberType[]
        membersLoading: boolean
        bareNav: boolean
        isSideBarShown: boolean
        isActivationSideBarShown: boolean
        systemStatus: boolean
        asyncMigrationsOk: boolean
        anyUpdateAvailable: boolean
        minorUpdateAvailable: boolean
        projectNoticeVariantWithClosability: [ProjectNoticeVariant, boolean] | null
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        bareNav: (
            fullscreen: boolean,
            sceneConfig:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/scenes/sceneTypes').SceneConfig
                | null
        ) => boolean
        isSideBarShown: (
            mobileLayout: boolean,
            isSideBarShownBase: boolean,
            isSideBarShownMobile: boolean,
            bareNav: boolean
        ) => boolean
        isActivationSideBarShown: (
            mobileLayout: boolean,
            isActivationSideBarShownBase: boolean,
            isSideBarShownMobile: boolean,
            bareNav: boolean
        ) => boolean
        systemStatus: (
            navigationStatus: {
                system_status_ok: boolean
                async_migrations_ok: boolean
            },
            siteUrlMisconfigured: boolean
        ) => boolean
        asyncMigrationsOk: (navigationStatus: { system_status_ok: boolean; async_migrations_ok: boolean }) => boolean
        anyUpdateAvailable: (
            latestVersion: string | null,
            latestVersionLoading: boolean,
            preflight:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').PreflightStatus
                | null
        ) => boolean
        minorUpdateAvailable: (
            latestVersion: string | null,
            latestVersionLoading: boolean,
            preflight:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').PreflightStatus
                | null
        ) => boolean
        projectNoticeVariantWithClosability: (
            currentOrganization:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').OrganizationType
                | null,
            currentTeam:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').TeamType
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').TeamPublicType
                | null,
            preflight:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').PreflightStatus
                | null,
            user:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').UserType
                | null,
            members: import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').OrganizationMemberType[],
            membersLoading: boolean,
            projectNoticesAcknowledged: Record<ProjectNoticeVariant, boolean>
        ) => [ProjectNoticeVariant, boolean] | null
    }
}