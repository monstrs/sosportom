import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: 'short',
})

export default withVanillaExtract({
  output: 'standalone',
  experimental: {
    externalDir: true,
    esmExternals: 'loose',
  },
  typescript: { ignoreBuildErrors: true },
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts'],
      '.jsx': ['.jsx', '.tsx'],
      '.cjs': ['.cjs', '.cts'],
      '.mjs': ['.mjs', '.mts'],
    }

    return config
  },
})
