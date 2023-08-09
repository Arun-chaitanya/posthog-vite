// Generated by kea-typegen on Tue, 08 Aug 2023 10:01:10 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

import type { SessionRecordingLogicProps } from '../sessionRecordingPlayerLogic'
import type { SessionRecordingPlaylistType } from '../../../../types'
import type { DeepPartial, DeepPartialMap, FieldName, ValidationErrorType } from '../../../../../../node_modules/kea-forms'

export interface playlistPopoverLogicType extends Logic {
    actionCreators: {
        setPause: () => {
            type: 'set pause (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                value: true
            }
        }
        addDiffToRecordingMetaPinnedCount: (diffCount: number) => {
            type: 'add diff to recording meta pinned count (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                diffCount: number
            }
        }
        reportRecordingPinnedToList: (pinned: boolean) => {
            type: 'report recording pinned to list (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                pinned: boolean
            }
        }
        reportRecordingPlaylistCreated: (source: 'filters' | 'new' | 'pin' | 'duplicate') => {
            type: 'report recording playlist created (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                source: 'new' | 'filters' | 'pin' | 'duplicate'
            }
        }
        setSearchQuery: (query: string) => {
            type: 'set search query (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                query: string
            }
        }
        loadPlaylists: () => {
            type: 'load playlists (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                value: true
            }
        }
        loadPlaylistsForRecording: () => {
            type: 'load playlists for recording (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                value: true
            }
        }
        addToPlaylist: (playlist: SessionRecordingPlaylistType) => {
            type: 'add to playlist (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                playlist: SessionRecordingPlaylistType
            }
        }
        removeFromPlaylist: (playlist: SessionRecordingPlaylistType) => {
            type: 'remove from playlist (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                playlist: SessionRecordingPlaylistType
            }
        }
        setNewFormShowing: (show: boolean) => {
            type: 'set new form showing (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                show: boolean
            }
        }
        setShowPlaylistPopover: (show: boolean) => {
            type: 'set show playlist popover (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                show: boolean
            }
        }
        updateRecordingsPinnedCounts: (
            diffCount: number,
            playlistShortId?: SessionRecordingPlaylistType['short_id']
        ) => {
            type: 'update recordings pinned counts (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                diffCount: number
                playlistShortId: string | undefined
            }
        }
        loadPlaylistsSuccess: (
            playlists: SessionRecordingPlaylistType[],
            payload?: {
                value: true
            }
        ) => {
            type: 'load playlists success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                playlists: SessionRecordingPlaylistType[]
                payload?: {
                    value: true
                }
            }
        }
        loadPlaylistsFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load playlists failure (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        loadPlaylistsForRecordingSuccess: (
            currentPlaylists: SessionRecordingPlaylistType[],
            payload?: {
                value: true
            }
        ) => {
            type: 'load playlists for recording success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                currentPlaylists: SessionRecordingPlaylistType[]
                payload?: {
                    value: true
                }
            }
        }
        loadPlaylistsForRecordingFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'load playlists for recording failure (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        addToPlaylistSuccess: (
            currentPlaylists: SessionRecordingPlaylistType[],
            payload?: {
                playlist: SessionRecordingPlaylistType
            }
        ) => {
            type: 'add to playlist success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                currentPlaylists: SessionRecordingPlaylistType[]
                payload?: {
                    playlist: SessionRecordingPlaylistType
                }
            }
        }
        addToPlaylistFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'add to playlist failure (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        removeFromPlaylistSuccess: (
            currentPlaylists: SessionRecordingPlaylistType[],
            payload?: {
                playlist: SessionRecordingPlaylistType
            }
        ) => {
            type: 'remove from playlist success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                currentPlaylists: SessionRecordingPlaylistType[]
                payload?: {
                    playlist: SessionRecordingPlaylistType
                }
            }
        }
        removeFromPlaylistFailure: (
            error: string,
            errorObject?: any
        ) => {
            type: 'remove from playlist failure (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                error: string
                errorObject?: any
            }
        }
        setNewPlaylistValue: (
            key: FieldName,
            value: any
        ) => {
            type: 'set new playlist value (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                name: FieldName
                value: any
            }
        }
        setNewPlaylistValues: (
            values: DeepPartial<{
                name: string
            }>
        ) => {
            type: 'set new playlist values (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                values: DeepPartial<{
                    name: string
                }>
            }
        }
        setNewPlaylistManualErrors: (errors: Record<string, any>) => {
            type: 'set new playlist manual errors (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                errors: Record<string, any>
            }
        }
        touchNewPlaylistField: (key: string) => {
            type: 'touch new playlist field (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                key: string
            }
        }
        resetNewPlaylist: (values?: { name: string }) => {
            type: 'reset new playlist (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                values?: {
                    name: string
                }
            }
        }
        submitNewPlaylist: () => {
            type: 'submit new playlist (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                value: boolean
            }
        }
        submitNewPlaylistRequest: (newPlaylist: { name: string }) => {
            type: 'submit new playlist request (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                newPlaylist: {
                    name: string
                }
            }
        }
        submitNewPlaylistSuccess: (newPlaylist: { name: string }) => {
            type: 'submit new playlist success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                newPlaylist: {
                    name: string
                }
            }
        }
        submitNewPlaylistFailure: (
            error: Error,
            errors: Record<string, any>
        ) => {
            type: 'submit new playlist failure (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
            payload: {
                error: Error
                errors: Record<string, any>
            }
        }
    }
    actionKeys: {
        'set pause (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'setPause'
        'add diff to recording meta pinned count (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'addDiffToRecordingMetaPinnedCount'
        'report recording pinned to list (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'reportRecordingPinnedToList'
        'report recording playlist created (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'reportRecordingPlaylistCreated'
        'set search query (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'setSearchQuery'
        'load playlists (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'loadPlaylists'
        'load playlists for recording (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'loadPlaylistsForRecording'
        'add to playlist (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'addToPlaylist'
        'remove from playlist (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'removeFromPlaylist'
        'set new form showing (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'setNewFormShowing'
        'set show playlist popover (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'setShowPlaylistPopover'
        'update recordings pinned counts (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'updateRecordingsPinnedCounts'
        'load playlists success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'loadPlaylistsSuccess'
        'load playlists failure (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'loadPlaylistsFailure'
        'load playlists for recording success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'loadPlaylistsForRecordingSuccess'
        'load playlists for recording failure (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'loadPlaylistsForRecordingFailure'
        'add to playlist success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'addToPlaylistSuccess'
        'add to playlist failure (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'addToPlaylistFailure'
        'remove from playlist success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'removeFromPlaylistSuccess'
        'remove from playlist failure (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'removeFromPlaylistFailure'
        'set new playlist value (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'setNewPlaylistValue'
        'set new playlist values (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'setNewPlaylistValues'
        'set new playlist manual errors (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'setNewPlaylistManualErrors'
        'touch new playlist field (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'touchNewPlaylistField'
        'reset new playlist (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'resetNewPlaylist'
        'submit new playlist (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'submitNewPlaylist'
        'submit new playlist request (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'submitNewPlaylistRequest'
        'submit new playlist success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'submitNewPlaylistSuccess'
        'submit new playlist failure (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)': 'submitNewPlaylistFailure'
    }
    actionTypes: {
        setPause: 'set pause (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        addDiffToRecordingMetaPinnedCount: 'add diff to recording meta pinned count (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        reportRecordingPinnedToList: 'report recording pinned to list (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        reportRecordingPlaylistCreated: 'report recording playlist created (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        setSearchQuery: 'set search query (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        loadPlaylists: 'load playlists (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        loadPlaylistsForRecording: 'load playlists for recording (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        addToPlaylist: 'add to playlist (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        removeFromPlaylist: 'remove from playlist (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        setNewFormShowing: 'set new form showing (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        setShowPlaylistPopover: 'set show playlist popover (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        updateRecordingsPinnedCounts: 'update recordings pinned counts (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        loadPlaylistsSuccess: 'load playlists success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        loadPlaylistsFailure: 'load playlists failure (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        loadPlaylistsForRecordingSuccess: 'load playlists for recording success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        loadPlaylistsForRecordingFailure: 'load playlists for recording failure (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        addToPlaylistSuccess: 'add to playlist success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        addToPlaylistFailure: 'add to playlist failure (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        removeFromPlaylistSuccess: 'remove from playlist success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        removeFromPlaylistFailure: 'remove from playlist failure (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        setNewPlaylistValue: 'set new playlist value (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        setNewPlaylistValues: 'set new playlist values (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        setNewPlaylistManualErrors: 'set new playlist manual errors (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        touchNewPlaylistField: 'touch new playlist field (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        resetNewPlaylist: 'reset new playlist (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        submitNewPlaylist: 'submit new playlist (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        submitNewPlaylistRequest: 'submit new playlist request (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        submitNewPlaylistSuccess: 'submit new playlist success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
        submitNewPlaylistFailure: 'submit new playlist failure (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
    }
    actions: {
        setPause: () => void
        addDiffToRecordingMetaPinnedCount: (diffCount: number) => void
        reportRecordingPinnedToList: (pinned: boolean) => void
        reportRecordingPlaylistCreated: (source: 'filters' | 'new' | 'pin' | 'duplicate') => void
        setSearchQuery: (query: string) => void
        loadPlaylists: () => void
        loadPlaylistsForRecording: () => void
        addToPlaylist: (playlist: SessionRecordingPlaylistType) => void
        removeFromPlaylist: (playlist: SessionRecordingPlaylistType) => void
        setNewFormShowing: (show: boolean) => void
        setShowPlaylistPopover: (show: boolean) => void
        updateRecordingsPinnedCounts: (
            diffCount: number,
            playlistShortId?: SessionRecordingPlaylistType['short_id']
        ) => void
        loadPlaylistsSuccess: (
            playlists: SessionRecordingPlaylistType[],
            payload?: {
                value: true
            }
        ) => void
        loadPlaylistsFailure: (error: string, errorObject?: any) => void
        loadPlaylistsForRecordingSuccess: (
            currentPlaylists: SessionRecordingPlaylistType[],
            payload?: {
                value: true
            }
        ) => void
        loadPlaylistsForRecordingFailure: (error: string, errorObject?: any) => void
        addToPlaylistSuccess: (
            currentPlaylists: SessionRecordingPlaylistType[],
            payload?: {
                playlist: SessionRecordingPlaylistType
            }
        ) => void
        addToPlaylistFailure: (error: string, errorObject?: any) => void
        removeFromPlaylistSuccess: (
            currentPlaylists: SessionRecordingPlaylistType[],
            payload?: {
                playlist: SessionRecordingPlaylistType
            }
        ) => void
        removeFromPlaylistFailure: (error: string, errorObject?: any) => void
        setNewPlaylistValue: (key: FieldName, value: any) => void
        setNewPlaylistValues: (
            values: DeepPartial<{
                name: string
            }>
        ) => void
        setNewPlaylistManualErrors: (errors: Record<string, any>) => void
        touchNewPlaylistField: (key: string) => void
        resetNewPlaylist: (values?: { name: string }) => void
        submitNewPlaylist: () => void
        submitNewPlaylistRequest: (newPlaylist: { name: string }) => void
        submitNewPlaylistSuccess: (newPlaylist: { name: string }) => void
        submitNewPlaylistFailure: (error: Error, errors: Record<string, any>) => void
    }
    asyncActions: {
        setPause: () => Promise<any>
        addDiffToRecordingMetaPinnedCount: (diffCount: number) => Promise<any>
        reportRecordingPinnedToList: (pinned: boolean) => Promise<any>
        reportRecordingPlaylistCreated: (source: 'filters' | 'new' | 'pin' | 'duplicate') => Promise<any>
        setSearchQuery: (query: string) => Promise<any>
        loadPlaylists: () => Promise<any>
        loadPlaylistsForRecording: () => Promise<any>
        addToPlaylist: (playlist: SessionRecordingPlaylistType) => Promise<any>
        removeFromPlaylist: (playlist: SessionRecordingPlaylistType) => Promise<any>
        setNewFormShowing: (show: boolean) => Promise<any>
        setShowPlaylistPopover: (show: boolean) => Promise<any>
        updateRecordingsPinnedCounts: (
            diffCount: number,
            playlistShortId?: SessionRecordingPlaylistType['short_id']
        ) => Promise<any>
        loadPlaylistsSuccess: (
            playlists: SessionRecordingPlaylistType[],
            payload?: {
                value: true
            }
        ) => Promise<any>
        loadPlaylistsFailure: (error: string, errorObject?: any) => Promise<any>
        loadPlaylistsForRecordingSuccess: (
            currentPlaylists: SessionRecordingPlaylistType[],
            payload?: {
                value: true
            }
        ) => Promise<any>
        loadPlaylistsForRecordingFailure: (error: string, errorObject?: any) => Promise<any>
        addToPlaylistSuccess: (
            currentPlaylists: SessionRecordingPlaylistType[],
            payload?: {
                playlist: SessionRecordingPlaylistType
            }
        ) => Promise<any>
        addToPlaylistFailure: (error: string, errorObject?: any) => Promise<any>
        removeFromPlaylistSuccess: (
            currentPlaylists: SessionRecordingPlaylistType[],
            payload?: {
                playlist: SessionRecordingPlaylistType
            }
        ) => Promise<any>
        removeFromPlaylistFailure: (error: string, errorObject?: any) => Promise<any>
        setNewPlaylistValue: (key: FieldName, value: any) => Promise<any>
        setNewPlaylistValues: (
            values: DeepPartial<{
                name: string
            }>
        ) => Promise<any>
        setNewPlaylistManualErrors: (errors: Record<string, any>) => Promise<any>
        touchNewPlaylistField: (key: string) => Promise<any>
        resetNewPlaylist: (values?: { name: string }) => Promise<any>
        submitNewPlaylist: () => Promise<any>
        submitNewPlaylistRequest: (newPlaylist: { name: string }) => Promise<any>
        submitNewPlaylistSuccess: (newPlaylist: { name: string }) => Promise<any>
        submitNewPlaylistFailure: (error: Error, errors: Record<string, any>) => Promise<any>
    }
    defaults: {
        playlists: SessionRecordingPlaylistType[]
        playlistsLoading: boolean
        currentPlaylists: SessionRecordingPlaylistType[]
        currentPlaylistsLoading: boolean
        searchQuery: string
        newFormShowing: boolean
        showPlaylistPopover: boolean
        modifyingPlaylist: SessionRecordingPlaylistType | null
        newPlaylist: {
            name: string
        }
        isNewPlaylistSubmitting: boolean
        showNewPlaylistErrors: boolean
        newPlaylistChanged: boolean
        newPlaylistTouches: Record<string, boolean>
        newPlaylistManualErrors: Record<string, any>
    }
    events: {}
    key: string
    listeners: {
        setSearchQuery: ((
            action: {
                type: 'set search query (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
                payload: {
                    query: string
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setNewFormShowing: ((
            action: {
                type: 'set new form showing (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
                payload: {
                    show: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        setShowPlaylistPopover: ((
            action: {
                type: 'set show playlist popover (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
                payload: {
                    show: boolean
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        addToPlaylistSuccess: ((
            action: {
                type: 'add to playlist success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
                payload: {
                    currentPlaylists: SessionRecordingPlaylistType[]
                    payload?: {
                        playlist: SessionRecordingPlaylistType
                    }
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        removeFromPlaylistSuccess: ((
            action: {
                type: 'remove from playlist success (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
                payload: {
                    currentPlaylists: SessionRecordingPlaylistType[]
                    payload?: {
                        playlist: SessionRecordingPlaylistType
                    }
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
        updateRecordingsPinnedCounts: ((
            action: {
                type: 'update recordings pinned counts (scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*)'
                payload: {
                    diffCount: number
                    playlistShortId: string | undefined
                }
            },
            previousState: any
        ) => void | Promise<void>)[]
    }
    path: ['scenes', 'session-recordings', 'player', 'playlist-popover', 'playlistPopoverLogic', '*']
    pathString: 'scenes.session-recordings.player.playlist-popover.playlistPopoverLogic.*'
    props: SessionRecordingLogicProps
    reducer: (
        state: any,
        action: any,
        fullState: any
    ) => {
        playlists: SessionRecordingPlaylistType[]
        playlistsLoading: boolean
        currentPlaylists: SessionRecordingPlaylistType[]
        currentPlaylistsLoading: boolean
        searchQuery: string
        newFormShowing: boolean
        showPlaylistPopover: boolean
        modifyingPlaylist: SessionRecordingPlaylistType | null
        newPlaylist: {
            name: string
        }
        isNewPlaylistSubmitting: boolean
        showNewPlaylistErrors: boolean
        newPlaylistChanged: boolean
        newPlaylistTouches: Record<string, boolean>
        newPlaylistManualErrors: Record<string, any>
    }
    reducers: {
        playlists: (
            state: SessionRecordingPlaylistType[],
            action: any,
            fullState: any
        ) => SessionRecordingPlaylistType[]
        playlistsLoading: (state: boolean, action: any, fullState: any) => boolean
        currentPlaylists: (
            state: SessionRecordingPlaylistType[],
            action: any,
            fullState: any
        ) => SessionRecordingPlaylistType[]
        currentPlaylistsLoading: (state: boolean, action: any, fullState: any) => boolean
        searchQuery: (state: string, action: any, fullState: any) => string
        newFormShowing: (state: boolean, action: any, fullState: any) => boolean
        showPlaylistPopover: (state: boolean, action: any, fullState: any) => boolean
        modifyingPlaylist: (
            state: SessionRecordingPlaylistType | null,
            action: any,
            fullState: any
        ) => SessionRecordingPlaylistType | null
        newPlaylist: (
            state: {
                name: string
            },
            action: any,
            fullState: any
        ) => {
            name: string
        }
        isNewPlaylistSubmitting: (state: boolean, action: any, fullState: any) => boolean
        showNewPlaylistErrors: (state: boolean, action: any, fullState: any) => boolean
        newPlaylistChanged: (state: boolean, action: any, fullState: any) => boolean
        newPlaylistTouches: (state: Record<string, boolean>, action: any, fullState: any) => Record<string, boolean>
        newPlaylistManualErrors: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
    }
    selector: (state: any) => {
        playlists: SessionRecordingPlaylistType[]
        playlistsLoading: boolean
        currentPlaylists: SessionRecordingPlaylistType[]
        currentPlaylistsLoading: boolean
        searchQuery: string
        newFormShowing: boolean
        showPlaylistPopover: boolean
        modifyingPlaylist: SessionRecordingPlaylistType | null
        newPlaylist: {
            name: string
        }
        isNewPlaylistSubmitting: boolean
        showNewPlaylistErrors: boolean
        newPlaylistChanged: boolean
        newPlaylistTouches: Record<string, boolean>
        newPlaylistManualErrors: Record<string, any>
    }
    selectors: {
        playlists: (state: any, props?: any) => SessionRecordingPlaylistType[]
        playlistsLoading: (state: any, props?: any) => boolean
        currentPlaylists: (state: any, props?: any) => SessionRecordingPlaylistType[]
        currentPlaylistsLoading: (state: any, props?: any) => boolean
        searchQuery: (state: any, props?: any) => string
        newFormShowing: (state: any, props?: any) => boolean
        showPlaylistPopover: (state: any, props?: any) => boolean
        modifyingPlaylist: (state: any, props?: any) => SessionRecordingPlaylistType | null
        newPlaylist: (
            state: any,
            props?: any
        ) => {
            name: string
        }
        isNewPlaylistSubmitting: (state: any, props?: any) => boolean
        showNewPlaylistErrors: (state: any, props?: any) => boolean
        newPlaylistChanged: (state: any, props?: any) => boolean
        newPlaylistTouches: (state: any, props?: any) => Record<string, boolean>
        newPlaylistManualErrors: (state: any, props?: any) => Record<string, any>
        newPlaylistTouched: (state: any, props?: any) => boolean
        newPlaylistValidationErrors: (
            state: any,
            props?: any
        ) => DeepPartialMap<
            {
                name: string
            },
            ValidationErrorType
        >
        newPlaylistAllErrors: (state: any, props?: any) => Record<string, any>
        newPlaylistHasErrors: (state: any, props?: any) => boolean
        newPlaylistErrors: (
            state: any,
            props?: any
        ) => DeepPartialMap<
            {
                name: string
            },
            ValidationErrorType
        >
        isNewPlaylistValid: (state: any, props?: any) => boolean
        allPlaylists: (state: any, props?: any) => { selected: boolean; playlist: SessionRecordingPlaylistType }[]
    }
    sharedListeners: {}
    values: {
        playlists: SessionRecordingPlaylistType[]
        playlistsLoading: boolean
        currentPlaylists: SessionRecordingPlaylistType[]
        currentPlaylistsLoading: boolean
        searchQuery: string
        newFormShowing: boolean
        showPlaylistPopover: boolean
        modifyingPlaylist: SessionRecordingPlaylistType | null
        newPlaylist: {
            name: string
        }
        isNewPlaylistSubmitting: boolean
        showNewPlaylistErrors: boolean
        newPlaylistChanged: boolean
        newPlaylistTouches: Record<string, boolean>
        newPlaylistManualErrors: Record<string, any>
        newPlaylistTouched: boolean
        newPlaylistValidationErrors: DeepPartialMap<
            {
                name: string
            },
            ValidationErrorType
        >
        newPlaylistAllErrors: Record<string, any>
        newPlaylistHasErrors: boolean
        newPlaylistErrors: DeepPartialMap<
            {
                name: string
            },
            ValidationErrorType
        >
        isNewPlaylistValid: boolean
        allPlaylists: { selected: boolean; playlist: SessionRecordingPlaylistType }[]
    }
    _isKea: true
    _isKeaWithKey: true
    __keaTypeGenInternalSelectorTypes: {
        allPlaylists: (
            playlists: SessionRecordingPlaylistType[],
            currentPlaylists: SessionRecordingPlaylistType[],
            searchQuery: string,
            arg: any
        ) => { selected: boolean; playlist: SessionRecordingPlaylistType }[]
    }
}