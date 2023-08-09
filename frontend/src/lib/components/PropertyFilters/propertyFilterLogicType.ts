// Generated by kea-typegen on Mon, 07 Aug 2023 18:56:17 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { PropertyFilterLogicProps } from './types'
import type { AnyPropertyFilter, FilterOperatorCache, PropertyOperator } from '../../../types'

export interface propertyFilterLogicType extends Logic {
    actionCreators: {
        update: () => {
            type: 'update (lib.components.PropertyFilters.propertyFilterLogic.*)'
            payload: {
                value: true
            }
        }
        setFilterInner: (
            index: number,
            property: AnyPropertyFilter
        ) => {
            type: 'set filter inner (lib.components.PropertyFilters.propertyFilterLogic.*)'
            payload: {
                index: number
                property: AnyPropertyFilter
            }
        }
        setFilter: (
            index: number,
            property: AnyPropertyFilter
        ) => {
            type: 'set filter (lib.components.PropertyFilters.propertyFilterLogic.*)'
            payload: {
                index: number
                property: AnyPropertyFilter
            }
        }
        setFilters: (filters: AnyPropertyFilter[]) => {
            type: 'set filters (lib.components.PropertyFilters.propertyFilterLogic.*)'
            payload: {
                filters: AnyPropertyFilter[]
            }
        }
        remove: (index: number) => {
            type: 'remove (lib.components.PropertyFilters.propertyFilterLogic.*)'
            payload: {
                index: number
            }
        }
        setFilterCaches: (
            index: number,
            operator: PropertyOperator,
            property: AnyPropertyFilter
        ) => {
            type: 'set filter caches (lib.components.PropertyFilters.propertyFilterLogic.*)'
            payload: {
                index: number
                operator: PropertyOperator
                property: AnyPropertyFilter
            }
        }
    }
    actionKeys: {
        'update (lib.components.PropertyFilters.propertyFilterLogic.*)': 'update'
        'set filter inner (lib.components.PropertyFilters.propertyFilterLogic.*)': 'setFilterInner'
        'set filter (lib.components.PropertyFilters.propertyFilterLogic.*)': 'setFilter'
        'set filters (lib.components.PropertyFilters.propertyFilterLogic.*)': 'setFilters'
        'remove (lib.components.PropertyFilters.propertyFilterLogic.*)': 'remove'
        'set filter caches (lib.components.PropertyFilters.propertyFilterLogic.*)': 'setFilterCaches'
    }
    actionTypes: {
        update: 'update (lib.components.PropertyFilters.propertyFilterLogic.*)'
        setFilterInner: 'set filter inner (lib.components.PropertyFilters.propertyFilterLogic.*)'
        setFilter: 'set filter (lib.components.PropertyFilters.propertyFilterLogic.*)'
        setFilters: 'set filters (lib.components.PropertyFilters.propertyFilterLogic.*)'
        remove: 'remove (lib.components.PropertyFilters.propertyFilterLogic.*)'
        setFilterCaches: 'set filter caches (lib.components.PropertyFilters.propertyFilterLogic.*)'
    }
    actions: {
        update: () => void
        setFilterInner: (index: number, property: AnyPropertyFilter) => void
        setFilter: (index: number, property: AnyPropertyFilter) => void
        setFilters: (filters: AnyPropertyFilter[]) => void
        remove: (index: number) => void
        setFilterCaches: (index: number, operator: PropertyOperator, property: AnyPropertyFilter) => void
    }
    asyncActions: {
        update: () => Promise<any>
        setFilterInner: (index: number, property: AnyPropertyFilter) => Promise<any>
        setFilter: (index: number, property: AnyPropertyFilter) => Promise<any>
        setFilters: (filters: AnyPropertyFilter[]) => Promise<any>
        remove: (index: number) => Promise<any>
        setFilterCaches: (index: number, operator: PropertyOperator, property: AnyPropertyFilter) => Promise<any>
    }
    defaults: {
        filters: AnyPropertyFilter[]
        filtersOperatorsCache: FilterOperatorCache[]
    }
    events: {}
    key: string
    listeners: {
        setFilter: ((
            action: {
                type: 'set filter (lib.components.PropertyFilters.propertyFilterLogic.*)'
                payload: {
                    index: number
                    property: AnyPropertyFilter
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        remove: ((
            action: {
                type: 'remove (lib.components.PropertyFilters.propertyFilterLogic.*)'
                payload: {
                    index: number
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        update: ((
            action: {
                type: 'update (lib.components.PropertyFilters.propertyFilterLogic.*)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['lib', 'components', 'PropertyFilters', 'propertyFilterLogic', '*']
    pathString: 'lib.components.PropertyFilters.propertyFilterLogic.*'
    props: PropertyFilterLogicProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        filters: AnyPropertyFilter[]
        filtersOperatorsCache: FilterOperatorCache[]
    }
    reducers: {
        filters: (state: AnyPropertyFilter[], action: any, fullState: any) => AnyPropertyFilter[]
        filtersOperatorsCache: (state: FilterOperatorCache[], action: any, fullState: any) => FilterOperatorCache[]
    }
    selector: (state: any) => {
        filters: AnyPropertyFilter[]
        filtersOperatorsCache: FilterOperatorCache[]
    }
    selectors: {
        filters: (state: any, props?: any) => AnyPropertyFilter[]
        filtersOperatorsCache: (state: any, props?: any) => FilterOperatorCache[]
        filledFilters: (state: any, props?: any) => AnyPropertyFilter[]
        filtersWithNew: (state: any, props?: any) => AnyPropertyFilter[]
    }
    sharedListeners: {}
    values: {
        filters: AnyPropertyFilter[]
        filtersOperatorsCache: FilterOperatorCache[]
        filledFilters: AnyPropertyFilter[]
        filtersWithNew: AnyPropertyFilter[]
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        filledFilters: (filters: AnyPropertyFilter[]) => AnyPropertyFilter[]
        filtersWithNew: (filters: AnyPropertyFilter[]) => AnyPropertyFilter[]
    }
}
