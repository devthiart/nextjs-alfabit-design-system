function toRgba(cssVariable) {
  const color = `var(${cssVariable})`;
  return ({ opacityValue }) => `rgba(${color}, ${opacityValue})`
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      mulish: 'Mulish, sans-serif',
    },
    screens: {
      mobile: 'var(--screen-mobile)',
      tablet: 'var(--screen-tablet',
      desktop: 'var(--screen-desktop',
      tv: 'var(--screen-tv)',
    },
    spacing: {
      'none': 'var(--spacing-none) /* 0px */',
      '4xs': 'var(--spacing-4xs) /* 8px */',
      '2xs': 'var(--spacing-2xs) /* 12px */',
      'xs': 'var(--spacing-xs) /* 16px */',
      'sm': 'var(--spacing-sm) /* 20px */',
      'md': 'var(--spacing-md) /* 24px */',
      'lg': 'var(--spacing-lg) /* 32px */',
      'xl': 'var(--spacing-xl) /* 40px */',
      '2xl': 'var(--spacing-2xl) /* 48px */',
      '4xl': 'var(--spacing-4xl) /* 56px */',
      0: 'var(--spacing-none) /* 0px */',
      1: 'var(--spacing-4xs) /* 8px */',
      2: 'var(--spacing-2xs) /* 12px */',
      3: 'var(--spacing-xs) /* 16px */',
      4: 'var(--spacing-sm) /* 20px */',
      5: 'var(--spacing-md) /* 24px */',
      6: 'var(--spacing-lg) /* 32px */',
      7: 'var(--spacing-xl) /* 40px */',
      8: 'var(--spacing-2xl) /* 48px */',
      9: 'var(--spacing-4xl) /* 56px */',
    },
    fontSize: {
      xs: 'var(--font-xs) /* 12px */',
      sm: 'var(--font-sm) /* 14px */',
      md: 'var(--font-md) /* 16px */',
      lg: 'var(--font-lg) /* 18px */',
      xl: 'var(--font-xl) /* 20px */',
    },
    extend: {
      colors: {
        primary: toRgba('--primary'), // 'rgba(var(--primary), <alpha-value>)',
        secondary: toRgba('--secondary'), // 'rgba(var(--secondary), <alpha-value>)',
        tertiary: toRgba('--tertiary'), // 'rgba(var(--tertiary), <alpha-value>)',
        quaternary: toRgba('--quaternary'), // 'rgba(var(--quaternary), <alpha-value>',
        hover: toRgba('--hover'), // 'rgba(var(--hover), <alpha-value>',
        click: toRgba('--click'), // 'rgba(var(--click), <alpha-value>',
        icon: toRgba('--icon'), // 'rgba(var(--icon), <alpha-value>',
        outline: toRgba('--outline'), // 'rgba(var(--outline), <alpha-value>',
        divider: toRgba('--divider'), // 'rgba(var(--divider), <alpha-value>',
      },
      backgroundColor: {
        light: toRgba('--bg-light'), // 'rgba(var(--bg-light), <alpha-value>',
        dark: toRgba('--bg-dark'), // 'rgba(var(--bg-dark), <alpha-value>',
        disabled: toRgba('--bg-disabled'), // 'rgba(var(--bg-disabled), <alpha-value>',
      },
      textColor: {
        gray: {
          primary: toRgba('--text-primary'), // 'rgba(var(--text-primary), <alpha-value>',
          secondary: toRgba('--text-secondary'), // 'rgba(var(--text-secondary), <alpha-value>',
          tertiary: toRgba('--text-tertiary'), // 'rgba(var(--text-tertiary), <alpha-value>',
        },
        disabled: toRgba('--text-disabled'), // 'rgba(var(--text-disabled), <alpha-value>',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        focus: 'var(--shadow-focus)',
        outline: 'var(--shadow-outline)',
        'button-focus': 'var(--shadow-button-focus)',
      },
      blur: {
        default: 'var(--blur)',
      },
      borderRadius: {
        none: 'var(--border-radius-none)',
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
      }
    },
  },
  plugins: [],
}
