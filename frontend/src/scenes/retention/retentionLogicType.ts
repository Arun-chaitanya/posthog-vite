// Generated by kea-typegen on Thu, 20 Jul 2023 11:31:49 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { InsightLogicProps } from '../../types'
import type { DataNode, InsightQueryNode } from '../../queries/schema'
import type { RetentionTablePayload } from './types'

export interface retentionLogicType extends Logic {
    actionCreators: {}
    actionKeys: {}
    actionTypes: {}
    actions: {}
    asyncActions: {}
    defaults: {}
    events: {}
    key: string
    listeners: {}
    path: ['scenes', 'retention', 'retentionLogic', '*']
    pathString: 'scenes.retention.retentionLogic.*'
    props: InsightLogicProps
    reducer: (state: any, action: any, fullState: any) => {}
    reducers: {}
    selector: (state: any) => {}
    selectors: {
        insightData: (state: any, props?: any) => Record<string, any> | null
        insightQuery: (state: any, props?: any) => DataNode
        querySource: (state: any, props?: any) => InsightQueryNode | null
        results: (state: any, props?: any) => RetentionTablePayload[]
    }
    sharedListeners: {}
    values: {
        insightData: Record<string, any> | null
        insightQuery: DataNode
        querySource: InsightQueryNode | null
        results: RetentionTablePayload[]
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        results: (
            insightQuery: import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/queries/schema').DataNode,
            insightData: Record<string, any> | null
        ) => RetentionTablePayload[]
    }
}
