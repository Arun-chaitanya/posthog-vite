// Generated by kea-typegen on Thu, 20 Jul 2023 10:54:59 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { InterfaceJobsProps } from './interfaceJobsLogic'
import type { FormInstance } from '../../../../../../node_modules/.pnpm/antd@4.17.1_react-dom@16.14.0_react@16.14.0/node_modules/antd/lib/form/hooks/useForm.d'
import type { DeepPartial, DeepPartialMap, FieldName, ValidationErrorType } from '../../../../../../node_modules/kea-forms'

export interface interfaceJobsLogicType extends Logic {
    actionCreators: {
        setIsJobModalOpen: (isOpen: boolean) => {
            type: 'set is job modal open (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
            payload: {
                isOpen: boolean
            }
        }
        setRunJobAvailable: (isAvailable: boolean) => {
            type: 'set run job available (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
            payload: {
                isAvailable: boolean
            }
        }
        runJob: (form: FormInstance<any>) => {
            type: 'run job (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
            payload: {
                form: FormInstance<any>
            }
        }
        playButtonOnClick: (jobHasEmptyPayload: boolean) => {
            type: 'play button on click (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
            payload: {
                jobHasEmptyPayload: boolean
            }
        }
        setRunJobAvailableTimeout: (timeout: number) => {
            type: 'set run job available timeout (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
            payload: {
                timeout: number
            }
        }
        setJobPayloadValue: (
            key: FieldName,
            value: any
        ) => {
            type: 'set job payload value (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
            payload: {
                name: FieldName
                value: any
            }
        }
        setJobPayloadValues: (values: DeepPartial<Record<string, any>>) => {
            type: 'set job payload values (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
            payload: {
                values: DeepPartial<Record<string, any>>
            }
        }
        setJobPayloadManualErrors: (errors: Record<string, any>) => {
            type: 'set job payload manual errors (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
            payload: {
                errors: Record<string, any>
            }
        }
        touchJobPayloadField: (key: string) => {
            type: 'touch job payload field (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
            payload: {
                key: string
            }
        }
        resetJobPayload: (values?: Record<string, any>) => {
            type: 'reset job payload (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
            payload: {
                values?: Record<string, any>
            }
        }
        submitJobPayload: () => {
            type: 'submit job payload (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
            payload: {
                value: boolean
            }
        }
        submitJobPayloadRequest: (jobPayload: Record<string, any>) => {
            type: 'submit job payload request (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
            payload: {
                jobPayload: Record<string, any>
            }
        }
        submitJobPayloadSuccess: (jobPayload: Record<string, any>) => {
            type: 'submit job payload success (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
            payload: {
                jobPayload: Record<string, any>
            }
        }
        submitJobPayloadFailure: (
            error: Error,
            errors: Record<string, any>
        ) => {
            type: 'submit job payload failure (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
            payload: {
                error: Error
                errors: Record<string, any>
            }
        }
    }
    actionKeys: {
        'set is job modal open (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)': 'setIsJobModalOpen'
        'set run job available (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)': 'setRunJobAvailable'
        'run job (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)': 'runJob'
        'play button on click (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)': 'playButtonOnClick'
        'set run job available timeout (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)': 'setRunJobAvailableTimeout'
        'set job payload value (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)': 'setJobPayloadValue'
        'set job payload values (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)': 'setJobPayloadValues'
        'set job payload manual errors (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)': 'setJobPayloadManualErrors'
        'touch job payload field (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)': 'touchJobPayloadField'
        'reset job payload (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)': 'resetJobPayload'
        'submit job payload (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)': 'submitJobPayload'
        'submit job payload request (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)': 'submitJobPayloadRequest'
        'submit job payload success (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)': 'submitJobPayloadSuccess'
        'submit job payload failure (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)': 'submitJobPayloadFailure'
    }
    actionTypes: {
        setIsJobModalOpen: 'set is job modal open (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
        setRunJobAvailable: 'set run job available (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
        runJob: 'run job (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
        playButtonOnClick: 'play button on click (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
        setRunJobAvailableTimeout: 'set run job available timeout (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
        setJobPayloadValue: 'set job payload value (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
        setJobPayloadValues: 'set job payload values (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
        setJobPayloadManualErrors: 'set job payload manual errors (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
        touchJobPayloadField: 'touch job payload field (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
        resetJobPayload: 'reset job payload (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
        submitJobPayload: 'submit job payload (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
        submitJobPayloadRequest: 'submit job payload request (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
        submitJobPayloadSuccess: 'submit job payload success (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
        submitJobPayloadFailure: 'submit job payload failure (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
    }
    actions: {
        setIsJobModalOpen: (isOpen: boolean) => void
        setRunJobAvailable: (isAvailable: boolean) => void
        runJob: (form: FormInstance<any>) => void
        playButtonOnClick: (jobHasEmptyPayload: boolean) => void
        setRunJobAvailableTimeout: (timeout: number) => void
        setJobPayloadValue: (key: FieldName, value: any) => void
        setJobPayloadValues: (values: DeepPartial<Record<string, any>>) => void
        setJobPayloadManualErrors: (errors: Record<string, any>) => void
        touchJobPayloadField: (key: string) => void
        resetJobPayload: (values?: Record<string, any>) => void
        submitJobPayload: () => void
        submitJobPayloadRequest: (jobPayload: Record<string, any>) => void
        submitJobPayloadSuccess: (jobPayload: Record<string, any>) => void
        submitJobPayloadFailure: (error: Error, errors: Record<string, any>) => void
    }
    asyncActions: {
        setIsJobModalOpen: (isOpen: boolean) => Promise<any>
        setRunJobAvailable: (isAvailable: boolean) => Promise<any>
        runJob: (form: FormInstance<any>) => Promise<any>
        playButtonOnClick: (jobHasEmptyPayload: boolean) => Promise<any>
        setRunJobAvailableTimeout: (timeout: number) => Promise<any>
        setJobPayloadValue: (key: FieldName, value: any) => Promise<any>
        setJobPayloadValues: (values: DeepPartial<Record<string, any>>) => Promise<any>
        setJobPayloadManualErrors: (errors: Record<string, any>) => Promise<any>
        touchJobPayloadField: (key: string) => Promise<any>
        resetJobPayload: (values?: Record<string, any>) => Promise<any>
        submitJobPayload: () => Promise<any>
        submitJobPayloadRequest: (jobPayload: Record<string, any>) => Promise<any>
        submitJobPayloadSuccess: (jobPayload: Record<string, any>) => Promise<any>
        submitJobPayloadFailure: (error: Error, errors: Record<string, any>) => Promise<any>
    }
    defaults: {
        isJobModalOpen: boolean
        runJobAvailable: boolean
        runJobAvailableTimeout: number | null
        jobPayload: Record<string, any>
        isJobPayloadSubmitting: boolean
        showJobPayloadErrors: boolean
        jobPayloadChanged: boolean
        jobPayloadTouches: Record<string, boolean>
        jobPayloadManualErrors: Record<string, any>
    }
    events: {
        beforeUnmount: () => void
    }
    key: string
    listeners: {
        playButtonOnClick: ((
            action: {
                type: 'play button on click (scenes.plugins.edit.interface-jobs.interfaceJobsLogic)'
                payload: {
                    jobHasEmptyPayload: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'plugins', 'edit', 'interface-jobs', 'interfaceJobsLogic']
    pathString: 'scenes.plugins.edit.interface-jobs.interfaceJobsLogic'
    props: InterfaceJobsProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        isJobModalOpen: boolean
        runJobAvailable: boolean
        runJobAvailableTimeout: number | null
        jobPayload: Record<string, any>
        isJobPayloadSubmitting: boolean
        showJobPayloadErrors: boolean
        jobPayloadChanged: boolean
        jobPayloadTouches: Record<string, boolean>
        jobPayloadManualErrors: Record<string, any>
    }
    reducers: {
        isJobModalOpen: (state: boolean, action: any, fullState: any) => boolean
        runJobAvailable: (state: boolean, action: any, fullState: any) => boolean
        runJobAvailableTimeout: (state: number | null, action: any, fullState: any) => number | null
        jobPayload: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
        isJobPayloadSubmitting: (state: boolean, action: any, fullState: any) => boolean
        showJobPayloadErrors: (state: boolean, action: any, fullState: any) => boolean
        jobPayloadChanged: (state: boolean, action: any, fullState: any) => boolean
        jobPayloadTouches: (state: Record<string, boolean>, action: any, fullState: any) => Record<string, boolean>
        jobPayloadManualErrors: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
    }
    selector: (state: any) => {
        isJobModalOpen: boolean
        runJobAvailable: boolean
        runJobAvailableTimeout: number | null
        jobPayload: Record<string, any>
        isJobPayloadSubmitting: boolean
        showJobPayloadErrors: boolean
        jobPayloadChanged: boolean
        jobPayloadTouches: Record<string, boolean>
        jobPayloadManualErrors: Record<string, any>
    }
    selectors: {
        isJobModalOpen: (state: any, props?: any) => boolean
        runJobAvailable: (state: any, props?: any) => boolean
        runJobAvailableTimeout: (state: any, props?: any) => number | null
        jobPayload: (state: any, props?: any) => Record<string, any>
        isJobPayloadSubmitting: (state: any, props?: any) => boolean
        showJobPayloadErrors: (state: any, props?: any) => boolean
        jobPayloadChanged: (state: any, props?: any) => boolean
        jobPayloadTouches: (state: any, props?: any) => Record<string, boolean>
        jobPayloadManualErrors: (state: any, props?: any) => Record<string, any>
        jobPayloadTouched: (state: any, props?: any) => boolean
        jobPayloadValidationErrors: (
            state: any,
            props?: any
        ) => DeepPartialMap<Record<string, any>, ValidationErrorType>
        jobPayloadAllErrors: (state: any, props?: any) => Record<string, any>
        jobPayloadHasErrors: (state: any, props?: any) => boolean
        jobPayloadErrors: (state: any, props?: any) => DeepPartialMap<Record<string, any>, ValidationErrorType>
        isJobPayloadValid: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        isJobModalOpen: boolean
        runJobAvailable: boolean
        runJobAvailableTimeout: number | null
        jobPayload: Record<string, any>
        isJobPayloadSubmitting: boolean
        showJobPayloadErrors: boolean
        jobPayloadChanged: boolean
        jobPayloadTouches: Record<string, boolean>
        jobPayloadManualErrors: Record<string, any>
        jobPayloadTouched: boolean
        jobPayloadValidationErrors: DeepPartialMap<Record<string, any>, ValidationErrorType>
        jobPayloadAllErrors: Record<string, any>
        jobPayloadHasErrors: boolean
        jobPayloadErrors: DeepPartialMap<Record<string, any>, ValidationErrorType>
        isJobPayloadValid: boolean
    }
    _isKea: true
    _isKeaWithKey: true
}