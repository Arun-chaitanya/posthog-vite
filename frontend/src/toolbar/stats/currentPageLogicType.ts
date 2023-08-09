// Generated by kea-typegen on Thu, 20 Jul 2023 10:57:51 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

export interface currentPageLogicType extends Logic {
    actionCreators: {
        setHref: (href: string) => {
            type: 'set href (toolbar.stats.currentPageLogic)'
            payload: {
                href: string
            }
        }
        setWildcardHref: (href: string) => {
            type: 'set wildcard href (toolbar.stats.currentPageLogic)'
            payload: {
                href: string
            }
        }
    }
    actionKeys: {
        'set href (toolbar.stats.currentPageLogic)': 'setHref'
        'set wildcard href (toolbar.stats.currentPageLogic)': 'setWildcardHref'
    }
    actionTypes: {
        setHref: 'set href (toolbar.stats.currentPageLogic)'
        setWildcardHref: 'set wildcard href (toolbar.stats.currentPageLogic)'
    }
    actions: {
        setHref: (href: string) => void
        setWildcardHref: (href: string) => void
    }
    asyncActions: {
        setHref: (href: string) => Promise<any>
        setWildcardHref: (href: string) => Promise<any>
    }
    defaults: {
        href: string
        wildcardHref: string
    }
    events: {
        afterMount: () => void
        beforeUnmount: () => void
    }
    key: undefined
    listeners: {}
    path: ['toolbar', 'stats', 'currentPageLogic']
    pathString: 'toolbar.stats.currentPageLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        href: string
        wildcardHref: string
    }
    reducers: {
        href: (state: string, action: any, fullState: any) => string
        wildcardHref: (state: string, action: any, fullState: any) => string
    }
    selector: (state: any) => {
        href: string
        wildcardHref: string
    }
    selectors: {
        href: (state: any, props?: any) => string
        wildcardHref: (state: any, props?: any) => string
    }
    sharedListeners: {}
    values: {
        href: string
        wildcardHref: string
    }
    _isKea: true
    _isKeaWithKey: false
}
