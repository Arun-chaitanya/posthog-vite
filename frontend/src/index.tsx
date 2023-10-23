import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles'

import { getContext } from 'kea'

import { App } from './scenes/App'
import { initKea } from './initKea'

import { loadPostHogJS } from './loadPostHogJS'
import { ErrorBoundary } from './layout/ErrorBoundary'

import { PostHogProvider } from 'posthog-js/react'
import posthog from 'posthog-js'

loadPostHogJS()
initKea()

// Expose `window.getReduxState()` to make snapshots to storybook easy
if (typeof window !== 'undefined') {
    // Disabled in production to prevent leaking secret data, personal API keys, etc
    if (process.env.NODE_ENV === 'development') {
        ;(window as any).getReduxState = () => getContext().store.getState()
    } else {
        ;(window as any).getReduxState = () => 'Disabled outside development!'
    }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <PostHogProvider client={posthog}>
                <App />
            </PostHogProvider>
        </ErrorBoundary>
    </React.StrictMode>
)
