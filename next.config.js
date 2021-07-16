const withPWA = require("next-pwa")
const nextTranslate = require('next-translate')

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  const isStaging =
      phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  // Move _public/:site_key to public
  require('./build/public-assets');

  // Generate the ICS files at build time.
  if (isProd || isStaging) {
    require('./build/generate-calendars');
  }

  return withPWA(nextTranslate({
    async headers() {
      return [
        {
          source: '/download/:all*(ics)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=21600, must-revalidate',
            },
          ],
        },
      ]
    },
    webpack: (cfg) => {
      cfg.module.rules.push(
          {
              test: /\.md$/,
              loader: 'frontmatter-markdown-loader',
              options: { mode: ['react-component'] }
          }
      )
      return cfg;
    },
    pwa: {
      disable: !isProd,
      dest: "public",
      publicExcludes: ['download/*']
    },
    redirects: async function redirects() {
      if(process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true"){
        return [
            {
              source: "/generate",
              destination: "/maintenance",
              permanent: false,
            },
            {
              source: "/timezones",
              destination: "/maintenance",
              permanent: false,
            },
            {
              source: "/timezone/:slug*",
              destination: "/maintenance",
              permanent: false,
            },
            {
              source: "/years",
              destination: "/maintenance",
              permanent: false,
            },
            {
              source: "/year/:slug*",
              destination: "/maintenance",
              permanent: false,
            },
            {
              source: "/subscribe",
              destination: "/maintenance",
              permanent: false,
            },
        ]
      } else {
        return [];
      }
    }
  }))
}