// Generated by kea-typegen on Thu, 20 Jul 2023 11:24:06 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { Experiment } from '../../../types'
import type { Scene, SceneParams } from '../../../scenes/sceneTypes'
import type { FuseSearchMatch } from './utils'
import type { SidebarCategory } from '../types'

export interface experimentsSidebarLogicType extends Logic {
    actionCreators: {
        loadExperiments: () => {
            type: 'load experiments (layout.navigation-3000.sidebars.experimentsSidebarLogic)'
            payload: any
        }
        deleteExperiment: (id: number) => {
            type: 'delete experiment (layout.navigation-3000.sidebars.experimentsSidebarLogic)'
            payload: number
        }
    }
    actionKeys: {
        'load experiments (layout.navigation-3000.sidebars.experimentsSidebarLogic)': 'loadExperiments'
        'delete experiment (layout.navigation-3000.sidebars.experimentsSidebarLogic)': 'deleteExperiment'
    }
    actionTypes: {
        loadExperiments: 'load experiments (layout.navigation-3000.sidebars.experimentsSidebarLogic)'
        deleteExperiment: 'delete experiment (layout.navigation-3000.sidebars.experimentsSidebarLogic)'
    }
    actions: {
        loadExperiments: () => void
        deleteExperiment: (id: number) => void
    }
    asyncActions: {
        loadExperiments: () => Promise<any>
        deleteExperiment: (id: number) => Promise<any>
    }
    defaults: {}
    events: {}
    key: undefined
    listeners: {}
    path: ['layout', 'navigation-3000', 'sidebars', 'experimentsSidebarLogic']
    pathString: 'layout.navigation-3000.sidebars.experimentsSidebarLogic'
    props: Record<string, unknown>
    reducer: (state: any, action: any, fullState: any) => {}
    reducers: {}
    selector: (state: any) => {}
    selectors: {
        experiments: (state: any, props?: any) => Experiment[]
        experimentsLoading: (state: any, props?: any) => boolean
        activeScene: (state: any, props?: any) => Scene | null
        sceneParams: (state: any, props?: any) => SceneParams
        contents: (state: any, props?: any) => SidebarCategory[]
        activeListItemKey: (state: any, props?: any) => [string, number] | null
        relevantExperiments: (state: any, props?: any) => [Experiment, FuseSearchMatch[] | null][]
    }
    sharedListeners: {}
    values: {
        experiments: Experiment[]
        experimentsLoading: boolean
        activeScene: Scene | null
        sceneParams: SceneParams
        contents: SidebarCategory[]
        activeListItemKey: [string, number] | null
        relevantExperiments: [Experiment, FuseSearchMatch[] | null][]
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        contents: (
            relevantExperiments: [Experiment, FuseSearchMatch[] | null][],
            experimentsLoading: boolean
        ) => SidebarCategory[]
        activeListItemKey: (
            activeScene: Scene | null,
            sceneParams: import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/scenes/sceneTypes').SceneParams
        ) => [string, number] | null
        relevantExperiments: (experiments: Experiment[], searchTerm: string) => [Experiment, FuseSearchMatch[] | null][]
    }
}
