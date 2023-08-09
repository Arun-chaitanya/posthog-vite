// Generated by kea-typegen on Thu, 20 Jul 2023 11:14:27 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { DeepPartial, DeepPartialMap, FieldName, ValidationErrorType } from '../../../../node_modules/kea-forms'

export interface formLogicType extends Logic {
    actionCreators: {
        setMyFormValue: (
            key: FieldName,
            value: any
        ) => {
            type: 'set my form value (lib.forms.Field.stories)'
            payload: {
                name: FieldName
                value: any
            }
        }
        setMyFormValues: (
            values: DeepPartial<{
                name: string
                email: string
                pineappleOnPizza: false
            }>
        ) => {
            type: 'set my form values (lib.forms.Field.stories)'
            payload: {
                values: DeepPartial<{
                    name: string
                    email: string
                    pineappleOnPizza: false
                }>
            }
        }
        setMyFormManualErrors: (errors: Record<string, any>) => {
            type: 'set my form manual errors (lib.forms.Field.stories)'
            payload: {
                errors: Record<string, any>
            }
        }
        touchMyFormField: (key: string) => {
            type: 'touch my form field (lib.forms.Field.stories)'
            payload: {
                key: string
            }
        }
        resetMyForm: (values?: { name: string; email: string; pineappleOnPizza: false }) => {
            type: 'reset my form (lib.forms.Field.stories)'
            payload: {
                values?: {
                    name: string
                    email: string
                    pineappleOnPizza: false
                }
            }
        }
        submitMyForm: () => {
            type: 'submit my form (lib.forms.Field.stories)'
            payload: {
                value: boolean
            }
        }
        submitMyFormRequest: (myForm: { name: string; email: string; pineappleOnPizza: false }) => {
            type: 'submit my form request (lib.forms.Field.stories)'
            payload: {
                myForm: {
                    name: string
                    email: string
                    pineappleOnPizza: false
                }
            }
        }
        submitMyFormSuccess: (myForm: { name: string; email: string; pineappleOnPizza: false }) => {
            type: 'submit my form success (lib.forms.Field.stories)'
            payload: {
                myForm: {
                    name: string
                    email: string
                    pineappleOnPizza: false
                }
            }
        }
        submitMyFormFailure: (
            error: Error,
            errors: Record<string, any>
        ) => {
            type: 'submit my form failure (lib.forms.Field.stories)'
            payload: {
                error: Error
                errors: Record<string, any>
            }
        }
        setSimpleFormValue: (
            key: FieldName,
            value: any
        ) => {
            type: 'set simple form value (lib.forms.Field.stories)'
            payload: {
                name: FieldName
                value: any
            }
        }
        setSimpleFormValues: (
            values: DeepPartial<{
                name: string
            }>
        ) => {
            type: 'set simple form values (lib.forms.Field.stories)'
            payload: {
                values: DeepPartial<{
                    name: string
                }>
            }
        }
        setSimpleFormManualErrors: (errors: Record<string, any>) => {
            type: 'set simple form manual errors (lib.forms.Field.stories)'
            payload: {
                errors: Record<string, any>
            }
        }
        touchSimpleFormField: (key: string) => {
            type: 'touch simple form field (lib.forms.Field.stories)'
            payload: {
                key: string
            }
        }
        resetSimpleForm: (values?: { name: string }) => {
            type: 'reset simple form (lib.forms.Field.stories)'
            payload: {
                values?: {
                    name: string
                }
            }
        }
        submitSimpleForm: () => {
            type: 'submit simple form (lib.forms.Field.stories)'
            payload: {
                value: boolean
            }
        }
        submitSimpleFormRequest: (simpleForm: { name: string }) => {
            type: 'submit simple form request (lib.forms.Field.stories)'
            payload: {
                simpleForm: {
                    name: string
                }
            }
        }
        submitSimpleFormSuccess: (simpleForm: { name: string }) => {
            type: 'submit simple form success (lib.forms.Field.stories)'
            payload: {
                simpleForm: {
                    name: string
                }
            }
        }
        submitSimpleFormFailure: (
            error: Error,
            errors: Record<string, any>
        ) => {
            type: 'submit simple form failure (lib.forms.Field.stories)'
            payload: {
                error: Error
                errors: Record<string, any>
            }
        }
    }
    actionKeys: {
        'set my form value (lib.forms.Field.stories)': 'setMyFormValue'
        'set my form values (lib.forms.Field.stories)': 'setMyFormValues'
        'set my form manual errors (lib.forms.Field.stories)': 'setMyFormManualErrors'
        'touch my form field (lib.forms.Field.stories)': 'touchMyFormField'
        'reset my form (lib.forms.Field.stories)': 'resetMyForm'
        'submit my form (lib.forms.Field.stories)': 'submitMyForm'
        'submit my form request (lib.forms.Field.stories)': 'submitMyFormRequest'
        'submit my form success (lib.forms.Field.stories)': 'submitMyFormSuccess'
        'submit my form failure (lib.forms.Field.stories)': 'submitMyFormFailure'
        'set simple form value (lib.forms.Field.stories)': 'setSimpleFormValue'
        'set simple form values (lib.forms.Field.stories)': 'setSimpleFormValues'
        'set simple form manual errors (lib.forms.Field.stories)': 'setSimpleFormManualErrors'
        'touch simple form field (lib.forms.Field.stories)': 'touchSimpleFormField'
        'reset simple form (lib.forms.Field.stories)': 'resetSimpleForm'
        'submit simple form (lib.forms.Field.stories)': 'submitSimpleForm'
        'submit simple form request (lib.forms.Field.stories)': 'submitSimpleFormRequest'
        'submit simple form success (lib.forms.Field.stories)': 'submitSimpleFormSuccess'
        'submit simple form failure (lib.forms.Field.stories)': 'submitSimpleFormFailure'
    }
    actionTypes: {
        setMyFormValue: 'set my form value (lib.forms.Field.stories)'
        setMyFormValues: 'set my form values (lib.forms.Field.stories)'
        setMyFormManualErrors: 'set my form manual errors (lib.forms.Field.stories)'
        touchMyFormField: 'touch my form field (lib.forms.Field.stories)'
        resetMyForm: 'reset my form (lib.forms.Field.stories)'
        submitMyForm: 'submit my form (lib.forms.Field.stories)'
        submitMyFormRequest: 'submit my form request (lib.forms.Field.stories)'
        submitMyFormSuccess: 'submit my form success (lib.forms.Field.stories)'
        submitMyFormFailure: 'submit my form failure (lib.forms.Field.stories)'
        setSimpleFormValue: 'set simple form value (lib.forms.Field.stories)'
        setSimpleFormValues: 'set simple form values (lib.forms.Field.stories)'
        setSimpleFormManualErrors: 'set simple form manual errors (lib.forms.Field.stories)'
        touchSimpleFormField: 'touch simple form field (lib.forms.Field.stories)'
        resetSimpleForm: 'reset simple form (lib.forms.Field.stories)'
        submitSimpleForm: 'submit simple form (lib.forms.Field.stories)'
        submitSimpleFormRequest: 'submit simple form request (lib.forms.Field.stories)'
        submitSimpleFormSuccess: 'submit simple form success (lib.forms.Field.stories)'
        submitSimpleFormFailure: 'submit simple form failure (lib.forms.Field.stories)'
    }
    actions: {
        setMyFormValue: (key: FieldName, value: any) => void
        setMyFormValues: (
            values: DeepPartial<{
                name: string
                email: string
                pineappleOnPizza: false
            }>
        ) => void
        setMyFormManualErrors: (errors: Record<string, any>) => void
        touchMyFormField: (key: string) => void
        resetMyForm: (values?: { name: string; email: string; pineappleOnPizza: false }) => void
        submitMyForm: () => void
        submitMyFormRequest: (myForm: { name: string; email: string; pineappleOnPizza: false }) => void
        submitMyFormSuccess: (myForm: { name: string; email: string; pineappleOnPizza: false }) => void
        submitMyFormFailure: (error: Error, errors: Record<string, any>) => void
        setSimpleFormValue: (key: FieldName, value: any) => void
        setSimpleFormValues: (
            values: DeepPartial<{
                name: string
            }>
        ) => void
        setSimpleFormManualErrors: (errors: Record<string, any>) => void
        touchSimpleFormField: (key: string) => void
        resetSimpleForm: (values?: { name: string }) => void
        submitSimpleForm: () => void
        submitSimpleFormRequest: (simpleForm: { name: string }) => void
        submitSimpleFormSuccess: (simpleForm: { name: string }) => void
        submitSimpleFormFailure: (error: Error, errors: Record<string, any>) => void
    }
    asyncActions: {
        setMyFormValue: (key: FieldName, value: any) => Promise<any>
        setMyFormValues: (
            values: DeepPartial<{
                name: string
                email: string
                pineappleOnPizza: false
            }>
        ) => Promise<any>
        setMyFormManualErrors: (errors: Record<string, any>) => Promise<any>
        touchMyFormField: (key: string) => Promise<any>
        resetMyForm: (values?: { name: string; email: string; pineappleOnPizza: false }) => Promise<any>
        submitMyForm: () => Promise<any>
        submitMyFormRequest: (myForm: { name: string; email: string; pineappleOnPizza: false }) => Promise<any>
        submitMyFormSuccess: (myForm: { name: string; email: string; pineappleOnPizza: false }) => Promise<any>
        submitMyFormFailure: (error: Error, errors: Record<string, any>) => Promise<any>
        setSimpleFormValue: (key: FieldName, value: any) => Promise<any>
        setSimpleFormValues: (
            values: DeepPartial<{
                name: string
            }>
        ) => Promise<any>
        setSimpleFormManualErrors: (errors: Record<string, any>) => Promise<any>
        touchSimpleFormField: (key: string) => Promise<any>
        resetSimpleForm: (values?: { name: string }) => Promise<any>
        submitSimpleForm: () => Promise<any>
        submitSimpleFormRequest: (simpleForm: { name: string }) => Promise<any>
        submitSimpleFormSuccess: (simpleForm: { name: string }) => Promise<any>
        submitSimpleFormFailure: (error: Error, errors: Record<string, any>) => Promise<any>
    }
    defaults: {
        myForm: {
            name: string
            email: string
            pineappleOnPizza: false
        }
        isMyFormSubmitting: boolean
        showMyFormErrors: boolean
        myFormChanged: boolean
        myFormTouches: Record<string, boolean>
        myFormManualErrors: Record<string, any>
        simpleForm: {
            name: string
        }
        isSimpleFormSubmitting: boolean
        showSimpleFormErrors: boolean
        simpleFormChanged: boolean
        simpleFormTouches: Record<string, boolean>
        simpleFormManualErrors: Record<string, any>
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['lib', 'forms', 'Field', 'stories']
    pathString: 'lib.forms.Field.stories'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        myForm: {
            name: string
            email: string
            pineappleOnPizza: false
        }
        isMyFormSubmitting: boolean
        showMyFormErrors: boolean
        myFormChanged: boolean
        myFormTouches: Record<string, boolean>
        myFormManualErrors: Record<string, any>
        simpleForm: {
            name: string
        }
        isSimpleFormSubmitting: boolean
        showSimpleFormErrors: boolean
        simpleFormChanged: boolean
        simpleFormTouches: Record<string, boolean>
        simpleFormManualErrors: Record<string, any>
    }
    reducers: {
        myForm: (
            state: {
                name: string
                email: string
                pineappleOnPizza: false
            },
            action: any,
            fullState: any
        ) => {
            name: string
            email: string
            pineappleOnPizza: false
        }
        isMyFormSubmitting: (state: boolean, action: any, fullState: any) => boolean
        showMyFormErrors: (state: boolean, action: any, fullState: any) => boolean
        myFormChanged: (state: boolean, action: any, fullState: any) => boolean
        myFormTouches: (state: Record<string, boolean>, action: any, fullState: any) => Record<string, boolean>
        myFormManualErrors: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
        simpleForm: (
            state: {
                name: string
            },
            action: any,
            fullState: any
        ) => {
            name: string
        }
        isSimpleFormSubmitting: (state: boolean, action: any, fullState: any) => boolean
        showSimpleFormErrors: (state: boolean, action: any, fullState: any) => boolean
        simpleFormChanged: (state: boolean, action: any, fullState: any) => boolean
        simpleFormTouches: (state: Record<string, boolean>, action: any, fullState: any) => Record<string, boolean>
        simpleFormManualErrors: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
    }
    selector: (state: any) => {
        myForm: {
            name: string
            email: string
            pineappleOnPizza: false
        }
        isMyFormSubmitting: boolean
        showMyFormErrors: boolean
        myFormChanged: boolean
        myFormTouches: Record<string, boolean>
        myFormManualErrors: Record<string, any>
        simpleForm: {
            name: string
        }
        isSimpleFormSubmitting: boolean
        showSimpleFormErrors: boolean
        simpleFormChanged: boolean
        simpleFormTouches: Record<string, boolean>
        simpleFormManualErrors: Record<string, any>
    }
    selectors: {
        myForm: (
            state: any,
            props?: any
        ) => {
            name: string
            email: string
            pineappleOnPizza: false
        }
        isMyFormSubmitting: (state: any, props?: any) => boolean
        showMyFormErrors: (state: any, props?: any) => boolean
        myFormChanged: (state: any, props?: any) => boolean
        myFormTouches: (state: any, props?: any) => Record<string, boolean>
        myFormManualErrors: (state: any, props?: any) => Record<string, any>
        simpleForm: (
            state: any,
            props?: any
        ) => {
            name: string
        }
        isSimpleFormSubmitting: (state: any, props?: any) => boolean
        showSimpleFormErrors: (state: any, props?: any) => boolean
        simpleFormChanged: (state: any, props?: any) => boolean
        simpleFormTouches: (state: any, props?: any) => Record<string, boolean>
        simpleFormManualErrors: (state: any, props?: any) => Record<string, any>
        myFormTouched: (state: any, props?: any) => boolean
        myFormValidationErrors: (
            state: any,
            props?: any
        ) => DeepPartialMap<
            {
                name: string
                email: string
                pineappleOnPizza: false
            },
            ValidationErrorType
        >
        myFormAllErrors: (state: any, props?: any) => Record<string, any>
        myFormHasErrors: (state: any, props?: any) => boolean
        myFormErrors: (
            state: any,
            props?: any
        ) => DeepPartialMap<
            {
                name: string
                email: string
                pineappleOnPizza: false
            },
            ValidationErrorType
        >
        isMyFormValid: (state: any, props?: any) => boolean
        simpleFormTouched: (state: any, props?: any) => boolean
        simpleFormValidationErrors: (
            state: any,
            props?: any
        ) => DeepPartialMap<
            {
                name: string
            },
            ValidationErrorType
        >
        simpleFormAllErrors: (state: any, props?: any) => Record<string, any>
        simpleFormHasErrors: (state: any, props?: any) => boolean
        simpleFormErrors: (
            state: any,
            props?: any
        ) => DeepPartialMap<
            {
                name: string
            },
            ValidationErrorType
        >
        isSimpleFormValid: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        myForm: {
            name: string
            email: string
            pineappleOnPizza: false
        }
        isMyFormSubmitting: boolean
        showMyFormErrors: boolean
        myFormChanged: boolean
        myFormTouches: Record<string, boolean>
        myFormManualErrors: Record<string, any>
        simpleForm: {
            name: string
        }
        isSimpleFormSubmitting: boolean
        showSimpleFormErrors: boolean
        simpleFormChanged: boolean
        simpleFormTouches: Record<string, boolean>
        simpleFormManualErrors: Record<string, any>
        myFormTouched: boolean
        myFormValidationErrors: DeepPartialMap<
            {
                name: string
                email: string
                pineappleOnPizza: false
            },
            ValidationErrorType
        >
        myFormAllErrors: Record<string, any>
        myFormHasErrors: boolean
        myFormErrors: DeepPartialMap<
            {
                name: string
                email: string
                pineappleOnPizza: false
            },
            ValidationErrorType
        >
        isMyFormValid: boolean
        simpleFormTouched: boolean
        simpleFormValidationErrors: DeepPartialMap<
            {
                name: string
            },
            ValidationErrorType
        >
        simpleFormAllErrors: Record<string, any>
        simpleFormHasErrors: boolean
        simpleFormErrors: DeepPartialMap<
            {
                name: string
            },
            ValidationErrorType
        >
        isSimpleFormValid: boolean
    }
    _isKea: true
    _isKeaWithKey: false
}
