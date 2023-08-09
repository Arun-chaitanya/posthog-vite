// Generated by kea-typegen on Thu, 20 Jul 2023 11:14:24 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { FeatureLogicProps } from './earlyAccessFeatureLogic'
import type { Breadcrumb, EarlyAccessFeatureStage, EarlyAccessFeatureTabs, EarlyAccessFeatureType, NewEarlyAccessFeatureType } from '../../types'
import type { DeepPartial, DeepPartialMap, FieldName, ValidationErrorType } from '../../../../node_modules/kea-forms'

export interface earlyAccessFeatureLogicType extends Logic {
    actionCreators: {
        loadEarlyAccessFeatures: () => {
            type: 'load early access features (scenes.features.featureLogic)'
            payload: any
        }
        loadEarlyAccessFeaturesSuccess: (
            earlyAccessFeatures: EarlyAccessFeatureType[],
            payload?: any
        ) => {
            type: 'load early access features success (scenes.features.featureLogic)'
            payload: {
                earlyAccessFeatures: EarlyAccessFeatureType[]
                payload?: any
            }
        }
        toggleImplementOptInInstructionsModal: () => {
            type: 'toggle implement opt in instructions modal (scenes.features.featureLogic)'
            payload: {
                value: true
            }
        }
        cancel: () => {
            type: 'cancel (scenes.features.featureLogic)'
            payload: {
                value: true
            }
        }
        editFeature: (editing: boolean) => {
            type: 'edit feature (scenes.features.featureLogic)'
            payload: {
                editing: boolean
            }
        }
        updateStage: (stage: EarlyAccessFeatureStage) => {
            type: 'update stage (scenes.features.featureLogic)'
            payload: {
                stage: EarlyAccessFeatureStage
            }
        }
        deleteEarlyAccessFeature: (earlyAccessFeatureId: EarlyAccessFeatureType['id']) => {
            type: 'delete early access feature (scenes.features.featureLogic)'
            payload: {
                earlyAccessFeatureId: string
            }
        }
        setActiveTab: (activeTab: EarlyAccessFeatureTabs) => {
            type: 'set active tab (scenes.features.featureLogic)'
            payload: {
                activeTab: EarlyAccessFeatureTabs
            }
        }
        loadEarlyAccessFeature: () => {
            type: 'load early access feature (scenes.features.featureLogic)'
            payload: any
        }
        loadEarlyAccessFeatureSuccess: (
            earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType,
            payload?: any
        ) => {
            type: 'load early access feature success (scenes.features.featureLogic)'
            payload: {
                earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType
                payload?: any
            }
        }
        loadEarlyAccessFeatureFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load early access feature failure (scenes.features.featureLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        saveEarlyAccessFeature: (updatedEarlyAccessFeature: Partial<EarlyAccessFeatureType>) => {
            type: 'save early access feature (scenes.features.featureLogic)'
            payload: Partial<EarlyAccessFeatureType>
        }
        saveEarlyAccessFeatureSuccess: (
            earlyAccessFeature: EarlyAccessFeatureType,
            payload?: Partial<EarlyAccessFeatureType>
        ) => {
            type: 'save early access feature success (scenes.features.featureLogic)'
            payload: {
                earlyAccessFeature: EarlyAccessFeatureType
                payload?: Partial<EarlyAccessFeatureType>
            }
        }
        saveEarlyAccessFeatureFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'save early access feature failure (scenes.features.featureLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        setEarlyAccessFeatureValue: (
            key: FieldName,
            value: any
        ) => {
            type: 'set early access feature value (scenes.features.featureLogic)'
            payload: {
                name: FieldName
                value: any
            }
        }
        setEarlyAccessFeatureValues: (values: DeepPartial<EarlyAccessFeatureType | NewEarlyAccessFeatureType>) => {
            type: 'set early access feature values (scenes.features.featureLogic)'
            payload: {
                values: DeepPartial<EarlyAccessFeatureType | NewEarlyAccessFeatureType>
            }
        }
        setEarlyAccessFeatureManualErrors: (errors: Record<string, any>) => {
            type: 'set early access feature manual errors (scenes.features.featureLogic)'
            payload: {
                errors: Record<string, any>
            }
        }
        touchEarlyAccessFeatureField: (key: string) => {
            type: 'touch early access feature field (scenes.features.featureLogic)'
            payload: {
                key: string
            }
        }
        resetEarlyAccessFeature: (values?: EarlyAccessFeatureType | NewEarlyAccessFeatureType) => {
            type: 'reset early access feature (scenes.features.featureLogic)'
            payload: {
                values?: EarlyAccessFeatureType | NewEarlyAccessFeatureType
            }
        }
        submitEarlyAccessFeature: () => {
            type: 'submit early access feature (scenes.features.featureLogic)'
            payload: {
                value: boolean
            }
        }
        submitEarlyAccessFeatureRequest: (earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType) => {
            type: 'submit early access feature request (scenes.features.featureLogic)'
            payload: {
                earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType
            }
        }
        submitEarlyAccessFeatureSuccess: (earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType) => {
            type: 'submit early access feature success (scenes.features.featureLogic)'
            payload: {
                earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType
            }
        }
        submitEarlyAccessFeatureFailure: (
            error: Error,
            errors: Record<string, any>
        ) => {
            type: 'submit early access feature failure (scenes.features.featureLogic)'
            payload: {
                error: Error
                errors: Record<string, any>
            }
        }
    }
    actionKeys: {
        'load early access features (scenes.features.featureLogic)': 'loadEarlyAccessFeatures'
        'load early access features success (scenes.features.featureLogic)': 'loadEarlyAccessFeaturesSuccess'
        'toggle implement opt in instructions modal (scenes.features.featureLogic)': 'toggleImplementOptInInstructionsModal'
        'cancel (scenes.features.featureLogic)': 'cancel'
        'edit feature (scenes.features.featureLogic)': 'editFeature'
        'update stage (scenes.features.featureLogic)': 'updateStage'
        'delete early access feature (scenes.features.featureLogic)': 'deleteEarlyAccessFeature'
        'set active tab (scenes.features.featureLogic)': 'setActiveTab'
        'load early access feature (scenes.features.featureLogic)': 'loadEarlyAccessFeature'
        'load early access feature success (scenes.features.featureLogic)': 'loadEarlyAccessFeatureSuccess'
        'load early access feature failure (scenes.features.featureLogic)': 'loadEarlyAccessFeatureFailure'
        'save early access feature (scenes.features.featureLogic)': 'saveEarlyAccessFeature'
        'save early access feature success (scenes.features.featureLogic)': 'saveEarlyAccessFeatureSuccess'
        'save early access feature failure (scenes.features.featureLogic)': 'saveEarlyAccessFeatureFailure'
        'set early access feature value (scenes.features.featureLogic)': 'setEarlyAccessFeatureValue'
        'set early access feature values (scenes.features.featureLogic)': 'setEarlyAccessFeatureValues'
        'set early access feature manual errors (scenes.features.featureLogic)': 'setEarlyAccessFeatureManualErrors'
        'touch early access feature field (scenes.features.featureLogic)': 'touchEarlyAccessFeatureField'
        'reset early access feature (scenes.features.featureLogic)': 'resetEarlyAccessFeature'
        'submit early access feature (scenes.features.featureLogic)': 'submitEarlyAccessFeature'
        'submit early access feature request (scenes.features.featureLogic)': 'submitEarlyAccessFeatureRequest'
        'submit early access feature success (scenes.features.featureLogic)': 'submitEarlyAccessFeatureSuccess'
        'submit early access feature failure (scenes.features.featureLogic)': 'submitEarlyAccessFeatureFailure'
    }
    actionTypes: {
        loadEarlyAccessFeatures: 'load early access features (scenes.features.featureLogic)'
        loadEarlyAccessFeaturesSuccess: 'load early access features success (scenes.features.featureLogic)'
        toggleImplementOptInInstructionsModal: 'toggle implement opt in instructions modal (scenes.features.featureLogic)'
        cancel: 'cancel (scenes.features.featureLogic)'
        editFeature: 'edit feature (scenes.features.featureLogic)'
        updateStage: 'update stage (scenes.features.featureLogic)'
        deleteEarlyAccessFeature: 'delete early access feature (scenes.features.featureLogic)'
        setActiveTab: 'set active tab (scenes.features.featureLogic)'
        loadEarlyAccessFeature: 'load early access feature (scenes.features.featureLogic)'
        loadEarlyAccessFeatureSuccess: 'load early access feature success (scenes.features.featureLogic)'
        loadEarlyAccessFeatureFailure: 'load early access feature failure (scenes.features.featureLogic)'
        saveEarlyAccessFeature: 'save early access feature (scenes.features.featureLogic)'
        saveEarlyAccessFeatureSuccess: 'save early access feature success (scenes.features.featureLogic)'
        saveEarlyAccessFeatureFailure: 'save early access feature failure (scenes.features.featureLogic)'
        setEarlyAccessFeatureValue: 'set early access feature value (scenes.features.featureLogic)'
        setEarlyAccessFeatureValues: 'set early access feature values (scenes.features.featureLogic)'
        setEarlyAccessFeatureManualErrors: 'set early access feature manual errors (scenes.features.featureLogic)'
        touchEarlyAccessFeatureField: 'touch early access feature field (scenes.features.featureLogic)'
        resetEarlyAccessFeature: 'reset early access feature (scenes.features.featureLogic)'
        submitEarlyAccessFeature: 'submit early access feature (scenes.features.featureLogic)'
        submitEarlyAccessFeatureRequest: 'submit early access feature request (scenes.features.featureLogic)'
        submitEarlyAccessFeatureSuccess: 'submit early access feature success (scenes.features.featureLogic)'
        submitEarlyAccessFeatureFailure: 'submit early access feature failure (scenes.features.featureLogic)'
    }
    actions: {
        loadEarlyAccessFeatures: () => void
        loadEarlyAccessFeaturesSuccess: (earlyAccessFeatures: EarlyAccessFeatureType[], payload?: any) => void
        toggleImplementOptInInstructionsModal: () => void
        cancel: () => void
        editFeature: (editing: boolean) => void
        updateStage: (stage: EarlyAccessFeatureStage) => void
        deleteEarlyAccessFeature: (earlyAccessFeatureId: EarlyAccessFeatureType['id']) => void
        setActiveTab: (activeTab: EarlyAccessFeatureTabs) => void
        loadEarlyAccessFeature: () => void
        loadEarlyAccessFeatureSuccess: (
            earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType,
            payload?: any
        ) => void
        loadEarlyAccessFeatureFailure: (error: string, errorObject?: any) => void
        saveEarlyAccessFeature: (updatedEarlyAccessFeature: Partial<EarlyAccessFeatureType>) => void
        saveEarlyAccessFeatureSuccess: (
            earlyAccessFeature: EarlyAccessFeatureType,
            payload?: Partial<EarlyAccessFeatureType>
        ) => void
        saveEarlyAccessFeatureFailure: (error: string, errorObject?: any) => void
        setEarlyAccessFeatureValue: (key: FieldName, value: any) => void
        setEarlyAccessFeatureValues: (values: DeepPartial<EarlyAccessFeatureType | NewEarlyAccessFeatureType>) => void
        setEarlyAccessFeatureManualErrors: (errors: Record<string, any>) => void
        touchEarlyAccessFeatureField: (key: string) => void
        resetEarlyAccessFeature: (values?: EarlyAccessFeatureType | NewEarlyAccessFeatureType) => void
        submitEarlyAccessFeature: () => void
        submitEarlyAccessFeatureRequest: (
            earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType
        ) => void
        submitEarlyAccessFeatureSuccess: (
            earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType
        ) => void
        submitEarlyAccessFeatureFailure: (error: Error, errors: Record<string, any>) => void
    }
    asyncActions: {
        loadEarlyAccessFeatures: () => Promise<any>
        loadEarlyAccessFeaturesSuccess: (earlyAccessFeatures: EarlyAccessFeatureType[], payload?: any) => Promise<any>
        toggleImplementOptInInstructionsModal: () => Promise<any>
        cancel: () => Promise<any>
        editFeature: (editing: boolean) => Promise<any>
        updateStage: (stage: EarlyAccessFeatureStage) => Promise<any>
        deleteEarlyAccessFeature: (earlyAccessFeatureId: EarlyAccessFeatureType['id']) => Promise<any>
        setActiveTab: (activeTab: EarlyAccessFeatureTabs) => Promise<any>
        loadEarlyAccessFeature: () => Promise<any>
        loadEarlyAccessFeatureSuccess: (
            earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType,
            payload?: any
        ) => Promise<any>
        loadEarlyAccessFeatureFailure: (error: string, errorObject?: any) => Promise<any>
        saveEarlyAccessFeature: (updatedEarlyAccessFeature: Partial<EarlyAccessFeatureType>) => Promise<any>
        saveEarlyAccessFeatureSuccess: (
            earlyAccessFeature: EarlyAccessFeatureType,
            payload?: Partial<EarlyAccessFeatureType>
        ) => Promise<any>
        saveEarlyAccessFeatureFailure: (error: string, errorObject?: any) => Promise<any>
        setEarlyAccessFeatureValue: (key: FieldName, value: any) => Promise<any>
        setEarlyAccessFeatureValues: (
            values: DeepPartial<EarlyAccessFeatureType | NewEarlyAccessFeatureType>
        ) => Promise<any>
        setEarlyAccessFeatureManualErrors: (errors: Record<string, any>) => Promise<any>
        touchEarlyAccessFeatureField: (key: string) => Promise<any>
        resetEarlyAccessFeature: (values?: EarlyAccessFeatureType | NewEarlyAccessFeatureType) => Promise<any>
        submitEarlyAccessFeature: () => Promise<any>
        submitEarlyAccessFeatureRequest: (
            earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType
        ) => Promise<any>
        submitEarlyAccessFeatureSuccess: (
            earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType
        ) => Promise<any>
        submitEarlyAccessFeatureFailure: (error: Error, errors: Record<string, any>) => Promise<any>
    }
    defaults: {
        earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType
        earlyAccessFeatureLoading: boolean
        isEarlyAccessFeatureSubmitting: boolean
        showEarlyAccessFeatureErrors: boolean
        earlyAccessFeatureChanged: boolean
        earlyAccessFeatureTouches: Record<string, boolean>
        earlyAccessFeatureManualErrors: Record<string, any>
        isEditingFeature: boolean
        implementOptInInstructionsModal: boolean
        activeTab: EarlyAccessFeatureTabs
    }
    events: {}
    key: string
    listeners: {
        cancel: ((
            action: {
                type: 'cancel (scenes.features.featureLogic)'
                payload: {
                    value: true
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateStage: ((
            action: {
                type: 'update stage (scenes.features.featureLogic)'
                payload: {
                    stage: EarlyAccessFeatureStage
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        saveEarlyAccessFeatureSuccess: ((
            action: {
                type: 'save early access feature success (scenes.features.featureLogic)'
                payload: {
                    earlyAccessFeature: EarlyAccessFeatureType
                    payload?: Partial<EarlyAccessFeatureType>
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        deleteEarlyAccessFeature: ((
            action: {
                type: 'delete early access feature (scenes.features.featureLogic)'
                payload: {
                    earlyAccessFeatureId: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'features', 'featureLogic']
    pathString: 'scenes.features.featureLogic'
    props: FeatureLogicProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType
        earlyAccessFeatureLoading: boolean
        isEarlyAccessFeatureSubmitting: boolean
        showEarlyAccessFeatureErrors: boolean
        earlyAccessFeatureChanged: boolean
        earlyAccessFeatureTouches: Record<string, boolean>
        earlyAccessFeatureManualErrors: Record<string, any>
        isEditingFeature: boolean
        implementOptInInstructionsModal: boolean
        activeTab: EarlyAccessFeatureTabs
    }
    reducers: {
        earlyAccessFeature: (
            state: EarlyAccessFeatureType | NewEarlyAccessFeatureType,
            action: any,
            fullState: any
        ) => EarlyAccessFeatureType | NewEarlyAccessFeatureType
        earlyAccessFeatureLoading: (state: boolean, action: any, fullState: any) => boolean
        isEarlyAccessFeatureSubmitting: (state: boolean, action: any, fullState: any) => boolean
        showEarlyAccessFeatureErrors: (state: boolean, action: any, fullState: any) => boolean
        earlyAccessFeatureChanged: (state: boolean, action: any, fullState: any) => boolean
        earlyAccessFeatureTouches: (
            state: Record<string, boolean>,
            action: any,
            fullState: any
        ) => Record<string, boolean>
        earlyAccessFeatureManualErrors: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
        isEditingFeature: (state: boolean, action: any, fullState: any) => boolean
        implementOptInInstructionsModal: (state: boolean, action: any, fullState: any) => boolean
        activeTab: (state: EarlyAccessFeatureTabs, action: any, fullState: any) => EarlyAccessFeatureTabs
    }
    selector: (state: any) => {
        earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType
        earlyAccessFeatureLoading: boolean
        isEarlyAccessFeatureSubmitting: boolean
        showEarlyAccessFeatureErrors: boolean
        earlyAccessFeatureChanged: boolean
        earlyAccessFeatureTouches: Record<string, boolean>
        earlyAccessFeatureManualErrors: Record<string, any>
        isEditingFeature: boolean
        implementOptInInstructionsModal: boolean
        activeTab: EarlyAccessFeatureTabs
    }
    selectors: {
        earlyAccessFeature: (state: any, props?: any) => EarlyAccessFeatureType | NewEarlyAccessFeatureType
        earlyAccessFeatureLoading: (state: any, props?: any) => boolean
        isEarlyAccessFeatureSubmitting: (state: any, props?: any) => boolean
        showEarlyAccessFeatureErrors: (state: any, props?: any) => boolean
        earlyAccessFeatureChanged: (state: any, props?: any) => boolean
        earlyAccessFeatureTouches: (state: any, props?: any) => Record<string, boolean>
        earlyAccessFeatureManualErrors: (state: any, props?: any) => Record<string, any>
        isEditingFeature: (state: any, props?: any) => boolean
        implementOptInInstructionsModal: (state: any, props?: any) => boolean
        activeTab: (state: any, props?: any) => EarlyAccessFeatureTabs
        currentTeamId: (state: any, props?: any) => number | null
        earlyAccessFeatures: (state: any, props?: any) => EarlyAccessFeatureType[]
        earlyAccessFeatureTouched: (state: any, props?: any) => boolean
        earlyAccessFeatureValidationErrors: (
            state: any,
            props?: any
        ) => DeepPartialMap<EarlyAccessFeatureType | NewEarlyAccessFeatureType, ValidationErrorType>
        earlyAccessFeatureAllErrors: (state: any, props?: any) => Record<string, any>
        earlyAccessFeatureHasErrors: (state: any, props?: any) => boolean
        earlyAccessFeatureErrors: (
            state: any,
            props?: any
        ) => DeepPartialMap<EarlyAccessFeatureType | NewEarlyAccessFeatureType, ValidationErrorType>
        isEarlyAccessFeatureValid: (state: any, props?: any) => boolean
        mode: (state: any, props?: any) => 'view' | 'edit'
        breadcrumbs: (state: any, props?: any) => Breadcrumb[]
    }
    sharedListeners: {}
    values: {
        earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType
        earlyAccessFeatureLoading: boolean
        isEarlyAccessFeatureSubmitting: boolean
        showEarlyAccessFeatureErrors: boolean
        earlyAccessFeatureChanged: boolean
        earlyAccessFeatureTouches: Record<string, boolean>
        earlyAccessFeatureManualErrors: Record<string, any>
        isEditingFeature: boolean
        implementOptInInstructionsModal: boolean
        activeTab: EarlyAccessFeatureTabs
        currentTeamId: number | null
        earlyAccessFeatures: EarlyAccessFeatureType[]
        earlyAccessFeatureTouched: boolean
        earlyAccessFeatureValidationErrors: DeepPartialMap<
            EarlyAccessFeatureType | NewEarlyAccessFeatureType,
            ValidationErrorType
        >
        earlyAccessFeatureAllErrors: Record<string, any>
        earlyAccessFeatureHasErrors: boolean
        earlyAccessFeatureErrors: DeepPartialMap<
            EarlyAccessFeatureType | NewEarlyAccessFeatureType,
            ValidationErrorType
        >
        isEarlyAccessFeatureValid: boolean
        mode: 'view' | 'edit'
        breadcrumbs: Breadcrumb[]
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        mode: (id: string) => 'view' | 'edit'
        breadcrumbs: (earlyAccessFeature: EarlyAccessFeatureType | NewEarlyAccessFeatureType) => Breadcrumb[]
    }
}
