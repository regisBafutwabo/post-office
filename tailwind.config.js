module.exports = {
  content: ['./**/**.tsx'],
  theme: {
    extend: {
      colors: {
        blue: '#59c1cc',
        pink: '#eb6a7c',
      },
      fontFamily: {
        'poppins-black': ['Poppins-Black'],
        'poppins-400': ['Poppins-Regular'],
        'poppins-300': ['Poppins-Thin'],
        'poppins-600': ['Poppins-SemiBold'],
        'poppins-700': ['Poppins-Bold'],
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
