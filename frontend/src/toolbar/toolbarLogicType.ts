// Generated by kea-typegen on Sun, 06 Aug 2023 06:34:28 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { ToolbarProps, ToolbarSource, ToolbarUserIntent } from '../types'
import type { PostHog } from '../../../node_modules/.pnpm/posthog-js@1.75.2/node_modules/posthog-js/dist/module.d'

export interface toolbarLogicType extends Logic {
    actionCreators: {
        authenticate: () => {
            type: 'authenticate (toolbar.toolbarLogic)'
            payload: {
                value: true
            }
        }
        logout: () => {
            type: 'logout (toolbar.toolbarLogic)'
            payload: {
                value: true
            }
        }
        tokenExpired: () => {
            type: 'token expired (toolbar.toolbarLogic)'
            payload: {
                value: true
            }
        }
        processUserIntent: () => {
            type: 'process user intent (toolbar.toolbarLogic)'
            payload: {
                value: true
            }
        }
        clearUserIntent: () => {
            type: 'clear user intent (toolbar.toolbarLogic)'
            payload: {
                value: true
            }
        }
        showButton: () => {
            type: 'show button (toolbar.toolbarLogic)'
            payload: {
                value: true
            }
        }
        hideButton: () => {
            type: 'hide button (toolbar.toolbarLogic)'
            payload: {
                value: true
            }
        }
    }
    actionKeys: {
        'authenticate (toolbar.toolbarLogic)': 'authenticate'
        'logout (toolbar.toolbarLogic)': 'logout'
        'token expired (toolbar.toolbarLogic)': 'tokenExpired'
        'process user intent (toolbar.toolbarLogic)': 'processUserIntent'
        'clear user intent (toolbar.toolbarLogic)': 'clearUserIntent'
        'show button (toolbar.toolbarLogic)': 'showButton'
        'hide button (toolbar.toolbarLogic)': 'hideButton'
    }
    actionTypes: {
        authenticate: 'authenticate (toolbar.toolbarLogic)'
        logout: 'logout (toolbar.toolbarLogic)'
        tokenExpired: 'token expired (toolbar.toolbarLogic)'
        processUserIntent: 'process user intent (toolbar.toolbarLogic)'
        clearUserIntent: 'clear user intent (toolbar.toolbarLogic)'
        showButton: 'show button (toolbar.toolbarLogic)'
        hideButton: 'hide button (toolbar.toolbarLogic)'
    }
    actions: {
        authenticate: () => void
        logout: () => void
        tokenExpired: () => void
        processUserIntent: () => void
        clearUserIntent: () => void
        showButton: () => void
        hideButton: () => void
    }
    asyncActions: {
        authenticate: () => Promise<any>
        logout: () => Promise<any>
        tokenExpired: () => Promise<any>
        processUserIntent: () => Promise<any>
        clearUserIntent: () => Promise<any>
        showButton: () => Promise<any>
        hideButton: () => Promise<any>
    }
    defaults: {
        rawApiURL: string
        rawJsURL: string
        temporaryToken: string | null
        actionId: number | null
        userIntent: ToolbarUserIntent | null
        source: ToolbarSource | null
        buttonVisible: boolean
        dataAttributes: string[]
        posthog: PostHog | null
    }
    events: {}
    key: undefined
    listeners: {
        authenticate: ((
            action: {
                type: 'authenticate (toolbar.toolbarLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        logout: ((
            action: {
                type: 'logout (toolbar.toolbarLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        tokenExpired: ((
            action: {
                type: 'token expired (toolbar.toolbarLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        processUserIntent: ((
            action: {
                type: 'process user intent (toolbar.toolbarLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['toolbar', 'toolbarLogic']
    pathString: 'toolbar.toolbarLogic'
    props: ToolbarProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        rawApiURL: string
        rawJsURL: string
        temporaryToken: string | null
        actionId: number | null
        userIntent: ToolbarUserIntent | null
        source: ToolbarSource | null
        buttonVisible: boolean
        dataAttributes: string[]
        posthog: PostHog | null
    }
    reducers: {
        rawApiURL: (state: string, action: any, fullState: any) => string
        rawJsURL: (state: string, action: any, fullState: any) => string
        temporaryToken: (state: string | null, action: any, fullState: any) => string | null
        actionId: (state: number | null, action: any, fullState: any) => number | null
        userIntent: (state: ToolbarUserIntent | null, action: any, fullState: any) => ToolbarUserIntent | null
        source: (state: ToolbarSource | null, action: any, fullState: any) => ToolbarSource | null
        buttonVisible: (state: boolean, action: any, fullState: any) => boolean
        dataAttributes: (state: string[], action: any, fullState: any) => string[]
        posthog: (state: PostHog | null, action: any, fullState: any) => PostHog | null
    }
    selector: (state: any) => {
        rawApiURL: string
        rawJsURL: string
        temporaryToken: string | null
        actionId: number | null
        userIntent: ToolbarUserIntent | null
        source: ToolbarSource | null
        buttonVisible: boolean
        dataAttributes: string[]
        posthog: PostHog | null
    }
    selectors: {
        rawApiURL: (state: any, props?: any) => string
        rawJsURL: (state: any, props?: any) => string
        temporaryToken: (state: any, props?: any) => string | null
        actionId: (state: any, props?: any) => number | null
        userIntent: (state: any, props?: any) => ToolbarUserIntent | null
        source: (state: any, props?: any) => ToolbarSource | null
        buttonVisible: (state: any, props?: any) => boolean
        dataAttributes: (state: any, props?: any) => string[]
        posthog: (state: any, props?: any) => PostHog | null
        apiURL: (state: any, props?: any) => string
        jsURL: (state: any, props?: any) => string
        isAuthenticated: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        rawApiURL: string
        rawJsURL: string
        temporaryToken: string | null
        actionId: number | null
        userIntent: ToolbarUserIntent | null
        source: ToolbarSource | null
        buttonVisible: boolean
        dataAttributes: string[]
        posthog: PostHog | null
        apiURL: string
        jsURL: string
        isAuthenticated: boolean
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        apiURL: (rawApiURL: string) => string
        jsURL: (rawJsURL: string, apiURL: string) => string
        isAuthenticated: (temporaryToken: string | null) => boolean
    }
}