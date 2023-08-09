// Generated by kea-typegen on Thu, 20 Jul 2023 11:20:01 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { OrganizationDomainType, OrganizationType } from '../../../../types'
import type { OrganizationDomainUpdatePayload } from './verifiedDomainsLogic'
import type { DeepPartial, DeepPartialMap, FieldName, ValidationErrorType } from '../../../../../../node_modules/kea-forms'

export interface verifiedDomainsLogicType extends Logic {
    actionCreators: {
        replaceDomain: (domain: OrganizationDomainType) => {
            type: 'replace domain (scenes.organization.verifiedDomainsLogic)'
            payload: {
                domain: OrganizationDomainType
            }
        }
        setAddModalShown: (shown: boolean) => {
            type: 'set add modal shown (scenes.organization.verifiedDomainsLogic)'
            payload: {
                shown: boolean
            }
        }
        setConfigureSAMLModalId: (id: string | null) => {
            type: 'set configure s a m l modal id (scenes.organization.verifiedDomainsLogic)'
            payload: {
                id: string | null
            }
        }
        setVerifyModal: (id: string | null) => {
            type: 'set verify modal (scenes.organization.verifiedDomainsLogic)'
            payload: {
                id: string | null
            }
        }
        loadVerifiedDomains: () => {
            type: 'load verified domains (scenes.organization.verifiedDomainsLogic)'
            payload: any
        }
        loadVerifiedDomainsSuccess: (
            verifiedDomains: OrganizationDomainType[],
            payload?: any
        ) => {
            type: 'load verified domains success (scenes.organization.verifiedDomainsLogic)'
            payload: {
                verifiedDomains: OrganizationDomainType[]
                payload?: any
            }
        }
        loadVerifiedDomainsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load verified domains failure (scenes.organization.verifiedDomainsLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        addVerifiedDomain: (domain: string) => {
            type: 'add verified domain (scenes.organization.verifiedDomainsLogic)'
            payload: string
        }
        addVerifiedDomainSuccess: (
            verifiedDomains: any[],
            payload?: string
        ) => {
            type: 'add verified domain success (scenes.organization.verifiedDomainsLogic)'
            payload: {
                verifiedDomains: any[]
                payload?: string
            }
        }
        addVerifiedDomainFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'add verified domain failure (scenes.organization.verifiedDomainsLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        deleteVerifiedDomain: (id: string) => {
            type: 'delete verified domain (scenes.organization.verifiedDomainsLogic)'
            payload: string
        }
        deleteVerifiedDomainSuccess: (
            verifiedDomains: OrganizationDomainType[],
            payload?: string
        ) => {
            type: 'delete verified domain success (scenes.organization.verifiedDomainsLogic)'
            payload: {
                verifiedDomains: OrganizationDomainType[]
                payload?: string
            }
        }
        deleteVerifiedDomainFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'delete verified domain failure (scenes.organization.verifiedDomainsLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        updateDomain: (payload: OrganizationDomainUpdatePayload) => {
            type: 'update domain (scenes.organization.verifiedDomainsLogic)'
            payload: OrganizationDomainUpdatePayload
        }
        updateDomainSuccess: (
            updatingDomain: boolean,
            payload?: OrganizationDomainUpdatePayload
        ) => {
            type: 'update domain success (scenes.organization.verifiedDomainsLogic)'
            payload: {
                updatingDomain: boolean
                payload?: OrganizationDomainUpdatePayload
            }
        }
        updateDomainFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'update domain failure (scenes.organization.verifiedDomainsLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        verifyDomain: () => {
            type: 'verify domain (scenes.organization.verifiedDomainsLogic)'
            payload: any
        }
        verifyDomainSuccess: (
            updatingDomain: boolean,
            payload?: any
        ) => {
            type: 'verify domain success (scenes.organization.verifiedDomainsLogic)'
            payload: {
                updatingDomain: boolean
                payload?: any
            }
        }
        verifyDomainFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'verify domain failure (scenes.organization.verifiedDomainsLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        setSamlConfigValue: (
            key: FieldName,
            value: any
        ) => {
            type: 'set saml config value (scenes.organization.verifiedDomainsLogic)'
            payload: {
                name: FieldName
                value: any
            }
        }
        setSamlConfigValues: (
            values: DeepPartial<
                Partial<
                    Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                        Pick<OrganizationDomainType, 'id'>
                >
            >
        ) => {
            type: 'set saml config values (scenes.organization.verifiedDomainsLogic)'
            payload: {
                values: DeepPartial<
                    Partial<
                        Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                            Pick<OrganizationDomainType, 'id'>
                    >
                >
            }
        }
        setSamlConfigManualErrors: (errors: Record<string, any>) => {
            type: 'set saml config manual errors (scenes.organization.verifiedDomainsLogic)'
            payload: {
                errors: Record<string, any>
            }
        }
        touchSamlConfigField: (key: string) => {
            type: 'touch saml config field (scenes.organization.verifiedDomainsLogic)'
            payload: {
                key: string
            }
        }
        resetSamlConfig: (
            values?: Partial<
                Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                    Pick<OrganizationDomainType, 'id'>
            >
        ) => {
            type: 'reset saml config (scenes.organization.verifiedDomainsLogic)'
            payload: {
                values?: Partial<
                    Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                        Pick<OrganizationDomainType, 'id'>
                >
            }
        }
        submitSamlConfig: () => {
            type: 'submit saml config (scenes.organization.verifiedDomainsLogic)'
            payload: {
                value: boolean
            }
        }
        submitSamlConfigRequest: (
            samlConfig: Partial<
                Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                    Pick<OrganizationDomainType, 'id'>
            >
        ) => {
            type: 'submit saml config request (scenes.organization.verifiedDomainsLogic)'
            payload: {
                samlConfig: Partial<
                    Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                        Pick<OrganizationDomainType, 'id'>
                >
            }
        }
        submitSamlConfigSuccess: (
            samlConfig: Partial<
                Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                    Pick<OrganizationDomainType, 'id'>
            >
        ) => {
            type: 'submit saml config success (scenes.organization.verifiedDomainsLogic)'
            payload: {
                samlConfig: Partial<
                    Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                        Pick<OrganizationDomainType, 'id'>
                >
            }
        }
        submitSamlConfigFailure: (
            error: Error,
            errors: Record<string, any>
        ) => {
            type: 'submit saml config failure (scenes.organization.verifiedDomainsLogic)'
            payload: {
                error: Error
                errors: Record<string, any>
            }
        }
    }
    actionKeys: {
        'replace domain (scenes.organization.verifiedDomainsLogic)': 'replaceDomain'
        'set add modal shown (scenes.organization.verifiedDomainsLogic)': 'setAddModalShown'
        'set configure s a m l modal id (scenes.organization.verifiedDomainsLogic)': 'setConfigureSAMLModalId'
        'set verify modal (scenes.organization.verifiedDomainsLogic)': 'setVerifyModal'
        'load verified domains (scenes.organization.verifiedDomainsLogic)': 'loadVerifiedDomains'
        'load verified domains success (scenes.organization.verifiedDomainsLogic)': 'loadVerifiedDomainsSuccess'
        'load verified domains failure (scenes.organization.verifiedDomainsLogic)': 'loadVerifiedDomainsFailure'
        'add verified domain (scenes.organization.verifiedDomainsLogic)': 'addVerifiedDomain'
        'add verified domain success (scenes.organization.verifiedDomainsLogic)': 'addVerifiedDomainSuccess'
        'add verified domain failure (scenes.organization.verifiedDomainsLogic)': 'addVerifiedDomainFailure'
        'delete verified domain (scenes.organization.verifiedDomainsLogic)': 'deleteVerifiedDomain'
        'delete verified domain success (scenes.organization.verifiedDomainsLogic)': 'deleteVerifiedDomainSuccess'
        'delete verified domain failure (scenes.organization.verifiedDomainsLogic)': 'deleteVerifiedDomainFailure'
        'update domain (scenes.organization.verifiedDomainsLogic)': 'updateDomain'
        'update domain success (scenes.organization.verifiedDomainsLogic)': 'updateDomainSuccess'
        'update domain failure (scenes.organization.verifiedDomainsLogic)': 'updateDomainFailure'
        'verify domain (scenes.organization.verifiedDomainsLogic)': 'verifyDomain'
        'verify domain success (scenes.organization.verifiedDomainsLogic)': 'verifyDomainSuccess'
        'verify domain failure (scenes.organization.verifiedDomainsLogic)': 'verifyDomainFailure'
        'set saml config value (scenes.organization.verifiedDomainsLogic)': 'setSamlConfigValue'
        'set saml config values (scenes.organization.verifiedDomainsLogic)': 'setSamlConfigValues'
        'set saml config manual errors (scenes.organization.verifiedDomainsLogic)': 'setSamlConfigManualErrors'
        'touch saml config field (scenes.organization.verifiedDomainsLogic)': 'touchSamlConfigField'
        'reset saml config (scenes.organization.verifiedDomainsLogic)': 'resetSamlConfig'
        'submit saml config (scenes.organization.verifiedDomainsLogic)': 'submitSamlConfig'
        'submit saml config request (scenes.organization.verifiedDomainsLogic)': 'submitSamlConfigRequest'
        'submit saml config success (scenes.organization.verifiedDomainsLogic)': 'submitSamlConfigSuccess'
        'submit saml config failure (scenes.organization.verifiedDomainsLogic)': 'submitSamlConfigFailure'
    }
    actionTypes: {
        replaceDomain: 'replace domain (scenes.organization.verifiedDomainsLogic)'
        setAddModalShown: 'set add modal shown (scenes.organization.verifiedDomainsLogic)'
        setConfigureSAMLModalId: 'set configure s a m l modal id (scenes.organization.verifiedDomainsLogic)'
        setVerifyModal: 'set verify modal (scenes.organization.verifiedDomainsLogic)'
        loadVerifiedDomains: 'load verified domains (scenes.organization.verifiedDomainsLogic)'
        loadVerifiedDomainsSuccess: 'load verified domains success (scenes.organization.verifiedDomainsLogic)'
        loadVerifiedDomainsFailure: 'load verified domains failure (scenes.organization.verifiedDomainsLogic)'
        addVerifiedDomain: 'add verified domain (scenes.organization.verifiedDomainsLogic)'
        addVerifiedDomainSuccess: 'add verified domain success (scenes.organization.verifiedDomainsLogic)'
        addVerifiedDomainFailure: 'add verified domain failure (scenes.organization.verifiedDomainsLogic)'
        deleteVerifiedDomain: 'delete verified domain (scenes.organization.verifiedDomainsLogic)'
        deleteVerifiedDomainSuccess: 'delete verified domain success (scenes.organization.verifiedDomainsLogic)'
        deleteVerifiedDomainFailure: 'delete verified domain failure (scenes.organization.verifiedDomainsLogic)'
        updateDomain: 'update domain (scenes.organization.verifiedDomainsLogic)'
        updateDomainSuccess: 'update domain success (scenes.organization.verifiedDomainsLogic)'
        updateDomainFailure: 'update domain failure (scenes.organization.verifiedDomainsLogic)'
        verifyDomain: 'verify domain (scenes.organization.verifiedDomainsLogic)'
        verifyDomainSuccess: 'verify domain success (scenes.organization.verifiedDomainsLogic)'
        verifyDomainFailure: 'verify domain failure (scenes.organization.verifiedDomainsLogic)'
        setSamlConfigValue: 'set saml config value (scenes.organization.verifiedDomainsLogic)'
        setSamlConfigValues: 'set saml config values (scenes.organization.verifiedDomainsLogic)'
        setSamlConfigManualErrors: 'set saml config manual errors (scenes.organization.verifiedDomainsLogic)'
        touchSamlConfigField: 'touch saml config field (scenes.organization.verifiedDomainsLogic)'
        resetSamlConfig: 'reset saml config (scenes.organization.verifiedDomainsLogic)'
        submitSamlConfig: 'submit saml config (scenes.organization.verifiedDomainsLogic)'
        submitSamlConfigRequest: 'submit saml config request (scenes.organization.verifiedDomainsLogic)'
        submitSamlConfigSuccess: 'submit saml config success (scenes.organization.verifiedDomainsLogic)'
        submitSamlConfigFailure: 'submit saml config failure (scenes.organization.verifiedDomainsLogic)'
    }
    actions: {
        replaceDomain: (domain: OrganizationDomainType) => void
        setAddModalShown: (shown: boolean) => void
        setConfigureSAMLModalId: (id: string | null) => void
        setVerifyModal: (id: string | null) => void
        loadVerifiedDomains: () => void
        loadVerifiedDomainsSuccess: (verifiedDomains: OrganizationDomainType[], payload?: any) => void
        loadVerifiedDomainsFailure: (error: string, errorObject?: any) => void
        addVerifiedDomain: (domain: string) => void
        addVerifiedDomainSuccess: (verifiedDomains: any[], payload?: string) => void
        addVerifiedDomainFailure: (error: string, errorObject?: any) => void
        deleteVerifiedDomain: (id: string) => void
        deleteVerifiedDomainSuccess: (verifiedDomains: OrganizationDomainType[], payload?: string) => void
        deleteVerifiedDomainFailure: (error: string, errorObject?: any) => void
        updateDomain: (payload: OrganizationDomainUpdatePayload) => void
        updateDomainSuccess: (updatingDomain: boolean, payload?: OrganizationDomainUpdatePayload) => void
        updateDomainFailure: (error: string, errorObject?: any) => void
        verifyDomain: () => void
        verifyDomainSuccess: (updatingDomain: boolean, payload?: any) => void
        verifyDomainFailure: (error: string, errorObject?: any) => void
        setSamlConfigValue: (key: FieldName, value: any) => void
        setSamlConfigValues: (
            values: DeepPartial<
                Partial<
                    Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                        Pick<OrganizationDomainType, 'id'>
                >
            >
        ) => void
        setSamlConfigManualErrors: (errors: Record<string, any>) => void
        touchSamlConfigField: (key: string) => void
        resetSamlConfig: (
            values?: Partial<
                Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                    Pick<OrganizationDomainType, 'id'>
            >
        ) => void
        submitSamlConfig: () => void
        submitSamlConfigRequest: (
            samlConfig: Partial<
                Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                    Pick<OrganizationDomainType, 'id'>
            >
        ) => void
        submitSamlConfigSuccess: (
            samlConfig: Partial<
                Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                    Pick<OrganizationDomainType, 'id'>
            >
        ) => void
        submitSamlConfigFailure: (error: Error, errors: Record<string, any>) => void
    }
    asyncActions: {
        replaceDomain: (domain: OrganizationDomainType) => Promise<any>
        setAddModalShown: (shown: boolean) => Promise<any>
        setConfigureSAMLModalId: (id: string | null) => Promise<any>
        setVerifyModal: (id: string | null) => Promise<any>
        loadVerifiedDomains: () => Promise<any>
        loadVerifiedDomainsSuccess: (verifiedDomains: OrganizationDomainType[], payload?: any) => Promise<any>
        loadVerifiedDomainsFailure: (error: string, errorObject?: any) => Promise<any>
        addVerifiedDomain: (domain: string) => Promise<any>
        addVerifiedDomainSuccess: (verifiedDomains: any[], payload?: string) => Promise<any>
        addVerifiedDomainFailure: (error: string, errorObject?: any) => Promise<any>
        deleteVerifiedDomain: (id: string) => Promise<any>
        deleteVerifiedDomainSuccess: (verifiedDomains: OrganizationDomainType[], payload?: string) => Promise<any>
        deleteVerifiedDomainFailure: (error: string, errorObject?: any) => Promise<any>
        updateDomain: (payload: OrganizationDomainUpdatePayload) => Promise<any>
        updateDomainSuccess: (updatingDomain: boolean, payload?: OrganizationDomainUpdatePayload) => Promise<any>
        updateDomainFailure: (error: string, errorObject?: any) => Promise<any>
        verifyDomain: () => Promise<any>
        verifyDomainSuccess: (updatingDomain: boolean, payload?: any) => Promise<any>
        verifyDomainFailure: (error: string, errorObject?: any) => Promise<any>
        setSamlConfigValue: (key: FieldName, value: any) => Promise<any>
        setSamlConfigValues: (
            values: DeepPartial<
                Partial<
                    Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                        Pick<OrganizationDomainType, 'id'>
                >
            >
        ) => Promise<any>
        setSamlConfigManualErrors: (errors: Record<string, any>) => Promise<any>
        touchSamlConfigField: (key: string) => Promise<any>
        resetSamlConfig: (
            values?: Partial<
                Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                    Pick<OrganizationDomainType, 'id'>
            >
        ) => Promise<any>
        submitSamlConfig: () => Promise<any>
        submitSamlConfigRequest: (
            samlConfig: Partial<
                Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                    Pick<OrganizationDomainType, 'id'>
            >
        ) => Promise<any>
        submitSamlConfigSuccess: (
            samlConfig: Partial<
                Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                    Pick<OrganizationDomainType, 'id'>
            >
        ) => Promise<any>
        submitSamlConfigFailure: (error: Error, errors: Record<string, any>) => Promise<any>
    }
    defaults: {
        verifiedDomains: OrganizationDomainType[]
        addModalShown: boolean
        configureSAMLModalId: null | string
        verifyModal: string | null
        verifiedDomainsLoading: boolean
        updatingDomain: boolean
        updatingDomainLoading: boolean
        samlConfig: Partial<
            Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                Pick<OrganizationDomainType, 'id'>
        >
        isSamlConfigSubmitting: boolean
        showSamlConfigErrors: boolean
        samlConfigChanged: boolean
        samlConfigTouches: Record<string, boolean>
        samlConfigManualErrors: Record<string, any>
    }
    events: {}
    key: undefined
    listeners: {
        setConfigureSAMLModalId: ((
            action: {
                type: 'set configure s a m l modal id (scenes.organization.verifiedDomainsLogic)'
                payload: {
                    id: string | null
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'organization', 'verifiedDomainsLogic']
    pathString: 'scenes.organization.verifiedDomainsLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        verifiedDomains: OrganizationDomainType[]
        addModalShown: boolean
        configureSAMLModalId: null | string
        verifyModal: string | null
        verifiedDomainsLoading: boolean
        updatingDomain: boolean
        updatingDomainLoading: boolean
        samlConfig: Partial<
            Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                Pick<OrganizationDomainType, 'id'>
        >
        isSamlConfigSubmitting: boolean
        showSamlConfigErrors: boolean
        samlConfigChanged: boolean
        samlConfigTouches: Record<string, boolean>
        samlConfigManualErrors: Record<string, any>
    }
    reducers: {
        verifiedDomains: (state: OrganizationDomainType[], action: any, fullState: any) => OrganizationDomainType[]
        addModalShown: (state: boolean, action: any, fullState: any) => boolean
        configureSAMLModalId: (state: null | string, action: any, fullState: any) => null | string
        verifyModal: (state: string | null, action: any, fullState: any) => string | null
        verifiedDomainsLoading: (state: boolean, action: any, fullState: any) => boolean
        updatingDomain: (state: boolean, action: any, fullState: any) => boolean
        updatingDomainLoading: (state: boolean, action: any, fullState: any) => boolean
        samlConfig: (
            state: Partial<
                Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                    Pick<OrganizationDomainType, 'id'>
            >,
            action: any,
            fullState: any
        ) => Partial<
            Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                Pick<OrganizationDomainType, 'id'>
        >
        isSamlConfigSubmitting: (state: boolean, action: any, fullState: any) => boolean
        showSamlConfigErrors: (state: boolean, action: any, fullState: any) => boolean
        samlConfigChanged: (state: boolean, action: any, fullState: any) => boolean
        samlConfigTouches: (state: Record<string, boolean>, action: any, fullState: any) => Record<string, boolean>
        samlConfigManualErrors: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
    }
    selector: (state: any) => {
        verifiedDomains: OrganizationDomainType[]
        addModalShown: boolean
        configureSAMLModalId: null | string
        verifyModal: string | null
        verifiedDomainsLoading: boolean
        updatingDomain: boolean
        updatingDomainLoading: boolean
        samlConfig: Partial<
            Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                Pick<OrganizationDomainType, 'id'>
        >
        isSamlConfigSubmitting: boolean
        showSamlConfigErrors: boolean
        samlConfigChanged: boolean
        samlConfigTouches: Record<string, boolean>
        samlConfigManualErrors: Record<string, any>
    }
    selectors: {
        verifiedDomains: (state: any, props?: any) => OrganizationDomainType[]
        addModalShown: (state: any, props?: any) => boolean
        configureSAMLModalId: (state: any, props?: any) => null | string
        verifyModal: (state: any, props?: any) => string | null
        verifiedDomainsLoading: (state: any, props?: any) => boolean
        updatingDomain: (state: any, props?: any) => boolean
        updatingDomainLoading: (state: any, props?: any) => boolean
        samlConfig: (
            state: any,
            props?: any
        ) => Partial<
            Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                Pick<OrganizationDomainType, 'id'>
        >
        isSamlConfigSubmitting: (state: any, props?: any) => boolean
        showSamlConfigErrors: (state: any, props?: any) => boolean
        samlConfigChanged: (state: any, props?: any) => boolean
        samlConfigTouches: (state: any, props?: any) => Record<string, boolean>
        samlConfigManualErrors: (state: any, props?: any) => Record<string, any>
        currentOrganization: (state: any, props?: any) => OrganizationType | null
        domainBeingVerified: (state: any, props?: any) => OrganizationDomainType | null
        isSSOEnforcementAvailable: (state: any, props?: any) => boolean
        isSAMLAvailable: (state: any, props?: any) => boolean
        samlConfigTouched: (state: any, props?: any) => boolean
        samlConfigValidationErrors: (
            state: any,
            props?: any
        ) => DeepPartialMap<
            Partial<
                Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                    Pick<OrganizationDomainType, 'id'>
            >,
            ValidationErrorType
        >
        samlConfigAllErrors: (state: any, props?: any) => Record<string, any>
        samlConfigHasErrors: (state: any, props?: any) => boolean
        samlConfigErrors: (
            state: any,
            props?: any
        ) => DeepPartialMap<
            Partial<
                Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                    Pick<OrganizationDomainType, 'id'>
            >,
            ValidationErrorType
        >
        isSamlConfigValid: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        verifiedDomains: OrganizationDomainType[]
        addModalShown: boolean
        configureSAMLModalId: null | string
        verifyModal: string | null
        verifiedDomainsLoading: boolean
        updatingDomain: boolean
        updatingDomainLoading: boolean
        samlConfig: Partial<
            Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                Pick<OrganizationDomainType, 'id'>
        >
        isSamlConfigSubmitting: boolean
        showSamlConfigErrors: boolean
        samlConfigChanged: boolean
        samlConfigTouches: Record<string, boolean>
        samlConfigManualErrors: Record<string, any>
        currentOrganization: OrganizationType | null
        domainBeingVerified: OrganizationDomainType | null
        isSSOEnforcementAvailable: boolean
        isSAMLAvailable: boolean
        samlConfigTouched: boolean
        samlConfigValidationErrors: DeepPartialMap<
            Partial<
                Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                    Pick<OrganizationDomainType, 'id'>
            >,
            ValidationErrorType
        >
        samlConfigAllErrors: Record<string, any>
        samlConfigHasErrors: boolean
        samlConfigErrors: DeepPartialMap<
            Partial<
                Pick<OrganizationDomainType, 'saml_entity_id' | 'saml_acs_url' | 'saml_x509_cert'> &
                    Pick<OrganizationDomainType, 'id'>
            >,
            ValidationErrorType
        >
        isSamlConfigValid: boolean
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalSelectorTypes: {
        domainBeingVerified: (
            verifiedDomains: OrganizationDomainType[],
            verifyModal: string | null
        ) => OrganizationDomainType | null
        isSSOEnforcementAvailable: (
            currentOrganization:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').OrganizationType
                | null
        ) => boolean
        isSAMLAvailable: (
            currentOrganization:
                | import('/Users/arunchaitanya/Desktop/open-source/posthog-forked/posthog/frontend/src/types').OrganizationType
                | null
        ) => boolean
    }
}