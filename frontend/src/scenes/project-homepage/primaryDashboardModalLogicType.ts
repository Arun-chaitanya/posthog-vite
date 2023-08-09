// Generated by kea-typegen on Wed, 02 Aug 2023 17:21:45 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { DashboardBasicType, DashboardType, TeamPublicType, TeamType } from '../../types'

export interface primaryDashboardModalLogicType extends Logic {
    actionCreators: {
        updateCurrentTeam: (payload: Partial<TeamType>) => {
            type: 'update current team (scenes.project-homepage.primaryDashboardModalLogic)'
            payload: Partial<TeamType>
        }
        showPrimaryDashboardModal: () => {
            type: 'show primary dashboard modal (scenes.project-homepage.primaryDashboardModalLogic)'
            payload: boolean
        }
        closePrimaryDashboardModal: () => {
            type: 'close primary dashboard modal (scenes.project-homepage.primaryDashboardModalLogic)'
            payload: boolean
        }
        setPrimaryDashboard: (dashboardId: number) => {
            type: 'set primary dashboard (scenes.project-homepage.primaryDashboardModalLogic)'
            payload: {
                dashboardId: number
            }
        }
        setSearchTerm: (searchTerm: string) => {
            type: 'set search term (scenes.project-homepage.primaryDashboardModalLogic)'
            payload: {
                searchTerm: string
            }
        }
    }
    actionKeys: {
        'update current team (scenes.project-homepage.primaryDashboardModalLogic)': 'updateCurrentTeam'
        'show primary dashboard modal (scenes.project-homepage.primaryDashboardModalLogic)': 'showPrimaryDashboardModal'
        'close primary dashboard modal (scenes.project-homepage.primaryDashboardModalLogic)': 'closePrimaryDashboardModal'
        'set primary dashboard (scenes.project-homepage.primaryDashboardModalLogic)': 'setPrimaryDashboard'
        'set search term (scenes.project-homepage.primaryDashboardModalLogic)': 'setSearchTerm'
    }
    actionTypes: {
        updateCurrentTeam: 'update current team (scenes.project-homepage.primaryDashboardModalLogic)'
        showPrimaryDashboardModal: 'show primary dashboard modal (scenes.project-homepage.primaryDashboardModalLogic)'
        closePrimaryDashboardModal: 'close primary dashboard modal (scenes.project-homepage.primaryDashboardModalLogic)'
        setPrimaryDashboard: 'set primary dashboard (scenes.project-homepage.primaryDashboardModalLogic)'
        setSearchTerm: 'set search term (scenes.project-homepage.primaryDashboardModalLogic)'
    }
    actions: {
        updateCurrentTeam: (payload: Partial<TeamType>) => void
        showPrimaryDashboardModal: () => void
        closePrimaryDashboardModal: () => void
        setPrimaryDashboard: (dashboardId: number) => void
        setSearchTerm: (searchTerm: string) => void
    }
    asyncActions: {
        updateCurrentTeam: (payload: Partial<TeamType>) => Promise<any>
        showPrimaryDashboardModal: () => Promise<any>
        closePrimaryDashboardModal: () => Promise<any>
        setPrimaryDashboard: (dashboardId: number) => Promise<any>
        setSearchTerm: (searchTerm: string) => Promise<any>
    }
    defaults: {
        searchTerm: any
        isOpen: boolean
    }
    events: {}
    key: undefined
    listeners: {
        setPrimaryDashboard: ((
            action: {
                type: 'set primary dashboard (scenes.project-homepage.primaryDashboardModalLogic)'
                payload: {
                    dashboardId: number
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        showPrimaryDashboardModal: ((
            action: {
                type: 'show primary dashboard modal (scenes.project-homepage.primaryDashboardModalLogic)'
                payload: boolean
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'project-homepage', 'primaryDashboardModalLogic']
    pathString: 'scenes.project-homepage.primaryDashboardModalLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        searchTerm: any
        isOpen: boolean
    }
    reducers: {
        searchTerm: (state: any, action: any, fullState: any) => any
        isOpen: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        searchTerm: any
        isOpen: boolean
    }
    selectors: {
        searchTerm: (state: any, props?: any) => any
        isOpen: (state: any, props?: any) => boolean
        currentTeam: (state: any, props?: any) => TeamType | TeamPublicType | null
        primaryDashboardId: (state: any, props?: any) => number | undefined
        dashboards: (state: any, props?: any) => (DashboardType | DashboardBasicType)[]
    }
    sharedListeners: {}
    values: {
        searchTerm: any
        isOpen: boolean
        currentTeam: TeamType | TeamPublicType | null
        primaryDashboardId: number | undefined
        dashboards: (DashboardType | DashboardBasicType)[]
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        primaryDashboardId: (
            currentTeam:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').TeamType
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').TeamPublicType
                | null
        ) => number | undefined
        dashboards: (
            nameSortedDashboards: (
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').DashboardType
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').DashboardBasicType
            )[],
            searchTerm: any
        ) => (DashboardType | DashboardBasicType)[]
    }
}
