import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
    core: { builder: '@storybook/builder-vite' },
    stories: ['../frontend/src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
                sourceLoaderOptions: {
                    injectStoryParameters: false,
                },
            },
        },
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-storysource',
        '@storybook/addon-a11y',
        'storybook-addon-pseudo-states',
    ],
    staticDirs: ['public'],
    async viteFinal(config) {
        return mergeConfig(config, {
            resolve: {
                ...config.resolve,
                extensions: [...config.resolve!.extensions!],
                alias: { ...config.resolve!.alias },
            },
            module: {
                // ...config.module,
                rules: [
                    // ...mainConfig.module.rules,
                    // ...config.module!.rules.filter((rule) => rule.test!.toString().includes('.mdx')),
                    {
                        test: /\.stories\.tsx?$/,
                        use: [
                            {
                                loader: require.resolve('@storybook/source-loader'),
                                options: { parser: 'typescript' },
                            },
                        ],
                        enforce: 'pre',
                    },
                ],
            },
        })
    },
    framework: '@storybook/react-vite',
}

export default config
