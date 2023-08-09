// Generated by kea-typegen on Thu, 20 Jul 2023 11:24:06 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { CohortType } from '../../../types'
import type { Scene, SceneParams } from '../../../scenes/sceneTypes'
import type { FuseSearchMatch } from './utils'
import type { SidebarCategory } from '../types'

export interface cohortsSidebarLogicType extends Logic {
    actionCreators: {
        deleteCohort: (cohort: Partial<CohortType>) => {
            type: 'delete cohort (layout.navigation-3000.sidebars.cohortsSidebarLogic)'
            payload: {
                cohort: Partial<CohortType>
            }
        }
    }
    actionKeys: {
        'delete cohort (layout.navigation-3000.sidebars.cohortsSidebarLogic)': 'deleteCohort'
    }
    actionTypes: {
        deleteCohort: 'delete cohort (layout.navigation-3000.sidebars.cohortsSidebarLogic)'
    }
    actions: {
        deleteCohort: (cohort: Partial<CohortType>) => void
    }
    asyncActions: {
        deleteCohort: (cohort: Partial<CohortType>) => Promise<any>
    }
    defaults: {}
    events: {}
    key: undefined
    listeners: {}
    path: ['layout', 'navigation-3000', 'sidebars', 'cohortsSidebarLogic']
    pathString: 'layout.navigation-3000.sidebars.cohortsSidebarLogic'
    props: Record<string, unknown>
    reducer: (state: any, action: any, fullState: any) => {}
    reducers: {}
    selector: (state: any) => {}
    selectors: {
        cohorts: (state: any, props?: any) => CohortType[]
        cohortsLoading: (state: any, props?: any) => boolean
        activeScene: (state: any, props?: any) => Scene | null
        sceneParams: (state: any, props?: any) => SceneParams
        contents: (state: any, props?: any) => SidebarCategory[]
        activeListItemKey: (state: any, props?: any) => [string, number] | null
        relevantCohorts: (state: any, props?: any) => [CohortType, FuseSearchMatch[] | null][]
    }
    sharedListeners: {}
    values: {
        cohorts: CohortType[]
        cohortsLoading: boolean
        activeScene: Scene | null
        sceneParams: SceneParams
        contents: SidebarCategory[]
        activeListItemKey: [string, number] | null
        relevantCohorts: [CohortType, FuseSearchMatch[] | null][]
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        contents: (
            relevantCohorts: [CohortType, FuseSearchMatch[] | null][],
            cohortsLoading: boolean
        ) => SidebarCategory[]
        activeListItemKey: (
            activeScene: Scene | null,
            sceneParams: import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/scenes/sceneTypes').SceneParams
        ) => [string, number] | null
        relevantCohorts: (cohorts: CohortType[], searchTerm: string) => [CohortType, FuseSearchMatch[] | null][]
    }
}