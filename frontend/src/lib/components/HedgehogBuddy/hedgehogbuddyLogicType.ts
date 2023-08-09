// Generated by kea-typegen on Thu, 20 Jul 2023 10:55:14 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { AccessoryInfo } from './sprites/sprites'

export interface hedgehogbuddyLogicType extends Logic {
    actionCreators: {
        setHedgehogModeEnabled: (enabled: boolean) => {
            type: 'set hedgehog mode enabled (hedgehog.hedgehogbuddyLogic)'
            payload: {
                enabled: boolean
            }
        }
        addAccessory: (accessory: AccessoryInfo) => {
            type: 'add accessory (hedgehog.hedgehogbuddyLogic)'
            payload: {
                accessory: AccessoryInfo
            }
        }
        removeAccessory: (accessory: AccessoryInfo) => {
            type: 'remove accessory (hedgehog.hedgehogbuddyLogic)'
            payload: {
                accessory: AccessoryInfo
            }
        }
    }
    actionKeys: {
        'set hedgehog mode enabled (hedgehog.hedgehogbuddyLogic)': 'setHedgehogModeEnabled'
        'add accessory (hedgehog.hedgehogbuddyLogic)': 'addAccessory'
        'remove accessory (hedgehog.hedgehogbuddyLogic)': 'removeAccessory'
    }
    actionTypes: {
        setHedgehogModeEnabled: 'set hedgehog mode enabled (hedgehog.hedgehogbuddyLogic)'
        addAccessory: 'add accessory (hedgehog.hedgehogbuddyLogic)'
        removeAccessory: 'remove accessory (hedgehog.hedgehogbuddyLogic)'
    }
    actions: {
        setHedgehogModeEnabled: (enabled: boolean) => void
        addAccessory: (accessory: AccessoryInfo) => void
        removeAccessory: (accessory: AccessoryInfo) => void
    }
    asyncActions: {
        setHedgehogModeEnabled: (enabled: boolean) => Promise<any>
        addAccessory: (accessory: AccessoryInfo) => Promise<any>
        removeAccessory: (accessory: AccessoryInfo) => Promise<any>
    }
    defaults: {
        hedgehogModeEnabled: boolean
        accessories: AccessoryInfo[]
    }
    events: {}
    key: undefined
    listeners: {
        setHedgehogModeEnabled: ((
            action: {
                type: 'set hedgehog mode enabled (hedgehog.hedgehogbuddyLogic)'
                payload: {
                    enabled: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['hedgehog', 'hedgehogbuddyLogic']
    pathString: 'hedgehog.hedgehogbuddyLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        hedgehogModeEnabled: boolean
        accessories: AccessoryInfo[]
    }
    reducers: {
        hedgehogModeEnabled: (state: boolean, action: any, fullState: any) => boolean
        accessories: (state: AccessoryInfo[], action: any, fullState: any) => AccessoryInfo[]
    }
    selector: (state: any) => {
        hedgehogModeEnabled: boolean
        accessories: AccessoryInfo[]
    }
    selectors: {
        hedgehogModeEnabled: (state: any, props?: any) => boolean
        accessories: (state: any, props?: any) => AccessoryInfo[]
        availableAccessories: (state: any, props?: any) => string[]
    }
    sharedListeners: {}
    values: {
        hedgehogModeEnabled: boolean
        accessories: AccessoryInfo[]
        availableAccessories: string[]
    }
    _isKea: true
    _isKeaWithKey: false
}