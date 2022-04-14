const nextEnv = require('next-env')
const withPlugins = require('next-compose-plugins')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withPlugins([
  withMDX(
    {pageExtension: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
  }), 
  withNextEnv
])
