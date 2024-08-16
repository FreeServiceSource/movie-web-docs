import {
  defineTheme,
  directory,
  group,
  link,
  social,
} from '@neato/guider/theme';
import { Logo } from './components/Logo';
import { NextSeo } from 'next-seo';
import coverUrl from './public/cover.png';
import faviconUrl from './public/favicon.ico';

export default defineTheme({
  github: 'FreeServiceSource/movie-web',
  contentFooter: {
    text: 'Made with 💜',
    editRepositoryBase: 'https://github.com/FreeServiceSource/movie-web-docs',
    socials: [
      social.github('https://github.com/FreeServiceSource'),
      social.discord('https://FreeServiceSource.github.io/links/discord'),
    ],
  },
  meta: (pageMeta) => (
    <NextSeo
      {...{
        title: `${
          pageMeta.title ?? 'For all your movie and TV show needs'
        } | movie-web`,
        description:
          pageMeta.description ??
          'movie-web is a free and open source streaming site, no ads, no tracking, no nonsense.',
        openGraph: {
          images: [
            {
              url: coverUrl.src,
            },
          ],
          title: `${
            pageMeta.title ?? 'For all your movie and TV show needs'
          } | movie-web`,
          description:
            pageMeta.description ??
            'movie-web is a free and open source streaming site, no ads, no tracking, no nonsense.',
        },
        twitter: {
          cardType: 'summary_large_image',
        },
        additionalLinkTags: [
          {
            href: faviconUrl.src,
            rel: 'icon',
            type: 'image/x-icon',
          },
        ],
      }}
    />
  ),
  settings: {
    logo: () => <Logo />,
    colors: {
      primary: '#A476D9',
      primaryLighter: '#C4ADDE',
      primaryDarker: '#6E23C3',
      background: '#0C0B13',
      backgroundLighter: '#1A1726',
      backgroundLightest: '#282438',
      backgroundDarker: '#000000',
      line: '#37334C',
      text: '#8C899A',
      textLighter: '#A6A4AE',
      textHighlight: '#fff',
    },
  },
  directories: [
    directory('main', {
      sidebar: [
        link('Instances', '/instances', { icon: 'mdi:web' }),
        group('Self-Hosting', [
          link('Start self-hosting', '/self-hosting/hosting-intro'),
          link('Configure backend', '/self-hosting/use-backend'),
          link('PWA vs no-PWA', '/self-hosting/about-pwa'),
          link('Troubleshooting', '/self-hosting/troubleshooting'),
        ]),
        group('Proxy', [
          link('Introduction', '/proxy/introduction'),
          link('Deploy', '/proxy/deploy'),
          link('Configuration', '/proxy/configuration'),
          link('Changelog', '/proxy/changelog'),
        ]),
        group('Client', [
          link('Introduction', '/client/introduction'),
          link('Deploy', '/client/deploy'),
          link('TMDB API Key', '/client/tmdb'),
          link('Configuration', '/client/configuration'),
          link('Changelog', '/client/changelog'),
          link('Update guide', '/client/upgrade'),
        ]),
        group('Backend', [
          link('Introduction', '/backend/introduction'),
          link('Deploy', '/backend/deploy'),
          link('Configuration', '/backend/configuration'),
          link('Changelog', '/backend/changelog'),
          link('Update guide', '/backend/upgrade'),
        ]),
        group('Extra', [
          link('Streaming', '/extra/streaming'),
          link('Selfhost', '/extra/selfhost'),
        ]),
      ],
    }),
  ],
});
