// Generated by kea-typegen on Thu, 20 Jul 2023 11:40:47 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { ListStorage, TaxonomicFilterGroup, TaxonomicFilterGroupType, TaxonomicFilterLogicProps, TaxonomicFilterValue } from './types'
import type { GroupType, GroupTypeProperties } from '../../../types'
import type { Noun } from '../../../models/groupsModel'
import type { BuiltLogic } from '../../../../../node_modules/.pnpm/kea@3.1.5_react@16.14.0/node_modules/kea/lib/index.d'
import type { infiniteListLogicType } from './infiniteListLogicType'

export interface taxonomicFilterLogicType extends Logic {
    actionCreators: {
        moveUp: () => {
            type: 'move up (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
            payload: {
                value: true
            }
        }
        moveDown: () => {
            type: 'move down (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
            payload: {
                value: true
            }
        }
        selectSelected: (onComplete?: () => void) => {
            type: 'select selected (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
            payload: {
                onComplete: (() => void) | undefined
            }
        }
        enableMouseInteractions: () => {
            type: 'enable mouse interactions (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
            payload: {
                value: true
            }
        }
        tabLeft: () => {
            type: 'tab left (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
            payload: {
                value: true
            }
        }
        tabRight: () => {
            type: 'tab right (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
            payload: {
                value: true
            }
        }
        setSearchQuery: (searchQuery: string) => {
            type: 'set search query (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
            payload: {
                searchQuery: string
            }
        }
        setActiveTab: (activeTab: TaxonomicFilterGroupType) => {
            type: 'set active tab (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
            payload: {
                activeTab: TaxonomicFilterGroupType
            }
        }
        selectItem: (
            group: TaxonomicFilterGroup,
            value: TaxonomicFilterValue | null,
            item: any
        ) => {
            type: 'select item (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
            payload: {
                group: TaxonomicFilterGroup
                value: TaxonomicFilterValue
                item: any
            }
        }
        infiniteListResultsReceived: (
            groupType: TaxonomicFilterGroupType,
            results: ListStorage
        ) => {
            type: 'infinite list results received (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
            payload: {
                groupType: TaxonomicFilterGroupType
                results: ListStorage
            }
        }
    }
    actionKeys: {
        'move up (lib.components.TaxonomicFilter.taxonomicFilterLogic)': 'moveUp'
        'move down (lib.components.TaxonomicFilter.taxonomicFilterLogic)': 'moveDown'
        'select selected (lib.components.TaxonomicFilter.taxonomicFilterLogic)': 'selectSelected'
        'enable mouse interactions (lib.components.TaxonomicFilter.taxonomicFilterLogic)': 'enableMouseInteractions'
        'tab left (lib.components.TaxonomicFilter.taxonomicFilterLogic)': 'tabLeft'
        'tab right (lib.components.TaxonomicFilter.taxonomicFilterLogic)': 'tabRight'
        'set search query (lib.components.TaxonomicFilter.taxonomicFilterLogic)': 'setSearchQuery'
        'set active tab (lib.components.TaxonomicFilter.taxonomicFilterLogic)': 'setActiveTab'
        'select item (lib.components.TaxonomicFilter.taxonomicFilterLogic)': 'selectItem'
        'infinite list results received (lib.components.TaxonomicFilter.taxonomicFilterLogic)': 'infiniteListResultsReceived'
    }
    actionTypes: {
        moveUp: 'move up (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
        moveDown: 'move down (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
        selectSelected: 'select selected (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
        enableMouseInteractions: 'enable mouse interactions (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
        tabLeft: 'tab left (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
        tabRight: 'tab right (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
        setSearchQuery: 'set search query (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
        setActiveTab: 'set active tab (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
        selectItem: 'select item (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
        infiniteListResultsReceived: 'infinite list results received (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
    }
    actions: {
        moveUp: () => void
        moveDown: () => void
        selectSelected: (onComplete?: () => void) => void
        enableMouseInteractions: () => void
        tabLeft: () => void
        tabRight: () => void
        setSearchQuery: (searchQuery: string) => void
        setActiveTab: (activeTab: TaxonomicFilterGroupType) => void
        selectItem: (group: TaxonomicFilterGroup, value: TaxonomicFilterValue | null, item: any) => void
        infiniteListResultsReceived: (groupType: TaxonomicFilterGroupType, results: ListStorage) => void
    }
    asyncActions: {
        moveUp: () => Promise<any>
        moveDown: () => Promise<any>
        selectSelected: (onComplete?: () => void) => Promise<any>
        enableMouseInteractions: () => Promise<any>
        tabLeft: () => Promise<any>
        tabRight: () => Promise<any>
        setSearchQuery: (searchQuery: string) => Promise<any>
        setActiveTab: (activeTab: TaxonomicFilterGroupType) => Promise<any>
        selectItem: (group: TaxonomicFilterGroup, value: TaxonomicFilterValue | null, item: any) => Promise<any>
        infiniteListResultsReceived: (groupType: TaxonomicFilterGroupType, results: ListStorage) => Promise<any>
    }
    defaults: {
        searchQuery: string
        activeTab: TaxonomicFilterGroupType
        mouseInteractionsEnabled: boolean
    }
    events: {}
    key: string
    listeners: {
        selectItem: ((
            action: {
                type: 'select item (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
                payload: {
                    group: TaxonomicFilterGroup
                    value: TaxonomicFilterValue
                    item: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        moveUp: ((
            action: {
                type: 'move up (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        moveDown: ((
            action: {
                type: 'move down (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        selectSelected: ((
            action: {
                type: 'select selected (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
                payload: {
                    onComplete: (() => void) | undefined
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        tabLeft: ((
            action: {
                type: 'tab left (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        tabRight: ((
            action: {
                type: 'tab right (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setSearchQuery: ((
            action: {
                type: 'set search query (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
                payload: {
                    searchQuery: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        infiniteListResultsReceived: ((
            action: {
                type: 'infinite list results received (lib.components.TaxonomicFilter.taxonomicFilterLogic)'
                payload: {
                    groupType: TaxonomicFilterGroupType
                    results: ListStorage
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['lib', 'components', 'TaxonomicFilter', 'taxonomicFilterLogic']
    pathString: 'lib.components.TaxonomicFilter.taxonomicFilterLogic'
    props: TaxonomicFilterLogicProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        searchQuery: string
        activeTab: TaxonomicFilterGroupType
        mouseInteractionsEnabled: boolean
    }
    reducers: {
        searchQuery: (state: string, action: any, fullState: any) => string
        activeTab: (state: TaxonomicFilterGroupType, action: any, fullState: any) => TaxonomicFilterGroupType
        mouseInteractionsEnabled: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        searchQuery: string
        activeTab: TaxonomicFilterGroupType
        mouseInteractionsEnabled: boolean
    }
    selectors: {
        searchQuery: (state: any, props?: any) => string
        activeTab: (state: any, props?: any) => TaxonomicFilterGroupType
        mouseInteractionsEnabled: (state: any, props?: any) => boolean
        currentTeamId: (state: any, props?: any) => number | null
        groupTypes: (state: any, props?: any) => Array<GroupType>
        aggregationLabel: (
            state: any,
            props?: any
        ) => (groupTypeIndex: number | null | undefined, deferToUserWording?: boolean) => Noun
        allGroupProperties: (state: any, props?: any) => GroupTypeProperties
        taxonomicFilterLogicKey: (state: any, props?: any) => any
        eventNames: (state: any, props?: any) => any
        excludedProperties: (state: any, props?: any) => any
        taxonomicGroups: (state: any, props?: any) => TaxonomicFilterGroup[]
        activeTaxonomicGroup: (state: any, props?: any) => TaxonomicFilterGroup | undefined
        taxonomicGroupTypes: (state: any, props?: any) => TaxonomicFilterGroupType[]
        groupAnalyticsTaxonomicGroupNames: (state: any, props?: any) => TaxonomicFilterGroup[]
        groupAnalyticsTaxonomicGroups: (state: any, props?: any) => TaxonomicFilterGroup[]
        infiniteListLogics: (state: any, props?: any) => Record<string, BuiltLogic<infiniteListLogicType>>
        infiniteListCounts: (state: any, props?: any) => { [k: string]: number }
        value: (state: any, props?: any) => any
        groupType: (state: any, props?: any) => any
        currentTabIndex: (state: any, props?: any) => number
        searchPlaceholder: (state: any, props?: any) => string
    }
    sharedListeners: {}
    values: {
        searchQuery: string
        activeTab: TaxonomicFilterGroupType
        mouseInteractionsEnabled: boolean
        currentTeamId: number | null
        groupTypes: Array<GroupType>
        aggregationLabel: (groupTypeIndex: number | null | undefined, deferToUserWording?: boolean) => Noun
        allGroupProperties: GroupTypeProperties
        taxonomicFilterLogicKey: any
        eventNames: any
        excludedProperties: any
        taxonomicGroups: TaxonomicFilterGroup[]
        activeTaxonomicGroup: TaxonomicFilterGroup | undefined
        taxonomicGroupTypes: TaxonomicFilterGroupType[]
        groupAnalyticsTaxonomicGroupNames: TaxonomicFilterGroup[]
        groupAnalyticsTaxonomicGroups: TaxonomicFilterGroup[]
        infiniteListLogics: Record<string, BuiltLogic<infiniteListLogicType>>
        infiniteListCounts: { [k: string]: number }
        value: any
        groupType: any
        currentTabIndex: number
        searchPlaceholder: string
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        taxonomicFilterLogicKey: (arg: any) => any
        eventNames: (arg: any) => any
        excludedProperties: (arg: any) => any
        taxonomicGroups: (
            currentTeamId: number | null,
            groupAnalyticsTaxonomicGroups: TaxonomicFilterGroup[],
            groupAnalyticsTaxonomicGroupNames: TaxonomicFilterGroup[],
            eventNames: any,
            excludedProperties: any
        ) => TaxonomicFilterGroup[]
        activeTaxonomicGroup: (
            activeTab: TaxonomicFilterGroupType,
            taxonomicGroups: TaxonomicFilterGroup[]
        ) => TaxonomicFilterGroup | undefined
        taxonomicGroupTypes: (
            taxonomicGroupTypes: TaxonomicFilterGroupType[],
            taxonomicGroups: TaxonomicFilterGroup[]
        ) => TaxonomicFilterGroupType[]
        groupAnalyticsTaxonomicGroupNames: (
            groupTypes: import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').GroupType[],
            currentTeamId: number | null,
            aggregationLabel: (
                groupTypeIndex: number | null | undefined,
                deferToUserWording?: boolean | undefined
            ) => import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/models/groupsModel').Noun
        ) => TaxonomicFilterGroup[]
        groupAnalyticsTaxonomicGroups: (
            groupTypes: import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').GroupType[],
            currentTeamId: number | null,
            aggregationLabel: (
                groupTypeIndex: number | null | undefined,
                deferToUserWording?: boolean | undefined
            ) => import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/models/groupsModel').Noun
        ) => TaxonomicFilterGroup[]
        infiniteListLogics: (
            taxonomicGroupTypes: TaxonomicFilterGroupType[],
            arg: any
        ) => Record<string, BuiltLogic<infiniteListLogicType>>
        infiniteListCounts: (arg: { [k: string]: number }) => { [k: string]: number }
        value: (arg: any) => any
        groupType: (arg: any) => any
        currentTabIndex: (
            taxonomicGroupTypes: TaxonomicFilterGroupType[],
            activeTab: TaxonomicFilterGroupType
        ) => number
        searchPlaceholder: (
            taxonomicGroups: TaxonomicFilterGroup[],
            taxonomicGroupTypes: TaxonomicFilterGroupType[]
        ) => string
    }
}
