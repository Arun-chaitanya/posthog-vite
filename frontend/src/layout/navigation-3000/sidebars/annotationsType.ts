// Generated by kea-typegen on Thu, 20 Jul 2023 11:24:06 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { AnnotationType, InsightModel } from '../../../types'
import type { Scene, SceneParams } from '../../../scenes/sceneTypes'
import type { Dayjs } from '../../../lib/dayjs'
import type { FuseSearchMatch } from './utils'
import type { SidebarCategory } from '../types'

export interface annotationsSidebarLogicType extends Logic {
    actionCreators: {
        deleteAnnotation: (annotation: AnnotationType) => {
            type: 'delete annotation (layout.navigation-3000.sidebars.annotationsSidebarLogic)'
            payload: {
                annotation: AnnotationType
            }
        }
        openModalToCreateAnnotation: (
            initialDate?: Dayjs | null,
            insightId?: InsightModel['id'] | null
        ) => {
            type: 'open modal to create annotation (layout.navigation-3000.sidebars.annotationsSidebarLogic)'
            payload: {
                initialDate: Dayjs | null | undefined
                insightId: number | null | undefined
            }
        }
    }
    actionKeys: {
        'delete annotation (layout.navigation-3000.sidebars.annotationsSidebarLogic)': 'deleteAnnotation'
        'open modal to create annotation (layout.navigation-3000.sidebars.annotationsSidebarLogic)': 'openModalToCreateAnnotation'
    }
    actionTypes: {
        deleteAnnotation: 'delete annotation (layout.navigation-3000.sidebars.annotationsSidebarLogic)'
        openModalToCreateAnnotation: 'open modal to create annotation (layout.navigation-3000.sidebars.annotationsSidebarLogic)'
    }
    actions: {
        deleteAnnotation: (annotation: AnnotationType) => void
        openModalToCreateAnnotation: (initialDate?: Dayjs | null, insightId?: InsightModel['id'] | null) => void
    }
    asyncActions: {
        deleteAnnotation: (annotation: AnnotationType) => Promise<any>
        openModalToCreateAnnotation: (initialDate?: Dayjs | null, insightId?: InsightModel['id'] | null) => Promise<any>
    }
    defaults: {}
    events: {}
    key: undefined
    listeners: {}
    path: ['layout', 'navigation-3000', 'sidebars', 'annotationsSidebarLogic']
    pathString: 'layout.navigation-3000.sidebars.annotationsSidebarLogic'
    props: Record<string, unknown>
    reducer: (state: any, action: any, fullState: any) => {}
    reducers: {}
    selector: (state: any) => {}
    selectors: {
        annotations: (state: any, props?: any) => AnnotationType[]
        annotationsLoading: (state: any, props?: any) => boolean
        activeScene: (state: any, props?: any) => Scene | null
        sceneParams: (state: any, props?: any) => SceneParams
        contents: (state: any, props?: any) => SidebarCategory[]
        relevantAnnotations: (state: any, props?: any) => [AnnotationType, FuseSearchMatch[] | null][]
    }
    sharedListeners: {}
    values: {
        annotations: AnnotationType[]
        annotationsLoading: boolean
        activeScene: Scene | null
        sceneParams: SceneParams
        contents: SidebarCategory[]
        relevantAnnotations: [AnnotationType, FuseSearchMatch[] | null][]
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        contents: (
            relevantAnnotations: [AnnotationType, FuseSearchMatch[] | null][],
            annotationsLoading: boolean
        ) => SidebarCategory[]
        relevantAnnotations: (
            annotations: AnnotationType[],
            searchTerm: string
        ) => [AnnotationType, FuseSearchMatch[] | null][]
    }
}