// Generated by kea-typegen on Thu, 20 Jul 2023 11:36:17 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { FilterType, InsightLogicProps, InsightType } from '../../../types'
import type { FeatureFlagsSet } from '../../../lib/logic/featureFlagLogic'
import type { Node } from '../../../queries/schema'
import type { Tab } from './insightNavLogic'

export interface insightNavLogicType extends Logic {
    actionCreators: {
        setQuery: (query: Node | null) => {
            type: 'set query (scenes.insights.InsightNav.insightNavLogic.*)'
            payload: {
                query: Node | null
            }
        }
        setActiveView: (view: InsightType) => {
            type: 'set active view (scenes.insights.InsightNav.insightNavLogic.*)'
            payload: {
                view: InsightType
            }
        }
    }
    actionKeys: {
        'set query (scenes.insights.InsightNav.insightNavLogic.*)': 'setQuery'
        'set active view (scenes.insights.InsightNav.insightNavLogic.*)': 'setActiveView'
    }
    actionTypes: {
        setQuery: 'set query (scenes.insights.InsightNav.insightNavLogic.*)'
        setActiveView: 'set active view (scenes.insights.InsightNav.insightNavLogic.*)'
    }
    actions: {
        setQuery: (query: Node | null) => void
        setActiveView: (view: InsightType) => void
    }
    asyncActions: {
        setQuery: (query: Node | null) => Promise<any>
        setActiveView: (view: InsightType) => Promise<any>
    }
    defaults: {
        userSelectedView: any
    }
    events: {}
    key: string
    listeners: {
        setActiveView: ((
            action: {
                type: 'set active view (scenes.insights.InsightNav.insightNavLogic.*)'
                payload: {
                    view: InsightType
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'insights', 'InsightNav', 'insightNavLogic', '*']
    pathString: 'scenes.insights.InsightNav.insightNavLogic.*'
    props: InsightLogicProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        userSelectedView: any
    }
    reducers: {
        userSelectedView: (state: any, action: any, fullState: any) => any
    }
    selector: (state: any) => {
        userSelectedView: any
    }
    selectors: {
        userSelectedView: (state: any, props?: any) => any
        filters: (state: any, props?: any) => Partial<FilterType>
        featureFlags: (state: any, props?: any) => FeatureFlagsSet
        query: (state: any, props?: any) => Node
        filterTestAccountsDefault: (state: any, props?: any) => boolean
        activeView: (state: any, props?: any) => any
        tabs: (state: any, props?: any) => Tab[]
    }
    sharedListeners: {}
    values: {
        userSelectedView: any
        filters: Partial<FilterType>
        featureFlags: FeatureFlagsSet
        query: Node
        filterTestAccountsDefault: boolean
        activeView: any
        tabs: Tab[]
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        activeView: (
            filters: Partial<
                import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').FilterType
            >,
            query: import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/queries/schema').Node,
            userSelectedView: any
        ) => any
        tabs: (activeView: any) => Tab[]
    }
}