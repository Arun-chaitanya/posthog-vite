// Generated by kea-typegen on Thu, 20 Jul 2023 11:14:22 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { PersonDeleteCallback, PersonDeleteModalLogicProps } from './personDeleteModalLogic'
import type { PersonType } from '../../types'

export interface personDeleteModalLogicType extends Logic {
    actionCreators: {
        showPersonDeleteModal: (
            person: PersonType | null,
            callback?: PersonDeleteCallback
        ) => {
            type: 'show person delete modal (scenes.persons.personDeleteModalLogic)'
            payload: {
                person: PersonType | null
                callback: PersonDeleteCallback | undefined
            }
        }
        deletePerson: (
            person: PersonType,
            deleteEvents: boolean
        ) => {
            type: 'delete person (scenes.persons.personDeleteModalLogic)'
            payload: {
                person: PersonType
                deleteEvents: boolean
            }
        }
        deletePersonSuccess: (
            deletedPerson: PersonType,
            payload?: {
                person: PersonType
                deleteEvents: boolean
            }
        ) => {
            type: 'delete person success (scenes.persons.personDeleteModalLogic)'
            payload: {
                deletedPerson: PersonType
                payload?: {
                    person: PersonType
                    deleteEvents: boolean
                }
            }
        }
        deletePersonFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'delete person failure (scenes.persons.personDeleteModalLogic)'
            payload: {
                error: string
                errorObject?: any
            }
        }
    }
    actionKeys: {
        'show person delete modal (scenes.persons.personDeleteModalLogic)': 'showPersonDeleteModal'
        'delete person (scenes.persons.personDeleteModalLogic)': 'deletePerson'
        'delete person success (scenes.persons.personDeleteModalLogic)': 'deletePersonSuccess'
        'delete person failure (scenes.persons.personDeleteModalLogic)': 'deletePersonFailure'
    }
    actionTypes: {
        showPersonDeleteModal: 'show person delete modal (scenes.persons.personDeleteModalLogic)'
        deletePerson: 'delete person (scenes.persons.personDeleteModalLogic)'
        deletePersonSuccess: 'delete person success (scenes.persons.personDeleteModalLogic)'
        deletePersonFailure: 'delete person failure (scenes.persons.personDeleteModalLogic)'
    }
    actions: {
        showPersonDeleteModal: (person: PersonType | null, callback?: PersonDeleteCallback) => void
        deletePerson: (person: PersonType, deleteEvents: boolean) => void
        deletePersonSuccess: (
            deletedPerson: PersonType,
            payload?: {
                person: PersonType
                deleteEvents: boolean
            }
        ) => void
        deletePersonFailure: (error: string, errorObject?: any) => void
    }
    asyncActions: {
        showPersonDeleteModal: (person: PersonType | null, callback?: PersonDeleteCallback) => Promise<any>
        deletePerson: (person: PersonType, deleteEvents: boolean) => Promise<any>
        deletePersonSuccess: (
            deletedPerson: PersonType,
            payload?: {
                person: PersonType
                deleteEvents: boolean
            }
        ) => Promise<any>
        deletePersonFailure: (error: string, errorObject?: any) => Promise<any>
    }
    defaults: {
        personDeleteModal: PersonType | null
        personDeleteCallback: PersonDeleteCallback | null
        deletedPerson: PersonType | null
        deletedPersonLoading: boolean
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['scenes', 'persons', 'personDeleteModalLogic']
    pathString: 'scenes.persons.personDeleteModalLogic'
    props: PersonDeleteModalLogicProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        personDeleteModal: PersonType | null
        personDeleteCallback: PersonDeleteCallback | null
        deletedPerson: PersonType | null
        deletedPersonLoading: boolean
    }
    reducers: {
        personDeleteModal: (state: PersonType | null, action: any, fullState: any) => PersonType | null
        personDeleteCallback: (
            state: PersonDeleteCallback | null,
            action: any,
            fullState: any
        ) => PersonDeleteCallback | null
        deletedPerson: (state: PersonType | null, action: any, fullState: any) => PersonType | null
        deletedPersonLoading: (state: boolean, action: any, fullState: any) => boolean
    }
    selector: (state: any) => {
        personDeleteModal: PersonType | null
        personDeleteCallback: PersonDeleteCallback | null
        deletedPerson: PersonType | null
        deletedPersonLoading: boolean
    }
    selectors: {
        personDeleteModal: (state: any, props?: any) => PersonType | null
        personDeleteCallback: (state: any, props?: any) => PersonDeleteCallback | null
        deletedPerson: (state: any, props?: any) => PersonType | null
        deletedPersonLoading: (state: any, props?: any) => boolean
    }
    sharedListeners: {}
    values: {
        personDeleteModal: PersonType | null
        personDeleteCallback: PersonDeleteCallback | null
        deletedPerson: PersonType | null
        deletedPersonLoading: boolean
    }
    _isKea: true
    _isKeaWithKey: false
}