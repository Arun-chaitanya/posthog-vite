// Generated by kea-typegen on Tue, 08 Aug 2023 10:01:13 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { AnyPropertyFilter, ChartDisplayType, EventType, FilterType, InsightLogicProps, IntervalType, ItemMode, PropertyGroupFilter } from '../../types'
import type { ActionsNode, AnyResponseType, BreakdownFilter, DataNode, DateRange, EventsNode, EventsQueryResponse, FunnelsFilter, HogQLMetadataResponse, HogQLQueryResponse, InsightFilter, InsightQueryNode, LifecycleFilter, Node, PathsFilter, RetentionFilter, StickinessFilter, TrendsFilter } from '../../queries/schema'
import type { ShownAsValue } from '../../lib/constants'

export interface insightVizDataLogicType extends Logic {
    actionCreators: {
        setFilters: (
            filters: Partial<FilterType>,
            insightMode?: ItemMode,
            clearInsightQuery?: boolean
        ) => {
            type: 'set filters (scenes.insights.insightVizDataLogic.*)'
            payload: {
                filters: Partial<FilterType>
                insightMode: ItemMode | undefined
                clearInsightQuery: boolean | undefined
            }
        }
        loadData: (refresh?: any) => {
            type: 'load data (scenes.insights.insightVizDataLogic.*)'
            payload: {
                refresh: any
                queryId: string
            }
        }
        setInsightData: (response: Exclude<AnyResponseType, undefined>) => {
            type: 'set insight data (scenes.insights.insightVizDataLogic.*)'
            payload:
                | Record<string, any>
                | HogQLQueryResponse
                | HogQLMetadataResponse
                | {
                      results: EventType[]
                      next?: string | undefined
                  }
                | EventsQueryResponse
        }
        loadDataSuccess: (
            response: Record<string, any> | null,
            payload?: {
                refresh: any
                queryId: string
            }
        ) => {
            type: 'load data success (scenes.insights.insightVizDataLogic.*)'
            payload: {
                response: Record<string, any> | null
                payload?: {
                    refresh: any
                    queryId: string
                }
            }
        }
        loadDataFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load data failure (scenes.insights.insightVizDataLogic.*)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        setQuery: (query: Node | null) => {
            type: 'set query (scenes.insights.insightVizDataLogic.*)'
            payload: {
                query: Node | null
            }
        }
        saveInsight: (redirectToViewMode?: any) => {
            type: 'save insight (scenes.insights.insightVizDataLogic.*)'
            payload: {
                redirectToViewMode: any
            }
        }
        updateQuerySource: (querySource: Omit<Partial<InsightQueryNode>, 'kind'>) => {
            type: 'update query source (scenes.insights.insightVizDataLogic.*)'
            payload: {
                querySource: Omit<Partial<InsightQueryNode>, 'kind'>
            }
        }
        updateInsightFilter: (insightFilter: InsightFilter) => {
            type: 'update insight filter (scenes.insights.insightVizDataLogic.*)'
            payload: {
                insightFilter: InsightFilter
            }
        }
        updateDateRange: (dateRange: DateRange) => {
            type: 'update date range (scenes.insights.insightVizDataLogic.*)'
            payload: {
                dateRange: DateRange
            }
        }
        updateBreakdown: (breakdown: BreakdownFilter) => {
            type: 'update breakdown (scenes.insights.insightVizDataLogic.*)'
            payload: {
                breakdown: BreakdownFilter
            }
        }
        updateDisplay: (display: ChartDisplayType | undefined) => {
            type: 'update display (scenes.insights.insightVizDataLogic.*)'
            payload: {
                display: ChartDisplayType | undefined
            }
        }
        setTimedOutQueryId: (id: string | null) => {
            type: 'set timed out query id (scenes.insights.insightVizDataLogic.*)'
            payload: {
                id: string | null
            }
        }
    }
    actionKeys: {
        'set filters (scenes.insights.insightVizDataLogic.*)': 'setFilters'
        'load data (scenes.insights.insightVizDataLogic.*)': 'loadData'
        'set insight data (scenes.insights.insightVizDataLogic.*)': 'setInsightData'
        'load data success (scenes.insights.insightVizDataLogic.*)': 'loadDataSuccess'
        'load data failure (scenes.insights.insightVizDataLogic.*)': 'loadDataFailure'
        'set query (scenes.insights.insightVizDataLogic.*)': 'setQuery'
        'save insight (scenes.insights.insightVizDataLogic.*)': 'saveInsight'
        'update query source (scenes.insights.insightVizDataLogic.*)': 'updateQuerySource'
        'update insight filter (scenes.insights.insightVizDataLogic.*)': 'updateInsightFilter'
        'update date range (scenes.insights.insightVizDataLogic.*)': 'updateDateRange'
        'update breakdown (scenes.insights.insightVizDataLogic.*)': 'updateBreakdown'
        'update display (scenes.insights.insightVizDataLogic.*)': 'updateDisplay'
        'set timed out query id (scenes.insights.insightVizDataLogic.*)': 'setTimedOutQueryId'
    }
    actionTypes: {
        setFilters: 'set filters (scenes.insights.insightVizDataLogic.*)'
        loadData: 'load data (scenes.insights.insightVizDataLogic.*)'
        setInsightData: 'set insight data (scenes.insights.insightVizDataLogic.*)'
        loadDataSuccess: 'load data success (scenes.insights.insightVizDataLogic.*)'
        loadDataFailure: 'load data failure (scenes.insights.insightVizDataLogic.*)'
        setQuery: 'set query (scenes.insights.insightVizDataLogic.*)'
        saveInsight: 'save insight (scenes.insights.insightVizDataLogic.*)'
        updateQuerySource: 'update query source (scenes.insights.insightVizDataLogic.*)'
        updateInsightFilter: 'update insight filter (scenes.insights.insightVizDataLogic.*)'
        updateDateRange: 'update date range (scenes.insights.insightVizDataLogic.*)'
        updateBreakdown: 'update breakdown (scenes.insights.insightVizDataLogic.*)'
        updateDisplay: 'update display (scenes.insights.insightVizDataLogic.*)'
        setTimedOutQueryId: 'set timed out query id (scenes.insights.insightVizDataLogic.*)'
    }
    actions: {
        setFilters: (filters: Partial<FilterType>, insightMode?: ItemMode, clearInsightQuery?: boolean) => void
        loadData: (refresh?: any) => void
        setInsightData: (response: Exclude<AnyResponseType, undefined>) => void
        loadDataSuccess: (
            response: Record<string, any> | null,
            payload?: {
                refresh: any
                queryId: string
            }
        ) => void
        loadDataFailure: (error: string, errorObject?: any) => void
        setQuery: (query: Node | null) => void
        saveInsight: (redirectToViewMode?: any) => void
        updateQuerySource: (querySource: Omit<Partial<InsightQueryNode>, 'kind'>) => void
        updateInsightFilter: (insightFilter: InsightFilter) => void
        updateDateRange: (dateRange: DateRange) => void
        updateBreakdown: (breakdown: BreakdownFilter) => void
        updateDisplay: (display: ChartDisplayType | undefined) => void
        setTimedOutQueryId: (id: string | null) => void
    }
    asyncActions: {
        setFilters: (filters: Partial<FilterType>, insightMode?: ItemMode, clearInsightQuery?: boolean) => Promise<any>
        loadData: (refresh?: any) => Promise<any>
        setInsightData: (response: Exclude<AnyResponseType, undefined>) => Promise<any>
        loadDataSuccess: (
            response: Record<string, any> | null,
            payload?: {
                refresh: any
                queryId: string
            }
        ) => Promise<any>
        loadDataFailure: (error: string, errorObject?: any) => Promise<any>
        setQuery: (query: Node | null) => Promise<any>
        saveInsight: (redirectToViewMode?: any) => Promise<any>
        updateQuerySource: (querySource: Omit<Partial<InsightQueryNode>, 'kind'>) => Promise<any>
        updateInsightFilter: (insightFilter: InsightFilter) => Promise<any>
        updateDateRange: (dateRange: DateRange) => Promise<any>
        updateBreakdown: (breakdown: BreakdownFilter) => Promise<any>
        updateDisplay: (display: ChartDisplayType | undefined) => Promise<any>
        setTimedOutQueryId: (id: string | null) => Promise<any>
    }
    defaults: {
        timedOutQueryId: null | string
    }
    events: {}
    key: string
    listeners: {
        updateDateRange: ((
            action: {
                type: 'update date range (scenes.insights.insightVizDataLogic.*)'
                payload: {
                    dateRange: DateRange
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateBreakdown: ((
            action: {
                type: 'update breakdown (scenes.insights.insightVizDataLogic.*)'
                payload: {
                    breakdown: BreakdownFilter
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateDisplay: ((
            action: {
                type: 'update display (scenes.insights.insightVizDataLogic.*)'
                payload: {
                    display: ChartDisplayType | undefined
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateInsightFilter: ((
            action: {
                type: 'update insight filter (scenes.insights.insightVizDataLogic.*)'
                payload: {
                    insightFilter: InsightFilter
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateQuerySource: ((
            action: {
                type: 'update query source (scenes.insights.insightVizDataLogic.*)'
                payload: {
                    querySource: Omit<Partial<InsightQueryNode>, 'kind'>
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setQuery: ((
            action: {
                type: 'set query (scenes.insights.insightVizDataLogic.*)'
                payload: {
                    query: Node | null
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadData: ((
            action: {
                type: 'load data (scenes.insights.insightVizDataLogic.*)'
                payload: {
                    refresh: any
                    queryId: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadDataSuccess: ((
            action: {
                type: 'load data success (scenes.insights.insightVizDataLogic.*)'
                payload: {
                    response: Record<string, any> | null
                    payload?: {
                        refresh: any
                        queryId: string
                    }
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        loadDataFailure: ((
            action: {
                type: 'load data failure (scenes.insights.insightVizDataLogic.*)'
                payload: {
                    error: string
                    errorObject?: any
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'insights', 'insightVizDataLogic', '*']
    pathString: 'scenes.insights.insightVizDataLogic.*'
    props: InsightLogicProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        timedOutQueryId: null | string
    }
    reducers: {
        timedOutQueryId: (state: null | string, action: any, fullState: any) => null | string
    }
    selector: (state: any) => {
        timedOutQueryId: null | string
    }
    selectors: {
        timedOutQueryId: (state: any, props?: any) => null | string
        insightData: (state: any, props?: any) => Record<string, any> | null
        insightDataLoading: (state: any, props?: any) => boolean
        insightDataError: (state: any, props?: any) => Record<string, any> | null
        insightQuery: (state: any, props?: any) => DataNode
        query: (state: any, props?: any) => Node
        filterTestAccountsDefault: (state: any, props?: any) => boolean
        querySource: (state: any, props?: any) => InsightQueryNode | null
        isTrends: (state: any, props?: any) => boolean
        isFunnels: (state: any, props?: any) => boolean
        isRetention: (state: any, props?: any) => boolean
        isPaths: (state: any, props?: any) => boolean
        isStickiness: (state: any, props?: any) => boolean
        isLifecycle: (state: any, props?: any) => boolean
        isTrendsLike: (state: any, props?: any) => boolean
        supportsDisplay: (state: any, props?: any) => boolean
        supportsCompare: (state: any, props?: any) => boolean
        supportsPercentStackView: (state: any, props?: any) => boolean
        dateRange: (state: any, props?: any) => DateRange | null | undefined
        breakdown: (state: any, props?: any) => BreakdownFilter | null | undefined
        display: (state: any, props?: any) => ChartDisplayType | null | undefined
        compare: (state: any, props?: any) => boolean | null | undefined
        formula: (state: any, props?: any) => string | null | undefined
        series: (state: any, props?: any) => (EventsNode | ActionsNode)[] | null | undefined
        interval: (state: any, props?: any) => IntervalType | null | undefined
        properties: (state: any, props?: any) => AnyPropertyFilter[] | PropertyGroupFilter | null | undefined
        samplingFactor: (state: any, props?: any) => number | null | undefined
        shownAs: (state: any, props?: any) => ShownAsValue | null | undefined
        showValueOnSeries: (state: any, props?: any) => boolean | null | undefined
        showPercentStackView: (state: any, props?: any) => boolean | null | undefined
        insightFilter: (state: any, props?: any) => InsightFilter | null | undefined
        trendsFilter: (state: any, props?: any) => TrendsFilter | null | undefined
        funnelsFilter: (state: any, props?: any) => FunnelsFilter | null | undefined
        retentionFilter: (state: any, props?: any) => RetentionFilter | null | undefined
        pathsFilter: (state: any, props?: any) => PathsFilter | null | undefined
        stickinessFilter: (state: any, props?: any) => StickinessFilter | null | undefined
        lifecycleFilter: (state: any, props?: any) => LifecycleFilter | null | undefined
        isUsingSessionAnalysis: (state: any, props?: any) => boolean
        isNonTimeSeriesDisplay: (state: any, props?: any) => boolean
        isSingleSeries: (state: any, props?: any) => boolean
        hasLegend: (state: any, props?: any) => boolean
        hasFormula: (state: any, props?: any) => boolean
        erroredQueryId: (state: any, props?: any) => any
        timezone: (state: any, props?: any) => any
    }
    sharedListeners: {}
    values: {
        timedOutQueryId: null | string
        insightData: Record<string, any> | null
        insightDataLoading: boolean
        insightDataError: Record<string, any> | null
        insightQuery: DataNode
        query: Node
        filterTestAccountsDefault: boolean
        querySource: InsightQueryNode | null
        isTrends: boolean
        isFunnels: boolean
        isRetention: boolean
        isPaths: boolean
        isStickiness: boolean
        isLifecycle: boolean
        isTrendsLike: boolean
        supportsDisplay: boolean
        supportsCompare: boolean
        supportsPercentStackView: boolean
        dateRange: DateRange | null | undefined
        breakdown: BreakdownFilter | null | undefined
        display: ChartDisplayType | null | undefined
        compare: boolean | null | undefined
        formula: string | null | undefined
        series: (EventsNode | ActionsNode)[] | null | undefined
        interval: IntervalType | null | undefined
        properties: AnyPropertyFilter[] | PropertyGroupFilter | null | undefined
        samplingFactor: number | null | undefined
        shownAs: ShownAsValue | null | undefined
        showValueOnSeries: boolean | null | undefined
        showPercentStackView: boolean | null | undefined
        insightFilter: InsightFilter | null | undefined
        trendsFilter: TrendsFilter | null | undefined
        funnelsFilter: FunnelsFilter | null | undefined
        retentionFilter: RetentionFilter | null | undefined
        pathsFilter: PathsFilter | null | undefined
        stickinessFilter: StickinessFilter | null | undefined
        lifecycleFilter: LifecycleFilter | null | undefined
        isUsingSessionAnalysis: boolean
        isNonTimeSeriesDisplay: boolean
        isSingleSeries: boolean
        hasLegend: boolean
        hasFormula: boolean
        erroredQueryId: any
        timezone: any
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        querySource: (query: Node) => InsightQueryNode | null
        isTrends: (querySource: InsightQueryNode | null) => boolean
        isFunnels: (querySource: InsightQueryNode | null) => boolean
        isRetention: (querySource: InsightQueryNode | null) => boolean
        isPaths: (querySource: InsightQueryNode | null) => boolean
        isStickiness: (querySource: InsightQueryNode | null) => boolean
        isLifecycle: (querySource: InsightQueryNode | null) => boolean
        isTrendsLike: (querySource: InsightQueryNode | null) => boolean
        supportsDisplay: (querySource: InsightQueryNode | null) => boolean
        supportsCompare: (querySource: InsightQueryNode | null) => boolean
        supportsPercentStackView: (
            querySource: InsightQueryNode | null,
            display: ChartDisplayType | null | undefined
        ) => boolean
        dateRange: (querySource: InsightQueryNode | null) => DateRange | null | undefined
        breakdown: (querySource: InsightQueryNode | null) => BreakdownFilter | null | undefined
        display: (querySource: InsightQueryNode | null) => ChartDisplayType | null | undefined
        compare: (querySource: InsightQueryNode | null) => boolean | null | undefined
        formula: (querySource: InsightQueryNode | null) => string | null | undefined
        series: (querySource: InsightQueryNode | null) => (EventsNode | ActionsNode)[] | null | undefined
        interval: (querySource: InsightQueryNode | null) => IntervalType | null | undefined
        properties: (
            querySource: InsightQueryNode | null
        ) => AnyPropertyFilter[] | PropertyGroupFilter | null | undefined
        samplingFactor: (querySource: InsightQueryNode | null) => number | null | undefined
        shownAs: (querySource: InsightQueryNode | null) => ShownAsValue | null | undefined
        showValueOnSeries: (querySource: InsightQueryNode | null) => boolean | null | undefined
        showPercentStackView: (querySource: InsightQueryNode | null) => boolean | null | undefined
        insightFilter: (querySource: InsightQueryNode | null) => InsightFilter | null | undefined
        trendsFilter: (querySource: InsightQueryNode | null) => TrendsFilter | null | undefined
        funnelsFilter: (querySource: InsightQueryNode | null) => FunnelsFilter | null | undefined
        retentionFilter: (querySource: InsightQueryNode | null) => RetentionFilter | null | undefined
        pathsFilter: (querySource: InsightQueryNode | null) => PathsFilter | null | undefined
        stickinessFilter: (querySource: InsightQueryNode | null) => StickinessFilter | null | undefined
        lifecycleFilter: (querySource: InsightQueryNode | null) => LifecycleFilter | null | undefined
        isUsingSessionAnalysis: (
            series:
                | (
                      | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/queries/schema').EventsNode
                      | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/queries/schema').ActionsNode
                  )[]
                | null
                | undefined,
            breakdown: BreakdownFilter | null | undefined,
            properties:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').AnyPropertyFilter[]
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').PropertyGroupFilter
                | null
                | undefined
        ) => boolean
        isNonTimeSeriesDisplay: (display: ChartDisplayType | null | undefined) => boolean
        isSingleSeries: (
            isTrends: boolean,
            formula: string | null | undefined,
            series:
                | (
                      | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/queries/schema').EventsNode
                      | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/queries/schema').ActionsNode
                  )[]
                | null
                | undefined,
            breakdown: BreakdownFilter | null | undefined
        ) => boolean
        hasLegend: (isTrends: boolean, isStickiness: boolean, display: ChartDisplayType | null | undefined) => boolean
        hasFormula: (formula: string | null | undefined) => boolean
        erroredQueryId: (insightDataError: Record<string, any> | null) => any
        timezone: (insightData: Record<string, any> | null) => any
    }
}
