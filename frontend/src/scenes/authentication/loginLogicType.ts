// Generated by kea-typegen on Thu, 20 Jul 2023 11:14:20 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { PreflightStatus } from '../../types'
import type { FeatureFlagsSet } from '../../lib/logic/featureFlagLogic'
import type { LoginForm, PrecheckResponseType } from './loginLogic'
import type { DeepPartial, DeepPartialMap, FieldName, ValidationErrorType } from '../../../../node_modules/kea-forms'

export interface loginLogicType extends Logic {
    actionCreators: {
        setGeneralError: (
            code: string,
            detail: string
        ) => {
            type: 'set general error (scenes.authentication.loginLogic)'
            payload: {
                code: string
                detail: string
            }
        }
        clearGeneralError: () => {
            type: 'clear general error (scenes.authentication.loginLogic)'
            payload: {
                value: true
            }
        }
        precheck: ({ email }: { email: string }) => {
            type: 'precheck (scenes.authentication.loginLogic)'
            payload: {
                email: string
            }
        }
        precheckSuccess: (
            precheckResponse: PrecheckResponseType,
            payload?: {
                email: string
            }
        ) => {
            type: 'precheck success (scenes.authentication.loginLogic)'
            payload: {
                precheckResponse: PrecheckResponseType
                payload?: {
                    email: string
                }
            }
        }
        precheckFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'precheck failure (scenes.authentication.loginLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        setLoginValue: (
            key: FieldName,
            value: any
        ) => {
            type: 'set login value (scenes.authentication.loginLogic)'
            payload: {
                name: FieldName
                value: any
            }
        }
        setLoginValues: (values: DeepPartial<LoginForm>) => {
            type: 'set login values (scenes.authentication.loginLogic)'
            payload: {
                values: DeepPartial<LoginForm>
            }
        }
        setLoginManualErrors: (errors: Record<string, any>) => {
            type: 'set login manual errors (scenes.authentication.loginLogic)'
            payload: {
                errors: Record<string, any>
            }
        }
        touchLoginField: (key: string) => {
            type: 'touch login field (scenes.authentication.loginLogic)'
            payload: {
                key: string
            }
        }
        resetLogin: (values?: LoginForm) => {
            type: 'reset login (scenes.authentication.loginLogic)'
            payload: {
                values?: LoginForm
            }
        }
        submitLogin: () => {
            type: 'submit login (scenes.authentication.loginLogic)'
            payload: {
                value: boolean
            }
        }
        submitLoginRequest: (login: LoginForm) => {
            type: 'submit login request (scenes.authentication.loginLogic)'
            payload: {
                login: LoginForm
            }
        }
        submitLoginSuccess: (login: LoginForm) => {
            type: 'submit login success (scenes.authentication.loginLogic)'
            payload: {
                login: LoginForm
            }
        }
        submitLoginFailure: (
            error: Error,
            errors: Record<string, any>
        ) => {
            type: 'submit login failure (scenes.authentication.loginLogic)'
            payload: {
                error: Error
                errors: Record<string, any>
            }
        }
    }
    actionKeys: {
        'set general error (scenes.authentication.loginLogic)': 'setGeneralError'
        'clear general error (scenes.authentication.loginLogic)': 'clearGeneralError'
        'precheck (scenes.authentication.loginLogic)': 'precheck'
        'precheck success (scenes.authentication.loginLogic)': 'precheckSuccess'
        'precheck failure (scenes.authentication.loginLogic)': 'precheckFailure'
        'set login value (scenes.authentication.loginLogic)': 'setLoginValue'
        'set login values (scenes.authentication.loginLogic)': 'setLoginValues'
        'set login manual errors (scenes.authentication.loginLogic)': 'setLoginManualErrors'
        'touch login field (scenes.authentication.loginLogic)': 'touchLoginField'
        'reset login (scenes.authentication.loginLogic)': 'resetLogin'
        'submit login (scenes.authentication.loginLogic)': 'submitLogin'
        'submit login request (scenes.authentication.loginLogic)': 'submitLoginRequest'
        'submit login success (scenes.authentication.loginLogic)': 'submitLoginSuccess'
        'submit login failure (scenes.authentication.loginLogic)': 'submitLoginFailure'
    }
    actionTypes: {
        setGeneralError: 'set general error (scenes.authentication.loginLogic)'
        clearGeneralError: 'clear general error (scenes.authentication.loginLogic)'
        precheck: 'precheck (scenes.authentication.loginLogic)'
        precheckSuccess: 'precheck success (scenes.authentication.loginLogic)'
        precheckFailure: 'precheck failure (scenes.authentication.loginLogic)'
        setLoginValue: 'set login value (scenes.authentication.loginLogic)'
        setLoginValues: 'set login values (scenes.authentication.loginLogic)'
        setLoginManualErrors: 'set login manual errors (scenes.authentication.loginLogic)'
        touchLoginField: 'touch login field (scenes.authentication.loginLogic)'
        resetLogin: 'reset login (scenes.authentication.loginLogic)'
        submitLogin: 'submit login (scenes.authentication.loginLogic)'
        submitLoginRequest: 'submit login request (scenes.authentication.loginLogic)'
        submitLoginSuccess: 'submit login success (scenes.authentication.loginLogic)'
        submitLoginFailure: 'submit login failure (scenes.authentication.loginLogic)'
    }
    actions: {
        setGeneralError: (code: string, detail: string) => void
        clearGeneralError: () => void
        precheck: ({ email }: { email: string }) => void
        precheckSuccess: (
            precheckResponse: PrecheckResponseType,
            payload?: {
                email: string
            }
        ) => void
        precheckFailure: (error: string, errorObject?: any) => void
        setLoginValue: (key: FieldName, value: any) => void
        setLoginValues: (values: DeepPartial<LoginForm>) => void
        setLoginManualErrors: (errors: Record<string, any>) => void
        touchLoginField: (key: string) => void
        resetLogin: (values?: LoginForm) => void
        submitLogin: () => void
        submitLoginRequest: (login: LoginForm) => void
        submitLoginSuccess: (login: LoginForm) => void
        submitLoginFailure: (error: Error, errors: Record<string, any>) => void
    }
    asyncActions: {
        setGeneralError: (code: string, detail: string) => Promise<any>
        clearGeneralError: () => Promise<any>
        precheck: ({ email }: { email: string }) => Promise<any>
        precheckSuccess: (
            precheckResponse: PrecheckResponseType,
            payload?: {
                email: string
            }
        ) => Promise<any>
        precheckFailure: (error: string, errorObject?: any) => Promise<any>
        setLoginValue: (key: FieldName, value: any) => Promise<any>
        setLoginValues: (values: DeepPartial<LoginForm>) => Promise<any>
        setLoginManualErrors: (errors: Record<string, any>) => Promise<any>
        touchLoginField: (key: string) => Promise<any>
        resetLogin: (values?: LoginForm) => Promise<any>
        submitLogin: () => Promise<any>
        submitLoginRequest: (login: LoginForm) => Promise<any>
        submitLoginSuccess: (login: LoginForm) => Promise<any>
        submitLoginFailure: (error: Error, errors: Record<string, any>) => Promise<any>
    }
    defaults: {
        generalError: {
            code: string
            detail: string
        } | null
        precheckResponse: PrecheckResponseType
        precheckResponseLoading: boolean
        login: LoginForm
        isLoginSubmitting: boolean
        showLoginErrors: boolean
        loginChanged: boolean
        loginTouches: Record<string, boolean>
        loginManualErrors: Record<string, any>
    }
    events: {}
    key: undefined
    listeners: {
        submitLoginSuccess: ((
            action: {
                type: 'submit login success (scenes.authentication.loginLogic)'
                payload: {
                    login: LoginForm
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'authentication', 'loginLogic']
    pathString: 'scenes.authentication.loginLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        generalError: {
            code: string
            detail: string
        } | null
        precheckResponse: PrecheckResponseType
        precheckResponseLoading: boolean
        login: LoginForm
        isLoginSubmitting: boolean
        showLoginErrors: boolean
        loginChanged: boolean
        loginTouches: Record<string, boolean>
        loginManualErrors: Record<string, any>
    }
    reducers: {
        generalError: (
            state: {
                code: string
                detail: string
            } | null,
            action: any,
            fullState: any
        ) => {
            code: string
            detail: string
        } | null
        precheckResponse: (state: PrecheckResponseType, action: any, fullState: any) => PrecheckResponseType
        precheckResponseLoading: (state: boolean, action: any, fullState: any) => boolean
        login: (state: LoginForm, action: any, fullState: any) => LoginForm
        isLoginSubmitting: (state: boolean, action: any, fullState: any) => boolean
        showLoginErrors: (state: boolean, action: any, fullState: any) => boolean
        loginChanged: (state: boolean, action: any, fullState: any) => boolean
        loginTouches: (state: Record<string, boolean>, action: any, fullState: any) => Record<string, boolean>
        loginManualErrors: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
    }
    selector: (state: any) => {
        generalError: {
            code: string
            detail: string
        } | null
        precheckResponse: PrecheckResponseType
        precheckResponseLoading: boolean
        login: LoginForm
        isLoginSubmitting: boolean
        showLoginErrors: boolean
        loginChanged: boolean
        loginTouches: Record<string, boolean>
        loginManualErrors: Record<string, any>
    }
    selectors: {
        generalError: (
            state: any,
            props?: any
        ) => {
            code: string
            detail: string
        } | null
        precheckResponse: (state: any, props?: any) => PrecheckResponseType
        precheckResponseLoading: (state: any, props?: any) => boolean
        login: (state: any, props?: any) => LoginForm
        isLoginSubmitting: (state: any, props?: any) => boolean
        showLoginErrors: (state: any, props?: any) => boolean
        loginChanged: (state: any, props?: any) => boolean
        loginTouches: (state: any, props?: any) => Record<string, boolean>
        loginManualErrors: (state: any, props?: any) => Record<string, any>
        preflight: (state: any, props?: any) => PreflightStatus | null
        featureFlags: (state: any, props?: any) => FeatureFlagsSet
        loginTouched: (state: any, props?: any) => boolean
        loginValidationErrors: (state: any, props?: any) => DeepPartialMap<LoginForm, ValidationErrorType>
        loginAllErrors: (state: any, props?: any) => Record<string, any>
        loginHasErrors: (state: any, props?: any) => boolean
        loginErrors: (state: any, props?: any) => DeepPartialMap<LoginForm, ValidationErrorType>
        isLoginValid: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        generalError: {
            code: string
            detail: string
        } | null
        precheckResponse: PrecheckResponseType
        precheckResponseLoading: boolean
        login: LoginForm
        isLoginSubmitting: boolean
        showLoginErrors: boolean
        loginChanged: boolean
        loginTouches: Record<string, boolean>
        loginManualErrors: Record<string, any>
        preflight: PreflightStatus | null
        featureFlags: FeatureFlagsSet
        loginTouched: boolean
        loginValidationErrors: DeepPartialMap<LoginForm, ValidationErrorType>
        loginAllErrors: Record<string, any>
        loginHasErrors: boolean
        loginErrors: DeepPartialMap<LoginForm, ValidationErrorType>
        isLoginValid: boolean
    }
    _isKea: true
    _isKeaWithKey: false
}
