import { type Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontSize: {
        '2xs': ['0.75rem', { lineHeight: '1.25rem' }],
        xs: ['0.8125rem', { lineHeight: '1.5rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '1.75rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        'container-lg': '33rem',
        'container-2xl': '40rem',
        'container-3xl': '50rem',
        'container-5xl': '66rem',
      },
      typography: ({ theme }: any) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.zinc.700'),
            '--tw-prose-headings': theme('colors.zinc.900'),
            '--tw-prose-links': theme('colors.emerald.500'),
            '--tw-prose-links-hover': theme('colors.emerald.600'),
            '--tw-prose-links-underline': theme('colors.emerald.500 / 0.3'),
            '--tw-prose-bold': theme('colors.zinc.900'),
            '--tw-prose-counters': theme('colors.zinc.500'),
            '--tw-prose-bullets': theme('colors.zinc.300'),
            '--tw-prose-hr': theme('colors.zinc.900 / 0.05'),
            '--tw-prose-quotes': theme('colors.zinc.900'),
            '--tw-prose-quote-borders': theme('colors.zinc.200'),
            '--tw-prose-captions': theme('colors.zinc.500'),
            '--tw-prose-code': theme('colors.zinc.900'),
            '--tw-prose-code-bg': theme('colors.zinc.100'),
            '--tw-prose-code-ring': theme('colors.zinc.300'),
            '--tw-prose-th-borders': theme('colors.zinc.300'),
            '--tw-prose-td-borders': theme('colors.zinc.200'),

            '--tw-prose-invert-body': theme('colors.zinc.400'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-links': theme('colors.emerald.400'),
            '--tw-prose-invert-links-hover': theme('colors.emerald.500'),
            '--tw-prose-invert-links-underline': theme('colors.emerald.500 / 0.3'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.zinc.400'),
            '--tw-prose-invert-bullets': theme('colors.zinc.600'),
            '--tw-prose-invert-hr': theme('colors.white / 0.05'),
            '--tw-prose-invert-quotes': theme('colors.zinc.100'),
            '--tw-prose-invert-quote-borders': theme('colors.zinc.700'),
            '--tw-prose-invert-captions': theme('colors.zinc.400'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-code-bg': theme('colors.zinc.700 / 0.15'),
            '--tw-prose-invert-code-ring': theme('colors.white / 0.1'),
            '--tw-prose-invert-th-borders': theme('colors.zinc.600'),
            '--tw-prose-invert-td-borders': theme('colors.zinc.700'),

            // Base
            color: 'var(--tw-prose-body)',
            fontSize: '0.875rem',
            lineHeight: '1.75rem',

            // Links
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'underline transparent',
              fontWeight: '500',
              transitionProperty: 'color, text-decoration-color',
              transitionDuration: theme('transitionDuration.DEFAULT'),
              transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
              '&:hover': {
                color: 'var(--tw-prose-links-hover)',
                textDecorationColor: 'var(--tw-prose-links-underline)',
              },
            },

            // Code
            code: {
              color: 'var(--tw-prose-code)',
              borderRadius: theme('borderRadius.lg'),
              paddingTop: theme('padding.1'),
              paddingRight: theme('padding[1.5]'),
              paddingBottom: theme('padding.1'),
              paddingLeft: theme('padding[1.5]'),
              boxShadow: 'inset 0 0 0 1px var(--tw-prose-code-ring)',
              backgroundColor: 'var(--tw-prose-code-bg)',
              fontSize: '0.75rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },

            // Headings
            h1: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '700',
              fontSize: '1.5rem',
              lineHeight: '2rem',
              marginBottom: theme('spacing.2'),
            },
            h2: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
              fontSize: '1.125rem',
              lineHeight: '1.75rem',
              marginTop: theme('spacing.16'),
              marginBottom: theme('spacing.2'),
            },
            h3: {
              color: 'var(--tw-prose-headings)',
              fontSize: '1rem',
              lineHeight: '1.75rem',
              fontWeight: '600',
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.2'),
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': 'var(--tw-prose-invert-body)',
            '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
            '--tw-prose-links': 'var(--tw-prose-invert-links)',
            '--tw-prose-links-hover': 'var(--tw-prose-invert-links-hover)',
            '--tw-prose-links-underline': 'var(--tw-prose-invert-links-underline)',
            '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
            '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
            '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
            '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
            '--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
            '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
            '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
            '--tw-prose-code': 'var(--tw-prose-invert-code)',
            '--tw-prose-code-bg': 'var(--tw-prose-invert-code-bg)',
            '--tw-prose-code-ring': 'var(--tw-prose-invert-code-ring)',
            '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
            '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
          },
        },
      }),
    },
  },
  plugins: [typography],
} satisfies Config
